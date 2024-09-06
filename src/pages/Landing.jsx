import { FaGithub, FaArrowRight } from "react-icons/fa";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

function Landing() {
  const navigate = useNavigate();

  document.title = "Kelby A. | Home";

  return (
    <>
      <Navbar />
      <section className="w-full flex items-center fade-in">
        <div className="flex flex-col w-full px-8 max-w-[1200px] mx-auto gap-6 md:gap-1 lg:gap-1 short:mt-16 tall:mt-0 pb-24">
          <main className="flex flex-col items-center justify-center h-screen">
            <div className="max-w-lg px-4 md:px-6 lg:px-8 text-center">
              <h1 className="mb-4 text-4xl font-extrabold tracking-tight md:text-5xl lg:text-5xl">
                Kelby Amandy
              </h1>
              <p className="tracking-tight text-sm md:text-base lg:text-base mt-2 mb-4 text-gray-600 dark:text-gray-400">
                A passionate software developer from San Francisco. Open to new
                job opportunities and project collaboration.
              </p>
              <div className="flex items-center justify-center gap-4">
                <Button onClick={() => navigate("/projects")} variant="outline">
                  View Portfolio
                  <FaArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <a
                  href="https://github.com/kelbwah/personal-website"
                  target="_blank"
                >
                  <Button variant="outline">
                    Source Code
                    <FaGithub className="ml-2 h-4 w-4" />
                  </Button>
                </a>
              </div>
              <p className="mt-7 text-xs tracking-tight text-gray-600 dark:text-gray-400">
                Written in React and TailwindCSS using shadcn/ui components.
              </p>
            </div>
          </main>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Landing;
