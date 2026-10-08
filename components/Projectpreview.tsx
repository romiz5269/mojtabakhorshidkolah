"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";


interface Props {
  src: string;
  alt?: string;
}


export default function ProjectPreview({
  src,
  alt = "Project Preview",
}: Props) {


  const [hover, setHover] = useState(false);


  return (

    <div
      className="
      relative
      overflow-hidden
      rounded-2xl
      border
      border-white/10
      bg-black
      h-[300px]
      cursor-pointer
      "
      
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >


      <motion.div

        animate={{
          y: hover ? "-60%" : "0%",
        }}

        transition={{
          duration: 6,
          ease:"linear"
        }}

        className="
        absolute
        top-0
        left-0
        w-full
        "
      >

        <Image
          src={src}
          alt={alt}
          width={1200}
          height={3000}
          className="
          w-full
          h-auto
          object-cover
          "
        />

      </motion.div>



     


    </div>

  );
}