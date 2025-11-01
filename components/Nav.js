"use client";
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/courses', label: 'Courses' },
  { href: '/articles', label: 'Articles' },
  { href: '/calculators', label: 'Calculators' },
  { href: '/glossary', label: 'Glossary' },
  { href: '/about', label: 'About' },
];

export default function Nav(){
  const pathname = usePathname();
  return (
    <nav className="nav">
      <div className="nav-inner container">
        <Link className="brand" href="/"><span>Money</span>Wise</Link>
        <div className="links">
          {navLinks.map((l) => (
            <Link key={l.href} href={l.href} className={`link ${pathname === l.href ? 'active' : ''}`}>{l.label}</Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
