import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { SiTailwindcss, SiNextdotjs, SiPostgresql } from "react-icons/si";
import { faHtml5, faCss, faJs, faLaravel, faNodeJs, faReact, faBootstrap } from "@fortawesome/free-brands-svg-icons";

const logos = [
  { title: "HTML", path: <FontAwesomeIcon icon={faHtml5} size="3x" className="text-red-600" />, color: "#DC2626" },
  { title: "CSS", path: <FontAwesomeIcon icon={faCss} size="3x" className="text-blue-400" />, color: "#60A5FA" },
  { title: "JavaScript", path: <FontAwesomeIcon icon={faJs} size="3x" className="text-yellow-300" />, color: "#FDE047" },
  { title: "Laravel", path: <FontAwesomeIcon icon={faLaravel} size="3x" className="text-red-600" />, color: "#DC2626" },
  { title: "NodeJS", path: <FontAwesomeIcon icon={faNodeJs} size="3x" className="text-green-600" />, color: "#16A34A" },
  { title: "ReactJS", path: <FontAwesomeIcon icon={faReact} size="3x" className="text-cyan-300" />, color: "#67E8F9" },
  { title: "NextJS", path: <SiNextdotjs size={80} color="#BDBDBD" title="Next.js" />, color: "#9CA3AF" },
  {
    title: "PostgreSQL",
    path: <SiPostgresql color="#336791" title="PostgreSQL" size={80} />,
    color: "#336791",
  },
  { title: "TailwindCSS", path: <SiTailwindcss size="3x" className="text-sky-400" />, color: "#38BDF8" },
  { title: "Bootstrap", path: <FontAwesomeIcon icon={faBootstrap} size="3x" className="text-purple-800" />, color: "#7C3AED" },
];

export { logos };
