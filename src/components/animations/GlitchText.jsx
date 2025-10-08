import styles from './GlitchText.module.css';
import { useEffect, useState } from 'react';

/**
 * Adaptive glitch text that reads CSS variables from :root
 * and picks glitch colors automatically based on theme palette.
 */
const GlitchText = ({
  children,
  speed = 0.6,
  className = '',
  enableShadows = true,
}) => {
  const [colors, setColors] = useState({
    beforeShadow: '5px 0 cyan',
    afterShadow: '-5px 0 magenta',
  });

  useEffect(() => {
    // Read global design colors from CSS variables
    const root = getComputedStyle(document.documentElement);
    const background = root.getPropertyValue('--background') || '220 40% 6%';
    const primary = root.getPropertyValue('--primary') || '193 100% 50%';
    const secondary = root.getPropertyValue('--secondary') || '320 100% 60%';

    // Convert to lightness value for brightness detection
    const lightness = parseFloat(background.split(' ')[2]);
    const isDark = lightness < 50;

    // Choose glitch shadow colors dynamically
    const beforeColor = isDark
      ? `hsl(${primary.trim()})`
      : `hsl(${secondary.trim()})`;
    const afterColor = isDark
      ? `hsl(${secondary.trim()})`
      : `hsl(${primary.trim()})`;

    setColors({
      beforeShadow: enableShadows ? `5px 0 ${beforeColor}` : 'none',
      afterShadow: enableShadows ? `-5px 0 ${afterColor}` : 'none',
    });
  }, [enableShadows]);

  const inlineStyles = {
    '--before-duration': `${speed * 2}s`,
    '--after-duration': `${speed * 3}s`,
    '--before-shadow': colors.beforeShadow,
    '--after-shadow': colors.afterShadow,
  };

  return (
    <div
      data-text={children}
      style={inlineStyles}
      className={`${styles.glitch} ${className}`}
    >
      {children}
    </div>
  );
};

export default GlitchText;
