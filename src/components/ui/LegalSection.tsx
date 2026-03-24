import React from "react";

interface LegalSectionProps {
  number?: string;
  title: string;
  children: React.ReactNode;
  highlighted?: boolean;
  titleColor?: 'primary' | 'white';
}

export default function LegalSection({
  number,
  title,
  children,
  highlighted = false,
  titleColor = 'primary',
}: LegalSectionProps) {
  const sectionClasses = highlighted
    ? "border-l-4 border-primary pl-6 py-2 bg-[#121212]/50"
    : "";

  const colorClass = titleColor === 'primary' ? 'text-primary' : 'text-white';

  return (
    <section className={sectionClasses}>
      <h2 className={`font-headline text-3xl font-bold uppercase mb-4 ${colorClass}`}>
        {number && <span className="mr-2">{number}.</span>}
        {title}
      </h2>
      <div className="uppercase">
        {children}
      </div>
    </section>
  );
}
