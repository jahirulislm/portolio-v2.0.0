import Link from "next/link";
import React from "react";

function CommonUsedBtn({
  project,
  text,
}: {
  project: { link: string; github: string; title: string; id: string };
  text: string;
}) {
  const isCaseStudy = text.toLowerCase() === "case study";
  const slug = project.title.toLowerCase().replace(/\s+/g, '-');

  const href = isCaseStudy
    ? `/case-studies/${slug}`
    : text.toLowerCase() === "code" ? project.github : project.link;

  const className = "w-full block py-2 border border-[#00ff00] text-[#000] hover:text-[#0a0a0a] hover:bg-[#00ff00] hover:shadow-[0_0_15px_#00ff00] transition-all text-xs font-bold text-center";

  if (isCaseStudy) {
    return (
      <div className="w-28 py-2">
        <Link href={href} className={className}>
          [{text.toUpperCase()}]
        </Link>
      </div>
    );
  }

  return (
    <div className="w-28 py-2">
      <a
        target="_blank"
        href={href}
        className={className}
      >
        [{text.toUpperCase()}]
      </a>
    </div>
  );
}

export default CommonUsedBtn;
