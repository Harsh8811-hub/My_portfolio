import React from "react";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Education", href: "#education" },
  { label: "Projects", href: "#projects" },
  { label: "Certifications", href: "#certifications" },
  { label: "Contact", href: "#contact" },
];

const Header: React.FC = () => (
  <header className="w-full fixed top-0 left-0 z-50 bg-background/80 backdrop-blur border-b border-border/30">
    <nav className="max-w-7xl mx-auto flex items-center justify-between px-4 py-1 md:px-6 md:py-2">
      <span className="font-bold text-xl tracking-wide bg-gradient-neon bg-clip-text text-transparent">
        Harsh Abakari
      </span>
      <ul className="flex gap-6 text-base font-medium">
        {navItems.map((item) => (
          <li key={item.href}>
            <a
              href={item.href}
              className="hover:text-neon-cyan transition-colors duration-200">
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  </header>
);

export default Header;
