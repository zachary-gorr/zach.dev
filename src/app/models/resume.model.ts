export interface ContactLink {
  label: string;
  value: string;
  href: string;
  icon: 'mail' | 'github' | 'linkedin' | 'location';
}

export interface Profile {
  name: string;
  role: string;
  tagline: string;
  location: string;
  headshot: string;
  summary: string[];
  links: ContactLink[];
}

export interface Metric {
  value: string;
  label: string;
  detail: string;
}

/** A named workstream within a role — the unit of detail the resume tracks. */
export interface Initiative {
  name: string;
  scope: string;
  description: string;
}

export interface Role {
  id: string;
  company: string;
  /** Key into COMPANY_MARKS; falls back to an initial-based monogram. */
  mark: string;
  title: string;
  location: string;
  start: string;
  end: string;
  current?: boolean;
  blurb: string;
  initiatives: Initiative[];
}

export interface SkillGroup {
  name: string;
  /** Day-to-day tools. Rendered first and emphasized. */
  core: string[];
  /** The rest of the group — real experience, just not the daily driver. */
  supporting: string[];
}

export interface Education {
  school: string;
  credential: string;
  location: string;
}

export interface SiteSection {
  id: string;
  label: string;
}
