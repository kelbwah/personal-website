import React from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "./Sidebar";
import { ModeToggle } from "./ModeToggle";
import devIcon from "../../public/dev-icon.png";
import { Separator } from "@/components/ui/separator";
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { FaCode } from "react-icons/fa6";

const ListItem = React.forwardRef(
  ({ className, title, children, ...props }, ref) => {
    return (
      <li className="h-full">
        <NavigationMenuLink asChild>
          <p
            ref={ref}
            className={cn(
              "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground cursor-pointer",
              className
            )}
            {...props}
          >
            <div className="text-sm font-medium leading-none">{title}</div>
            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
              {children}
            </p>
          </p>
        </NavigationMenuLink>
      </li>
    )
  }
);

ListItem.displayName = 'ListItem';

export function NavMenu({ navigate }) {
    return (
        <NavigationMenu className="bg-transparent">
            <NavigationMenuList>
                <NavigationMenuItem>
                    <NavigationMenuTrigger>About Me</NavigationMenuTrigger>
                    <NavigationMenuContent>
                        <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                            <li className="row-span-2">
                                <NavigationMenuLink asChild>
                                    <p
                                        className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                                    >
                                        <FaCode className="h-6 w-6" />
                                        <div className="mb-2 mt-4 text-lg font-medium">
                                            About Me 
                                        </div>
                                        <p className="text-sm leading-tight text-muted-foreground">
                                            There's a lot to say about me, but I've split it up in easy to digest pages! Press on any link to the right to learn more about me!
                                        </p>
                                    </p>
                                </NavigationMenuLink>
                            </li>
                            <ListItem className="h-full flex flex-col justify-center" title="Introduction" onClick={ () => navigate("/about/intro") }>
                                Quick little intro about myself and what I do.
                            </ListItem>
                            <ListItem className="h-full flex flex-col justify-center" title="Education" onClick={ () => navigate("/about/education") }>
                                Where do I go to school and where I went. 
                            </ListItem>
                        </ul>
                    </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <NavigationMenuLink onClick={() => navigate("/experience")} className={`${navigationMenuTriggerStyle()} cursor-pointer`}>
                       Experience 
                    </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <NavigationMenuLink onClick={() => navigate("/projects")} className={`${navigationMenuTriggerStyle()} cursor-pointer`}>
                       Projects 
                    </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <NavigationMenuLink onClick={() => navigate("/contact")} className={`${navigationMenuTriggerStyle()} cursor-pointer`}>
                       Contact 
                    </NavigationMenuLink>
                </NavigationMenuItem>
            </NavigationMenuList>
        </NavigationMenu>
    )
}


function Navbar() {
    const navigate = useNavigate();
    return (
        <header className="fixed top-0 left-0 right-0 flex flex-col items-center backdrop-filter backdrop-blur-lg bg-opacity-30 px-4 md:px-6 lg:px-8 z-20">
            <nav className="flex justify-between gap-14 w-full max-w-[1200px] py-4 px-4 items-center">
                <div onClick={() => navigate('/')} className="flex gap-2 cursor-pointer items-center z-30">
                    <img src={devIcon} className="w-8 h-8 rounded-sm" />
                    <h3 className="text-lg hidden lg:flex font-semibold tracking-tight">
                        Kelby Amandy 
                    </h3>
                    <h3 className="lg:hidden text-lg font-semibold tracking-tight">
                        Kelby A. 
                    </h3>
                </div>
                <div className="absolute left-0 right-0 mx-auto hidden md:flex lg:flex justify-center items-center gap-8 w-1/3">
                    <NavMenu navigate={navigate} />
                </div>
                <div className="flex gap-4">
                    <ModeToggle />
                    <Sidebar />
                </div>
            </nav>
            <Separator className="w-screen"/>
        </header>
    );
};

export default Navbar;
