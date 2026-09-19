export const PRACTICE_NAME = "Yong S. Shin MD & Associates";
export const PRACTICE_SHORT = "Yong S. Shin MD";
export const PRACTICE_LEGAL = "Yong Shik Shin MD and Associates LLC";
export const PHYSICIAN_LEGAL_NAME = "Yong Shik Shin, MD";

export const PHONE_DISPLAY = "(610) 327-1631";
export const PHONE_TEL = "tel:+16103271631";
export const FAX_DISPLAY = "(610) 327-1199";
export const EMAIL_DISPLAY = "info@yongshinmd.net";
export const EMAIL_MAILTO = "mailto:info@yongshinmd.net";
export const DATA_REQUEST_MAILTO =
  "mailto:info@yongshinmd.net?subject=Website%20data%20request&body=Do%20not%20include%20diagnoses%2C%20medications%2C%20or%20other%20health%20details.%0A%0AName%3A%0APhone%3A%0ARequest%3A%20please%20tell%20me%20whether%20this%20website%20holds%20any%20information%20about%20me%20and%20delete%20any%20website%20notes%20if%20they%20exist.%0A";

export const DOXY_URL = "https://doxy.me/DrYShin";
export const PORTAL_URL = "https://app2.rxnt.com/phr/#";

export const NPI_INDIVIDUAL = "1881623338";
export const LICENSE_PA = "MD034368L";

export const ADDRESS_LINES = [
  "1630 E. High Street",
  "Building 4",
  "Pottstown, PA 19464",
] as const;

export const ADDRESS_ONE_LINE =
  "1630 E. High Street, Building 4, Pottstown, PA 19464";

export const MAPS_URL =
  "https://www.google.com/maps/search/?api=1&query=1630+E+High+Street+Building+4+Pottstown+PA+19464";

export const OSM_EMBED =
  "https://www.openstreetmap.org/export/embed.html?bbox=-75.618%2C40.241%2C-75.604%2C40.250&layer=mapnik&marker=40.2454%2C-75.611";

export const OSM_LINK =
  "https://www.openstreetmap.org/?mlat=40.2454&mlon=-75.611#map=17/40.2454/-75.611";

export const CRISIS_988 = "tel:988";
export const CRISIS_988_TEXT = "sms:988";
export const EMERGENCY_911 = "tel:911";

export const HOURS = [
  { days: "Monday – Thursday", time: "9:00 a.m. – 8:00 p.m." },
  { days: "Friday", time: "9:00 a.m. – 4:00 p.m." },
  { days: "Saturday – Sunday", time: "Closed" },
] as const;

export const SITE_URL = "https://yongshinmd.com";

export const NAV = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/dr-yong-shin", label: "Dr. Shin" },
  { to: "/meet-the-team", label: "Meet the Team" },
  { to: "/services", label: "Services" },
  { to: "/insurance", label: "Insurance" },
  { to: "/new-patients", label: "New Patients" },
  { to: "/contact", label: "Contact" },
] as const;

export const LEGAL_NAV = [
  { to: "/privacy", label: "Privacy" },
  { to: "/terms", label: "Terms of Service" },
  { to: "/refunds", label: "Refunds" },
  { to: "/cookies", label: "Cookies" },
  { to: "/licenses", label: "Licenses" },
] as const;

export const LEGAL_UPDATED = "September 18, 2026";

export type ServiceCategory =
  | "Evaluation"
  | "Therapy"
  | "Medication"
  | "Specialty";

export type Service = {
  slug: string;
  name: string;
  category: ServiceCategory;
  summary: string;
  details: string;
  tags: string[];
};

export const SERVICES: Service[] = [
  {
    slug: "psychiatric-evaluation",
    name: "Psychiatric evaluation",
    category: "Evaluation",
    summary: "A careful first visit to understand history, symptoms, and goals.",
    details:
      "New evaluations look at medical and psychiatric history, current symptoms, medications, and what you hope treatment will change. We use that visit to recommend therapy, medication, or both, and to decide whether a more specialized treatment is worth discussing.",
    tags: ["depression", "anxiety", "bipolar", "psychosis", "ADHD"],
  },
  {
    slug: "medication-management",
    name: "Medication management",
    category: "Medication",
    summary: "Ongoing prescribing with time to review what is and is not helping.",
    details:
      "Follow-up visits review benefits, side effects, sleep, appetite, and daily function. Psychiatrists and the psychiatric nurse practitioner in the group provide this care. Not every clinician prescribes — we will match you with the right person.",
    tags: ["depression", "anxiety", "bipolar", "schizophrenia", "ADHD", "sleep"],
  },
  {
    slug: "geriatric-psychiatry",
    name: "Geriatric psychiatry",
    category: "Specialty",
    summary: "Care shaped for older adults, families, and later-life illness.",
    details:
      "Dr. Shin’s documented focus is geriatric psychiatry. Visits can address depression, anxiety, memory concerns, grief, caregiver stress, and the way medical illness and medications affect mood and thinking. The practice is not limited to older adults — children, adolescents, and adults are seen by other clinicians in the group.",
    tags: ["geriatric", "aging", "dementia", "memory", "depression", "grief"],
  },
  {
    slug: "individual-therapy",
    name: "Individual therapy",
    category: "Therapy",
    summary: "One-to-one counseling for depression, anxiety, trauma, and adjustment.",
    details:
      "Licensed therapists, counselors, and social workers see children, adolescents, and adults. Sessions are in the office or by telehealth. Assignment is based on age, schedule, and the kind of work you want to do.",
    tags: ["depression", "anxiety", "PTSD", "trauma", "CBT"],
  },
  {
    slug: "family-therapy",
    name: "Family, couples, and co-parenting therapy",
    category: "Therapy",
    summary: "Sessions that include partners, parents, or other family members.",
    details:
      "Family and couples work can help with communication, high-conflict divorce, custody strain, and household change. We set clear ground rules so each person has time to speak. Some clinicians also offer co-parenting counseling.",
    tags: ["couples", "family", "divorce", "custody", "communication"],
  },
  {
    slug: "group-therapy",
    name: "Group therapy",
    category: "Therapy",
    summary: "Small groups when a shared setting is a better fit than one-to-one.",
    details:
      "Group offerings change with clinician availability. Call the office to ask which groups are meeting now and whether a screening visit is required before joining.",
    tags: ["group", "support"],
  },
  {
    slug: "trauma-emdr",
    name: "Trauma counseling and EMDR",
    category: "Therapy",
    summary: "Trauma-focused work, including EMDR with clinicians who are trained in it.",
    details:
      "Several therapists in the group work with PTSD, abuse, and other trauma. Michele Weeks, LPC, is listed by the practice as offering EMDR. Tell us if you are looking for trauma-specific care so we do not book a general therapy slot by default.",
    tags: ["PTSD", "trauma", "EMDR", "abuse"],
  },
  {
    slug: "christian-counseling",
    name: "Christian counseling",
    category: "Therapy",
    summary: "Faith-informed therapy when that is what you are asking for.",
    details:
      "The practice lists Christian counseling among its therapy offerings. Barbara Wilhelmy, LCSW, is described as using CBT and Christian counseling with adults and couples. This is optional — it is not required of any patient.",
    tags: ["Christian", "faith", "grief", "women"],
  },
  {
    slug: "grief-stress",
    name: "Grief, stress, and anger-management counseling",
    category: "Therapy",
    summary: "Practical help after loss, overload, or anger that is getting in the way.",
    details:
      "Grief, stress-management, and anger-management counseling are listed on the practice’s services page. Several clinicians — including Phyllis Littman, LCSW, and Michael Ermalinski, LPC — describe this work in their biographies.",
    tags: ["grief", "stress", "anger", "adjustment"],
  },
  {
    slug: "addiction-treatment",
    name: "Addiction treatment",
    category: "Medication",
    summary: "Counseling plus medication-assisted treatment including Suboxone and Vivitrol.",
    details:
      "The group treats substance-use disorders and co-occurring psychiatric illness. Listed options include addiction counseling, Suboxone (buprenorphine/naloxone), and Vivitrol (naltrexone) injections. This is office-based care, not a detox unit. Eligibility, monitoring, and which clinician prescribes each medication must be confirmed with the office.",
    tags: ["addiction", "Suboxone", "Vivitrol", "substance", "dual diagnosis"],
  },
  {
    slug: "long-acting-injections",
    name: "Long-acting injections",
    category: "Medication",
    summary: "Long-acting antipsychotic injections and related medication visits.",
    details:
      "The practice lists long-acting antipsychotic injections among its medication services. These visits are scheduled separately from a regular therapy hour. Ask which medical clinician provides them and whether your plan covers the specific medication.",
    tags: ["injection", "antipsychotic", "schizophrenia", "psychosis"],
  },
  {
    slug: "spravato",
    name: "Spravato (esketamine)",
    category: "Specialty",
    summary: "In-office nasal esketamine for some treatment-resistant depression.",
    details:
      "Spravato is given under observation, not taken home, and is considered when standard antidepressants have not been enough. Affiliated listings have associated this practice with Spravato. Confirm with the office whether it is currently offered here, who administers it, and what insurance authorization is required. It is not assumed that Dr. Shin personally gives every dose.",
    tags: ["Spravato", "esketamine", "depression", "TMS"],
  },
  {
    slug: "neurostar-tms",
    name: "NeuroStar TMS",
    category: "Specialty",
    summary: "Transcranial magnetic stimulation, if currently offered at this practice.",
    details:
      "NeuroStar TMS is a noninvasive, in-office treatment using magnetic pulses. A NeuroStar provider listing has associated Dr. Shin’s practice with this service. The practice’s own detailed service list does not always mention TMS, so please confirm current availability, location, and insurance coverage before planning a course. You remain awake throughout if it is offered.",
    tags: ["TMS", "NeuroStar", "depression"],
  },
  {
    slug: "crisis-intervention",
    name: "Crisis intervention",
    category: "Specialty",
    summary: "Urgent psychiatric help during office hours; 988 and 911 after hours.",
    details:
      "The practice lists crisis intervention and advertises 24/7 emergency coverage. This website is not monitored. If you are in immediate danger, call 911. For 24-hour mental-health crisis support, call or text 988. Call (610) 327-1631 for the office’s after-hours instructions.",
    tags: ["crisis", "emergency", "988"],
  },
  {
    slug: "court-evaluations",
    name: "Court-ordered and family-court evaluations",
    category: "Evaluation",
    summary: "Psychiatric opinions requested by a court, attorney, or family-court process.",
    details:
      "These appointments are scheduled separately from treatment visits. Please tell the office what the court has asked for, any deadlines, and who should receive the report. Some clinicians also list custody-related and mediation services. We cannot promise a legal outcome — only a careful clinical opinion.",
    tags: ["court", "custody", "legal", "mediation"],
  },
  {
    slug: "bariatric-evaluations",
    name: "Bariatric-surgery evaluations",
    category: "Evaluation",
    summary: "Pre-surgical psychiatric clearance when a surgeon requires it.",
    details:
      "Bring any forms your surgical program has given you. The visit covers mood, eating patterns, support, and readiness. We send the report to the requesting surgeon with your consent.",
    tags: ["bariatric", "surgery", "eating"],
  },
  {
    slug: "spinal-implant-evaluations",
    name: "Spinal-implant evaluations",
    category: "Evaluation",
    summary: "Psychological clearance when a spinal-implant program requires it.",
    details:
      "The practice lists spinal-implant evaluations among its specialized assessments. Bring the requesting physician’s forms. Coverage and the clinician who completes these reports vary — confirm when you schedule.",
    tags: ["spinal", "implant", "surgery"],
  },
  {
    slug: "psychological-testing",
    name: "Psychological testing",
    category: "Evaluation",
    summary: "Structured testing when a diagnosis or school/work question needs more than an interview.",
    details:
      "Testing is scheduled after a screening conversation so the right battery is ordered. Results are reviewed in a feedback visit. Testing is not the same as a therapy hour and may not be covered the same way by insurance.",
    tags: ["testing", "ADHD", "autism", "learning"],
  },
  {
    slug: "work-accident",
    name: "Work and accident-related counseling",
    category: "Therapy",
    summary: "Counseling tied to workers’ compensation or automobile-accident recovery.",
    details:
      "The practice lists counseling for work-related injury and automobile-accident victims. Tell the office if a claim number, attorney, or occupational-health form is involved so the visit is set up correctly.",
    tags: ["workers compensation", "accident", "work"],
  },
  {
    slug: "telehealth",
    name: "Telehealth visits",
    category: "Specialty",
    summary: "Video appointments for patients who can be seen safely at a distance.",
    details:
      "Many follow-up and therapy visits can be done by video through Doxy.me. At the time of a scheduled appointment, use the waiting-room link on this site. View appointment opens the RXNT patient portal. First evaluations, injections, and some medication starts still happen in the office. Confirm telehealth coverage with your insurer.",
    tags: ["telehealth", "video"],
  },
];

export const SERVICE_CATEGORIES: Array<ServiceCategory | "All"> = [
  "All",
  "Evaluation",
  "Therapy",
  "Medication",
  "Specialty",
];

export const CONDITIONS = [
  "Depression and major depressive disorder",
  "Anxiety",
  "Bipolar disorder",
  "PTSD and trauma, including physical or sexual abuse",
  "ADHD and attention problems",
  "Sleep disorders and insomnia",
  "Schizophrenia and psychosis",
  "Addiction and co-occurring substance-use disorders",
  "OCD",
  "Eating disorders",
  "Autism, learning disabilities, and intellectual disability",
  "Phobias and behavioral problems",
  "Grief and loss",
  "Geriatric and aging-related concerns, including difficulty coping with illness",
  "School, work, and relationship problems",
  "High-conflict divorce, custody, and co-parenting",
  "LGBTQ-related concerns",
] as const;

export const INSURANCE_PLANS = [
  "Aetna",
  "Ambetter",
  "AmeriHealth",
  "Beacon Health Options (ValueOptions)",
  "Blue Cross Blue Shield Federal Employee Program",
  "Capital Blue Cross",
  "Cigna",
  "ComPsych",
  "Geisinger Health Plan",
  "Highmark Blue Cross Blue Shield (Pennsylvania)",
  "Humana",
  "Independence Blue Cross",
  "Magellan",
  "Medicare",
  "Meritain",
  "Optum / United Behavioral Health",
  "TRICARE",
  "UnitedHealthcare",
  "United Medical Resources (UMR)",
  "UPMC Health Plan",
] as const;

export type Clinician = {
  name: string;
  credentials: string;
  group: "Medical" | "Therapy";
  title: string;
  focus: string;
  photo?: string;
};

export const CLINICIANS: Clinician[] = [
  {
    name: "Yong Shik Shin",
    credentials: "MD",
    group: "Medical",
    title: "Psychiatrist · Medical Director",
    focus:
      "Geriatric psychiatry and general psychiatry. Founder of the practice (1988). Pennsylvania physician license MD034368L is listed as active. NPI 1881623338.",
    photo: "/images/dr-shin.jpg",
  },
  {
    name: "Jacob Trachtenberg",
    credentials: "MD",
    group: "Medical",
    title: "Board-certified general psychiatrist",
    focus:
      "Adult medication management, age 22 and older, including depression, anxiety, bipolar disorder, and psychotic disorders.",
  },
  {
    name: "Denise M. Miller",
    credentials: "CRNP",
    group: "Medical",
    title: "Psychiatric nurse practitioner",
    focus:
      "Adolescents through older adults. Dual diagnosis, eating disorders, and substance-use disorders.",
  },
  {
    name: "Karen Daigneault",
    credentials: "MA, LPC",
    group: "Therapy",
    title: "Licensed professional counselor",
    focus:
      "Children, adolescents, and adults. Abuse, trauma, autism, individual, couples, family, and group therapy.",
  },
  {
    name: "Michael Ermalinski",
    credentials: "MS, LPC",
    group: "Therapy",
    title: "Licensed professional counselor",
    focus:
      "Anxiety and stress, depression, bipolar disorder, trauma, abuse, and personal development.",
  },
  {
    name: "MaryRita Gallagher",
    credentials: "LMFT",
    group: "Therapy",
    title: "Licensed marriage and family therapist",
    focus:
      "Children, adolescents, adults, couples, families, and seniors. Grief, chronic illness, aging, and relationship issues. Publicly associated with the practice since 2019.",
  },
  {
    name: "Phyllis Littman",
    credentials: "LCSW",
    group: "Therapy",
    title: "Licensed clinical social worker",
    focus: "Adolescents, adults, and older adults. Grief, depression, and stress management.",
  },
  {
    name: "Mark Oleski",
    credentials: "MA",
    group: "Therapy",
    title: "Therapist",
    focus:
      "Adults and young adults. Substance use, co-occurring disorders, mood disorders, psychotic disorders, and adjustment problems.",
  },
  {
    name: "Shelle Savill",
    credentials: "LPC",
    group: "Therapy",
    title: "Licensed professional counselor",
    focus:
      "Depression, bipolar disorder, anxiety, trauma, grief, PTSD, and substance use.",
  },
  {
    name: "Edward T. Wagner III",
    credentials: "MA, LPC, NCC",
    group: "Therapy",
    title: "Licensed professional counselor",
    focus: "Cognitive behavioral therapy, motivational interviewing, and addiction-related treatment.",
  },
  {
    name: "Michele Weeks",
    credentials: "LPC",
    group: "Therapy",
    title: "Licensed professional counselor",
    focus:
      "Children and teens. Addiction, domestic violence, depression, anxiety, PTSD, bipolar disorder, CBT, and EMDR.",
  },
  {
    name: "Sandy Weiner",
    credentials: "LCSW",
    group: "Therapy",
    title: "Licensed clinical social worker",
    focus:
      "Individuals, couples, and families. Communication, mood disorders, and relationship problems.",
  },
  {
    name: "Donald Weinstein",
    credentials: "MS",
    group: "Therapy",
    title: "Psychologist",
    focus:
      "Children, adolescents, adults, couples, and families. Behavioral, parenting, communication, work, and health-related issues. Family-court mediation.",
  },
  {
    name: "Barbara Wilhelmy",
    credentials: "LCSW",
    group: "Therapy",
    title: "Licensed clinical social worker",
    focus:
      "Adults and couples. Depression, anxiety, mood disorders, grief, trauma, stress, women’s issues, CBT, and Christian counseling.",
  },
];

export const ABOUT_TIMELINE = [
  {
    year: "1969",
    title: "Ewha Women’s Medical College, Seoul",
    body: "Dr. Shin earned her medical degree and completed her first internship in Korea. The practice biography and WebMD both identify Ewha — not a Pittsburgh mapping that appears in some commercial directories.",
  },
  {
    year: "1970–1974",
    title: "Training in Philadelphia",
    body: "Internship at Nazareth Hospital, then psychiatry residencies at Philadelphia General Hospital’s Jefferson Unit (1972) and Thomas Jefferson University Hospital (1974).",
  },
  {
    year: "Leadership posts",
    title: "Pottstown-area hospitals and programs",
    body: "Staff psychiatrist, medical director, and unit director at Pottstown Memorial Care Center / Pottstown Memorial Medical Center; assistant unit director and women’s unit director at Eugenia Psychiatric Hospital; medical director of the Progressions Senior Day Program.",
  },
  {
    year: "1988–present",
    title: "Private practice in Pottstown",
    body: "Yong Shin MD & Associates has served this community since 1988. Dr. Shin is an active member of the American Psychiatric Association, per the practice biography, and holds an emeritus affiliation with Pottstown Hospital (Tower Health).",
  },
] as const;

export const CAREER_ROLES = [
  { role: "Staff psychiatrist", place: "Pottstown Medical Care Center" },
  { role: "Medical director", place: "Pottstown Memorial Care Center" },
  { role: "Unit director", place: "Pottstown Memorial Medical Center" },
  { role: "Assistant unit director", place: "Eugenia Psychiatric Hospital" },
  { role: "Women’s unit director", place: "Eugenia Psychiatric Hospital" },
  { role: "Medical director", place: "Progressions Senior Day Program" },
  { role: "Private-practice psychiatrist", place: "Yong S. Shin MD & Associates" },
  { role: "Emeritus-affiliated physician", place: "Pottstown Hospital, Tower Health" },
] as const;

export const NEW_PATIENT_DOCS = [
  "Photo identification",
  "Insurance card (front and back)",
  "A list of current medications, doses, and allergies",
  "Names of other clinicians involved in your care",
  "Prior psychiatric records, if you have them — not required for a first visit",
  "Any court, surgical, workers’ compensation, or accident forms, if the visit is that kind of evaluation",
] as const;

export const FAQS = [
  {
    q: "Do I need a referral?",
    a: "Many commercial plans and Medicare allow you to call us directly. Some HMO or EAP plans do require a referral. We will help you check when you call — and you should still confirm with your insurer.",
  },
  {
    q: "Are you accepting new patients?",
    a: "Availability changes by clinician and by appointment type. Directory sites have listed the office as accepting new patients and telehealth, but that can change. Please call (610) 327-1631 and we will tell you what is open now rather than promising a slot on this website.",
  },
  {
    q: "What ages do you see?",
    a: "The practice sees patients from roughly age 3 through 90. Dr. Shin’s documented focus is geriatric psychiatry; other clinicians see children, adolescents, and adults. The right clinician depends on age and need.",
  },
  {
    q: "Do you offer telehealth?",
    a: "Yes, for many follow-up and therapy visits. At the time of a scheduled video appointment, use the Doxy.me waiting room on this site. Use View appointment to open the patient portal. First evaluations, injections, and some medication starts are in person. Confirm telehealth coverage with your insurer.",
  },
  {
    q: "How do I join a video visit or see my appointment?",
    a: "Click here at the time of your scheduled appointment to open Dr. Shin’s Doxy.me room. Use View appointment for the RXNT patient portal. These are the practice’s third-party systems — not this website. If you cannot get in, call (610) 327-1631. Do not send medical details through this site.",
  },
  {
    q: "Does Dr. Shin personally provide every service?",
    a: "No. This is a group practice. Dr. Trachtenberg focuses on adult medication management. Denise Miller, CRNP, treats adolescents through older adults. Therapy, EMDR, testing, and many evaluations are provided by other named clinicians. Ask who will see you.",
  },
  {
    q: "Is there a second office?",
    a: "The practice has described locations in Pottstown and Oaks, Pennsylvania. The verified Pottstown address is 1630 E. High Street, Building 4. Call for the current Oaks street address and which visits happen there. Please ignore older directory listings that point to a different Pottstown street number.",
  },
  {
    q: "What should I do in a crisis?",
    a: "If you are in immediate danger, call 911. For 24-hour mental-health crisis support, call or text 988. The practice advertises 24/7 emergency coverage — call (610) 327-1631 for those instructions. This website is not monitored and cannot take emergency messages.",
  },
  {
    q: "Can I send medical information through this site or by email?",
    a: "No. Please do not email or type diagnoses, medication lists, or other health details into this website or to info@yongshinmd.net. Full intake is completed through the office’s HIPAA-compliant process after you call.",
  },
] as const;

export const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": "https://yongshinmd.com/#website",
      url: "https://yongshinmd.com",
      name: PRACTICE_NAME,
      inLanguage: "en-US",
      publisher: { "@id": "https://yongshinmd.com/#clinic" },
    },
    {
      "@type": "MedicalClinic",
      "@id": "https://yongshinmd.com/#clinic",
      name: PRACTICE_NAME,
      legalName: PRACTICE_LEGAL,
      url: "https://yongshinmd.com",
      image: "https://yongshinmd.com/og.jpg",
      logo: "https://yongshinmd.com/images/logo.png",
      email: EMAIL_DISPLAY,
      telephone: "+1-610-327-1631",
      faxNumber: "+1-610-327-1199",
      medicalSpecialty: ["Psychiatry", "GeriatricPsychiatry"],
      hasMap: OSM_LINK,
      address: {
        "@type": "PostalAddress",
        streetAddress: "1630 E. High Street, Building 4",
        addressLocality: "Pottstown",
        addressRegion: "PA",
        postalCode: "19464",
        addressCountry: "US",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 40.2454,
        longitude: -75.611,
      },
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday"],
          opens: "09:00",
          closes: "20:00",
        },
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: "Friday",
          opens: "09:00",
          closes: "16:00",
        },
      ],
      availableLanguage: ["English", "Korean", "Spanish"],
      employee: { "@id": "https://yongshinmd.com/#physician" },
    },
    {
      "@type": "Physician",
      "@id": "https://yongshinmd.com/#physician",
      name: PHYSICIAN_LEGAL_NAME,
      url: "https://yongshinmd.com/dr-yong-shin",
      image: "https://yongshinmd.com/images/dr-shin.jpg",
      telephone: "+1-610-327-1631",
      medicalSpecialty: "GeriatricPsychiatry",
      identifier: [
        {
          "@type": "PropertyValue",
          propertyID: "NPI",
          value: NPI_INDIVIDUAL,
        },
        {
          "@type": "PropertyValue",
          propertyID: "Pennsylvania medical license",
          value: LICENSE_PA,
        },
      ],
      worksFor: { "@id": "https://yongshinmd.com/#clinic" },
      address: {
        "@type": "PostalAddress",
        streetAddress: "1630 E. High Street, Building 4",
        addressLocality: "Pottstown",
        addressRegion: "PA",
        postalCode: "19464",
        addressCountry: "US",
      },
    },
  ],
};
