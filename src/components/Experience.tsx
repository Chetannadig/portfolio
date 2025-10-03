import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: 'Software Developer',
      company: 'SARS Digital',
      location: 'Bengaluru, Karnataka',
      period: 'Present',
      achievements: [
        'Developed and maintained web applications using React.js, Node.js, and MongoDB',
        'Improved application performance by 40% through code optimization and best practices',
        'Implemented SEO strategies that increased organic traffic by 60%',
        'Collaborated with cross-functional teams to deliver client-focused solutions',
        'Led the development of responsive and accessible user interfaces',
      ],
    },
    {
      title: 'Frontend Developer Intern',
      company: 'Bluestock',
      location: 'Remote',
      period: '2022',
      achievements: [
        'Built responsive web components using React and modern CSS frameworks',
        'Integrated RESTful APIs to fetch and display dynamic content',
        'Worked closely with designers to implement pixel-perfect UI designs',
        'Participated in code reviews and followed agile development practices',
        'Contributed to improving application accessibility and user experience',
      ],
    },
  ];

  return (
    <section id="experience" className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Professional <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-muted-foreground text-lg">Building impactful solutions</p>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="glass-card p-6 md:p-8 rounded-xl hover:shadow-xl transition-all duration-300 group"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Briefcase className="text-primary" size={24} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-foreground mb-1">{exp.title}</h3>
                    <p className="text-lg text-primary font-medium">{exp.company}</p>
                  </div>
                </div>
                <div className="flex flex-col gap-2 text-sm text-muted-foreground md:text-right">
                  <div className="flex items-center gap-2 md:justify-end">
                    <Calendar size={16} />
                    <span>{exp.period}</span>
                  </div>
                  <div className="flex items-center gap-2 md:justify-end">
                    <MapPin size={16} />
                    <span>{exp.location}</span>
                  </div>
                </div>
              </div>

              <ul className="space-y-3">
                {exp.achievements.map((achievement, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2 + i * 0.1 }}
                    className="flex gap-3 text-foreground/80"
                  >
                    <span className="text-primary mt-1">▸</span>
                    <span>{achievement}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
