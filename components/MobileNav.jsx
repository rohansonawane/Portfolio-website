"use client";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { CiMenuFries } from 'react-icons/ci';
import { useState, useEffect, useRef } from "react";

const MobileNav = () => {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const scrollPositionRef = useRef(0);

  // Save scroll position when menu opens
  const handleOpenChange = (newOpen) => {
    if (newOpen) {
      scrollPositionRef.current = window.scrollY;
    } else {
      // Use setTimeout to ensure the scroll position is restored after the menu animation
      setTimeout(() => {
        window.scrollTo({
          top: scrollPositionRef.current,
          behavior: 'instant'
        });
      }, 300); // Match this with the Sheet animation duration
    }
    setOpen(newOpen);
  };

  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#experience", label: "Work" },
    { href: "#skills", label: "Skills" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" },
  ];

  const handleLinkClick = (href) => {
    const targetId = href.substring(1);
    const targetElement = document.getElementById(targetId);
    
    if (targetElement) {
      document.documentElement.style.scrollBehavior = 'smooth';
      targetElement.scrollIntoView();
      setTimeout(() => {
        document.documentElement.style.scrollBehavior = '';
      }, 1000);
    }
  };

  return (
    <Sheet open={open} onOpenChange={handleOpenChange}>
      <SheetTrigger className="flex justify-center items-center">
        <CiMenuFries className="text-[32px] text-accent" />
      </SheetTrigger>
      <SheetContent className="flex flex-col">
        <div className="mt-32 mb-40 text-center text-2xl">
          <button 
            onClick={() => {
              window.scrollTo({
                top: 0,
                behavior: 'smooth'
              });
            }} 
            className="text-4xl font-semibold"
          >
            Rohan<span className="text-accent">.</span>
          </button>
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
