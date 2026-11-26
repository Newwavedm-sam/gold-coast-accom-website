# Concierge design review

This branch replaces the rebuild's existing /concierge route with a native
Next.js interpretation of Izabel Murray's 24 November “Elevate Your Stay”
prototype. The original file is linked from the existing Notion concierge task.

The prototype's catalogue and photography are review content, not verified
supplier promises. Confirm service names, imagery rights/crops, availability,
pricing, any delivery fees, and terms before release. The catalogue deliberately
does not publish prices, promises of availability, supplier terms or payment links.

The enquiry list is kept only in page memory. The email button opens a draft
using the existing business mailbox; it does not send anything, collect guest
data on the site, create CRM records or make a booking. No Property Stack
workflow, payments or availability integration is enabled. Room bookings continue
to be handled by Property Stack. Keep this stacked draft separate from the base
website's release decision.

## Review on the branch preview

- On mobile and desktop, open /concierge from the site navigation and check the
  shared header/footer, hero, filters, category sections and the enquiry list.
- Add Portacot and Pre-booked Transfers using two different filters. Confirm
  both remain selected when switching filters and both appear in the email draft.
- Remove Portacot and check that the draft contains only the transfer. Don't send
  an email or submit a booking while testing. Verify the general enquiry fallback.
- Before any automated follow-up, separately approve the trigger, guest data
  handling, CRM routing, supplier confirmation and payment process.
