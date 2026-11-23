# Gold Coast Accom design review

## Full page design review — 22 October 2026
- Figma: https://www.figma.com/design/9i8FgSGET2cATV66PWehsy?node-id=7-37
- Eight designs with desktop 1440 and mobile 390 versions: Homepage, Palm Beach, Broadbeach, Burleigh Heads, Convention Centre, Luxury, Beachfront, Corporate.
- White photographic direction; Montserrat supporting type now matches headings. Exact Playlist Script accent is outlined in Figma because custom font is unavailable through the connection; website retains the actual bundled font.
- Figma contains editable text and auto-layout, ten shared main components, scoped variables and text styles. Image fills are discrete photographs and original logo crops; temporary full-page captures deleted.
- Home/Palm Beach booking regions are explicitly annotated external content boundaries in Figma. Real website previews show PropertyStack; no listing inventory or rates invented.
- New five pages implemented with native copy, metadata, canonical and breadcrumb data; existing luxury/beachfront/corporate SEO paths preserved (including corporate-accomodation spelling). Only verified collection tag is Palm Beach. Others use actual mailto/tel enquiry pending confirmed embeds.
- Production build, TypeScript, targeted ESLint and whitespace checks pass. All eight rendered pages checked at 390px: one H1, correct canonical, loaded hero image, no horizontal overflow. FAQ and mobile navigation interactions work.
- Remaining: owner design review; confirmed tags/embeds; remaining legacy page design reconciliation; CMS/integrations and launch checks. No customer domain changes.

## Homepage direction correction — 22 October 2026
The user selected the homepage before the white redesign as the style reference. Restored that character from commit 858ea23: full-width coastal hero, white layered heading, Playlist Script, teal actions, floating search invitation and photographic location/experience panels. Reduced repeated promotions to four main sections and retained the real PropertyStack search. Experience panels expand on hover/focus on desktop and stack on mobile.

Updated only homepage desktop/mobile in Figma (existing nodes 7:37 and 7:38), with dedicated components so the other fourteen page frames remain earlier drafts. Homepage approval is required before propagating the direction. Text and layouts are editable Montserrat; exact Playlist Script lettering uses vector outlines in Figma and the bundled font on the website. No production-domain change.

Validation: production build and TypeScript pass; targeted homepage ESLint and git diff --check pass. Desktop and 390px layouts checked, no horizontal overflow, native mobile menu and anchor navigation work, and all experience photographs load through the image optimiser. The homepage uses the actual supplied Playlist Script font; Figma contains Montserrat text plus exact script vectors.
