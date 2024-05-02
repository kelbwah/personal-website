import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { HomeIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";

function NotFound() {
    const navigate = useNavigate();

    document.title = "404 | Not Found";

    return (
        <>
            <Navbar />
            <section className="w-full flex items-center fade-in">
                <div className="flex flex-col w-full px-8 max-w-[1200px] mx-auto gap-6 md:gap-1 lg:gap-1">
                    <main className="flex flex-col items-center justify-center h-screen">
                        <div className="max-w-md px-4 md:px-6 lg:px-8 text-center">
                            <h1 className="mb-4 text-4xl font-extrabold tracking-tight md:text-5xl lg:text-5xl">
                                404 Error: Page Not Found 
                            </h1>
                            <p className="mb-8 tracking-tight">Oops, the page you're looking for doesn't exist.</p>
                            <Button onClick={ () => navigate("/") }>
                                <HomeIcon className="h-5 w-5 mr-2" />
                                Go to Home
                            </Button>
                        </div>
                    </main>
                </div>
            </section>
            <Footer />
        </>
    );
};

export default NotFound;

