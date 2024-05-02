import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetFooter,
    SheetHeader,
    SheetTrigger,
} from "@/components/ui/sheet";
import SidebarMenuButton from "./SidebarMenuButton";
import devIcon from "../../public/dev-icon.png";
import { FaRegUser } from "react-icons/fa";
import { MdOutlineEmail, MdOutlineWorkOutline } from "react-icons/md";
import { GrProjects } from "react-icons/gr";
import { IoSchoolOutline } from "react-icons/io5";

function Sidebar() {
    const navigate = useNavigate();

    return (
        <Sheet className="block md:hidden lg:hidden">
            <SheetTrigger>
                <SidebarMenuButton />
            </SheetTrigger>
            <SheetContent className="flex flex-col gap-4">
                <SheetHeader>
                    <div onClick={() => navigate('/')} className="flex gap-2 cursor-pointer items-center z-30">
                        <img src={devIcon} className="w-8 h-8 rounded-sm" />
                        <h3 className="text-lg hidden lg:flex font-semibold tracking-tight">
                            Kelby Amandy 
                        </h3>
                        <h3 className="lg:hidden text-lg font-semibold tracking-tight">
                            Kelby A. 
                        </h3>
                    </div>
                </SheetHeader>
                <Separator className="w-full" />
                <section className="flex flex-col items-start w-full">
                    <Button onClick={() => navigate("/about/intro")} className="w-full py-8 flex items-center justify-start border-none font-semibold tracking-tight" variant="outline"><FaRegUser className="h-6 scale-90 text-2xl mr-4"/>Introduction</Button>                    
                    <Button onClick={() => navigate("/about/education")} className="w-full py-8 flex items-center justify-start border-none font-semibold tracking-tight" variant="outline"><IoSchoolOutline className="h-10 scale-110 text-2xl mr-4"/>Education</Button>                    
                    <Button onClick={() => navigate("/experience")} className="w-full py-8 flex items-center justify-start border-none font-semibold tracking-tight" variant="outline"><MdOutlineWorkOutline className="w-6 h-8 scale-105 mr-4"/>Experience</Button>                    
                    <Button onClick={() => navigate("/projects")} className="w-full py-8 flex items-center justify-start border-none font-semibold tracking-tight" variant="outline"><GrProjects className="w-6 h-6 mr-4"/>Projects</Button>                    
                    <Button onClick={() => navigate("/contact")} className="w-full py-8 flex items-center justify-start border-none font-semibold tracking-tight" variant="outline"><MdOutlineEmail className="w-6 h-6 scale-110 mr-4"/>Contact</Button>                    
                </section>
                <SheetFooter className="mt-8">
                    <SheetClose asChild>
                        <Button>Close Sidebar</Button>
                    </SheetClose>
                </SheetFooter>
            </SheetContent>
        </Sheet>
    )
};

export default Sidebar;
