import React from "react";
import { compileMDX } from "next-mdx-remote/rsc";
import MediaRenderer from "@/components/ui/MediaRenderer";
import PullQuote from "@/components/ui/PullQuote";
import Stat from "@/components/ui/Stat";
import TwoColumn from "@/components/ui/TwoColumn";
import Gallery from "@/components/ui/Gallery";

interface CaseStudyRendererProps {
  source: string;
}

const customComponents = {
  MediaRenderer,
  PullQuote,
  Stat,
  TwoColumn,
  Gallery,
  h1: ({ children, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h1
      className="text-3xl sm:text-4xl font-bold tracking-tight text-[#181818] mt-12 mb-6"
      {...props}
    >
      {children}
    </h1>
  ),
  h2: ({ children, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h2
      className="text-2xl sm:text-3xl font-bold tracking-tight text-[#181818] mt-12 mb-4 border-b border-[#D8D8D4]/60 pb-3"
      {...props}
    >
      {children}
    </h2>
  ),
  h3: ({ children, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h3
      className="text-xl font-semibold tracking-tight text-[#181818] mt-8 mb-3"
      {...props}
    >
      {children}
    </h3>
  ),
  p: ({ children, ...props }: React.HTMLAttributes<HTMLParagraphElement>) => (
    <p
      className="text-base sm:text-lg text-[#333333] leading-relaxed my-5"
      {...props}
    >
      {children}
    </p>
  ),
  strong: ({ children, ...props }: React.HTMLAttributes<HTMLElement>) => (
    <strong className="font-semibold text-[#181818]" {...props}>
      {children}
    </strong>
  ),
  a: ({ children, href, ...props }: React.AnchorHTMLAttributes<HTMLAnchorElement>) => (
    <a
      href={href}
      className="text-[#606EDB] underline underline-offset-4 decoration-1 hover:decoration-2 transition-all font-medium"
      {...props}
    >
      {children}
    </a>
  ),
  ul: ({ children, ...props }: React.HTMLAttributes<HTMLUListElement>) => (
    <ul className="list-disc list-outside pl-6 my-5 space-y-2 text-[#333333]" {...props}>
      {children}
    </ul>
  ),
  ol: ({ children, ...props }: React.HTMLAttributes<HTMLOListElement>) => (
    <ol className="list-decimal list-outside pl-6 my-5 space-y-2 text-[#333333]" {...props}>
      {children}
    </ol>
  ),
  li: ({ children, ...props }: React.HTMLAttributes<HTMLLIElement>) => (
    <li className="leading-relaxed" {...props}>
      {children}
    </li>
  ),
  hr: () => <hr className="my-12 border-[#D8D8D4]" />,
};

export async function CaseStudyRenderer({ source }: CaseStudyRendererProps) {
  const { content } = await compileMDX({
    source,
    components: customComponents,
  });

  return (
    <div className="case-study-content mx-auto">
      {content}
    </div>
  );
}

export default CaseStudyRenderer;
