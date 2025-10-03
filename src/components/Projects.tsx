import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import { Button } from '../components/ui/button';

const Projects = () => {
  const projects = [
    {
      title: 'Light Financial Education',
      description: 'Comprehensive financial literacy platform with interactive courses and resources',
      url: 'https://www.lightfinancialeducation.com/',
      tags: ['React', 'Node.js', 'MongoDB'],
    },
    {
      title: 'SARS Digital',
      description: 'Corporate website showcasing digital marketing and development services',
      url: 'https://www.sarsdigital.com/',
      tags: ['React', 'Tailwind CSS', 'SEO'],
    },
    {
      title: 'SARS Tech Solutions',
      description: 'Technology solutions platform for business automation and consulting',
      url: 'https://www.sarstechsolutions.com/',
      tags: ['React', 'Express', 'API'],
    },
    {
      title: 'LearnPedia',
      description: 'Educational platform for interactive learning and course management',
      url: 'https://learn-pedia.vercel.app/',
      tags: ['React', 'Vercel', 'MongoDB'],
    },
    {
      title: 'EmployWise',
      description: 'Employee management system with analytics and reporting features',
      url: 'https://employwise-project.netlify.app/',
      tags: ['React', 'TypeScript', 'Charts'],
    },
    {
      title: 'Learnify Pro',
      description: 'Professional learning management system with progress tracking',
      url: 'https://learnify-pro.netlify.app/',
      tags: ['React', 'Bootstrap', 'API'],
    },
  ];

  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-muted-foreground text-lg">Building solutions that make a difference</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="glass-card rounded-xl overflow-hidden group cursor-pointer relative"
            >
              {/* Glare effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10" />

              <div className="p-6 relative z-10">
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <ExternalLink className="text-primary" size={20} />
                  </div>
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    <ExternalLink size={20} />
                  </a>
                </div>

                <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-foreground/70 mb-4 line-clamp-2">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-xs font-medium bg-muted rounded-full text-primary"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <Button
                  variant="outline"
                  size="sm"
                  className="w-full border-primary/50 hover:bg-primary/10"
                  onClick={() => window.open(project.url, '_blank')}
                >
                  View Project
                  <ExternalLink className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Button
            variant="outline"
            size="lg"
            className="border-primary hover:bg-primary/10"
            onClick={() => window.open('https://github.com/Chetannadig', '_blank')}
          >
            <Github className="mr-2 h-5 w-5" />
            View More on GitHub
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
