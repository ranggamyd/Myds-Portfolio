"use client";

import ProjectCard from "@/components/ProjectCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState } from "react";

const ProjectsData = [
  {
    image: "/work/3.png",
    category: "React JS",
    name: "Nexa Website",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, asperiores.",
    link: "/",
    github: "/",
  },
  {
    image: "/work/4.png",
    category: "React JS",
    name: "Solstice Website",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, asperiores.",
    link: "/",
    github: "/",
  },
  {
    image: "/work/2.png",
    category: "Next JS",
    name: "Lumina Website",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, asperiores.",
    link: "/",
    github: "/",
  },
  {
    image: "/work/1.png",
    category: "Next JS",
    name: "Evolve Website",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, asperiores.",
    link: "/",
    github: "/",
  },
  {
    image: "/work/3.png",
    category: "Next JS",
    name: "Ignite Website",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, asperiores.",
    link: "/",
    github: "/",
  },
  {
    image: "/work/4.png",
    category: "Next JS",
    name: "Envision Website",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, asperiores.",
    link: "/",
    github: "/",
  },
  {
    image: "/work/1.png",
    category: "Fullstack",
    name: "Serenity Website",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, asperiores.",
    link: "/",
    github: "/",
  },
  {
    image: "/work/3.png",
    category: "Fullstack",
    name: "Nova Website",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, asperiores.",
    link: "/",
    github: "/",
  },
  {
    image: "/work/2.png",
    category: "Fullstack",
    name: "Zenith Website",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, asperiores.",
    link: "/",
    github: "/",
  },
];

const uniqueCategories = [
  "All Projects",
  ...new Set(ProjectsData.map((item) => item.category)),
].sort();

const Projects = () => {
  const [categories, setCategories] = useState(uniqueCategories);
  const [category, setCategory] = useState("All Projects");

  const filteredProjects = ProjectsData.filter((item) =>
    category === "All Projects" ? item : item.category === category
  );

  return (
    <section className="min-h-screen pt-12">
      <div className="container mx-auto">
        <h2 className="section-title mb-8 xl:mb-16 text-center mx-auto">
          My Projects
        </h2>
        <Tabs defaultValue={category} className="mb-24 xl:mb-48">
          <TabsList className="w-full grid h-full md:grid-cols-4 lg:max-w-[640px] mb-12 mx-auto md:border dark:border-none">
            {categories.map((item, index) => (
              <TabsTrigger
                onClick={() => setCategory(item)}
                key={index}
                value={item}
                className="capitalize w-[162px] md:w-auto"
              >
                {item}
              </TabsTrigger>
            ))}
          </TabsList>
          <div className="text-lg xl:mt-8 grid grid-cols-1 lg:grid-cols-3 gap-4">
            {filteredProjects.map((item, index) => (
              <TabsContent key={index} value={category}>
                <ProjectCard project={item} />
              </TabsContent>
            ))}
          </div>
        </Tabs>
      </div>
    </section>
  );
};

export default Projects;
