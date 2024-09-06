import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { MdOutlineEmail } from "react-icons/md";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function Contact() {
  const navigate = useNavigate();

  const openMailClient = () => {
    window.open("mailto:kelbyhailesamandy@gmail.com");
  };

  document.title = "Kelby A. | Contact";

  return (
    <>
      <Navbar />
      <section className="w-full flex items-center fade-in">
        <div className="flex flex-col w-full px-8 max-w-[1200px] mx-auto gap-6 md:gap-1 lg:gap-1 short:mt-16 tall:mt-0 pb-24">
          <main className="flex flex-col items-center justify-center h-screen">
            <div className="max-w-lg px-4 md:px-6 lg:px-8 text-center">
              <div className="mb-8">
                <h1 className="mb-1.5 tracking-tight text-4xl lg:text-5xl font-bold">
                  Contact Me
                </h1>
                <p className="text-gray-500 dark:text-gray-400">
                  Ways to get in touch with me or send me feedback.
                </p>
              </div>
              <div className="flex flex-col justify-center items-center gap-4">
                <Button className="w-full p-4" onClick={() => openMailClient()}>
                  <MdOutlineEmail className="mr-2" />
                  Email
                </Button>
                <a
                  className="w-full"
                  href="https://www.linkedin.com/in/kelby-amandy-ba818a214/"
                  target="_blank"
                >
                  <Button className="w-full p-4" onClick={() => navigate("")}>
                    <FaLinkedin className="mr-2" />
                    LinkedIn
                  </Button>
                </a>
                <a
                  className="w-full"
                  href="https://github.com/kelbwah"
                  target="_blank"
                >
                  <Button className="w-full p-4">
                    <FaGithub className="mr-2" />
                    Github
                  </Button>
                </a>
              </div>
            </div>
          </main>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Contact;
