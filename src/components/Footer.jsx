import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Separator } from "@/components/ui/separator";

function Footer() {
  return (
    <footer className="fixed bottom-0 left-0 right-0 px-4 md:px-6 lg:px-8 backdrop-filter backdrop-blur-lg bg-opacity-30">
      <Separator className="w-screen" />
      <div className="flex justify-between items-center gap-8 w-full max-w-[1200px] py-4 px-4 mx-auto">
        <p className="tracking-tight font-extrabold text-sm">@Kaffy</p>
        <div className="flex items-center gap-4 flex-none">
          <a href="https://github.com/kelbwah" target="_blank">
            <FaGithub className="w-6 h-6 md:w-7 md:h-7 lg:w-7 lg:h-7" />
          </a>
          <a
            href="https://www.linkedin.com/in/kelby-amandy-ba818a214/"
            target="_blank"
          >
            <FaLinkedin className="w-6 h-6 md:w-7 md:h-7 lg:w-7 lg:h-7" />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
