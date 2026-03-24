"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function TopNavBar() {
  const pathname = usePathname();

  const navLinks: { label: string; href: string }[] = [
    // { label: "SOLUCIONES", href: "/#" },
    // { label: "CARACTERÍSTICAS", href: "/#" },
    // { label: "ARCHIVO", href: "/#" },
    // { label: "ACADEMIA", href: "/#" },
  ];

  const activeLinkClass = "text-primary border-b-2 border-primary pb-1";
  const inactiveLinkClass = "text-on-surface hover:text-primary transition-colors";

  return (
    <header className="bg-[#121212] text-primary font-headline uppercase tracking-[2px] font-bold text-sm docked full-width top-0 border-b-2 border-outline flex justify-between items-center w-full px-6 py-4 max-w-full sticky z-40">
      <Link href="/" className="text-2xl font-black tracking-tighter text-primary hover:text-[#FF9100] transition-colors">
        INDUSTRIAL_GYM_LOG
      </Link>
      <nav className="hidden md:flex gap-8">
        {navLinks.map((link) => {
          const isActive = (pathname === "/" && link.label === "SOLUCIONES") || pathname === link.href;
          return (
            <Link
              key={link.label}
              className={isActive ? activeLinkClass : inactiveLinkClass}
              href={link.href}
            >
              {link.label}
            </Link>
          );
        })}
      </nav>
      <button className="bg-primary text-[#121212] px-4 py-2 hover:bg-[#FF9100] transition-all duration-75 scale-95 active:bg-[#FF9100] font-bold">
        ACCESO_CLIENTE
      </button>
    </header>
  );
}
