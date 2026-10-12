import { NavLink, Outlet } from "react-router-dom";

const navItems = [
  { to: "/", label: "Home", end: true },
  { to: "/projects", label: "Projects", end: false },
  { to: "/chess", label: "Chess", end: false },
];

function navClass({ isActive }: { isActive: boolean }) {
  return [
    "rounded-md px-3 py-1.5 text-sm transition-colors",
    isActive
      ? "bg-[#e7c9b8] text-[#3d2b23]"
      : "text-[#8a7c6d] hover:text-[#3d2b23] hover:bg-[#ece3d6]",
  ].join(" ");
}

export default function Layout() {
  return (
    <div className="flex min-h-screen flex-col bg-[#f6f1e9] text-[#3d2b23]">
      <header className="sticky top-0 z-10 border-b border-[#e4d9c8] bg-[#f6f1e9]">
        <nav className="mx-auto flex max-w-5xl items-center justify-end gap-4 px-6 py-4">
          <div className="flex items-center gap-1">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.end}
                className={navClass}
              >
                {item.label}
              </NavLink>
            ))}
          </div>
        </nav>
      </header>

      <main className="mx-auto w-full max-w-5xl flex-1 px-6 py-16">
        <Outlet />
      </main>
    </div>
  );
}
