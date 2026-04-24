export type ResumeContactLink = {
  label: string;
  url: string;
};

export type ResumeContact = {
  location: string;
  phone: string;
  email: string;
  linkedin: ResumeContactLink;
  github: ResumeContactLink;
  portfolio: ResumeContactLink;
};

export type ResumeJob = {
  company: string;
  companyDetail?: string;
  role: string;
  location: string;
  period: string;
  stack?: string[];
  bullets?: string[];
};

export type ResumeSkillGroup = {
  label: string;
  items: string[];
};

export type ResumeEducation = {
  school: string;
  degree: string;
  period: string;
  location: string;
};

export type ResumeData = {
  name: string;
  title: string;
  contact: ResumeContact;
  summary: string;
  jobs: ResumeJob[];
  skills: ResumeSkillGroup[];
  education: ResumeEducation[];
  languages: string;
};
