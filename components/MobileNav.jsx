"use client";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { CiMenuFries } from 'react-icons/ci';
import { useState, useEffect } from "react";

const MobileNav = () => {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);

  // Save scroll position when menu opens
  useEffect(() => {
    if (open) {
      setScrollPosition(window.scrollY);
    }
  }, [open]);

  // Restore scroll position when menu closes
  useEffect(() => {
    if (!open) {
      window.scrollTo(0, scrollPosition);
    }
  }, [open, scrollPosition]);

  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#experience", label: "Work" },
    { href: "#skills", label: "Skills" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" },
  ];

  const handleLinkClick = (href) => {
    // Use a direct anchor link approach
    const targetId = href.substring(1);
    const targetElement = document.getElementById(targetId);
    
    if (targetElement) {
      // Add smooth scroll behavior to html
      document.documentElement.style.scrollBehavior = 'smooth';
      
      // Scroll to the element
      targetElement.scrollIntoView();
      
      // Remove smooth scroll behavior after scrolling
      setTimeout(() => {
        document.documentElement.style.scrollBehavior = '';
      }, 1000);
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
              onClick={() => handleLinkClick(link.href)}
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
