"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Card, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Pagination } from "swiper/modules";
import Image from "next/image";

import "swiper/css";
import "swiper/css/pagination";

const reviewsData = [
  {
    avatar: "/reviews/avatar-1.png",
    name: "Richard Thompson",
    job: "Chef",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias officiis a aut ea nulla natus?",
  },
  {
    avatar: "/reviews/avatar-2.png",
    name: "Richard Thompson",
    job: "Chef",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias officiis a aut ea nulla natus?",
  },
  {
    avatar: "/reviews/avatar-3.png",
    name: "Richard Thompson",
    job: "Chef",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias officiis a aut ea nulla natus?",
  },
  {
    avatar: "/reviews/avatar-4.png",
    name: "Richard Thompson",
    job: "Chef",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias officiis a aut ea nulla natus?",
  },
  {
    avatar: "/reviews/avatar-5.png",
    name: "Richard Thompson",
    job: "Chef",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias officiis a aut ea nulla natus?",
  },
  {
    avatar: "/reviews/avatar-6.png",
    name: "Richard Thompson",
    job: "Chef",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias officiis a aut ea nulla natus?",
  },
];

const Reviews = () => {
  return (
    <section className="mb-12 xl:mb-36">
      <div className="container mx-auto">
        <h2 className="section-title mb-12 text-center mx-auto">Reviews</h2>
        <Swiper
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 2 },
            1400: { slidesPerView: 3 },
          }}
          spaceBetween={30}
          modules={[Pagination]}
          pagination={{ clickable: true }}
          className="h-[350px]"
        >
          {reviewsData.map((item, index) => (
            <SwiperSlide key={index}>
              <Card className="bg-tertiary dark:bg-secondary/40 p-8 min-h-[300px]">
                <CardHeader className="p-0 mb-10">
                  <div className="flex items-center gap-x-4">
                    <Image
                      src={item.avatar}
                      alt="Avatar"
                      width={70}
                      height={70}
                      priority
                    />
                    <div className="flex flex-col">
                      <CardTitle>{item.name}</CardTitle>
                      <p>{item.job}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardDescription className="text-lg text-muted-foreground">
                  {item.review}
                </CardDescription>
              </Card>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Reviews;
