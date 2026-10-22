// Add only tags confirmed by the property manager's generated PropertyStack embed.
// A null tag keeps the page on a genuine email/phone enquiry instead of showing
// unrelated inventory or pretending an unverified filter is live.
export const bookingCollections = {
  palmBeach: { tag: "palm beach" },
  broadbeach: { tag: null as string | null },
  burleighHeads: { tag: null as string | null },
  luxury: { tag: null as string | null },
  beachfront: { tag: null as string | null },
  corporate: { tag: null as string | null },
  conventionCentre: { tag: null as string | null },
};
