"use client";

import { useEffect, useRef } from "react";
import { projectsData } from "@/utils/data/projects-data";
import ProjectCard from "./project-card";

const Projects = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  // AUTO SLIDE
  useEffect(() => {
    const container = scrollRef.current;

    const interval = setInterval(() => {
      if (!container) return;

      container.scrollBy({
        left: 350,
        behavior: "smooth",
      });

      if (
        container.scrollLeft + container.clientWidth >=
        container.scrollWidth
      ) {
        container.scrollTo({ left: 0, behavior: "smooth" });
      }
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  // DRAG FUNCTION
  useEffect(() => {
    const slider = scrollRef.current;
    if (!slider) return;

    let isDown = false;
    let startX: number;
    let scrollLeft: number;

    const handleMouseDown = (e: MouseEvent) => {
      isDown = true;
      slider.classList.add("cursor-grabbing");
      startX = e.pageX - slider.offsetLeft;
      scrollLeft = slider.scrollLeft;
    };

    const handleMouseLeave = () => {
      isDown = false;
      slider.classList.remove("cursor-grabbing");
    };

    const handleMouseUp = () => {
      isDown = false;
      slider.classList.remove("cursor-grabbing");
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - slider.offsetLeft;
      const walk = (x - startX) * 1.5; // speed drag
      slider.scrollLeft = scrollLeft - walk;
    };

    slider.addEventListener("mousedown", handleMouseDown);
    slider.addEventListener("mouseleave", handleMouseLeave);
    slider.addEventListener("mouseup", handleMouseUp);
    slider.addEventListener("mousemove", handleMouseMove);

    return () => {
      slider.removeEventListener("mousedown", handleMouseDown);
      slider.removeEventListener("mouseleave", handleMouseLeave);
      slider.removeEventListener("mouseup", handleMouseUp);
      slider.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div id="projects" className="relative z-50 my-12 lg:my-24">

      {/* HEADER */}
      <div className="sticky top-10 z-50">
        <div className="flex items-center relative">
          <span className="bg-[#1a1443] text-white px-5 py-3 text-xl rounded-md">
            PROJECTS
          </span>
          <span className="w-full h-[2px] bg-[#1a1443] ml-4"></span>
        </div>
      </div>

      {/* SLIDER */}
      <div className="pt-16">

        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto scroll-smooth scrollbar-hide px-6 cursor-grab active:cursor-grabbing"
        >
          {projectsData.map((project, index) => (
            <div
              key={index}
              className="min-w-[300px] max-w-[350px] flex-shrink-0"
            >
              <ProjectCard project={project} />
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Projects;