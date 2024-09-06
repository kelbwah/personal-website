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
import SMC from "../../assets/smc_logo.jpeg";
import SHC from "../../assets/shc_image.jpeg";
import DMA from "../../assets/dma_image.jpeg";
import Coursera from "../../assets/coursera_image.png";
import { Button } from "@/components/ui/button";

function EducationCard({
  summary,
  orgIcon,
  orgTitle,
  subTitle,
  dates,
  websiteLink,
  location,
}) {
  return (
    <Card className="bg-white dark:bg-secondary flex flex-col justify-between rounded-2xl p-1.5 md:p-4 lg:p-4 ease-in-out shadow-lg hover:shadow-2xl transition-shadow duration-300">
      <CardHeader>
        <div className="flex w-full justify-between items-start gap-4">
          <div>
            <div>
              <CardTitle>{orgTitle}</CardTitle>
              <h5 className="text-sm md:text-base lg:text-base">{subTitle}</h5>
            </div>
          </div>
          <div>
            <Avatar>
              <AvatarImage src={orgIcon} alt={`${orgTitle} logo`} />
              <AvatarFallback>Loading</AvatarFallback>
            </Avatar>
          </div>
        </div>
        <CardDescription>
          <div className="text-xs md:text-sm lg:text-sm font-light">
            {dates} | {location}
          </div>
        </CardDescription>
      </CardHeader>
      <CardContent className="flex justify-start h-full text-sm md:text-base lg:text-base">
        {summary}
      </CardContent>
      <CardFooter>
        <a target="_blank" href={websiteLink}>
          <Button>Visit Website</Button>
        </a>
      </CardFooter>
    </Card>
  );
}

function Education() {
  document.title = "Kelby A. | Education";

  return (
    <>
      <Navbar />
      <section className="flex items-center py-10 md:py-12 lg:py-14 px-4 md:px-6 lg:px-8 mt-14 fade-in pb-24 md:pb-32 lg:pb-32">
        <div className="flex flex-col w-full py-4 px-4 max-w-[1200px] mx-auto gap-6 md:gap-1 lg:gap-1">
          <h1 className="font-extrabold tracking-tight text-4xl lg:text-5xl">
            Education
          </h1>
          <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-y-8 gap-x-4 ease-in-out duration-200 md:mt-6 lg:mt-6">
            <EducationCard
              summary="Currently in my Junior year. Haven't taken part in a lot of clubs except for swim club and Spanish club. Some courses taken: Data Structures & Algorithms, 
                            Web Programming, Machine Learning, Theory of Computation, and so on. 
                            "
              subTitle="Undergrad - BS in Computer Science"
              orgIcon={SMC}
              orgTitle="St. Mary's College of CA"
              dates="Aug 2021 - Present"
              websiteLink="https://stmarys-ca.edu"
              location="Moraga, CA"
            />
            <EducationCard
              summary="Took 2 AP Computer Science classes and thankfully passed. Also played Football and ran Track. This is where I started to find a passion for programming. I also made some Minecraft mods during my senior year too!"
              subTitle="High School"
              orgIcon={SHC}
              orgTitle="Sacred Heart Cathedral Preparatory"
              dates="Aug 2017 - May 2021"
              websiteLink="https://shcp.edu"
              location="San Francisco, CA"
            />
            <EducationCard
              summary="Got introduced to coding for my first time here. Started with the drag and drop blocks from Scratch and then 
                            a quarter-long enrichment class with Arduino.                     
                            "
              subTitle="Middle School"
              orgIcon={DMA}
              orgTitle="De Marillac Academy"
              dates="Aug 2012 - May 2017"
              websiteLink="https://demarillac.org"
              location="San Francisco, CA"
            />
            <EducationCard
              summary="Took some certifications in Coursera regarding machine learning with Andrew Ng's courses. Went 3/5 of the 
                            courses in the Deep Learning Specialization."
              subTitle="Certifications"
              orgIcon={Coursera}
              orgTitle="Coursera"
              dates="Jan 2023 - Mar 2023"
              websiteLink="https://coursera.org"
              location="Remote"
            />
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Education;
