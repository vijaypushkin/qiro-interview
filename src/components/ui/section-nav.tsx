'use client';

import { useEffect, useState } from 'react';

import clsx from 'clsx';

const SectionNav: React.FC<{ sections: string[] }> = ({ sections }) => {
  const [activeId, setActiveId] = useState(sections[0]);

  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find((e) => e.isIntersecting);
        if (visible) setActiveId(visible.target.id);
      },
      { rootMargin: '0px 0px -64px 0px', threshold: 0.3 },
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => {
      observer.disconnect();
      document.documentElement.style.scrollBehavior = '';
    };
  }, [sections]);

  return (
    <nav className="flex gap-4 overflow-x-auto scroll-smooth">
      {sections.map((id) => (
        <a
          key={id}
          href={`#${id}`}
          className={clsx(
            'text-sm font-medium px-4 py-1.5 rounded-full transition-colors whitespace-nowrap',
            activeId === id
              ? 'bg-[#8A50F7] text-white'
              : 'text-muted-foreground',
          )}
        >
          {id.replace(/-/g, ' ').replace(/\b\w/g, (l) => l.toUpperCase())}
        </a>
      ))}
    </nav>
  );
};

export { SectionNav };
