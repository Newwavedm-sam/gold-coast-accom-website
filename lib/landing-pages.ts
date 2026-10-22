export type LandingPageData = {
  key: 'broadbeach' | 'burleighHeads' | 'luxury' | 'beachfront' | 'corporate';
  path: string; label: string; title: string; description: string; image: string; imageAlt: string;
  caption: string; action: string; enquiryTitle: string; enquiryCopy: string;
  infoLabel: string; infoTitle: string; paragraphs: string[];
  related: { label: string; href: string }[];
  faqs: { question: string; answer: string }[];
};
export const landingPages: LandingPageData[] = [
  {
    key: 'broadbeach', path: '/locations/broadbeach', label: 'Broadbeach', title: 'Broadbeach accommodation.',
    description: 'Beach time, dinner plans and a place to make your own. Find your base in Broadbeach with a little local help.',
    image: '/assets/broadbeach-coast.jpg', imageAlt: 'Broadbeach coastline and beach on the Gold Coast', caption: 'Broadbeach · A little beach. A little city.', action: 'Find your Broadbeach stay',
    enquiryTitle: 'Make Broadbeach your base.', enquiryCopy: 'Tell us your dates, guest count and what brings you here. We’ll help you check the available stays and the location that works for your plans.',
    infoLabel: 'Your neighbourhood', infoTitle: 'Settle into your own rhythm.',
    paragraphs: ['Build your stay around the things you enjoy: an early beach walk, a long lunch or an evening out. Start with a property in the right part of Broadbeach for your plans.', 'Visiting for a conference? Share your venue and arrival needs so we can help you compare the exact property locations.'],
    related: [{label: 'Convention Centre stays', href: '/accommodation-near-gc-convention-centre'}, {label: 'Explore Palm Beach', href: '/locations/palm-beach'}],
    faqs: [{question: 'How do I choose a Broadbeach property?', answer: 'Tell us your dates, guest count and priorities. Check the exact address, bedroom layout and amenities of each option before booking.'}, {question: 'Can you help with an event stay?', answer: 'Yes. Share your venue, event dates and preferred transport. Walking routes and travel times depend on the individual property.'}, {question: 'Is parking included?', answer: 'Parking arrangements vary by property. Confirm space availability, vehicle clearance and any costs before booking.'}, {question: 'Can I request a longer stay?', answer: 'Send your preferred dates and requirements to our team. Availability and terms need confirmation for the property you choose.'}]
  },
  {
    key: 'burleighHeads', path: '/locations/burleigh-heads', label: 'Burleigh Heads', title: 'Burleigh Heads accommodation.',
    description: 'Slow mornings, salt air and time to wander. Let us help you find a Burleigh stay that feels like you.',
    image: '/assets/burleigh-coast.jpg', imageAlt: 'Burleigh coastline and green headland on the Gold Coast', caption: 'Burleigh Heads · The headland. The village. The coast.', action: 'Find your Burleigh stay',
    enquiryTitle: 'A little more time in Burleigh.', enquiryCopy: 'Share your dates and the kind of break you have in mind. We’ll help you review available properties and choose the right base.',
    infoLabel: 'Stay your way', infoTitle: 'Leave room for a slower day.',
    paragraphs: ['Keep your plans simple. Choose a base for beach mornings, time outdoors and unhurried catch-ups, then shape the rest of the trip around your own pace.', 'Tell us whether you prefer to be close to your favourite places or somewhere quieter. We can help you compare the actual location and details of each available stay.'],
    related: [{label: 'Explore Palm Beach', href: '/locations/palm-beach'}, {label: 'Beachfront stays', href: '/beachfront-accommodation-gold-coast'}],
    faqs: [{question: 'Can you help us find a stay in Burleigh?', answer: 'Send your dates, guest count and preferred area. Our team can help you review the available options.'}, {question: 'Are all properties close to the beach?', answer: 'Locations vary. Review the individual address and check the route to the beach before you book.'}, {question: 'Can we bring children or pets?', answer: 'Guest suitability and pet policies are property specific. Please confirm your requirements before booking.'}, {question: 'What should we check for a group stay?', answer: 'Confirm guest capacity, bedroom arrangements, parking and house rules for your selected property.'}]
  },
  {
    key: 'luxury', path: '/luxury-accommodation-gold-coast', label: 'Luxury stays', title: 'Luxury accommodation, Gold Coast.',
    description: 'Good light. Space to unwind. A stay chosen around the details that matter to you.',
    image: '/assets/coastal-interior.webp', imageAlt: 'Light-filled coastal living room with windows overlooking the ocean', caption: 'Considered spaces · Coastal living', action: 'Find your considered stay',
    enquiryTitle: 'The details make the stay.', enquiryCopy: 'Tell us what luxury means to you: the setting, the space or time together. We’ll help you check which available properties meet your priorities.',
    infoLabel: 'Considered, from the start', infoTitle: 'Choose what matters to you.',
    paragraphs: ['A beautiful interior is a starting point. The right stay also fits the way you travel, from the bedroom arrangement to the outlook and the places you want to spend time.', 'Share your must-haves before you book. Views, pools, accessibility and other features need to be checked against each individual property.'],
    related: [{label: 'Beachfront stays', href: '/beachfront-accommodation-gold-coast'}, {label: 'Explore Broadbeach', href: '/locations/broadbeach'}],
    faqs: [{question: 'How do you help us choose a luxury stay?', answer: 'Start with your dates, budget and the details that matter most. We can help you compare the available properties against those needs.'}, {question: 'Does every stay have a pool or ocean view?', answer: 'No. Features differ by property. Confirm your must-have amenities in the listing and with our team before booking.'}, {question: 'Can we arrange a special occasion stay?', answer: 'Tell us your plans and guest count. Any event, visitor or special arrangement must comply with the selected property’s rules and be confirmed before booking.'}, {question: 'Can you help with arrival requests?', answer: 'Share your arrival plans in advance. Early check-in, late check-out and other requests are subject to confirmation.'}]
  },
  {
    key: 'beachfront', path: '/beachfront-accommodation-gold-coast', label: 'Beachfront stays', title: 'Beachfront accommodation, Gold Coast.',
    description: 'Make the ocean part of your everyday. Start your search for a stay with the coast in front of you.',
    image: '/assets/palm-beach-coast.webp', imageAlt: 'Palm Beach sand and ocean on the Gold Coast', caption: 'By the water · Gold Coast', action: 'Find your beachfront stay',
    enquiryTitle: 'Tell us how close you want to be.', enquiryCopy: 'Share your dates, preferred area and what beachfront means for your trip. We’ll help you confirm the property’s position and access before you book.',
    infoLabel: 'A clearer view', infoTitle: 'Know your place by the water.',
    paragraphs: ['Ocean views, a short walk to the beach and beachfront are different things. Check the exact property position and beach access when choosing your stay.', 'Our team can help you review the location, outlook and practical details of an available property so you can book with the right expectations.'],
    related: [{label: 'Palm Beach stays', href: '/locations/palm-beach'}, {label: 'Luxury stays', href: '/luxury-accommodation-gold-coast'}],
    faqs: [{question: 'Does an ocean view mean beachfront?', answer: 'No. An ocean view alone does not establish beachfront frontage or direct beach access. Confirm the individual property location and access.'}, {question: 'Will there be a road between us and the beach?', answer: 'That depends on the property. Ask us to confirm the exact position and route to the sand for your shortlisted stay.'}, {question: 'Can we choose a particular Gold Coast area?', answer: 'Yes. Share your preferred area and dates so we can check suitable available options.'}, {question: 'Are beach equipment or towels included?', answer: 'Inclusions vary. Check the listing or ask our team before you travel.'}]
  },
  {
    key: 'corporate', path: '/corporate-accomodation', label: 'Corporate stays', title: 'Corporate accommodation, Gold Coast.',
    description: 'A comfortable base for the working week. Tell us where you need to be; we’ll help with the stay.',
    image: '/assets/coastal-interior.webp', imageAlt: 'Bright coastal apartment living and dining space', caption: 'Space to settle in · Gold Coast', action: 'Plan your work stay',
    enquiryTitle: 'Your work trip, considered.', enquiryCopy: 'Send your travel dates, work location, guest count and any practical requirements. We’ll help you review properties that fit your visit.',
    infoLabel: 'Before the working week', infoTitle: 'Make room for the everyday.',
    paragraphs: ['A work stay needs to fit more than a check-in date. Consider your commute, sleeping arrangements and the everyday details that make time away easier.', 'Tell us if you need a workspace, particular internet requirements, parking, laundry access or invoicing information. These details need confirmation for your selected property.'],
    related: [{label: 'Convention Centre stays', href: '/accommodation-near-gc-convention-centre'}, {label: 'Broadbeach stays', href: '/locations/broadbeach'}],
    faqs: [{question: 'Can you help with an extended work stay?', answer: 'Send your dates and requirements. Longer stays depend on property availability and applicable booking terms.'}, {question: 'Is there a dedicated workspace and fast Wi-Fi?', answer: 'Workspaces and internet performance vary. Share your requirements so they can be checked for the selected property before booking.'}, {question: 'Can you accommodate colleagues travelling together?', answer: 'Tell us the guest count and bedroom preferences. We can help you review suitable arrangements, subject to availability.'}, {question: 'Can I obtain an invoice for my employer?', answer: 'Confirm your billing details and invoice requirements with our team before making the booking.'}]
  }
];
