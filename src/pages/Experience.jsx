import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tooltip } from "@material-tailwind/react";
import Degreecat from "../assets/degreecat_logo.jpeg";
import DMA from "../assets/dma_image.jpeg";
import Proofpoint from "../assets/proofpoint_logo.webp";
import Apple from "../assets/apple_logo.jpeg";
import {
  FaDocker,
  FaBitbucket,
  FaReact,
  FaNodeJs,
  FaPython,
  FaAws,
  FaHtml5,
  FaApple,
} from "react-icons/fa";
import { IoLogoJavascript, IoHardwareChip } from "react-icons/io5";
import {
  SiJira,
  SiRedux,
  SiMongodb,
  SiSwagger,
  SiTailwindcss,
} from "react-icons/si";
import { RiCustomerService2Fill, RiPhoneLockLine } from "react-icons/ri";
import { LuHelpingHand } from "react-icons/lu";
import { BiMath } from "react-icons/bi";
import { FaChildReaching } from "react-icons/fa6";
import { GiAtom } from "react-icons/gi";

function ExperienceCard({
  tags = [],
  jobSummary,
  orgIcon,
  jobTitle,
  organization,
  dates,
}) {
  return (
    <Card className="bg-white dark:bg-secondary flex flex-col justify-between rounded-2xl p-1.5 md:p-4 lg:p-4 ease-in-out shadow-lg hover:shadow-2xl transition-shadow duration-300">
      <CardHeader>
        <div className="flex w-full justify-between items-start gap-4">
          <div>
            <div>
              <CardTitle>{jobTitle}</CardTitle>
              <h5 className="text-sm md:text-base lg:text-base">
                @ {organization}
              </h5>
            </div>
          </div>
          <div>
            <Avatar>
              <AvatarImage src={orgIcon} alt={`${organization} logo`} />
              <AvatarFallback>Loading</AvatarFallback>
            </Avatar>
          </div>
        </div>
        <CardDescription>
          <div className="text-xs md:text-sm lg:text-sm font-light">
            {dates}
          </div>
        </CardDescription>
      </CardHeader>
      <CardContent className="flex justify-center h-full text-sm md:text-base lg:text-base">
        {jobSummary}
      </CardContent>
      <CardFooter className="flex items-center justify-center w-full h-full">
        {tags.length >= 1 && (
          <div className="flex flex-col gap-2 w-full">
            <div className="w-full grid grid-cols-[repeat(auto-fit,_minmax(50px,_1fr))] gap-4 text-2xl">
              {tags.map((tag) => (
                <div className="flex-shrink-0">{tag}</div>
              ))}
            </div>
          </div>
        )}
      </CardFooter>
    </Card>
  );
}

function TechnologiesComponent({ icon, name }) {
  return (
    <Tooltip
      content={name}
      className="rounded-xl bg-black dark:bg-white text-white dark:text-black"
    >
      <div className="flex border border-secondary-foreground p-2 justify-center rounded-xl shadow-lg cursor-pointer">
        {icon}
      </div>
    </Tooltip>
  );
}

function Experience() {
  const tagsMap = {
    React: <TechnologiesComponent icon={<FaReact />} name="React" />,
    "Node.js": <TechnologiesComponent icon={<FaNodeJs />} name="Node.js" />,
    Bitbucket: (
      <TechnologiesComponent icon={<FaBitbucket />} name="Bitbucket/Git" />
    ),
    Docker: <TechnologiesComponent icon={<FaDocker />} name="Docker" />,
    Python: <TechnologiesComponent icon={<FaPython />} name="Python" />,
    HTML: <TechnologiesComponent icon={<FaHtml5 />} name="HTML" />,
    AWS: (
      <TechnologiesComponent icon={<FaAws />} name="AWS (Amazon Web Service)" />
    ),
    Javascript: (
      <TechnologiesComponent icon={<IoLogoJavascript />} name="Javascript" />
    ),
    Jira: <TechnologiesComponent icon={<SiJira />} name="Jira" />,
    Redux: <TechnologiesComponent icon={<SiRedux />} name="Redux" />,
    MongoDB: <TechnologiesComponent icon={<SiMongodb />} name="MongoDB" />,
    Swagger: <TechnologiesComponent icon={<SiSwagger />} name="Swagger" />,
    Tailwind: (
      <TechnologiesComponent icon={<SiTailwindcss />} name="TailwindCSS" />
    ),
    Apple: <TechnologiesComponent icon={<FaApple />} name="Apple" />,
    "Customer Service": (
      <TechnologiesComponent
        icon={<RiCustomerService2Fill />}
        name="Customer Service"
      />
    ),
    "Hardware Troubleshooting": (
      <TechnologiesComponent
        icon={<IoHardwareChip />}
        name="Hardware Troubleshooting"
      />
    ),
    "Software Troubleshooting": (
      <TechnologiesComponent
        icon={<RiPhoneLockLine />}
        name="Software Troubleshooting"
      />
    ),
    "Genius Bar": <TechnologiesComponent icon={<GiAtom />} name="Genius Bar" />,
    Tutoring: (
      <TechnologiesComponent icon={<LuHelpingHand />} name="Tutoring" />
    ),
    "Introductory STEM": (
      <TechnologiesComponent icon={<BiMath />} name="Introductory Stem" />
    ),
    "Child Development": (
      <TechnologiesComponent
        icon={<FaChildReaching />}
        name="Child Development"
      />
    ),
  };

  document.title = "Kelby A. | Experience";

  return (
    <>
      <Navbar />
      <section className="flex items-center py-10 md:py-12 lg:py-14 px-4 md:px-6 lg:px-8 mt-14 fade-in pb-24 md:pb-32 lg:pb-32">
        <div className="flex flex-col w-full py-4 px-4 max-w-[1200px] mx-auto gap-6 md:gap-1 lg:gap-1">
          <div className="w-full flex flex-col gap-2">
            <h1 className="font-extrabold tracking-tight text-4xl lg:text-5xl">
              Experience
            </h1>
            <p className="font-light text-sm">
              (software and non-software related jobs)
            </p>
          </div>
          <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-8 gap-x-4 ease-in-out duration-200 md:mt-6 lg:mt-6">
            <ExperienceCard
              jobSummary="Currently working on the Email Fraud Defense Team (EFD). Doing frontend work in React/Redux and backend REST API work in Javascript/Docker/Swagger. Helping build internal tooling and plugins for admins. Involved in Agile process with Jira (Scrums/Standups/Retros)."
              tags={[
                tagsMap["React"],
                tagsMap["Redux"],
                tagsMap["Javascript"],
                tagsMap["AWS"],
                tagsMap["Docker"],
                tagsMap["Python"],
                tagsMap["Swagger"],
                tagsMap["Bitbucket"],
                tagsMap["Jira"],
              ]}
              index={1}
              orgIcon={Proofpoint}
              jobTitle="Software Engineer Intern"
              organization="Proofpoint"
              dates="Dec 2023 - Present"
            />
            <ExperienceCard
              jobSummary="Worked in a startup environment to help build a college planning SaaS. Helped mentor some junior developers and worked in a full-stack environment. Doing backend work in MongoDB, Express.js, Node.js, and AWS. Frontend work primarily in React/Redux."
              tags={[
                tagsMap["React"],
                tagsMap["Redux"],
                tagsMap["Javascript"],
                tagsMap["AWS"],
                tagsMap["HTML"],
                tagsMap["Tailwind"],
                tagsMap["Node.js"],
                tagsMap["MongoDB"],
              ]}
              index={2}
              orgIcon={Degreecat}
              jobTitle="Software Engineer Intern"
              organization="DegreeCat"
              dates="Aug 2023 - Nov 2023"
            />
            <ExperienceCard
              tags={[
                tagsMap["Apple"],
                tagsMap["Hardware Troubleshooting"],
                tagsMap["Software Troubleshooting"],
                tagsMap["Genius Bar"],
                tagsMap["Customer Service"],
              ]}
              jobSummary="Worked in the Genius Bar to diagnose various Apple devices with Apple's internal cloud toolkit. Engaged with APPLE steps of service to help diagnose and troubleshoot Software & Hardware issues on Apple products. Proficient in data recovery, system restoration, hardware replacements, and OS-level troubleshooting."
              index={3}
              orgIcon={Apple}
              jobTitle="Technical Specialist"
              organization="Apple"
              dates="May 2023 - Nov 2023"
            />
            <ExperienceCard
              tags={[
                tagsMap["Tutoring"],
                tagsMap["Introductory STEM"],
                tagsMap["Child Development"],
              ]}
              jobSummary="Helped teach students ranging from 4th grade to 8th grade in various STEM-related courses, including introductory algebra, geometry, health science, and computer science. Collaborated with lead teachers to develop lesson plans that catered to various learning styles and skill levels. Conducted one-on-one and small group tutoring sessions to reinforce concepts and support students who needed additional assistance."
              index={4}
              orgIcon={DMA}
              jobTitle="STEM Tutor Intern"
              organization="De Marillac Academy"
              dates="Jan 2023 - Feb 2023"
            />
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Experience;
