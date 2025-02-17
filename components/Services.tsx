import { Blocks, GanttChartSquare, Gem } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";

const servicesData = [
  {
    icon: <GanttChartSquare size={27} strokeWidth={0.8} />,
    title: "Web Design",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque voluptate ut tempore distinctio corrupti aspernatur.",
  },
  {
    icon: <Blocks size={27} strokeWidth={0.8} />,
    title: "Web Development",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque voluptate ut tempore distinctio corrupti aspernatur.",
  },
  {
    icon: <Gem size={27} strokeWidth={0.8} />,
    title: "Mobile Development",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque voluptate ut tempore distinctio corrupti aspernatur.",
  },
];

const Services = () => {
  return (
    <section className="mb-12 xl:mb-36">
      <div className="container mx-auto">
        <h2 className="section-title mb-12 xl:mb-24 text-center mx-auto">
          My Services
        </h2>
        <div className="grid xl:grid-cols-3 justify-center gap-y-12 xl:gap-y-24 xl:gap-x-8">
          {servicesData.map((item, index) => (
            <Card
              key={index}
              className="w-full max-w-[424px] h-[300px] flex flex-col pt-16 pb-10 justify-center items-center relative"
            >
              <CardHeader className="text-primary absolute -top-[60px]">
                <div className="w-[140px] h-[80px] bg-white dark:bg-background flex justify-center items-center">
                  {item.icon}
                </div>
              </CardHeader>
              <CardContent className="text-center">
                <CardTitle className="mb-4">{item.title}</CardTitle>
                <CardDescription className="text-lg">
                  {item.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
