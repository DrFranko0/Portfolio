import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faPython, 
  faJs, 
  faReact, 
  faDocker, 
  faGithub 
} from '@fortawesome/free-brands-svg-icons'; // Brand icons
import { faDatabase } from '@fortawesome/free-solid-svg-icons'; // Solid icons

const skills = [
  { name: 'Python', description: 'Programming Language', icon: faPython },
  { name: 'JavaScript', description: 'Programming Language', icon: faJs },
  { name: 'React', description: 'JavaScript Library', icon: faReact },
  { name: 'Pytorch', description: 'Python Framework', icon: faPython },
  { name: 'Flask', description: 'Python WebFramework', icon: faPython },
  { name: 'MongoDB', description: 'Database', icon: faDatabase },
  { name: 'Docker', description: 'Containerization', icon: faDocker },
  { name: 'GitHub Actions', description: 'Version Control', icon: faGithub },
];

const SkillCard = ({ name, description, icon }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    className="bg-gray-900 rounded-lg p-6 shadow-md flex items-center space-x-4"
  >
    <FontAwesomeIcon icon={icon} className="text-6xl text-orange-500" />
    <div>
      <h3 className="text-lg font-bold">{name}</h3>
      <p className="text-gray-400">{description}</p>
    </div>
  </motion.div>
);

export default function About() {
  return (
    <section id="about" className="py-20 text-white">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl font-bold mb-8 text-center"
        >
          My Skills
        </motion.h2>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {skills.map((skill) => (
            <SkillCard
              key={skill.name}
              name={skill.name}
              description={skill.description}
              icon={skill.icon}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
