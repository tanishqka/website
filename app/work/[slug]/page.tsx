import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import {
  getAllCaseStudies,
  getCaseStudyBySlug,
  getAdjacentCaseStudies,
} from "@/lib/mdx";
import CaseStudyRenderer from "@/components/casestudies/CaseStudyRenderer";
import Header from "@/components/Header";
import Footer from "@/components/footer/Footer";
import { ArrowLeft, ArrowRight } from "lucide-react";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const projects = getAllCaseStudies();
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const data = getCaseStudyBySlug(slug);

  if (!data) {
    return {
      title: "Project Not Found",
    };
  }

  return {
    title: `${data.frontmatter.title} | Case Study`,
    description: data.frontmatter.description,
  };
}

export default async function CaseStudyPage({ params }: PageProps) {
  const { slug } = await params;
  const data = getCaseStudyBySlug(slug);

  if (!data) {
    notFound();
  }

  const { frontmatter, content } = data;
  const { prev, next } = getAdjacentCaseStudies(slug);

  return (
    <div className="min-h-screen flex flex-col dot-grid-bg">
      <Header />

      <main className="flex-1 pt-28 pb-20">
        <article className="max-w-6xl mx-auto px-6 md:px-12">
          {/* Back Navigation Bar */}
          <div className="mb-10">
            <Link
              href="/#projects"
              className="group inline-flex items-center gap-2 text-[15px] uppercase tracking-wider text-[#666666] hover:text-[#606EDB] transition-colors"
            >
              <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
              <span>Back to Selected Work</span>
            </Link>
          </div>

          {/* Project Header & Editorial Title */}
          <header className="pb-10 border-b border-[#ECECE8]">
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className="w-2 h-2 rounded-full bg-[#606EDB]" />
              <span className="text-[15px] uppercase tracking-wider text-[#606EDB] font-semibold">
                {frontmatter.type}
              </span>
              <span className="text-[15px] text-[#888884]">•</span>
              <span className="text-[15px] text-[#666666]">
                {frontmatter.date}
              </span>
              {frontmatter.client && (
                <>
                  <span className="text-[15px] text-[#888884]">•</span>
                  <span className="text-[15px] text-[#666666]">
                    {frontmatter.client}
                  </span>
                </>
              )}
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[#181818] leading-[1.05] max-w-4xl">
              {frontmatter.title}
            </h1>

            <p className="mt-6 text-lg sm:text-xl text-[#666666] max-w-3xl leading-relaxed">
              {frontmatter.description}
            </p>

            {/* Metadata Matrix */}
            <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-6 pt-6 border-t border-[#ECECE8]">
              <div>
                <div className="text-[15px] text-[#888884] uppercase tracking-wider">
                  Role
                </div>
                <div className="mt-1 text-[15px] font-semibold text-[#181818]">
                  {frontmatter.role}
                </div>
              </div>

              <div>
                <div className="text-[15px] text-[#888884] uppercase tracking-wider">
                  Timeline
                </div>
                <div className="mt-1 text-[15px] font-semibold text-[#181818]">
                  {frontmatter.timeline || "3 Months"}
                </div>
              </div>

              <div>
                <div className="text-[15px] text-[#888884] uppercase tracking-wider">
                  Discipline
                </div>
                <div className="mt-1 text-[15px] font-semibold text-[#181818]">
                  {frontmatter.type}
                </div>
              </div>

              <div>
                <div className="text-[15px] text-[#888884] uppercase tracking-wider">
                  Archive Date
                </div>
                <div className="mt-1 text-[15px] font-semibold text-[#181818]">
                  {frontmatter.date}
                </div>
              </div>
            </div>
          </header>

          {/* Hero Cover Image: Fit height to actual image, never cropped */}
          <div className="my-12 overflow-hidden rounded-2xl border border-[#ECECE8] bg-[#FAFAFA] shadow-[0_8px_30px_rgba(0,0,0,0.04)]">
            <img
              src={frontmatter.cover}
              alt={frontmatter.title}
              className="w-full h-auto block"
            />
          </div>

          {/* Compiled MDX Content */}
          <div className="prose-container py-6">
            <CaseStudyRenderer source={content} />
          </div>

          {/* Bottom Pagination / Next & Prev Project */}
          <nav
            className="mt-20 pt-10 border-t border-[#ECECE8] grid grid-cols-1 sm:grid-cols-2 gap-6"
            aria-label="Adjacent Projects"
          >
            {prev ? (
              <Link
                href={`/work/${prev.slug}`}
                className="group p-6 rounded-2xl border border-[#ECECE8] bg-white hover:border-[#606EDB] shadow-xs transition-all flex flex-col justify-between"
              >
                <div className="flex items-center gap-2 text-[15px] text-[#888884] mb-2">
                  <ArrowLeft className="w-3.5 h-3.5 transition-transform group-hover:-translate-x-1" />
                  <span>PREVIOUS PROJECT</span>
                </div>
                <div className="text-lg font-bold text-[#181818] group-hover:text-[#606EDB] transition-colors">
                  {prev.title}
                </div>
              </Link>
            ) : (
              <div />
            )}

            {next ? (
              <Link
                href={`/work/${next.slug}`}
                className="group p-6 rounded-2xl border border-[#ECECE8] bg-white hover:border-[#606EDB] shadow-xs transition-all flex flex-col justify-between sm:items-end text-left sm:text-right"
              >
                <div className="flex items-center gap-2 text-[15px] text-[#888884] mb-2">
                  <span>NEXT PROJECT</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </div>
                <div className="text-lg font-bold text-[#181818] group-hover:text-[#606EDB] transition-colors">
                  {next.title}
                </div>
              </Link>
            ) : (
              <div />
            )}
          </nav>
        </article>
      </main>

      <Footer />
    </div>
  );
}
