// All pricing lives here so the category pages and the booking form stay in sync.

export const DEPOSIT_NOTE =
  'To secure your spot, a 50% non-refundable deposit is required. The remaining payment is due on the day of the shoot.'

export const LATE_POLICY = [
  'Please arrive on time. Sessions start at the booked time, and late arrivals cut into your shooting time; the session will still end as scheduled.',
  'If you are running more than 15 minutes late, please let us know as soon as possible.',
  'Arriving more than 30 minutes late without notice is treated as a cancellation, and the deposit is forfeited.',
  'Need to reschedule? Reach out at least 48 hours before your shoot and we will find a new time.',
]

export const categories = [
  {
    slug: 'lifestyle',
    title: 'Lifestyle',
    href: '/Portraits',
    notes: ['All raw images included', 'Travel fee may apply'],
    sections: [
      {
        packages: [
          {
            name: 'Lifestyle',
            duration: '30 min',
            price: 150,
            features: [
              '5 edits',
              'All raw images provided',
              '3 day turnaround',
              'Each additional person $50 (4 edits)',
            ],
          },
          {
            name: 'Lifestyle Extended',
            duration: '1 hour',
            price: 200,
            features: [
              '8 edits',
              'All raw images provided',
              '1-3 day turnaround',
              'Each additional person $60 (4 edits)',
            ],
          },
          {
            name: 'Kids Lifestyle',
            duration: '30 min',
            price: 150,
            features: ['All raw images provided'],
          },
          {
            name: 'Group Lifestyle',
            duration: '1 hour',
            price: 350,
            features: ['All raw images provided'],
          },
        ],
      },
    ],
  },
  {
    slug: 'graduation',
    title: 'Graduation & Prom',
    href: '/Graduation',
    notes: [],
    sections: [
      {
        title: 'Graduation',
        packages: [
          {
            name: 'Graduation',
            duration: '30 min',
            price: 100,
            features: [
              '5 edits',
              '1 location',
              'All raws provided',
              '3 day turnaround',
              'Each additional person $60',
            ],
          },
          {
            name: 'Graduation Extended',
            duration: '1 hour',
            price: 150,
            features: [
              '8 edits',
              'All raws provided',
              '3 day turnaround',
              'Each additional person $60',
            ],
          },
          {
            name: 'Graduation Studio',
            duration: '1 hour',
            price: 250,
            features: [
              '1 model',
              '8 edits',
              'All raws provided',
              '3 day turnaround',
              'Each additional person $100',
            ],
          },
        ],
      },
      {
        title: 'Graduation / Prom Tiers',
        note: 'Extra people $60 each for Tier 1 and Tier 2',
        packages: [
          {
            name: 'Tier 1',
            duration: '30 min',
            price: 150,
            features: [
              '5 edits',
              '1 location',
              '1 outfit',
              '1-3 days to deliver edited photos',
            ],
          },
          {
            name: 'Tier 2',
            duration: '1 hour',
            price: 275,
            features: [
              '8 edits',
              '1 person',
              '1 location',
              '1 outfit',
              '1-3 days to deliver edited photos',
            ],
          },
          {
            name: 'Tier 3',
            duration: '1 hour',
            price: 350,
            features: [
              '1-2 people',
              '12 edits',
              '2 locations',
              '2 outfits',
              '3-4 days to deliver edited photos',
            ],
          },
          {
            name: 'Tier 4',
            duration: '2 hours',
            price: 450,
            features: [
              '2-3 people',
              '18 edits',
              '2 locations',
              '2 outfits',
              '3-4 days to deliver edited photos',
            ],
          },
        ],
      },
    ],
  },
  {
    slug: 'events',
    title: 'Events',
    href: '/Events',
    notes: ['All raws included', 'Extra 30 min: +$50', 'Extra hour: +$100'],
    sections: [
      {
        id: 'sports',
        title: 'Sports',
        packages: [{ name: 'Sports Photography / Videography', duration: '1 hour', price: 200, features: [] }],
      },
      {
        id: 'weddings',
        title: 'Weddings',
        packages: [{ name: 'Wedding Shoot', duration: '2 hours', price: 300, features: [] }],
      },
      {
        id: 'engagements',
        title: 'Engagements',
        packages: [{ name: 'Engagement Shoot', duration: '1 hour', price: 250, features: [] }],
      },
      {
        id: 'birthdays',
        title: 'Birthday Parties',
        packages: [{ name: 'Birthday Party', duration: '1 hour', price: 175, features: [] }],
      },
    ],
  },
  {
    slug: 'studio',
    title: 'Studio',
    href: '/Studio',
    notes: [],
    sections: [
      {
        title: 'Studio Shoots',
        packages: [
          {
            name: 'Tier 1',
            duration: '1 hour',
            price: 300,
            features: [
              '1 model',
              'One outfit / look',
              'All raw images provided',
              '6 retouched photos & 1 creative edit',
              '7 day turnaround for final edits',
            ],
          },
          {
            name: 'Tier 2',
            duration: '1 hour',
            price: 375,
            features: [
              '1 model',
              '2 outfits',
              'All raw images provided',
              '8 retouched photos',
              '7 day turnaround for final edits',
            ],
          },
          {
            name: 'Tier 3',
            duration: '1 hour 30 min',
            price: 450,
            features: [
              '1 model',
              '2 outfits',
              'All raw images provided',
              '12 retouched photos',
              '8 day turnaround for final edits',
            ],
          },
        ],
      },
      {
        title: 'Specialty Studio Shoots',
        packages: [
          {
            name: 'Business Studio',
            duration: '1 hour 30 min',
            price: 300,
            features: [
              '3-5 models',
              'Three outfits / looks',
              'All raw images provided',
              '8 retouched photos',
              '10 day turnaround for final edits',
            ],
          },
          {
            name: 'Family',
            duration: '1 hour',
            price: 375,
            features: [
              'Up to 5 models',
              'Two looks',
              'All raw images provided',
              '6 retouched photos',
              '10 day turnaround for final edits',
            ],
          },
          {
            name: 'Maternity',
            duration: '1 hour',
            price: 375,
            features: [
              '1-2 models',
              'Two outfits / looks',
              'All raw images provided',
              '5 retouched photos & 1 creative edit',
              '10 day turnaround for final edits',
            ],
          },
        ],
      },
    ],
  },
]

export const getCategory = (slug) => categories.find((c) => c.slug === slug)

// "Graduation / Prom Tiers - Tier 2 (1 hour) - $275" style labels for the booking form
export const packageOptions = (category) =>
  category.sections.flatMap((section) =>
    section.packages.map((p) => {
      // "Tier 2" alone is ambiguous, so tiers get their section name in front
      const prefix = p.name.startsWith('Tier') ? `${section.title} - ` : ''
      return `${prefix}${p.name} (${p.duration}) - $${p.price}`
    })
  )

// cheapest package in a category, for the "From $X" labels on the home page
export const minPrice = (category) =>
  Math.min(...category.sections.flatMap((section) => section.packages.map((p) => p.price)))
