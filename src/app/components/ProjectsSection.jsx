"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Joinery Website",
    description: "Lohan Joinery Company in Carnmore",
    image: "/images/projects/1.webp",
    tag: ["All", "Wordpress"],
    gitUrl: "/",
    previewUrl: "https://www.lohanjoinery.ie/",
  },
  {
    id: 2,
    title: "E-commerce Website",
    description: "Wedding and Events Shop",
    image: "/images/projects/2.webp",
    tag: ["All", "Wordpress"],
    gitUrl: "/",
    previewUrl: "https://4allyouroccasions.ie/",
  },
  {
    id: 3,
    title: "Cancer Care Website",
    description: "NECRET Cancer Care Website",
    image: "/images/projects/3.webp",
    tag: ["All", "HTML / CSS"],
    gitUrl: "https://github.com/athanri/NECRET",
    previewUrl: "https://www.necret.ie/",
  },
  {
    id: 4,
    title: "Carpentry Services",
    description: "Stephen Kelly Carpentry Services",
    image: "/images/projects/4.webp",
    tag: ["All", "HTML / CSS"],
    gitUrl: "/",
    previewUrl: "https://galwaycarpenters.ie/",
  },
  {
    id: 5,
    title: "Forum on Cancer",
    description: "Joint Euro American Forum on Cancer",
    image: "/images/projects/5.webp",
    tag: ["All", "HTML / CSS"],
    gitUrl: "https://github.com/athanri/JEAFOC",
    previewUrl: "https://euroamericanforumoncancer.org/",
  },
  {
    id: 6,
    title: "Basketball Website",
    description: "Tribes Basketball Club",
    image: "/images/projects/6.webp",
    tag: ["All", "HTML / CSS"],
    gitUrl: "https://github.com/athanri/TribesBasketballClub",
    previewUrl: "https://athanri.github.io/TribesBasketballClub/",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="HTML / CSS"
          isSelected={tag === "HTML / CSS"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Wordpress"
          isSelected={tag === "Wordpress"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
