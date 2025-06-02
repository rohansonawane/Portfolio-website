"use client";

import { motion } from "framer-motion";
import { 
  FaPython, FaJava, FaPhp, FaHtml5, FaCss3, FaJs, FaReact, FaNodeJs, 
  FaWordpress, FaShopify, FaDocker, FaAws, FaGoogle, FaGitAlt,
  FaDatabase, FaServer, FaCloud, FaTools, FaCode, FaBrain, FaChartLine, FaLaravel, FaVuejs, FaSass, FaLess, FaBootstrap
} from 'react-icons/fa';
import { 
  SiTypescript, SiCplusplus, SiDotnet, SiMysql, SiPostgresql, 
  SiMongodb, SiRedis, SiAmazonaws, SiGooglecloud, SiJenkins, SiVercel, 
  SiKubernetes, SiTerraform, SiApachehadoop, SiApachespark, SiTensorflow, 
  SiPytorch, SiScikitlearn, SiOpenai, SiGraphql, SiFigma, 
  SiTailwindcss, SiNextdotjs, SiAngular, SiFlask, SiDjango, SiExpress, 
  SiBootstrap as SiBootstrapIcon, SiUnity, SiBlender, SiGo 
} from 'react-icons/si';
import { useState } from "react";
import { cn } from "@/lib/utils";

const skills = [
  { 
    name: "Python", 
    icon: FaPython, 
    category: "Languages",
    description: "Advanced Python programming with focus on data science and web development",
    tags: ["Data Science", "Web Development", "Automation"]
  },
  { 
    name: "Go", 
    icon: SiGo, 
    category: "Languages",
    description: "High-performance systems programming and microservices",
    tags: ["Backend", "Microservices", "Performance"]
  },
  { 
    name: "JavaScript", 
    icon: FaJs, 
    category: "Languages",
    description: "Modern JavaScript development with ES6+ features",
    tags: ["Frontend", "Backend", "Full Stack"]
  },
  { 
    name: "TypeScript", 
    icon: SiTypescript, 
    category: "Languages",
    description: "Type-safe JavaScript development for robust applications",
    tags: ["Type Safety", "Frontend", "Backend"]
  },
  { 
    name: "PHP", 
    icon: FaPhp, 
    category: "Languages",
    description: "Server-side scripting language for web development",
    tags: ["Backend", "Web Development"]
  },
  { 
    name: "Java", 
    icon: FaJava, 
    category: "Languages",
    description: "Object-oriented programming language for robust applications",
    tags: ["Backend", "Full Stack"]
  },
  { 
    name: "C++", 
    icon: SiCplusplus, 
    category: "Languages",
    description: "General-purpose programming language with a bias towards system programming",
    tags: ["Backend", "System Programming"]
  },
  { 
    name: "C#", 
    icon: SiDotnet, 
    category: "Languages",
    description: "Object-oriented programming language for robust applications",
    tags: ["Backend", "Full Stack"]
  },
  { 
    name: "React", 
    icon: FaReact, 
    category: "Frameworks",
    description: "Building modern, responsive user interfaces",
    tags: ["Frontend", "UI/UX", "SPA"]
  },
  { 
    name: "Next.js", 
    icon: SiNextdotjs, 
    category: "Frameworks",
    description: "Full-stack React framework for production applications",
    tags: ["SSR", "SSG", "Full Stack"]
  },
  { 
    name: "Angular", 
    icon: SiAngular, 
    category: "Frameworks",
    description: "TypeScript-based web application framework",
    tags: ["Frontend", "Full Stack"]
  },
  { 
    name: "Flask", 
    icon: SiFlask, 
    category: "Frameworks",
    description: "Micro web framework for Python",
    tags: ["Backend", "Microservices"]
  },
  { 
    name: "Django", 
    icon: SiDjango, 
    category: "Frameworks",
    description: "Python-based web framework",
    tags: ["Backend", "Full Stack"]
  },
  { 
    name: "Express.js", 
    icon: SiExpress, 
    category: "Frameworks",
    description: "Fast, unopinionated, minimalist web framework for Node.js",
    tags: ["Backend", "API"]
  },
  { 
    name: "Node.js", 
    icon: FaNodeJs, 
    category: "Frameworks",
    description: "Server-side JavaScript runtime for scalable applications",
    tags: ["Backend", "API", "Microservices"]
  },
  { 
    name: "AWS", 
    icon: FaAws, 
    category: "Cloud",
    description: "Cloud infrastructure and services management",
    tags: ["DevOps", "Cloud", "Infrastructure"]
  },
  { 
    name: "Docker", 
    icon: FaDocker, 
    category: "Cloud",
    description: "Containerization and microservices deployment",
    tags: ["DevOps", "Containers", "Deployment"]
  },
  { 
    name: "Kubernetes", 
    icon: SiKubernetes, 
    category: "Cloud",
    description: "Container orchestration platform",
    tags: ["DevOps", "Cloud", "Infrastructure"]
  },
  { 
    name: "Terraform", 
    icon: SiTerraform, 
    category: "Cloud",
    description: "Infrastructure as Code tool for provisioning and managing infrastructure",
    tags: ["DevOps", "Cloud", "Infrastructure"]
  },
  { 
    name: "Jenkins", 
    icon: SiJenkins, 
    category: "Cloud",
    description: "Open-source automation server for continuous integration",
    tags: ["DevOps", "CI/CD"]
  },
  { 
    name: "TensorFlow", 
    icon: SiTensorflow, 
    category: "AI/ML",
    description: "Machine learning and deep learning applications",
    tags: ["AI", "ML", "Deep Learning"]
  },
  { 
    name: "PyTorch", 
    icon: SiPytorch, 
    category: "AI/ML",
    description: "Open source machine learning library",
    tags: ["AI", "ML"]
  },
  { 
    name: "scikit-learn", 
    icon: SiScikitlearn, 
    category: "AI/ML",
    description: "Machine learning library for Python",
    tags: ["AI", "ML"]
  },
  { 
    name: "OpenAI", 
    icon: SiOpenai, 
    category: "AI/ML",
    description: "Artificial intelligence research company",
    tags: ["AI"]
  },
  { 
    name: "GraphQL", 
    icon: SiGraphql, 
    category: "Tools",
    description: "Query language for APIs and a runtime for fulfilling those queries",
    tags: ["API", "Graph"]
  },
  { 
    name: "Figma", 
    icon: SiFigma, 
    category: "Tools",
    description: "Collaborative design tool",
    tags: ["UI/UX", "Design"]
  },
  { 
    name: "Git", 
    icon: FaGitAlt, 
    category: "Tools",
    description: "Distributed version control system",
    tags: ["Version Control", "Code Management"]
  },
  { 
    name: "Unity", 
    icon: SiUnity, 
    category: "Tools",
    description: "Game development platform",
    tags: ["Game Development", "3D"]
  },
  { 
    name: "Blender", 
    icon: SiBlender, 
    category: "Tools",
    description: "Free and open-source 3D computer graphics software",
    tags: ["3D", "Modeling"]
  },
  { 
    name: "MySQL", 
    icon: SiMysql, 
    category: "Database",
    description: "Relational database management system",
    tags: ["Database", "SQL"]
  },
  { 
    name: "PostgreSQL", 
    icon: SiPostgresql, 
    category: "Database",
    description: "Advanced relational database management system",
    tags: ["Database", "SQL"]
  },
  { 
    name: "MongoDB", 
    icon: SiMongodb, 
    category: "Database",
    description: "NoSQL database for scalable applications",
    tags: ["Database", "NoSQL", "Scalability"]
  },
  { 
    name: "Redis", 
    icon: SiRedis, 
    category: "Database",
    description: "In-memory data structure store",
    tags: ["Database", "In-memory"]
  },
  { 
    name: "Power BI", 
    icon: FaChartLine, 
    category: "Tools",
    description: "Business analytics service",
    tags: ["BI", "Data Analysis"]
  },
  { 
    name: "Laravel", 
    icon: FaLaravel, 
    category: "Backend",
    description: "PHP web framework for building robust applications",
    tags: ["Backend", "Full Stack"]
  },
  { 
    name: "Vue.js", 
    icon: FaVuejs, 
    category: "Frontend",
    description: "Progressive JavaScript framework for building user interfaces",
    tags: ["Frontend", "UI/UX"]
  },
  { 
    name: "Sass", 
    icon: FaSass, 
    category: "Frontend",
    description: "CSS preprocessor",
    tags: ["CSS", "Preprocessor"]
  },
  { 
    name: "Less", 
    icon: FaLess, 
    category: "Frontend",
    description: "CSS preprocessor",
    tags: ["CSS", "Preprocessor"]
  },
  { 
    name: "Bootstrap", 
    icon: FaBootstrap, 
    category: "Frontend",
    description: "Front-end framework for developing responsive, mobile-first projects",
    tags: ["Frontend", "Responsive"]
  },
  { 
    name: "WordPress", 
    icon: FaWordpress, 
    category: "CMS",
    description: "Content management system",
    tags: ["CMS"]
  },
  { 
    name: "Shopify", 
    icon: FaShopify, 
    category: "E-commerce",
    description: "E-commerce platform",
    tags: ["E-commerce"]
  }
];

const HoneycombSkills = () => {
  const [activeSkill, setActiveSkill] = useState(null);

  return (
    <section className="relative py-16 md:py-24 overflow-hidden">
      {/* Title Section - Always visible */}
      <div className="container mx-auto px-4 mb-12">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center mb-4"
        >
          Skills & Expertise
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-gray-600 dark:text-gray-400 text-center max-w-2xl mx-auto"
        >
          A comprehensive collection of technical skills and tools I've mastered throughout my journey
        </motion.p>
      </div>

      {/* Skills Grid - Scrollable on mobile */}
      <div className="container mx-auto px-4">
        <div className="relative">
          {/* Mobile scroll container */}
          <div className="md:hidden overflow-x-auto pb-4 -mx-4 px-4">
            <div className="flex gap-4 min-w-max">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex-shrink-0 w-[280px]"
                >
                  <div
                    className={cn(
                      "relative group cursor-pointer transition-all duration-300",
                      "bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg",
                      "hover:shadow-xl hover:-translate-y-1",
                      "border border-gray-200 dark:border-gray-700"
                    )}
                    onMouseEnter={() => setActiveSkill(skill)}
                    onMouseLeave={() => setActiveSkill(null)}
                  >
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-primary/10">
                        <skill.icon className="w-6 h-6 text-primary" />
                      </div>
                      <h3 className="text-lg font-semibold">{skill.name}</h3>
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {skill.description}
                    </p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {skill.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-1 text-xs rounded-full bg-primary/10 text-primary"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Desktop grid */}
          <div className="hidden md:grid grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div
                  className={cn(
                    "relative group cursor-pointer transition-all duration-300",
                    "bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg",
                    "hover:shadow-xl hover:-translate-y-1",
                    "border border-gray-200 dark:border-gray-700"
                  )}
                  onMouseEnter={() => setActiveSkill(skill)}
                  onMouseLeave={() => setActiveSkill(null)}
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-primary/10">
                      <skill.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold">{skill.name}</h3>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {skill.description}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {skill.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 text-xs rounded-full bg-primary/10 text-primary"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HoneycombSkills; 