export interface EmergentImage {
  src: string;
  alt: string;
  description: string;
  tag?: string;
}

export interface EmergentCollection {
  slug: string;
  title: string;
  date: string; // MM/YY format e.g. "09/26"
  description: string;
  category?: string;
  accentColor?: string;
  images: EmergentImage[];
}

export interface CaseStudyFrontmatter {
  title: string;
  slug: string;
  description: string;
  date: string; // MM/YY format
  cover: string;
  role: string;
  type: string;
  client?: string;
  timeline?: string;
  featured?: boolean;
  order?: number;
}

export interface CaseStudy extends CaseStudyFrontmatter {
  content: string;
}

export interface Intervention {
  id: string;
  title: string;
  description: string;
  date: string; // MM/YY format
  image: string;
  url: string;
  tag: string;
}
