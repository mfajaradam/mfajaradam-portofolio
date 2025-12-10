import { navigation } from "@/constants/navigation";
import { Cnavigations } from "@/components/Headers";
import { CiMail, CiInstagram } from "react-icons/ci";
import { FaGithub } from "react-icons/fa6";

export type FooterProps = {
  footer: {
    title: string | React.ReactNode;
    list: React.ReactNode | { icon?: string | React.ReactNode; title: string }[];
  }[];
};

export const footer: FooterProps["footer"] = [
  { title: <img src="https://skillicons.dev/icons?i=htmx" className="w-32 md:w-20" />, list: <Cnavigations addStyle="flex justify-center flex-wrap gap-6 sm:gap-10" /> },
  {
    title: "© Created by Adam",
    list: [
      { icon: <CiInstagram size={20} />, title: "https://www.instagram.com/mfajaradamm/" },
      { icon: <FaGithub size={20} />, title: "#" },
      // { icon: <CiMail size={20} />, title: "#" },
    ],
  },
];
