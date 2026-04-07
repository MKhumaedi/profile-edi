"use client";

import { useState, useRef } from "react";
import { galleryData } from "@/utils/data/gallery-data";
import Image from "next/image";

function GallerySection() {
  const [showAll, setShowAll] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  const visibleData = showAll ? galleryData : galleryData.slice(0, 4);

  return (
    <div id="gallery" className="relative z-50 my-12 lg:my-24">

      {/* HEADER */}
      <div className="flex justify-center mb-10">
        <div className="flex items-center">
          <span className="w-16 h-[2px] bg-[#1a1443]"></span>
          <span className="bg-[#1a1443] text-white px-5 py-2 text-lg rounded-md">
            Gallery
          </span>
          <span className="w-16 h-[2px] bg-[#1a1443]"></span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6">

        {/* DESKTOP GRID */}
        <div className="hidden lg:grid grid-cols-4 gap-6">

          {visibleData.map((item) => (
            <div
              key={item.id}
              className="relative rounded-xl overflow-hidden group 
              border border-[#2a2e5a] 
              transition duration-300 
              hover:scale-105 
              hover:border-[#16f2b3]
              hover:shadow-[0_0_25px_#16f2b3,0_0_50px_#16f2b3]"
            >

              <Image
                src={item.image}
                alt={item.title}
                width={400}
                height={300}
                className="w-full h-[200px] object-cover transition duration-500 group-hover:scale-110"
              />

              <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 to-transparent p-3 opacity-0 group-hover:opacity-100 transition">
                <p className="text-white text-sm font-semibold">
                  {item.title}
                </p>
              </div>

            </div>
          ))}

        </div>

        {/* MOBILE SLIDER */}
        <div
          ref={scrollRef}
          className="lg:hidden flex overflow-x-auto gap-4 scroll-smooth scrollbar-hide snap-x snap-mandatory touch-pan-x"
        >
          {galleryData.map((item) => (
            <div
              key={item.id}
              className="min-w-full flex-shrink-0 snap-center"
            >
              <div className="rounded-xl overflow-hidden border border-[#2a2e5a]">

                <Image
                  src={item.image}
                  alt={item.title}
                  width={400}
                  height={300}
                  className="w-full h-[220px] object-cover"
                />

              </div>
            </div>
          ))}
        </div>

        {/* BUTTON */}
        <div className="flex justify-center mt-10">
          {!showAll && (
            <button
              onClick={() => setShowAll(true)}
              className="px-6 py-3 rounded-full bg-gradient-to-r from-pink-500 to-violet-600 text-white text-sm hover:scale-105 transition"
            >
              Show All
            </button>
          )}
        </div>

      </div>
    </div>
  );
}

export default GallerySection;