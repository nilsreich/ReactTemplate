import { Button } from "@/components/ui/button";
import { count } from "@/lib/signals";
import { HomeIcon } from "lucide-react";

export const About = () => {
  return (
    <div className="">
      <HomeIcon />
      AboutPage
      <Button variant={"outline"} onClick={() => count.value++}>
        increase
      </Button>
    </div>
  );
};
