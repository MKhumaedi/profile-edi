import { projectsData } from '@/utils/data/projects-data';
import ProjectCard from './project-card';

const Projects = () => {
  const stickyOffset = 120; // jarak sticky dari atas

  return (
    <div id="projects" className="relative z-50 my-12 lg:my-24">

      {/* HEADER */}
      <div className="sticky top-10 z-50">

        <div className="w-[80px] h-[80px] bg-violet-100 rounded-full absolute -top-3 left-0 translate-x-1/2 blur-3xl opacity-30"></div>

        <div className="flex items-center justify-start relative">

          <span className="bg-[#1a1443] absolute left-0 w-fit text-white px-5 py-3 text-xl rounded-md">
            PROJECTS
          </span>

          <span className="w-full h-[2px] bg-[#1a1443]"></span>

        </div>

      </div>

      {/* CONTENT */}
      <div className="pt-24 pb-24">

        {/* GRID PROJECT */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto items-start">

          {projectsData.slice(0, 8).map((project, index) => (
            <div
              key={index}
              className="sticky-card sticky"
              style={{ top: `${stickyOffset}px` }}
            >

              <div className="rounded-lg shadow-[0_0_30px_rgba(0,0,0,0.35)] transition-all duration-500">

                <ProjectCard project={project} />

              </div>

            </div>
          ))}

        </div>

      </div>

    </div>
  );
};

export default Projects;