import { Link } from "react-router-dom";
import { projects } from "../data/projects";
import { site } from "../data/site";

const github = site.links.find((link) => link.label === "GitHub");

const buttonClass =
  "rounded-lg bg-[#e7c9b8] px-3 py-1.5 text-sm font-medium text-[#3d2b23] transition-colors hover:bg-[#dfb9a3]";

export default function Projects() {
  return (
    <div className="space-y-10">
      <div className="space-y-3">
        <h1 className="text-3xl font-semibold tracking-tight text-[#3d2b23]">
          Featured Projects
        </h1>
        <p className="max-w-prose text-[#6b5d4f]">
          A selection of personal projects. More are available on{" "}
          <a
            href={github?.href}
            target="_blank"
            rel="noreferrer"
            className="text-[#8a7c6d] underline underline-offset-4 hover:text-[#3d2b23]"
          >
            my GitHub
          </a>
          .
        </p>
      </div>

      <ul className="space-y-4">
        {projects.map((project) => (
          <li key={project.title}>
            <div className="relative rounded-xl border border-[#e4d9c8] bg-white/40 p-5 backdrop-blur-sm transition-colors hover:border-[#c9b8a0] hover:bg-white/70">
              <div className="flex items-baseline justify-between gap-4">
                <h2 className="font-medium text-[#3d2b23]">
                  {project.href ? (
                    <a
                      href={project.href}
                      target="_blank"
                      rel="noreferrer"
                      className="underline-offset-4 before:absolute before:inset-0 before:content-[''] hover:underline"
                    >
                      {project.title}
                    </a>
                  ) : (
                    project.title
                  )}
                </h2>
                {project.year && (
                  <span className="shrink-0 text-xs text-[#a89a89]">
                    {project.year}
                  </span>
                )}
              </div>
              <p className="mt-2 text-sm leading-relaxed text-[#6b5d4f]">
                {project.blurb}
              </p>
              {project.tags.length > 0 && (
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-[#e4d9c8] px-2.5 py-0.5 text-xs text-[#8a7c6d]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
              {project.actions && project.actions.length > 0 && (
                <div className="relative mt-4 flex flex-wrap gap-3">
                  {project.actions.map((action) =>
                    action.to ? (
                      <Link
                        key={action.label}
                        to={action.to}
                        className={buttonClass}
                      >
                        {action.label}
                      </Link>
                    ) : (
                      <a
                        key={action.label}
                        href={action.href}
                        className={buttonClass}
                      >
                        {action.label}
                      </a>
                    ),
                  )}
                </div>
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
