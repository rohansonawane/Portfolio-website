"use client";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { CiMenuFries } from 'react-icons/ci';
import { useState } from "react";

const MobileNav = () => {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#experience", label: "Work" },
    { href: "#skills", label: "Skills" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" },
  ];

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    const element = document.getElementById(href.substring(1));
    if (element) {
      // Get the element's position relative to the viewport
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - 80; // 80px offset for header

      // Smooth scroll to the element
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
      
      setOpen(false);
    }
  };

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger className="flex justify-center items-center">
        <CiMenuFries className="text-[32px] text-accent" />
      </SheetTrigger>
      <SheetContent className="flex flex-col">
        <div className="mt-32 mb-40 text-center text-2xl">
          <Link href="/">
            <h1 className="text-4xl font-semibold">
              Rohan<span className="text-accent">.</span>
            </h1>
          </Link>
        </div>

        {/* Nav */}
        <nav className="flex flex-col items-center gap-4">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={(e) => handleLinkClick(e, link.href)}
              className={`text-sm font-medium ${
                pathname === link.href
                  ? "text-accent"
                  : "text-white hover:text-accent"
              }`}
            >
              {link.label}
            </button>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
