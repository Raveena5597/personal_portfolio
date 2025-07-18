import { useTrail, animated } from "react-spring";
import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaNodeJs,
  FaNpm,
  FaBootstrap,
} from "react-icons/fa";
import {
  SiVisualstudiocode,
  SiMongodb,
  SiTailwindcss,
  SiMui,
  SiTypescript,
  SiJavascript,
  SiYarn,
  SiVite,
  SiMysql,
} from "react-icons/si";
import { DiGithubBadge } from "react-icons/di";

const skills = [
  { id: "html", Component: FaHtml5, color: "text-orange-500" },
  { id: "css", Component: FaCss3Alt, color: "text-blue-500" },
  { id: "javascript", Component: SiJavascript, color: "text-yellow-400" },
  { id: "bootstrap", Component: FaBootstrap, color: "text-purple-600" },
  { id: "typescript", Component: SiTypescript, color: "text-blue-700" },
  { id: "react", Component: FaReact, color: "text-cyan-400" },
  { id: "mui", Component: SiMui, color: "text-blue-600" },
  { id: "tailwind", Component: SiTailwindcss, color: "text-sky-400" },
  { id: "node", Component: FaNodeJs, color: "text-green-600" },
  { id: "sql", Component: SiMysql, color: "text-blue-500" },
  { id: "npm", Component: FaNpm, color: "text-red-500" },
  { id: "yarn", Component: SiYarn, color: "text-blue-400" },
  { id: "mongodb", Component: SiMongodb, color: "text-green-500" },
  { id: "vite", Component: SiVite, color: "text-violet-400" },
  { id: "vscode", Component: SiVisualstudiocode, color: "text-indigo-500" },
  { id: "github", Component: DiGithubBadge, color: "text-black" },
];

export default function Skills() {
  const trail = useTrail(skills.length, {
    from: { transform: "translate3d(0,-40px,0)", opacity: 0 },
    to: { transform: "translate3d(0,0px,0)", opacity: 1 },
    config: { mass: 1, tension: 500, friction: 30 },
  });

  return (
    <div
      id="skills"
      className="bg-lightDesert rounded-lg shadow-md flex items-center justify-center min-h-screen py-10"
    >
      <div className="text-center max-w-2xl w-full mx-auto">
        <h2 className="text-4xl font-bold text-darkDesert mb-8">Skills</h2>
        <div className="grid grid-cols-4 gap-6 my-4 justify-items-center">
          {trail.map((props, index) => {
            const { Component, color } = skills[index];
            return (
              <animated.div
                key={skills[index].id}
                style={props}
                className={`text-5xl ${color} transition-all duration-300 transform hover:scale-110`}
              >
                <Component />
              </animated.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
