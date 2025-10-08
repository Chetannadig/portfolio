import { useEffect, useRef, useState } from "react";
import Matter from "matter-js";
import { motion } from "framer-motion";
import {
  FaReact, FaNode, FaHtml5, FaCss3Alt, FaJs, 
  FaGitAlt, FaGithub, FaBootstrap,FaWindows 
} from "react-icons/fa";
import {
  SiTypescript, SiExpress, SiTailwindcss,
  SiMui,SiMongodb ,SiNextdotjs,SiRedux,SiPostman,SiLeetcode 
} from "react-icons/si";
import { renderToString } from "react-dom/server";
import { VscVscodeInsiders } from "react-icons/vsc";
import { LiaBrainSolid } from "react-icons/lia";
import { TbApi } from "react-icons/tb";

const Skills = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [active, setActive] = useState(false);

  // --- Skills with their icons + colors ---
  const skills = [
    { name: "HTML5", icon: <FaHtml5 />, color: "hsl(24 100% 55%)" },
    { name: "CSS3", icon: <FaCss3Alt />, color: "hsl(210 100% 65%)" },
    { name: "JavaScript", icon: <FaJs />, color: "hsl(50 100% 60%)" },
    { name: "TypeScript", icon: <SiTypescript />, color: "hsl(210 80% 65%)" },
    { name: "React", icon: <FaReact />, color: "hsl(193 100% 65%)" },
    { name: "Next.js", icon: <SiNextdotjs />, color: "hsl(193 100% 65%)" },
    { name: "Node.js", icon: <FaNode />, color: "hsl(120 60% 50%)" },
    { name: "Express.js", icon: <SiExpress />, color: "hsl(0 0% 80%)" },
    { name: "MongoDB", icon: <SiMongodb />, color: "hsl(130 60% 50%)" },
    { name: "Tailwind CSS", icon: <SiTailwindcss />, color: "hsl(190 80% 60%)" },
    { name: "Material UI", icon: <SiMui />, color: "hsl(240 80% 60%)" },
    { name: "Bootstrap 5", icon: <FaBootstrap />, color: "hsl(270 70% 65%)" },
    { name: "Git", icon: <FaGitAlt />, color: "hsl(10 90% 55%)" },
    { name: "GitHub", icon: <FaGithub />, color: "hsl(0 0% 95%)" },
    { name: "VS Code", icon: <VscVscodeInsiders />, color: "hsl(210 90% 60%)" },
    { name: "Windows OS", icon: <FaWindows />, color: "hsl(210 90% 60%)" },
    { name: "Creativity", icon: <LiaBrainSolid />, color: "hsl(210 90% 60%)" },
    { name: "Redux", icon: <SiRedux  />, color: "hsl(210 90% 60%)" },
    { name: "Postman", icon: <SiPostman  />, color: "hsl(210 90% 60%)" },
    { name: "REST API", icon: <TbApi  />, color: "hsl(210 90% 60%)" },
     { name: "DSA", icon: <SiLeetcode   />, color: "hsl(210 90% 60%)" },
  ];

  useEffect(() => {
    if (!active || !canvasRef.current) return;

    const canvas = canvasRef.current;
    const engine = Matter.Engine.create();
    const world = engine.world;
    const isMobile = window.innerWidth < 768;

    // --- Physics tuning ---
    world.gravity.y = isMobile ? 0.6 : 0.9;
    engine.timing.timeScale = isMobile ? 0.9 : 1;
    engine.positionIterations = 2;
    engine.constraintIterations = 1;

    const render = Matter.Render.create({
      canvas,
      engine,
      options: {
        width: canvas.offsetWidth,
        height: canvas.offsetHeight,
        background: "transparent",
        wireframes: false,
        pixelRatio: window.devicePixelRatio || 1,
      },
    });

    const W = canvas.offsetWidth;
    const H = canvas.offsetHeight;

    // --- Boundaries ---
    const wallOptions = { isStatic: true };
    Matter.Composite.add(world, [
      Matter.Bodies.rectangle(W / 2, H + 20, W, 40, wallOptions),
      Matter.Bodies.rectangle(W / 2, -20, W, 40, wallOptions),
      Matter.Bodies.rectangle(-20, H / 2, 40, H, wallOptions),
      Matter.Bodies.rectangle(W + 20, H / 2, 40, H, wallOptions),
    ]);

    // --- Pre-render icons to images ---
    const iconImages = skills.map((s) => {
      const svgString = renderToString(s.icon);
      const blob = new Blob([svgString], { type: "image/svg+xml;charset=utf-8" });
      const url = URL.createObjectURL(blob);
      const img = new Image();
      img.src = url;
      return img;
    });

    // --- Font scaling ---
    const fontSize = isMobile ? 16 : 20;

    // --- Bodies for each skill (size based on text width) ---
    const ctxMeasure = document.createElement("canvas").getContext("2d")!;
    ctxMeasure.font = `${fontSize}px Inter, sans-serif`;

    const bodies = skills.map((s, i) => {
      const textWidth = ctxMeasure.measureText(s.name).width + 35; // 35px for icon
      const textHeight = fontSize + 10;
      const x = 80 + (i % 4) * (textWidth + 10);
      const y = 50 + Math.floor(i / 4) * 70;
      return Matter.Bodies.rectangle(x, y, textWidth, textHeight, {
        restitution: 0.85,
        frictionAir: 0.03,
        render: { fillStyle: "transparent" },
      });
    });
    Matter.Composite.add(world, bodies);

    // --- Drag control ---
    const mouse = Matter.Mouse.create(render.canvas);
    const mouseConstraint = Matter.MouseConstraint.create(engine, {
      mouse,
      constraint: { stiffness: isMobile ? 0.04 : 0.1 },
    });
    Matter.Composite.add(world, mouseConstraint);

    // --- Draw loop ---
    const ctx = render.context;
    Matter.Events.on(render, "afterRender", () => {
      ctx.clearRect(0, 0, W, H);
      ctx.font = `500 ${fontSize}px 'Inter', sans-serif`;
      ctx.textAlign = "left";
      ctx.textBaseline = "middle";
      bodies.forEach((body, i) => {
        const { x, y } = body.position;
        const { angle } = body;
        const skill = skills[i];
        const img = iconImages[i];
        const textWidth = ctxMeasure.measureText(skill.name).width;
        const totalWidth = textWidth + (isMobile ? 22 : 28);

        ctx.save();
        ctx.translate(x, y);
        ctx.rotate(angle);

        // Text glow background
        const grad = ctx.createLinearGradient(-totalWidth / 2, 0, totalWidth / 2, 0);
        grad.addColorStop(0, "hsla(193,100%,50%,0.15)");
        grad.addColorStop(1, "hsla(320,100%,60%,0.15)");
        ctx.fillStyle = grad;
        ctx.shadowColor = "hsla(193,100%,50%,0.3)";
        ctx.shadowBlur = 8;
        ctx.fillRect(-totalWidth / 2 - 6, -fontSize / 1.5, totalWidth + 12, fontSize + 10);

        // Icon
        const iconSize = isMobile ? 20 : 26;
        if (img.complete) ctx.drawImage(img, -totalWidth / 2, -iconSize / 2, iconSize, iconSize);

        // Text
        ctx.fillStyle = "hsl(210, 100%, 98%)";
        ctx.shadowColor = "transparent";
        ctx.fillText(skill.name, -totalWidth / 2 + iconSize + 6, 2);

        ctx.restore();
      });
    });

    Matter.Render.run(render);
    const runner = Matter.Runner.create();
    Matter.Runner.run(runner, engine);

    const handleResize = () => window.location.reload();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
      Matter.Render.stop(render);
      Matter.Runner.stop(runner);
      Matter.World.clear(world, false);
      Matter.Engine.clear(engine);
    };
  }, [active]);

  return (
    <section id="skills" className="py-20 relative">
      <div className="container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Interactive <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Tap or drag the names — experience real-world physics ✨
          </p>
        </motion.div>

        <div
          className="relative w-full max-w-4xl mx-auto h-[420px] md:h-[460px] glass-card border border-border/50 overflow-hidden rounded-xl"
          onMouseEnter={() => setActive(true)}
          onTouchStart={() => setActive(true)}
        >
          {!active && (
            <div className="absolute inset-0 flex items-center justify-center text-muted-foreground text-sm">
              💡 Tap or hover to start interactive skills
            </div>
          )}
          <canvas ref={canvasRef} className="w-full h-full touch-none" />
        </div>
      </div>
    </section>
  );
};

export default Skills;


