// import { motion } from 'framer-motion';
// import { Home } from 'lucide-react';
// import { Button } from '../ui/button';
// import { Link } from 'react-router-dom';

// const NotFound = () => {
//   return (
//     <div className="flex min-h-screen items-center justify-center bg-background relative overflow-hidden">
//       {/* Animated background */}
//       <div className="absolute inset-0 -z-10">
//         <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-float" />
//         <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
//       </div>

//       <div className="text-center px-4">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5 }}
//         >
//           <h1 className="text-8xl md:text-9xl font-bold gradient-text mb-4">404</h1>
//           <motion.h2
//             className="text-2xl md:text-4xl font-semibold text-foreground mb-4"
//             animate={{
//               opacity: [1, 0.5, 1],
//             }}
//             transition={{
//               duration: 2,
//               repeat: Infinity,
//               ease: 'easeInOut',
//             }}
//           >
//             Page Not Found
//           </motion.h2>
//           <p className="text-muted-foreground mb-8 max-w-md mx-auto">
//             Oops! The page you're looking for doesn't exist. It might have been moved or deleted.
//           </p>
//           <Link to="/">
//             <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground glow-cyan">
//               <Home className="mr-2 h-5 w-5" />
//               Back to Home
//             </Button>
//           </Link>
//         </motion.div>
//       </div>
//     </div>
//   );
// };

// export default NotFound;
import { motion } from 'framer-motion';
import { Home } from 'lucide-react';
import { Button } from '../components/ui/button.js';
import { Link } from 'react-router-dom';
import FuzzyText from '../components/animations/FuzzyText.jsx';
import Logo from '../lib/logo.png';

const NotFound = () => {
  return (
    <div className="relative flex min-h-screen items-center justify-center bg-background overflow-hidden px-6">
      {/* Floating background gradients */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl"
          animate={{
            y: [0, 20, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-3xl"
          animate={{
            y: [0, -20, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 8,
            delay: 1,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </div>

      {/* Main content */}
      <div className="text-center relative z-10">
        {/* Website Logo */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center mb-8"
        >
          <img
            src={Logo}
            alt="Website Logo"
            className="w-20 h-20 md:w-24 md:h-24 drop-shadow-lg"
          />
        </motion.div>

        {/* Fuzzy 404 animation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mb-6"
        >
          <FuzzyText
            fontSize="clamp(5rem, 15vw, 10rem)"
            color="white"
            baseIntensity={0.5}
            hoverIntensity={0.7}
            enableHover={true}
            fontWeight={900}
          >
            404
            Page Not Found
          </FuzzyText>
        </motion.div>

        {/* Page text with subtle motion */}
        <motion.h2
          className="text-2xl md:text-4xl font-semibold text-foreground mb-3"
          animate={{
            opacity: [1, 0.5, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          Thanks for checking whether I have handled router errors!
        </motion.h2>

        <motion.p
          className="text-muted-foreground mb-8 max-w-md mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          Oops! The page you’re looking for doesn’t exist.
        </motion.p>

        {/* Back to Home button with glow */}
        <Link to="/">
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-[0_0_15px_var(--primary)] transition-all"
            >
              <Home className="mr-2 h-5 w-5" />
              Back to Home
            </Button>
          </motion.div>
        </Link>
      </div>

      {/* Floating particles for subtle creativity */}
      <div className="absolute inset-0 -z-10">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 rounded-full bg-primary/20"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              opacity: 0,
            }}
            animate={{
              y: [Math.random() * window.innerHeight, Math.random() * window.innerHeight],
              opacity: [0.2, 1, 0.2],
            }}
            transition={{
              duration: 10 + Math.random() * 10,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default NotFound;

