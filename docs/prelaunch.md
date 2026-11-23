# Draft release QA

## Enquiries and booking

The preview uses the existing public email address and phone number. The email button opens a prefilled draft and does not claim that an enquiry was sent. No web-form data is captured by this version. An actual web submission should only be re-enabled after the team approves the transport and recipient and verifies reply routing, errors, spam protection and receipt. Review the no-form path before cutover.

Property Stack provides property availability and prices. The independently hosted all-stays link works without the embedded frame. Mock property pages are not exposed; unmatched paths return a 404.

The current page assets copied from the old site's `/wp-content/uploads/` paths are served locally so those pages don't depend on a retiring WordPress origin.

## SEO migration

- Preserve the eight live paths with equivalents. Next normalises trailing slashes.
- The draft redirects About, Accommodation and the two general experiences paths to the corresponding rebuilt pages. Both old Panoramic Penthouse URLs point at the matched hosted listing. Confirm the whole schedule with Sam before cutover.
- Confirm whether the duplicate Luxury page can move to the rebuilt Luxury page and what to do with the two old external feature-listing targets (269118 and 270083). Do not route either listing to an unverified property.
- Preserve or explicitly decide the fate of the two indexed articles, blog landing, affiliate/partner pages, transfers, services, housekeeping, human sitemap and legacy thank-you path before switching the domain. Do not bulk-redirect them to the homepage. Confirm the old thank-you path is not needed for tracking.
- Check organic traffic and backlinks separately. Sitemap presence shows a URL exists, not what it contributes.
- Only the production allowlist participates in the sitemap. Preview builds emit a noindex response header, disallow crawling and return an empty sitemap. Verify redirects, deployed response headers, canonical hosts and real 404s on the exact release candidate.
