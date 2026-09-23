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
