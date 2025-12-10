import { TbDeviceDesktopAnalytics, TbCloudExclamation, TbDatabase } from "react-icons/tb";
import { FaServer, FaCode } from "react-icons/fa";

const services = [
  {
    icon: <TbDeviceDesktopAnalytics size={80} className="text-purple-300" />,
    title: "Frontend Development",
    description: "Membangun tampilan website yang rapih, modern, responsif dan interaktif menggunakan HTML, CSS, JavaScript, React atau NextJS.",
  },
  { icon: <FaServer size={80} className="text-purple-300" />, title: "Backend Development", description: "Mengembangkan Logika server, API dan sistem belakang layar menggunakan NodeJS, Express atau Laravel." },
  { icon: <FaCode size={80} className="text-purple-300" />, title: "Fullstack Web Application", description: "Membuat aplikasi web lengkap dari Frondend hingga Backend, termasuk Database." },
  { icon: <TbCloudExclamation size={80} className="text-purple-300" />, title: "API Development & Integration", description: "Membuat API (Application Programming Interface) untuk aplikasi atau mengintegrasikan API pihak ketiga." },
  { icon: <TbDatabase size={80} className="text-purple-300" />, title: "Database Design & Management", description: "Merancang dan mengelola database menggunakan PostgreSQL atau MySQL" },
];

export { services };
