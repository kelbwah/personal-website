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
import { Button } from "@/components/ui/button";
import Airbnb from "../assets/airbnb_logo.jpeg";
import Github from "../assets/github.png";
import DevIcon from "../../public/dev-icon.png";
function ProjectCard({
  summary,
  projectTitle,
  projectLogo,
  dates,
  websiteLink,
  isDeployed,
}) {
  return (
    <Card className="bg-white dark:bg-secondary flex flex-col justify-between rounded-2xl p-1.5 md:p-4 lg:p-4 ease-in-out shadow-lg hover:shadow-2xl transition-shadow duration-300">
      <CardHeader>
        <div className="flex w-full justify-between items-start gap-4">
          <CardTitle>{projectTitle}</CardTitle>
          <div>
            <Avatar>
              <AvatarImage src={projectLogo} alt={`${projectTitle} logo`} />
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
      <CardContent className="flex justify-start h-full text-sm md:text-base lg:text-base">
        {summary}
      </CardContent>
      <CardFooter>
        {isDeployed ? (
          <a target="_blank" href={websiteLink}>
            <Button>Visit Project</Button>
          </a>
        ) : (
          <Button>In Progress</Button>
        )}
      </CardFooter>
    </Card>
  );
}

function Projects() {
  document.title = "Kelby A. | Projects";

  const KuizzicalLogoUrl =
    "https://github.com/kelbwah/Kuizzical/assets/124933520/d35f61a8-59a4-488c-a0d6-eadb7d6589e1";

  return (
    <>
      <Navbar />
      <section className="flex items-center py-10 md:py-12 lg:py-14 px-4 md:px-6 lg:px-8 mt-14 fade-in pb-24 md:pb-32 lg:pb-32">
        <div className="flex flex-col w-full py-4 px-4 max-w-[1200px] mx-auto gap-6 md:gap-1 lg:gap-1">
          <h1 className="font-extrabold tracking-tight text-4xl lg:text-5xl">
            Projects
          </h1>
          <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-y-8 gap-x-4 ease-in-out duration-200 md:mt-6 lg:mt-6">
            <ProjectCard
              projectTitle="Swiftlio"
              projectLogo={Github}
              summary={`An agile/jira-like homework tracking application written strictly in Go + HTMX + Templ. Leverages Canvas API and is intended for students of my university (St. Mary's College of CA)`}
              dates="Aug 2024 - Present"
              websiteLink="https://github.com/kelbwah/swiftlio"
              isDeployed={false}
            />
            <ProjectCard
              projectTitle="Kuizzical"
              projectLogo={KuizzicalLogoUrl}
              summary={`A Quizlet-like website that has the hopes of letting user's use "premium" features without having to have monthly subscriptions.
                            Currently, only one premium feature has been added, but more will be coming soon. Written with the MERN stack and deployed on Vercel.`}
              dates="Feb 2024 - Present"
              websiteLink="https://kuizzical.vercel.app"
              isDeployed={true}
            />
            <ProjectCard
              projectTitle="Full-Stack Airbnb Clone"
              projectLogo={Airbnb}
              summary="A Full-Stack Airbnb Clone that uses the MERN stack and AWS for file upload storage. It mimics the functionality and UI
                            of the Airbnb website at the time of development. It has been deployed on Vercel and it's code is pretty ugly but it works."
              dates="Sep 2023 - Oct 2023"
              websiteLink="https://airbnb-clone-kelbwah.vercel.app"
              isDeployed={true}
            />
            <ProjectCard
              projectTitle="Personal Website (this one!)"
              projectLogo={DevIcon}
              summary="A personal website made with React, TailwindCSS, and shadcn/ui components. The aim was to go for a minimalistic feel like most modern websites."
              dates="Apr 2024 - Apr 2024"
              websiteLink="https://kelbya.dev"
              isDeployed={true}
            />
            <ProjectCard
              projectTitle="While Language Parser"
              projectLogo={Github}
              summary={`A parser for a programming language called "While" as seen in my Theory of Computation class.
                            The goal is to write a parser and then translate the language to Go.`}
              dates="Apr 2024 - Present"
              websiteLink="https://github.com/kelbwah/while-language.git"
              isDeployed={true}
            />
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Projects;
