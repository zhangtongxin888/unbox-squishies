export const site = {
  name: "Unbox Squishies Guide",
  url: "https://unbox-squishies.wiki",
  gameName: "[📦] Unbox Squishies",
  gameNamePlain: "Unbox Squishies",
  creator: "Squish Squish Squish",
  creatorGroupId: "583811727",
  universeId: "10558440509",
  rootPlaceId: "93740767919502",
  reviewedAt: "2026-08-12",
  reviewedLabel: "August 12, 2026",
  createdAt: "2026-07-24",
  updatedAt: "2026-08-11",
} as const;

export type EvidenceKind =
  | "official-listing"
  | "official-media"
  | "guide-strategy"
  | "not-published";

export const evidenceLabels: Record<EvidenceKind, string> = {
  "official-listing": "Official listing",
  "official-media": "Official media",
  "guide-strategy": "Guide strategy",
  "not-published": "Not published",
};

export const officialSources = {
  experience: `https://www.roblox.com/games/${site.rootPlaceId}/Unbox-Squishies`,
  placeToUniverse: `https://apis.roblox.com/universes/v1/places/${site.rootPlaceId}/universe`,
  gameDetails: `https://games.roblox.com/v1/games?universeIds=${site.universeId}`,
  search: "https://apis.roblox.com/search-api/omni-search?searchQuery=Unbox%20Squishies&sessionId=00000000-0000-0000-0000-000000000000&pageType=games&adFlag=false",
  icon: `https://thumbnails.roblox.com/v1/games/icons?universeIds=${site.universeId}&returnPolicy=PlaceHolder&size=512x512&format=Png&isCircular=false`,
  media: `https://thumbnails.roblox.com/v1/games/multiget/thumbnails?universeIds=${site.universeId}&countPerUniverse=10&defaults=true&size=768x432&format=Png&isCircular=false`,
} as const;

export const officialLoop = [
  {
    verb: "Get",
    title: "Get a box",
    description: "The official description starts with getting a box.",
    evidence: "official-listing" as EvidenceKind,
  },
  {
    verb: "Open",
    title: "Unbox a Squishy",
    description: "Open the box to reveal a Squishy.",
    evidence: "official-listing" as EvidenceKind,
  },
  {
    verb: "Squish",
    title: "Squish to earn",
    description: "The listing says the squish action is how players earn.",
    evidence: "official-listing" as EvidenceKind,
  },
  {
    verb: "Collect",
    title: "Grow the collection",
    description: "Look for cute rare Squishies and advertised special events.",
    evidence: "official-listing" as EvidenceKind,
  },
] as const;

export const beginnerSteps = [
  {
    id: "step-1",
    number: "01",
    title: "Get one box",
    doNow: "Follow the game’s on-screen box action and get one box.",
    why: "A box is the first action named in the official game description.",
    done: "You have a box ready to open.",
    next: "Open it before chasing anything rare.",
    evidence: "official-listing" as EvidenceKind,
  },
  {
    id: "step-2",
    number: "02",
    title: "Unbox one Squishy",
    doNow: "Open the box and watch where the revealed Squishy appears.",
    why: "This connects the box action to the collection action without guessing any price or drop rate.",
    done: "Your first Squishy has been revealed.",
    next: "Use the action the listing calls out: squish.",
    evidence: "official-listing" as EvidenceKind,
  },
  {
    id: "step-3",
    number: "03",
    title: "Squish and observe",
    doNow: "Squish your new find and watch what the game shows you earning.",
    why: "The official description says “Squish to earn,” but does not publish the currency name or values.",
    done: "You can identify the earning response on your own screen.",
    next: "Repeat the loop and start comparing what you actually see.",
    evidence: "official-listing" as EvidenceKind,
  },
] as const;

export const progressionStages = [
  {
    number: "01",
    title: "Learn",
    goal: "Complete the four official actions once.",
    watch: "Where boxes come from, how unboxing works, and what changes after a squish.",
    avoid: "Assuming a currency name, box price, or reward value from another game.",
    moveOn: "You can repeat get → unbox → squish without guessing the controls.",
  },
  {
    number: "02",
    title: "Observe",
    goal: "Build your own reliable notes from visible results.",
    watch: "The costs, rewards, names, and rarity cues shown in your current session.",
    avoid: "Treating the promotional “.00001%” thumbnail text as a published drop table.",
    moveOn: "You can compare new finds using information visible in the game.",
  },
  {
    number: "03",
    title: "Collect",
    goal: "Look for rare Squishies and special events.",
    watch: "New event notices and collection clues provided inside the experience.",
    avoid: "Following invented codes, odds, offline rewards, or upgrade claims.",
    moveOn: "Keep looping; the official listing does not publish a final completion rule.",
  },
] as const;

export const mistakes = [
  {
    symptom: "A guide talks about Cash, upgrades, or offline income.",
    cause: "It may be describing a different Squishy game with a similar name.",
    fix: "Match the experience to Place ID 93740767919502 before trusting the advice.",
    href: "/sources#identity",
    label: "Check the game identity",
  },
  {
    symptom: "You see “.00001%” in the official thumbnail.",
    cause: "Promotional artwork can look like a complete drop-rate claim.",
    fix: "Treat it as media text, not a verified odds table; use only values shown in your session.",
    href: "/sources#media",
    label: "See the media note",
  },
  {
    symptom: "You do not know what to do after unboxing.",
    cause: "The official loop is easy to skip when rarity gets all the attention.",
    fix: "Return to the confirmed action: squish to earn, then repeat and collect.",
    href: "/core-loop#loop-map",
    label: "Return to the loop",
  },
  {
    symptom: "A code, price, or tier list sounds exact but has no source.",
    cause: "The public listing does not document those details.",
    fix: "Do not act on it as a fact. Check the game itself and the source date first.",
    href: "/faq#codes",
    label: "Read the evidence rule",
  },
] as const;

export const faqs = [
  {
    id: "what-is-it",
    question: "What is Unbox Squishies?",
    answer: "It is a Roblox experience by Squish Squish Squish. Its official description tells players to get a box, unbox a Squishy, squish to earn, collect rare Squishies, and watch for special events.",
    evidence: "official-listing" as EvidenceKind,
  },
  {
    id: "first-action",
    question: "What should a new player do first?",
    answer: "Follow the four actions the listing actually names: get a box, unbox it, squish to earn, and begin collecting. The beginner route turns those facts into a simple first-session checklist.",
    evidence: "guide-strategy" as EvidenceKind,
  },
  {
    id: "currency",
    question: "Is the currency called Cash?",
    answer: "The public description says “Squish to earn” but does not name the currency. This guide therefore does not call it Cash.",
    evidence: "not-published" as EvidenceKind,
  },
  {
    id: "odds",
    question: "Are exact Squishy drop rates published?",
    answer: "We did not find a public drop table in the official listing. The official thumbnail includes “.00001%” as promotional text, but a single image is not enough to establish every current drop rate.",
    evidence: "official-media" as EvidenceKind,
  },
  {
    id: "upgrades",
    question: "Does the game have a confirmed upgrade system?",
    answer: "The official description reviewed for this guide does not document upgrades, upgrade values, or upgrade prices. We do not borrow those mechanics from similar games.",
    evidence: "not-published" as EvidenceKind,
  },
  {
    id: "offline",
    question: "Does it have offline earnings?",
    answer: "Offline earning is not documented in the official listing or current official media reviewed here. Claims about offline collection belong to a different similarly named experience unless the target game itself now shows otherwise.",
    evidence: "not-published" as EvidenceKind,
  },
  {
    id: "codes",
    question: "Are there active codes?",
    answer: "The official description reviewed on August 12, 2026 does not mention codes, and we have not verified an active code system. That is not the same as claiming codes can never exist.",
    evidence: "not-published" as EvidenceKind,
  },
  {
    id: "developer",
    question: "Who made Unbox Squishies?",
    answer: "The official game data names the Roblox group Squish Squish Squish as the creator. The experience uses Universe ID 10558440509 and Root Place ID 93740767919502.",
    evidence: "official-listing" as EvidenceKind,
  },
] as const;

export const routes = [
  "/",
  "/beginner-guide",
  "/core-loop",
  "/progression",
  "/common-mistakes",
  "/faq",
  "/sources",
] as const;

export const primaryNav = [
  ["Start here", "/beginner-guide"],
  ["Gameplay loop", "/core-loop"],
  ["Progress", "/progression"],
  ["Mistakes", "/common-mistakes"],
  ["FAQ", "/faq"],
] as const;
