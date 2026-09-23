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
