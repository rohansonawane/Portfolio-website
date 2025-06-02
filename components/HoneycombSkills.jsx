"use client";

import { motion } from "framer-motion";
import { 
  FaPython, FaJava, FaPhp, FaHtml5, FaCss3, FaJs, FaReact, FaNodeJs, 
  FaWordpress, FaShopify, FaDocker, FaAws, FaGoogle, FaGitAlt,
  FaDatabase, FaServer, FaCloud, FaTools, FaCode, FaBrain, FaChartLine, FaLaravel, FaVuejs, FaSass, FaLess, FaBootstrap
} from 'react-icons/fa';
import { 
  SiTypescript, SiCplusplus, SiCsharp, SiDotnet, SiMysql, SiPostgresql, 
  SiMongodb, SiRedis, SiAmazonaws, SiGooglecloud, SiJenkins, SiVercel, 
  SiKubernetes, SiTerraform, SiApachehadoop, SiApachespark, SiTensorflow, 
  SiPytorch, SiScikitlearn, SiOpenai, SiPowerbi, SiGraphql, SiFigma, 
  SiTailwindcss, SiNextdotjs, SiAngular, SiFlask, SiDjango, SiExpress, 
  SiBootstrap as SiBootstrapIcon, SiUnity, SiBlender, SiGo
} from 'react-icons/si';

const skills = [
  { name: "Python", icon: <FaPython key="python" />, category: "Languages" },
  { name: "Go", icon: <SiGo key="go" />, category: "Languages" },
  { name: "JavaScript", icon: <FaJs key="js" />, category: "Languages" },
  { name: "TypeScript", icon: <SiTypescript key="typescript" />, category: "Languages" },
  { name: "PHP", icon: <FaPhp key="php" />, category: "Languages" },
  { name: "Java", icon: <FaJava key="java" />, category: "Languages" },
  { name: "C++", icon: <SiCplusplus key="cpp" />, category: "Languages" },
  { name: "C#", icon: <SiCsharp key="csharp" />, category: "Languages" },
  { name: "React", icon: <FaReact key="react" />, category: "Frameworks" },
  { name: "Next.js", icon: <SiNextdotjs key="next" />, category: "Frameworks" },
  { name: "Angular", icon: <SiAngular key="angular" />, category: "Frameworks" },
  { name: "Flask", icon: <SiFlask key="flask" />, category: "Frameworks" },
  { name: "Django", icon: <SiDjango key="django" />, category: "Frameworks" },
  { name: "Express.js", icon: <SiExpress key="express" />, category: "Frameworks" },
  { name: "Node.js", icon: <FaNodeJs key="node" />, category: "Frameworks" },
  { name: "AWS", icon: <FaAws key="aws" />, category: "Cloud" },
  { name: "Docker", icon: <FaDocker key="docker" />, category: "Cloud" },
  { name: "Kubernetes", icon: <SiKubernetes key="kubernetes" />, category: "Cloud" },
  { name: "Terraform", icon: <SiTerraform key="terraform" />, category: "Cloud" },
  { name: "Jenkins", icon: <SiJenkins key="jenkins" />, category: "Cloud" },
  { name: "TensorFlow", icon: <SiTensorflow key="tensorflow" />, category: "AI/ML" },
  { name: "PyTorch", icon: <SiPytorch key="pytorch" />, category: "AI/ML" },
  { name: "scikit-learn", icon: <SiScikitlearn key="scikit" />, category: "AI/ML" },
  { name: "OpenAI", icon: <SiOpenai key="openai" />, category: "AI/ML" },
  { name: "GraphQL", icon: <SiGraphql key="graphql" />, category: "Tools" },
  { name: "Figma", icon: <SiFigma key="figma" />, category: "Tools" },
  { name: "Git", icon: <FaGitAlt key="git" />, category: "Tools" },
  { name: "Unity", icon: <SiUnity key="unity" />, category: "Tools" },
  { name: "Blender", icon: <SiBlender key="blender" />, category: "Tools" },
  { name: "MySQL", icon: <SiMysql key="mysql" />, category: "Database" },
  { name: "PostgreSQL", icon: <SiPostgresql key="postgres" />, category: "Database" },
  { name: "MongoDB", icon: <SiMongodb key="mongodb" />, category: "Database" },
  { name: "Redis", icon: <SiRedis key="redis" />, category: "Database" },
  { name: "Power BI", icon: <SiPowerbi key="powerbi" />, category: "Tools" },
  { name: "Laravel", icon: <FaLaravel key="laravel" />, category: "Backend" },
  { name: "Vue.js", icon: <FaVuejs key="vue" />, category: "Frontend" },
  { name: "Sass", icon: <FaSass key="sass" />, category: "Frontend" },
  { name: "Less", icon: <FaLess key="less" />, category: "Frontend" },
  { name: "Bootstrap", icon: <FaBootstrap key="bootstrap" />, category: "Frontend" },
  { name: "WordPress", icon: <FaWordpress key="wordpress" />, category: "CMS" },
  { name: "Shopify", icon: <FaShopify key="shopify" />, category: "E-commerce" }
];

const HoneycombSkills = () => {
  // Calculate rows with 9 and 8 elements alternating
  const calculateRowLayout = () => {
    const layout = [];
    let remainingSkills = [...skills];
    let isEvenRow = true;

    while (remainingSkills.length > 0) {
      const elementsInRow = isEvenRow ? 9 : 8;
      const rowSkills = remainingSkills.splice(0, elementsInRow);
      layout.push({
        skills: rowSkills,
        isEvenRow,
        isLastRow: remainingSkills.length === 0
      });
      isEvenRow = !isEvenRow;
    }

    return layout;
  };

  const rowLayout = calculateRowLayout();

  return (
    <div className="relative w-full py-8">
      {/* Heading and Description */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-4 text-white">
          Skills & Expertise
        </h2>
        <p className="text-lg text-white/60 max-w-2xl mx-auto">
          A comprehensive overview of my technical skills and areas of expertise, showcasing my ability to work across various technologies and domains.
        </p>
      </div>

      {/* Enhanced fade effect on sides */}
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background via-background/95 to-transparent z-10"></div>
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background via-background/95 to-transparent z-10"></div>

      {/* Honeycomb grid container */}
      <div className="relative w-full px-8">
        <div className="flex flex-col items-center w-full" style={{ gap: '0' }}>
          {rowLayout.map((row, rowIndex) => (
            <div 
              key={rowIndex}
              className="flex justify-center w-full"
              style={{
                marginTop: rowIndex === 0 ? '0' : '-1.5rem',
                width: '100%',
                display: 'flex',
                justifyContent: 'center'
              }}
            >
              <div 
                className="flex justify-center"
                style={{
                  marginLeft: row.isEvenRow ? '0' : '-0.25rem',
                  gap: '0',
                  width: '100%',
                  maxWidth: '100%',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center'
                }}
              >
                <div 
                  className="flex justify-center"
                  style={{
                    gap: '0',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginLeft: row.isLastRow && !row.isEvenRow ? '-0.25rem' : '0'
                  }}
                >
                  {row.skills.map((skill, index) => (
                    <motion.div
                      key={`${rowIndex}-${index}`}
                      initial={{ opacity: 0, scale: 0.8, y: 20 }}
                      whileInView={{ opacity: 1, scale: 1, y: 0 }}
                      transition={{ 
                        duration: 0.4,
                        delay: (rowIndex * row.skills.length + index) * 0.05,
                        type: "spring",
                        stiffness: 100
                      }}
                      className="group"
                      style={{
                        marginLeft: index === 0 ? '0' : '-1.5rem',
                        position: 'relative',
                        width: '160px',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center'
                      }}
                    >
                      <motion.div 
                        className="relative w-32 h-36 bg-white/5 backdrop-blur-sm transition-all duration-300 overflow-hidden"
                        style={{
                          clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)'
                        }}
                        whileHover={{
                          scale: 1.05,
                          boxShadow: '0 0 20px rgba(var(--accent-rgb), 0.3)',
                          transition: {
                            duration: 0.3,
                            type: "spring",
                            stiffness: 300
                          }
                        }}
                      >
                        {/* Pulse effect */}
                        <motion.div
                          className="absolute inset-0 bg-accent/20"
                          style={{
                            clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)'
                          }}
                          animate={{
                            scale: [1, 1.1, 1],
                            opacity: [0, 0.5, 0]
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut"
                          }}
                        />

                        {/* Gradient border effect */}
                        <div className="absolute inset-0 bg-gradient-to-br from-accent/50 via-accent/30 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"
                          style={{
                            clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)'
                          }}
                        ></div>
                        
                        {/* Background with border */}
                        <div className="absolute inset-[1px] bg-background/95 backdrop-blur-sm"
                          style={{
                            clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)'
                          }}
                        >
                          {/* Enhanced background effects */}
                          <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                          <div className="absolute inset-0 bg-gradient-to-tr from-accent/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                          
                          {/* Enhanced glow effect */}
                          <div className="absolute -inset-1 bg-accent/20 blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                          <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                          
                          {/* Content */}
                          <div className="relative h-full flex flex-col items-center justify-center p-3">
                            <motion.div 
                              className="text-2xl mb-2 text-accent"
                              whileHover={{ 
                                scale: 1.2,
                                rotate: [0, -5, 5, -5, 0],
                                transition: { 
                                  duration: 0.5,
                                  type: "spring",
                                  stiffness: 200
                                }
                              }}
                            >
                              {skill.icon}
                            </motion.div>
                            <motion.span 
                              className="text-[11px] text-white/80 text-center group-hover:text-white transition-colors duration-300"
                              whileHover={{ scale: 1.1 }}
                            >
                              {skill.name}
                            </motion.span>
                            <motion.span 
                              className="text-[9px] text-accent/60 mt-1 group-hover:text-accent transition-colors duration-300"
                              whileHover={{ scale: 1.1 }}
                            >
                              {skill.category}
                            </motion.span>
                          </div>
                        </div>
                      </motion.div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HoneycombSkills; 