"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const Photo = () => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="relative w-[300px] h-[300px] sm:w-[350px] sm:h-[350px]"
    >
      <Image
        src="/assets/profile.png"
        alt="Rohan Sonawane"
        fill
        priority
        sizes="(max-width: 640px) 300px, 350px"
        className="object-contain rounded-full transition-opacity duration-300"
        quality={90}
        loading="eager"
        onLoad={() => setIsLoading(false)}
      />
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-accent"></div>
        </div>
      )}
    </motion.div>
  );
};

export default Photo;