import { RiMenuLine } from "react-icons/ri";
import { Button } from "@/components/ui/button";

function SidebarMenuButton() {
  return (
    <Button variant="outline" size="icon">
      <RiMenuLine className="w-[1.2rem] h-[1.2rem]" />
    </Button>
  );
}

export default SidebarMenuButton;
