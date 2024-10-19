import { NavigationLinkType } from "@/types";
import { LuUser2 } from "react-icons/lu";
import { IoCodeSlash } from "react-icons/io5";
import { GrDocumentText } from "react-icons/gr";
import { IoCallOutline } from "react-icons/io5";

export const navigationLinks: NavigationLinkType[] = [
  { name: "About Me", href: "#hero", Icon: LuUser2 },
  { name: "Portfolio", href: "#portfolio", Icon: IoCodeSlash },
  { name: "Journey", href: "#journey", Icon: GrDocumentText },
  { name: "Contact", href: "#contact", Icon: IoCallOutline },
];
