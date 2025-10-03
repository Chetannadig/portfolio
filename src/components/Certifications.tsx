import { motion } from 'framer-motion';
import { Award, ExternalLink } from 'lucide-react';

const Certifications = () => {
  const certifications = [
    {
      title: 'Junior Full Stack Java Developer',
      issuer: 'Generation India',
      year: '2023',
    },
    {
      title: 'Node.js Intermediate',
      issuer: 'Scaler',
      year: '2023',
    },
    {
      title: 'JavaScript Certificate',
      issuer: 'HackerRank',
      year: '2023',
    },
    {
      title: 'Git and GitHub',
      issuer: 'LinkedIn Learning',
      year: '2023',
    },
    {
      title: 'Career Essentials in Software Development',
      issuer: 'Microsoft',
      year: '2022',
    },
  ];

  return (
    <section id="certifications" className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Certifications</span> & Learning
          </h2>
          <p className="text-muted-foreground text-lg">Continuous growth and development</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-12">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="glass-card p-6 rounded-xl hover:shadow-xl transition-all duration-300 group cursor-pointer"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center group-hover:bg-secondary/20 transition-colors flex-shrink-0">
                  <Award className="text-secondary" size={24} />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {cert.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-1">{cert.issuer}</p>
                  <p className="text-xs text-primary font-medium">{cert.year}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Education Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto mt-16"
        >
          <h3 className="text-3xl font-bold mb-8 text-center">
            <span className="gradient-text">Education</span>
          </h3>
          <div className="glass-card p-8 rounded-xl">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
              <div>
                <h4 className="text-2xl font-bold text-foreground mb-2">
                  Bachelor of Computer Application
                </h4>
                <p className="text-lg text-primary mb-2">Computer Science</p>
                <p className="text-muted-foreground">
                  Sivananda Sarma Memorial RV Degree College
                </p>
                <p className="text-muted-foreground">Bengaluru, Karnataka</p>
              </div>
              <div className="text-left md:text-right">
                <p className="text-lg font-semibold text-foreground">CGPA: 8.87</p>
                <p className="text-muted-foreground">Graduated: December 2022</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Learning Note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <p className="text-muted-foreground italic">
            "Passionate about continuous learning and staying updated with the latest technologies"
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Certifications;
