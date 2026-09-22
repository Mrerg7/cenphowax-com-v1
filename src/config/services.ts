export interface ServiceFaq {
  q: string;
  a: string;
}

export interface Service {
  slug: string;
  name: string;
  serviceType: string;
  price: number;
  duration: string;
  summary: string;
  metaDescription: string;
  intro: string[];
  expectations: string[];
  prep: string[];
  faq: ServiceFaq[];
  related: string[];
}

export const services: Service[] = [
  {
    slug: 'brazilian-wax',
    name: 'Brazilian Wax',
    serviceType: 'Brazilian waxing',
    price: 65,
    duration: '45–60 minutes',
    summary:
      'Our signature hard-wax Brazilian — full removal with a strip left at the front, done slowly in a private room.',
    metaDescription:
      'Hard-wax Brazilian waxing in Central Phoenix. Full removal, private appointment-led sessions, results lasting 3 to 4 weeks. Book at CenPho Wax.',
    intro: [
      'A Brazilian removes hair from the entire bikini area — front, top, between, and back — with the option to leave a small strip or triangle if you prefer. It is the service most people come to CenPho Wax for, and the one we take the most care with.',
      'We use hard wax exclusively here. Hard wax sets on the hair rather than the skin, so each pull is directed at the follicle instead of tugging at delicate tissue. For the bikini area that difference is noticeable: less pull, fewer ingrowns, and a calmer finish on skin that sees a lot of sun and friction in the desert.',
      'Sessions are appointment-led and unhurried. You are never on a shared floor, and the room is yours from consultation to aftercare.',
    ],
    expectations: [
      'A short consultation covering skin sensitivity, current products, and how much hair you want removed',
      'Trimming to roughly a quarter inch if needed — length matters more than technique for a clean pull',
      'Hard wax applied in small sections and removed in the direction of growth',
      'Soothing oil or lotion at the end, plus aftercare guidance before you leave',
    ],
    prep: [
      'Grow hair to ¼–½ inch — about two to three weeks of growth for most people',
      'Avoid retinoids, AHAs/BHAs, and exfoliants for 48 hours beforehand',
      'Skip sunburn, fresh tans, and open irritation in the area',
      'Arrive with clean skin; no oil, lotion, or deodorant on the area',
    ],
    faq: [
      {
        q: 'How painful is a Brazilian wax?',
        a: 'Most clients describe the first pull as a quick, sharp sting that settles within seconds. Hard wax is gentler than strip wax on the bikini area, and sensation typically lessens as sessions repeat and hair grows back finer.',
      },
      {
        q: 'How long should hair be before a Brazilian?',
        a: 'A quarter to a half inch — roughly two to three weeks of growth. Longer hair can be trimmed at the start of the appointment.',
      },
      {
        q: 'How long do results last?',
        a: 'Smooth skin typically lasts 3 to 4 weeks. With consistent sessions, regrowth often comes in finer and sparser.',
      },
    ],
    related: ['bikini-wax', 'underarm-wax'],
  },
  {
    slug: 'bikini-wax',
    name: 'Bikini Wax',
    serviceType: 'Bikini waxing',
    price: 45,
    duration: '30 minutes',
    summary:
      'Clean-up of the bikini line only — hair that would show beyond a swimsuit or underwear, without full removal.',
    metaDescription:
      'Bikini line waxing in Central Phoenix with hard wax. Quick, precise, and easy to maintain between Brazilian sessions. CenPho Wax.',
    intro: [
      'A bikini wax clears the hair that would sit outside a swimsuit or underwear line, leaving the rest intact. It is shorter and less intense than a Brazilian, which makes it a good entry point — or a maintenance option between fuller sessions.',
      'Because the area is smaller, the appointment moves quickly: usually around thirty minutes including consultation and aftercare. We still use hard wax, section by section, for the same reason we use it everywhere — it grips hair, not skin.',
      'Many clients alternate: a Brazilian every four to six weeks in warmer months, and bikini line touch-ups in between.',
    ],
    expectations: [
      'Consultation on how far past the line you want to go',
      'Hard wax along the bikini boundary only — no interior removal',
      'Quick re-check of the line from multiple angles before finishing',
      'Soothing finish and aftercare notes',
    ],
    prep: [
      'Hair at ¼–½ inch of growth',
      'No exfoliants or retinoids for 48 hours prior',
      'Skip if the area is sunburned or freshly shaved that day',
      'Clean, product-free skin at appointment time',
    ],
    faq: [
      {
        q: 'What is the difference between a bikini wax and a Brazilian?',
        a: 'A bikini wax clears only the hair outside the swimsuit line. A Brazilian removes all hair in the bikini area, with an optional strip left at the front.',
      },
      {
        q: 'Can I switch from bikini to Brazilian later?',
        a: 'Yes. Many clients start with a bikini wax and move to a Brazilian once they know how their skin responds to hard wax.',
      },
    ],
    related: ['brazilian-wax', 'leg-waxing'],
  },
  {
    slug: 'underarm-wax',
    name: 'Underarm Wax',
    serviceType: 'Underarm waxing',
    price: 20,
    duration: '15 minutes',
    summary:
      'Fast underarm waxing with hard wax — smoother than shaving, kinder to skin that reacts to razors.',
    metaDescription:
      'Underarm waxing in Central Phoenix. Hard wax, 15-minute appointments, results up to 4 weeks. CenPho Wax.',
    intro: [
      'Underarm hair grows in several directions and sits on thin, often reactive skin — which is why shaving here tends to leave stubble and irritation within days. Waxing removes the full strand from the root, so the underarm stays smooth for weeks instead of hours.',
      'The appointment itself takes about fifteen minutes. Hard wax is applied in small patches and lifted while set, which is noticeably more comfortable on the underarm than traditional strip wax.',
      'Underarms also respond well to repetition: over successive sessions, regrowth often becomes finer and easier to clear.',
    ],
    expectations: [
      'Quick check of hair length and skin condition',
      'Hard wax in small patches, following growth patterns',
      'Ingrown-hair check and gentle clearing if needed',
      'Soothing finish and simple aftercare',
    ],
    prep: [
      'Grow hair to about ¼ inch — usually one to two weeks',
      'No deodorant or product on the skin for a few hours beforehand',
      'Avoid if freshly shaved within 24 hours or actively irritated',
    ],
    faq: [
      {
        q: 'How often should I wax my underarms?',
        a: 'Every 3 to 4 weeks for most people. Sessions can stretch longer as regrowth slows with consistency.',
      },
      {
        q: 'Will waxing reduce underarm odor?',
        a: 'Waxing removes hair, which can reduce the surface area odor clings to, but it does not change sweat production itself.',
      },
    ],
    related: ['brazilian-wax', 'arm-waxing'],
  },
  {
    slug: 'facial-waxing',
    name: 'Facial Waxing',
    serviceType: 'Facial waxing',
    price: 25,
    duration: '15–20 minutes',
    summary:
      'Lips, chin, brows, and sides of the face with hard wax — precise shaping without strip-wax drama on facial skin.',
    metaDescription:
      'Facial waxing in Central Phoenix — lip, chin, brow, and face waxing with hard wax. Precise shaping in 15–20 minutes. CenPho Wax.',
    intro: [
      'Facial waxing is detail work. The lip and chin clear fast; brows need an eye for shape; the sides of the face need a light hand because the skin there is thin and visible. Hard wax gives us the control to work in small sections and stop exactly where a line should end.',
      'Facial hair often grows in fine, shallow strands that respond well to waxing — the surface stays smooth far longer than shaving, without the shadow a razor leaves behind.',
      'If you use retinoids, prescription acne treatments, or have active sunburn, tell us at booking; facial skin usually needs a longer gap before waxing is safe.',
    ],
    expectations: [
      'Shape discussion first for brows — we map before we wax',
      'Small-section hard wax application with quick removals',
      'Mirror check together before you leave',
      'Soothing finish suited to facial skin',
    ],
    prep: [
      'No retinoids, AHAs/BHAs, or exfoliants for 48 hours',
      'Come without makeup on the area if possible',
      'Pause if the skin is peeling, sunburned, or under active dermatology treatment',
    ],
    faq: [
      {
        q: 'Does facial waxing cause breakouts?',
        a: 'Temporary redness is common and typically settles within a few hours. Keeping the area clean and skipping heavy products for the rest of the day helps.',
      },
      {
        q: 'How often should brows be waxed?',
        a: 'Every 3 to 4 weeks holds a shape for most people, sooner if you prefer a very clean line.',
      },
    ],
    related: ['underarm-wax', 'brazilian-wax'],
  },
  {
    slug: 'leg-waxing',
    name: 'Leg Waxing',
    serviceType: 'Leg waxing',
    price: 60,
    duration: '45 minutes',
    summary:
      'Full-leg hard-wax sessions — calves, thighs, and knees, where razors quit after a day in the desert heat.',
    metaDescription:
      'Full-leg waxing in Central Phoenix. Hard wax, 45-minute sessions, smooth results for 3–4 weeks. CenPho Wax.',
    intro: [
      'Legs are the easiest place to notice what waxing actually does: a full session covers calves, shins, knees, and thighs in one appointment, and the result holds for weeks instead of the single day a razor manages in Phoenix heat.',
      'We work with hard wax in sections, which keeps the pull controlled over a larger area and is gentler on shins and knees where skin sits close to bone.',
      'Full legs are the standard booking; half-leg (lower leg only) is available when that is all you need — ask at booking.',
    ],
    expectations: [
      'Section-by-section application from ankle to thigh',
      'Knee and ankle detail work where hair grows in multiple directions',
      'Quick skin check for dryness or ingrowns before finishing',
      'Light moisturizer at the end',
    ],
    prep: [
      'Grow hair to ¼–½ inch — about two weeks for most leg growth rates',
      'Exfoliate the day before, not the day of',
      'No oil or heavy lotion on the legs at appointment time',
      'Avoid scheduling right after intense sun exposure',
    ],
    faq: [
      {
        q: 'How long do waxed legs stay smooth?',
        a: 'Typically 3 to 4 weeks. In desert summers, sun exposure and swimming can make regrowth feel faster, so exfoliation between sessions helps.',
      },
      {
        q: 'Is full-leg waxing worth it before a trip?',
        a: 'Booking 3 to 5 days before travel leaves time for any redness to settle while covering the whole trip with smooth skin.',
      },
    ],
    related: ['brazilian-wax', 'arm-waxing'],
  },
  {
    slug: 'arm-waxing',
    name: 'Arm Waxing',
    serviceType: 'Arm waxing',
    price: 35,
    duration: '25 minutes',
    summary:
      'Full-arm waxing from wrist to shoulder — even tone without the prickly regrowth shaving leaves behind.',
    metaDescription:
      'Full-arm waxing in Central Phoenix. Hard wax from wrist to shoulder, smooth for 3–4 weeks. CenPho Wax.',
    intro: [
      'Arm waxing covers wrist to shoulder, including elbows where hair tends to grow in two directions. The payoff is evenness: waxed arms stay uniformly smooth for weeks, while shaved arms tend to show stubble and dry patches within days.',
      'Arm hair is often finer than leg hair, so sessions are quick — around twenty-five minutes for both arms — and the hard wax comes off with a lighter pull.',
      'Many clients pair arms with underarms in a single appointment; ask when booking and we will schedule the combined time.',
    ],
    expectations: [
      'Both arms waxed in sequence, wrist to shoulder',
      'Extra attention at elbows and wrists where growth direction changes',
      'Skin check and light moisturizer at the end',
    ],
    prep: [
      'Grow hair to ¼ inch',
      'Exfoliate the day before',
      'No heavy lotions or oils on appointment day',
    ],
    faq: [
      {
        q: 'Does arm waxing make hair grow back thicker?',
        a: 'No. Waxed hair typically returns at the same thickness or finer over time, unlike the blunt regrowth feel after shaving.',
      },
      {
        q: 'Can I get arms and underarms done together?',
        a: 'Yes — the two services fit comfortably in one appointment. Mention it at booking so we block the right time.',
      },
    ],
    related: ['underarm-wax', 'leg-waxing'],
  },
];

export const getService = (slug: string) => services.find((s) => s.slug === slug);
