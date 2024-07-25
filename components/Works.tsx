"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import ProjectCard from "./ProjectCard";
import { Pagination } from "swiper/modules";
import Link from "next/link";
import { Button } from "./ui/button";

import "swiper/css";
import "swiper/css/pagination";

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

const Works = () => {
  return (
    <section className="relative mb-12 xl:mb-48">
      <div className="container mx-auto">
        <div className="max-w-[400px] mx-auto xl:mx-0 text-center xl:text-left mb-12 xl:h-[400px] flex flex-col justify-center items-center xl:items-start">
          <h2 className="section-title mb-4">Latest Project</h2>
          <p className="subtitle mb-8">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
          <Link href="/projects">
            <Button>All Projects</Button>
          </Link>
        </div>
        <div className="xl:max-w-[1000px] xl:absolute right-0 top-0">
          <Swiper
            className="h-[480px]"
            slidesPerView={1}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
            }}
            spaceBetween={30}
            modules={[Pagination]}
            pagination={{ clickable: true }}
          >
            {ProjectsData.slice(0, 4).map((item, index) => (
              <SwiperSlide key={index}>
                <ProjectCard project={item} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Works;
