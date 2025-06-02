"use client";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { CiMenuFries } from 'react-icons/ci';
import { useState, useEffect } from "react";
import Nav from "./Nav";
import { Button } from "./ui/button";
import Link from "next/link";

const MobileNav = () => {
  const [open, setOpen] = useState(false);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [open]);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger className="flex justify-center items-center">
        <CiMenuFries className="text-[32px] text-accent" />
      </SheetTrigger>
      <SheetContent className="flex flex-col overflow-y-auto">
        <div className="mt-32 mb-40 text-center text-2xl">
          <button 
            onClick={() => {
              setOpen(false);
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

        {/* Use the same Nav component as desktop */}
        <div className="flex flex-col items-center gap-8">
          <Nav />
          <Link href="#contact" onClick={() => setOpen(false)}>
            <Button>Hire me</Button>
          </Link>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
