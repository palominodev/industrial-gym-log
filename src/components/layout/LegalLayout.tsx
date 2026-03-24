import React from "react";

interface LegalLayoutProps {
  protocol: string;
  title: React.ReactNode;
  children: React.ReactNode;
}

export default function LegalLayout({ protocol, title, children }: LegalLayoutProps) {
  return (
    <main className="flex-1 py-24 px-6 md:px-12 bg-[#121212] flex flex-col items-center">
      <div className="max-w-4xl w-full border-2 border-outline bg-surface p-8 md:p-16 relative">
        <div className="absolute -top-4 -left-4 w-20 h-20 border-t-4 border-l-4 border-primary z-10"></div>

        <div className="inline-block bg-primary text-[#121212] px-3 py-1 font-mono font-bold text-xs mb-8 tracking-widest uppercase">
          PROTOCOLO_LEGAL: {protocol}
        </div>

        <h1 className="font-headline text-5xl md:text-7xl font-black uppercase mb-12 text-on-surface leading-none border-b-2 border-outline pb-8">
          {title}
        </h1>

        <div className="space-y-12 font-mono text-on-surface/80 text-sm md:text-base leading-relaxed text-wrap wrap-break-word">
          {children}
        </div>
      </div>
    </main>
  );
}
