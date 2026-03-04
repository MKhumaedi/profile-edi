import { projectsData } from '@/utils/data/projects-data';
import ProjectCard from './project-card';

const Projects = () => {
  const headerHeight = 64; // tinggi header dalam px, sesuai ukuran teks + padding
  const gapBetweenCards = 48; // sesuai gap-12 (12*4px=48px)

  return (
    <div id='projects' className="relative z-50 my-12 lg:my-24">
      {/* Header */}
      <div className="sticky top-10">
        <div className="w-[80px] h-[80px] bg-violet-100 rounded-full absolute -top-3 left-0 translate-x-1/2 filter blur-3xl opacity-30"></div>
        <div className="flex items-center justify-start relative">
          <span className="bg-[#1a1443] absolute left-0 w-fit text-white px-5 py-3 text-xl rounded-md">
            PROJECTS
          </span>
          <span className="w-full h-[2px] bg-[#1a1443]"></span>
        </div>
      </div>

      {/* Content */}
      <div className="pt-24 pb-24">
        <div className="flex flex-col gap-12">
          {projectsData.slice(0, 8).map((project, index) => (
            <div
              id={`sticky-card-${index + 1}`}
              key={index}
              className="sticky-card w-full mx-auto max-w-2xl sticky"
              style={{
                // Offset top: header + gap antar card
                top: `${headerHeight + index * gapBetweenCards}px`,
              }}
            >
              <div className="box-border flex items-center justify-center rounded shadow-[0_0_30px_0_rgba(0,0,0,0.3)] transition-all duration-[0.5s]">
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