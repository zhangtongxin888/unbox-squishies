import assert from "node:assert/strict";
import { existsSync } from "node:fs";
import test from "node:test";

const expectedRoutes = ["/", "/beginner-guide", "/core-loop", "/progression", "/common-mistakes", "/faq", "/sources"];

async function render(path = "/") {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}-${Math.random()}`);
  const { default: worker } = await import(workerUrl.href);
  return worker.fetch(
    new Request(`http://localhost${path}`, { headers: { accept: "text/html" } }),
    { ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) } },
    { waitUntil() {}, passThroughOnException() {} },
  );
}

test("homepage makes the beginner route the primary action", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  const html = await response.text();
  assert.match(html, /Open your first box/);
  assert.match(html, /href="\/beginner-guide#step-1"[^>]*>Start step 1/);
  assert.match(html, /Quick start/);
  assert.match(html, /Core gameplay loop/);
  assert.match(html, /Progression route/);
  assert.match(html, /Common mistakes/);
  assert.match(html, /FAQ/);
  assert.match(html, /Evidence board/);
  assert.doesNotMatch(html, /Play on Roblox|Squishy CStudios|Unbox a Squishy!|COLLECTS OFFLINE|\$1,000,000\/s/i);
});

test("every guide route renders and naturally links onward", async () => {
  for (const route of expectedRoutes) {
    const response = await render(route);
    assert.equal(response.status, 200, route);
    const html = await response.text();
    assert.match(html, /Beginner Guide/i, route);
    assert.match(html, /Continue (?:reading|beginner route)|journey-links|Beginner guide/i, route);
    assert.doesNotMatch(html, /codex-preview|react-loading-skeleton/i, route);
  }
});

test("internal links and fragments resolve across the guide", async () => {
  const htmlByRoute = new Map();
  for (const route of expectedRoutes) htmlByRoute.set(route, await (await render(route)).text());

  for (const [route, html] of htmlByRoute) {
    const links = [...html.matchAll(/href="([^"#?]+)(?:#([^"]+))?"/g)];
    for (const [, pathname, fragment] of links) {
      if (!pathname.startsWith("/") || pathname.startsWith("/_next/") || /\.[a-z0-9]+$/i.test(pathname)) continue;
      assert.ok(expectedRoutes.includes(pathname), `${route} links to missing route ${pathname}`);
      if (fragment) {
        const target = htmlByRoute.get(pathname);
        assert.match(target, new RegExp(`id="${fragment.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}"`), `${route} links to missing ${pathname}#${fragment}`);
      }
    }
  }
});

test("facts identify the correct Roblox experience and label uncertainty", async () => {
  const html = await (await render("/sources")).text();
  assert.match(html, /10558440509/);
  assert.match(html, /93740767919502/);
  assert.match(html, /Squish Squish Squish/);
  assert.match(html, /Not publicly confirmed/);
  assert.match(html, /currency officially named Cash/i);
  assert.match(html, /Official media/);
});

test("SEO metadata, structured data, robots, sitemap and 404 are valid", async () => {
  const home = await (await render()).text();
  assert.match(home, /<title>Unbox Squishies Beginner Guide/);
  assert.match(home, /rel="canonical" href="https:\/\/unbox-squishies\.wiki\/?"/);
  assert.match(home, /og:title/);
  assert.match(home, /twitter:card/);
  const jsonLdMatch = home.match(/<script type="application\/ld\+json">([^<]+)<\/script>/);
  assert.ok(jsonLdMatch);
  assert.equal(JSON.parse(jsonLdMatch[1]).about.name, "[📦] Unbox Squishies");

  const robots = await render("/robots.txt");
  assert.equal(robots.status, 200);
  assert.match(await robots.text(), /Sitemap: https:\/\/unbox-squishies\.wiki\/sitemap\.xml/);

  const sitemap = await render("/sitemap.xml");
  assert.equal(sitemap.status, 200);
  const sitemapText = await sitemap.text();
  for (const route of expectedRoutes) {
    const url = `https://unbox-squishies.wiki${route === "/" ? "/" : route}`;
    assert.match(sitemapText, new RegExp(url.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")));
  }

  assert.equal((await render("/definitely-not-a-page")).status, 404);
});

test("FAQ structured data matches the visible questions", async () => {
  const html = await (await render("/faq")).text();
  const jsonLdMatch = html.match(/<script type="application\/ld\+json">([^<]+)<\/script>/);
  assert.ok(jsonLdMatch);
  const data = JSON.parse(jsonLdMatch[1]);
  assert.equal(data["@type"], "FAQPage");
  assert.equal(data.mainEntity.length, 8);
  for (const item of data.mainEntity) {
    assert.match(html, new RegExp(item.name.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")));
    assert.ok(item.acceptedAnswer.text.length > 30);
  }
});

test("required official and social media assets exist", () => {
  for (const asset of ["public/game-icon.png", "public/game-thumbnail.png", "public/og-unbox-squishies.png"]) {
    assert.equal(existsSync(new URL(`../${asset}`, import.meta.url)), true, asset);
  }
});
