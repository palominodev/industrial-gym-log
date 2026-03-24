"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const pathname = usePathname();

  const footerLinks = [
    { label: "PROTOCOLOS_LEGALES", href: "/privacy-policy" },
    { label: "TÉRMINOS_Y_CONDICIONES", href: "/terms-and-conditions" },
    { label: "ESTADO_DEL_SISTEMA", href: "/#" },
    { label: "DOCS_API", href: "/#" },
    { label: "REGISTRO_MANTENIMIENTO", href: "/#" },
  ];

  const activeLinkClass = "text-primary border-b border-primary hover:text-white transition-colors";
  const inactiveLinkClass = "text-outborder-outline hover:text-on-surface transition-colors";

  return (
    <footer className="bg-surface text-primary font-mono uppercase text-[10px] tracking-widest full-width border-t-2 border-outline flex flex-col md:flex-row justify-between items-center w-full px-8 py-12 gap-4">
      <div className="text-primary font-bold flex items-center gap-2">
        <span className="material-symbols-outlined">exercise</span>
        INDUSTRIAL_GYM_LOG
      </div>
      <div className="flex flex-wrap justify-center gap-6 opacity-80 hover:opacity-100 transition-opacity">
        {footerLinks.map((link) => {
          const isActive = pathname === link.href;
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
      </div>
      <div className="text-outborder-outline">
        ©{currentYear} INDUSTRIAL_GYM_LOG. TODOS LOS DERECHOS RESERVADOS.
      </div>
    </footer>
  );
}
