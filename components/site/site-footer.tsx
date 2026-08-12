import { primaryNav, site } from "@/content/game-data";
import { Brand } from "./site-header";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-top">
        <Brand />
        <p>Independent player guide. Not affiliated with Roblox Corporation or Squish Squish Squish.</p>
        <nav aria-label="Footer navigation">
          {primaryNav.map(([label, href]) => <a href={href} key={href}>{label}</a>)}
          <a href="/sources">Sources</a>
        </nav>
      </div>
      <div className="footer-bottom">
        <span>Facts reviewed {site.reviewedLabel}</span>
        <span>Universe {site.universeId} · Place {site.rootPlaceId}</span>
      </div>
    </footer>
  );
}
