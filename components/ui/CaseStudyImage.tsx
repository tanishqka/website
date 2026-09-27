export interface CaseStudyImageProps {
  src?: string;
  image?: string;
  maxWidth?: string | number;
  caption?: string;
  alt?: string;
  align?: "center" | "left" | "right";
  className?: string;
}

export function CaseStudyImage({
  src,
  image,
  maxWidth,
  caption,
  alt,
  align = "center",
  className = "",
}: CaseStudyImageProps) {
  const imageSrc = src || image || "";

  if (!imageSrc) return null;

  let inlineMaxWidth: string | undefined;
  let tailwindMaxWidth = "";

  if (maxWidth !== undefined && maxWidth !== null) {
    if (typeof maxWidth === "number") {
      inlineMaxWidth = `${maxWidth}px`;
    } else if (typeof maxWidth === "string") {
      const trimmed = maxWidth.trim();
      if (trimmed.startsWith("max-w-")) {
        tailwindMaxWidth = trimmed;
      } else if (/^\d+$/.test(trimmed)) {
        inlineMaxWidth = `${trimmed}px`;
      } else {
        inlineMaxWidth = trimmed;
      }
    }
  }

  const alignmentClass =
    align === "left"
      ? "mr-auto text-left"
      : align === "right"
      ? "ml-auto text-right"
      : "mx-auto text-center";

  const captionAlignmentClass =
    align === "left"
      ? "justify-start text-left"
      : align === "right"
      ? "justify-end text-right"
      : "justify-center text-center";

  return (
    <figure
      className={`my-8 w-full ${alignmentClass} ${tailwindMaxWidth} ${className}`.trim()}
      style={inlineMaxWidth ? { maxWidth: inlineMaxWidth } : undefined}
    >
      <div>
        <img
          src={imageSrc}
          alt={alt || caption || "Case study image"}
          className="w-full h-auto block"
          loading="lazy"
        />
      </div>

      {caption && (
        <figcaption
          className={`mt-2.5 text-[15px] text-[#666666] flex items-center gap-2 ${captionAlignmentClass}`}
        >
          <span>{caption}</span>
        </figcaption>
      )}
    </figure>
  );
}

export default CaseStudyImage;
