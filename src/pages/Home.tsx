import { Link } from "react-router-dom";
import { site } from "../data/site";
import { pdfs } from "../data/pdfs";

export default function Home() {
  return (
    <div className="space-y-10">
      <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
        <div className="space-y-6">
          <div className="space-y-4">
            <h1 className="text-4xl font-semibold tracking-tight text-[#3d2b23] sm:text-5xl">
              {site.name}
            </h1>
            <p className="text-lg text-[#8a7c6d]">{site.tagline}</p>
          </div>

          <p className="max-w-prose leading-relaxed text-[#6b5d4f]">
            {site.intro}
          </p>
        </div>

        <img
          src="/istanbul_edit.jpg"
          alt="Graham Heathcote in Istanbul, with the Galata Tower behind"
          width={830}
          height={1037}
          className="w-full max-w-[22rem] shrink-0 rounded-xl border border-[#e4d9c8] object-cover"
        />
      </div>

      <div className="flex flex-wrap items-center gap-3">
        <Link
          to="/projects"
          className="rounded-lg bg-[#e7c9b8] px-4 py-2 text-sm font-medium text-[#3d2b23] transition-colors hover:bg-[#dfb9a3]"
        >
          See featured projects
        </Link>
        {pdfs.map((pdf) => (
          <a
            key={pdf.id}
            href={pdf.file}
            target="_blank"
            rel="noreferrer"
            className="rounded-lg border border-[#e4d9c8] px-4 py-2 text-sm font-medium text-[#6b5d4f] transition-colors hover:border-[#c9b8a0] hover:text-[#3d2b23]"
          >
            Read my {pdf.title.toLowerCase()}
          </a>
        ))}
      </div>

      <div className="flex flex-wrap gap-x-6 gap-y-2 border-t border-[#e4d9c8] pt-8 text-sm">
        <a
          href={`mailto:${site.email}`}
          className="text-[#8a7c6d] underline-offset-4 transition-colors hover:text-[#3d2b23] hover:underline"
        >
          {site.email}
        </a>
        {site.links.map((link) => (
          <a
            key={link.label}
            href={link.href}
            target="_blank"
            rel="noreferrer"
            className="text-[#8a7c6d] underline-offset-4 transition-colors hover:text-[#3d2b23] hover:underline"
          >
            {link.label}
          </a>
        ))}
      </div>
    </div>
  );
}
