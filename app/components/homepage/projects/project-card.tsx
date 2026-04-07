import Image from "next/image";
import Link from "next/link";

const ProjectCard = ({ project }: any) => {
  return (
    <div className="rounded-xl overflow-hidden bg-[#101123] border border-[#2a2e5a] hover:scale-[1.03] transition duration-300">

      {/* IMAGE */}
      <div className="relative w-full h-[200px]">
        <Image
          src={project.image}
          alt={project.name}
          fill
          className="object-cover rounded-lg"
        />
      </div>

      {/* CONTENT */}
      <div className="p-4">
        <h3 className="text-white text-lg font-semibold">
          {project.name}
        </h3>

        {/* <p className="text-gray-400 text-sm mt-2">
          {project.description}
        </p> */}

        {/* LINK */}
        {/* {project.link && (
          <Link
            href={project.link}
            target="_blank"
            className="inline-block mt-3 text-blue-500 text-sm hover:underline"
          >
            View Project →
          </Link>
        )} */}
      </div>

    </div>
  );
};

export default ProjectCard;