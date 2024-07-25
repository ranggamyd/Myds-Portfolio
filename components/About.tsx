import {
  Briefcase,
  Calendar,
  GraduationCap,
  HomeIcon,
  MailIcon,
  PhoneCall,
  User2,
} from "lucide-react";
import DevImg from "./DevImg";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import Image from "next/image";

const infoData = [
  {
    icon: <User2 size={20} />,
    text: "Rangga Manggala Yudha",
  },
  {
    icon: <PhoneCall size={20} />,
    text: "+62 821 1821 4793",
  },
  {
    icon: <MailIcon size={20} />,
    text: "ranggaamyd@gmail.com",
  },
  {
    icon: <Calendar size={20} />,
    text: "Born on 24 May, 2000",
  },
  {
    icon: <GraduationCap size={20} />,
    text: "Bachelor of Informatics Engineering",
  },
  {
    icon: <HomeIcon size={20} />,
    text: "Cirebon, Jawa Barat, 45611",
  },
];

const qualificationsData = [
  {
    title: "Educations",
    data: [
      {
        university: "University of Muhammadiyah Cirebon",
        qualification: "Bachelor of Informatics Engineering",
        years: "2020 - 2018",
      },
      {
        university: "LP3I Business College Cirebon",
        qualification: "Associate Degree, Informatics Computer",
        years: "2018 - 2020",
      },
    ],
  },
  {
    title: "Experiences",
    data: [
      {
        company: "CV. BDS Solution",
        role: "Fullstack Developer",
        years: "2020 - 2021",
      },
      {
        company: "Tasahil Tour and Travel",
        role: "Graphic Design Intern",
        years: "2019 - 2020",
      },
    ],
  },
];

const skillsData = [
  {
    title: "Skills",
    data: [
      {
        name: "HTML, CSS",
      },
      {
        name: "Front-end Development",
      },
      {
        name: "Javascript, PHP",
      },
      {
        name: "Back-end Development",
      },
    ],
  },
  {
    title: "Tools",
    data: [
      {
        imgPath: "/about/vscode.svg",
      },
      {
        imgPath: "/about/figma.svg",
      },
      {
        imgPath: "/about/notion.svg",
      },
      {
        imgPath: "/about/wordpress.svg",
      },
    ],
  },
];

const About = () => {
  const getData = (arr: any, title: string) => {
    return arr.find((item: any) => item.title === title);
  };

  return (
    <section className="xl:h-[860px] pb-12 xl:py-24">
      <div className="container mx-auto">
        <h2 className="section-title mb-8 xl:mb-16 text-center mx-auto">
          About Me
        </h2>
        <div className="flex flex-col xl:flex-row">
          <div className="hidden xl:flex flex-1 relative">
            <DevImg
              containerStyles="bg-about_shape_light dark:bg-about_shape_dark w-[505px] h-[505px] bg-no-repeat relative"
              imgSrc="/about/developer.png"
            />
          </div>
          <div className="flex-1">
            <Tabs defaultValue="personal">
              <TabsList className="w-full grid xl:grid-cols-3 xl:max-w-[520px] xl:border dark:border-none">
                <TabsTrigger className="w-[162px] xl:w-auto" value="personal">
                  Personal Info
                </TabsTrigger>
                <TabsTrigger
                  className="w-[162px] xl:w-auto"
                  value="qualifications"
                >
                  Qualifications
                </TabsTrigger>
                <TabsTrigger className="w-[162px] xl:w-auto" value="skills">
                  Skills
                </TabsTrigger>
              </TabsList>
              <div className="text-lg mt-12 xl:mt-8">
                <TabsContent value="personal">
                  <div className="text-center xl:text-left">
                    <h3 className="h3 mb-4">
                      Unmatched Service Quality for Over 10 Years
                    </h3>
                    <p className="subtitle max-w-xl mx-auto xl:mx-0">
                      I specialize in crafting intuitive websites with
                      cutting-edge technology, delivering dynamic and engaging
                      user experiences.
                    </p>
                    <div className="grid xl:grid-cols-2 gap-4 mb-12">
                      {infoData.map((item, index) => (
                        <div
                          key={index}
                          className="flex items-center gap-x-4 mx-auto xl:mx-0"
                        >
                          <div className="text-primary">{item.icon}</div>
                          <div>{item.text}</div>
                        </div>
                      ))}
                    </div>
                    <div className="flex flex-col gap-y-2">
                      <div className="text-primary">Language Skills</div>
                      <div className="border-b border-border"></div>
                      <div>English, Indonesian</div>
                    </div>
                  </div>
                </TabsContent>
                <TabsContent value="qualifications">
                  <div>
                    <h3 className="h3 mb-8 text-center xl:text-left">
                      My Awesome Journey
                    </h3>
                    <div className="grid md:grid-cols-2 gap-y-8">
                      <div className="flex flex-col gap-y-6">
                        <div className="flex gap-x-4 items-center text-[22px] text-primary">
                          <Briefcase />
                          <h4 className="capitalize font-medium">
                            {getData(qualificationsData, "Experiences").title}
                          </h4>
                        </div>
                        <div className="flex flex-col gap-y-8">
                          {getData(qualificationsData, "Experiences").data.map(
                            (item: any, index: number) => (
                              <div key={index} className="flex gap-x-8 group">
                                <div className="h-[84px] w-[1px] bg-border relative ml-2">
                                  <div className="w-[11px] h-[11px] rounded-full bg-primary absolute -left-[5px] group-hover:translate-y-[84px] transition-all duration-500"></div>
                                </div>
                                <div>
                                  <div className="font-semibold text-xl leading-none mb-2">
                                    {item.company}
                                  </div>
                                  <div className="text-lg leading-none text-muted-foreground mb-4">
                                    {item.role}
                                  </div>
                                  <div className="text-base font-medium">
                                    {item.years}
                                  </div>
                                </div>
                              </div>
                            )
                          )}
                        </div>
                      </div>
                      <div className="flex flex-col gap-y-6">
                        <div className="flex gap-x-4 items-center text-[22px] text-primary">
                          <GraduationCap />
                          <h4 className="capitalize font-medium">
                            {getData(qualificationsData, "Educations").title}
                          </h4>
                        </div>
                        <div className="flex flex-col gap-y-8">
                          {getData(qualificationsData, "Educations").data.map(
                            (item: any, index: number) => (
                              <div key={index} className="flex gap-x-8 group">
                                <div className="h-[84px] w-[1px] bg-border relative ml-2">
                                  <div className="w-[11px] h-[11px] rounded-full bg-primary absolute -left-[5px] group-hover:translate-y-[84px] transition-all duration-500"></div>
                                </div>
                                <div>
                                  <div className="font-semibold text-xl leading-none mb-2">
                                    {item.university}
                                  </div>
                                  <div className="text-lg leading-none text-muted-foreground mb-4">
                                    {item.qualification}
                                  </div>
                                  <div className="text-base font-medium">
                                    {item.years}
                                  </div>
                                </div>
                              </div>
                            )
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </TabsContent>
                <TabsContent value="skills">
                  <div className="text-center xl:text-left">
                    <h3 className="h3 mb-8">Tools I Use Everyday</h3>
                    <div className="mb-16">
                      <h4 className="text-xl font-semibold mb-2">Skills</h4>
                      <div className="border-b border-border mb-4"></div>
                      <div>
                        {getData(skillsData, "Skills").data.map(
                          (item: any, index: number) => (
                            <div
                              key={index}
                              className="w-2/4 text-center xl:text-left mx-auto xl:mx-0"
                            >
                              <div className="font-medium">{item.name}</div>
                            </div>
                          )
                        )}
                      </div>
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold mb-2">Tools</h4>
                      <div className="border-b border-border mb-4"></div>
                      <div className="flex gap-x-8 justify-center xl:justify-start">
                        {getData(skillsData, "Tools").data.map(
                          (item: any, index: number) => (
                            <div
                              key={index}
                              //   className="w-2/4 text-center xl:text-left mx-auto xl:mx-0"
                            >
                              <Image
                                src={item.imgPath}
                                width={48}
                                height={48}
                                alt={item.name}
                                priority
                              />
                            </div>
                          )
                        )}
                      </div>
                    </div>
                  </div>
                </TabsContent>
              </div>
            </Tabs>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
