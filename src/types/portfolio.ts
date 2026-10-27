export interface EducationItem {
  institution: string;
  degreeOrMajor: string;
  period: string;
  location: string;
  description: string;
  highlights?: string[];
}

export interface ExperienceItem {
  id: string;
  title: string;
  companyOrContext: string;
  type: string; // contoh: "Praktik Kerja Lapangan (PKL)"
  location: string;
  description: string;
  activities: string[];
  imageSrc: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  period: string;
  techStack: string[];
  description: string;
  features: {
    title: string;
    description: string;
  }[];
  databaseSchema: {
    tableName: string;
    fields: string[];
    purpose: string;
  }[];
  screenshots: {
    url: string;
    caption: string;
  }[];
}

export interface SkillItem {
  name: string;
  category: 'Bahasa & Basis Data' | 'Alat Pengembangan' | 'Perkantoran & Produktivitas';
  levelDescription: string;
  note?: string;
  iconName: string;
}

export interface HobbyItem {
  title: string;
  subtitle: string;
  description: string;
  iconName: string;
  tag: string;
}

export interface ContactInfo {
  name: string;
  title: string;
  email: string;
  phoneWhatsapp: string;
  whatsappUrl: string;
  locationGeneral: string;
  university: string;
  schoolOrigin: string;
}

export type PhotoTargetKey = 'photo' | 'screenshot' | 'exp-mulya';
