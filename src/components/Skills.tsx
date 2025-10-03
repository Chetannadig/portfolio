import { motion } from 'framer-motion';
import { Code2, Database, Wrench, Layout } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Programming',
      icon: Code2,
      skills: ['C++', 'JavaScript (ES6)', 'TypeScript'],
    },
    {
      title: 'Web Development',
      icon: Layout,
      skills: ['HTML5', 'CSS3', 'React', 'Node.js', 'Express.js', 'Bootstrap 5', 'Tailwind CSS', 'Material-UI'],
    },
    {
      title: 'Tools & IDEs',
      icon: Wrench,
      skills: ['Git', 'GitHub', 'Visual Studio Code'],
    },
    {
      title: 'Database',
      icon: Database,
      skills: ['MongoDB'],
    },
  ];

  return (
    <section id="skills" className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-muted-foreground text-lg">Technologies I work with</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-card p-6 rounded-xl hover:shadow-xl transition-all duration-300 group"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <category.icon className="text-primary" size={24} />
                </div>
                <h3 className="text-2xl font-bold text-foreground">{category.title}</h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, i) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 + i * 0.05 }}
                    whileHover={{ scale: 1.05 }}
                    className="px-4 py-2 bg-muted rounded-lg text-sm font-medium text-foreground hover:bg-primary/20 hover:text-primary transition-all cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tech Stack Marquee */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-16 overflow-hidden"
        >
          <div className="flex gap-8 animate-[scroll_20s_linear_infinite]">
            {['React', 'Node.js', 'TypeScript', 'MongoDB', 'Tailwind', 'Git', 'Express', 'JavaScript'].map((tech, i) => (
              <div key={i} className="flex-shrink-0 px-6 py-3 glass-card rounded-lg">
                <span className="text-lg font-semibold text-primary">{tech}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
};

export default Skills;
