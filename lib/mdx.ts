import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { CaseStudyFrontmatter } from "@/types";

const CASE_STUDIES_DIR = path.join(process.cwd(), "content/case-studies");

export function getAllCaseStudies(): CaseStudyFrontmatter[] {
  if (!fs.existsSync(CASE_STUDIES_DIR)) {
    return [];
  }

  const fileNames = fs.readdirSync(CASE_STUDIES_DIR);
  const studies: CaseStudyFrontmatter[] = [];

  for (const fileName of fileNames) {
    if (!fileName.endsWith(".mdx") && !fileName.endsWith(".md")) continue;

    const fullPath = path.join(CASE_STUDIES_DIR, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data } = matter(fileContents);

    const defaultSlug = fileName.replace(/\.mdx?$/, "");

    studies.push({
      title: data.title || defaultSlug,
      slug: data.slug || defaultSlug,
      description: data.description || "",
      date: data.date || "09/26",
      cover: data.cover || "/images/case-studies/builder-experience-cover.svg",
      role: data.role || "Product Designer",
      type: data.type || "Product Design",
      client: data.client,
      timeline: data.timeline,
      featured: Boolean(data.featured),
      order: data.order ?? 99,
    });
  }

  return studies.sort((a, b) => (a.order ?? 99) - (b.order ?? 99));
}

export function getCaseStudyBySlug(slug: string): {
  frontmatter: CaseStudyFrontmatter;
  content: string;
} | null {
  if (!fs.existsSync(CASE_STUDIES_DIR)) return null;

  const directPath = path.join(CASE_STUDIES_DIR, `${slug}.mdx`);
  const altPath = path.join(CASE_STUDIES_DIR, `${slug}.md`);

  let targetPath = "";
  if (fs.existsSync(directPath)) {
    targetPath = directPath;
  } else if (fs.existsSync(altPath)) {
    targetPath = altPath;
  } else {
    // Search by frontmatter slug
    const files = fs.readdirSync(CASE_STUDIES_DIR);
    for (const f of files) {
      if (!f.endsWith(".mdx") && !f.endsWith(".md")) continue;
      const content = fs.readFileSync(path.join(CASE_STUDIES_DIR, f), "utf8");
      const { data } = matter(content);
      if (data.slug === slug) {
        targetPath = path.join(CASE_STUDIES_DIR, f);
        break;
      }
    }
  }

  if (!targetPath) return null;

  const fileContents = fs.readFileSync(targetPath, "utf8");
  const { data, content } = matter(fileContents);

  const defaultSlug = path.basename(targetPath).replace(/\.mdx?$/, "");

  return {
    frontmatter: {
      title: data.title || defaultSlug,
      slug: data.slug || defaultSlug,
      description: data.description || "",
      date: data.date || "09/26",
      cover: data.cover || "/images/case-studies/builder-experience-cover.svg",
      role: data.role || "Product Designer",
      type: data.type || "Product Design",
      client: data.client,
      timeline: data.timeline,
      featured: Boolean(data.featured),
      order: data.order ?? 99,
    },
    content,
  };
}

export function getAdjacentCaseStudies(slug: string): {
  prev: CaseStudyFrontmatter | null;
  next: CaseStudyFrontmatter | null;
} {
  const all = getAllCaseStudies();
  const index = all.findIndex((s) => s.slug === slug);
  if (index === -1) return { prev: null, next: null };

  const prev = index > 0 ? all[index - 1] : null;
  const next = index < all.length - 1 ? all[index + 1] : null;

  return { prev, next };
}
