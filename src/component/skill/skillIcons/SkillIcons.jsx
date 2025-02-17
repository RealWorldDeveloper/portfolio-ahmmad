import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaHtml5, FaCss3Alt, FaJs, FaBootstrap, FaReact, FaNodeJs, FaGit, FaGithub } from "react-icons/fa";
import { SiExpress, SiJson, SiMongodb, SiPostgresql, SiAxios, SiJest, SiNextdotjs, SiExpo, SiSupabase, SiRender, SiDotenv} from "react-icons/si";
import './skill_icons.css'
const skills = [
  { icon: <FaHtml5 className="text-danger display-4" />, delay: 0 },
  { icon: <FaCss3Alt className="text-primary display-4" />, delay: 0.2 },
  { icon: <FaJs className="text-warning display-4" />, delay: 0.4 },
  { icon: <FaBootstrap className="text-purple display-4" />, delay: 0.6 },
  { icon: <FaReact className="text-info display-4" />, delay: 0.8 },
  { icon: <FaNodeJs className="text-success display-4" />, delay: 1 },
  { icon: <SiExpress className="text-dark display-4" />, delay: 1.2 },
  { icon: <FaGit className="text-danger display-4" />, delay: 1.6 },
  { icon: <FaGithub className="text-dark display-4" />, delay: 1.8 },
  { icon: <SiAxios className="text-primary display-4" />, delay: 2 },
  { icon: <SiJest className="text-danger display-4" />, delay: 2.2 },
  { icon: <SiNextdotjs className="text-dark display-4" />, delay: 2.4 },
  { icon: <SiExpo className="text-info display-4" />, delay: 2.6 },
  { icon: <SiMongodb className="text-success display-4" />, delay: 2.8 },
  { icon: <SiPostgresql className="text-primary display-4" />, delay: 3 },
  { icon: <SiJson className="text-warning display-4" />, delay: 3.4 },
  { icon: <SiSupabase className="text-success display-4" />, delay: 3.6 },
  { icon: <SiRender className="text-info display-4" />, delay: 3.8 },
  { icon: <SiDotenv className="text-dark display-4" />, delay: 4 },
];

export default function Skills() {
  const { ref, inView } = useInView({
    triggerOnce: false, // Set to false to animate every time it comes into view
    threshold: 0.1, // Adjust the threshold as needed
  });

  return (
    <>
    <div ref={ref} className="container skill-icons d-flex flex-wrap justify-content-center gap-4 mt-4 p-3">
      {skills.map((skill, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: skill.delay }}
          className="icons border rounded-circle p-3 shadow-lg"
        >
          {skill.icon}
        </motion.div>
      ))}
     </div>
    </>
  );
}

