"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "./ui/button";
import Nav from "./Nav";
import MobileNav from "./MobileNav";

const Header = () => {
   return (
      <header className="py-8 xl:py-12 text-white">
         <div className="container mx-auto flex justify-between items-center">
            {/* Logo */}
            <Link href="/">
               <h1 className="text-4xl font-semibold">
                  Rohan<span className="text-accent">.</span>  
               </h1>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden xl:flex items-center gap-8">
               <Nav />
               <Link href="#contact">
               <Button>Hire me</Button>
               </Link>
            </div>
            
            {/*Mobile Nav*/}
            <div className="xl:hidden">
               <MobileNav />
            </div>
         </div>
      </header>
   );
}

export default Header;