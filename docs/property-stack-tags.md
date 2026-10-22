# PropertyStack tags — initial website collections

Use the existing `palm beach` tag and create five additional tags using the consistent lowercase names below. Names are proposed; the generated embed code is the authority for the final filter value or ID.

| Website collection | Suggested tag name | Apply it to |
|---|---|---|
| Palm Beach | `palm beach` | Properties whose actual address is in Palm Beach. Already tested with two listings. |
| Broadbeach | `broadbeach` | Properties whose actual address is in Broadbeach. Keep nearby suburbs separate. |
| Burleigh Heads | `burleigh heads` | Properties in Burleigh Heads. Do not automatically include Burleigh Waters under this tag. |
| Convention Centre | `convention centre` | Properties you would specifically recommend to a GCCEC visitor, after checking their route to the venue. This can overlap a suburb tag. |
| Luxury | `luxury` | Your selected premium collection, assessed consistently for presentation, condition, fit-out, amenities and overall guest experience; not simply the highest nightly prices. |
| Beachfront | `beachfront` | Properties with genuine beach frontage. Do not use this for ocean views or a short walk to the beach alone. Check property descriptions and access before tagging. |

## Keep the categories separate
For an eligible Broadbeach property, `broadbeach`, `convention centre`, `luxury` and `beachfront` could all apply. This is a hypothetical example, not a claim about a particular listing. Avoid separate compound tags such as `luxury broadbeach` at this stage.

The Convention Centre tag does not itself justify a walking-distance claim. Record each property's address, route, approximate distance and practical access notes before putting such claims on the website. Decide a collection boundary with the property manager; do not silently use an arbitrary radius or include all Broadbeach properties.

## Setup sequence
1. Keep the existing Palm Beach tag unchanged.
2. Create and assign the other five tags to genuinely matching properties.
3. Generate one property-listing embed for each tag in PropertyStack.
4. Share those generated iframe codes in the project; no passwords or API keys are required for this step.
5. Check that each embedded result set contains the intended properties before connecting it to a website page.

Use exact generated URLs rather than manually changing case or assuming the provider accepts label strings instead of IDs. Multiple-filter AND/OR behaviour has not been tested. Confirm it before building combinations such as luxury Palm Beach or beachfront Broadbeach.

## Current implementation
- Palm Beach: confirmed tag, two-property embed tested.
- Convention Centre: native landing page built with working email/phone enquiry links. Its filtered listing embed will be enabled once the actual generated filter is confirmed.
- Broadbeach, Burleigh Heads, Luxury and Beachfront: tag setup and verification pending; no matching live collection is being claimed.

Later tags such as family, pet-friendly or long-stay should only be added when there is a clear page/campaign need and the property rules have been verified.
