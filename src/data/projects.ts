// Add a project by appending an object to this array.
// `href` makes the title an external link; `actions` render as buttons on the card
// (`to` is an in-app route, `href` is a full page load).
export type ProjectAction = {
  label: string;
  to?: string;
  href?: string;
};

export type Project = {
  title: string;
  year: string;
  blurb: string;
  tags: string[];
  href?: string;
  actions?: ProjectAction[];
};

export const projects: Project[] = [
  {
    title: "Chess Engine",
    year: "2026",
    blurb: "A chess engine written in Julia. Play against it in the browser.",
    tags: [],
    href: "https://github.com/grahamHeathcote/Chess",
    actions: [{ label: "Play the engine", to: "/chess" }],
  },
  {
    title: "openEuler Scheduler Visualization Tool",
    year: "2025",
    blurb:
      "A visualization tool for the openEuler scheduler, built at the Edinburgh Hackathon.",
    tags: [],
    href: "https://github.com/grahamHeathcote/Edinbrugh-Hackathon-Project",
  },
];
