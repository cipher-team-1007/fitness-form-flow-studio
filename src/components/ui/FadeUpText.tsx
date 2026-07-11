import { motion } from 'motion/react';

interface FadeUpTextProps {
  text: string;
  className?: string;
  el?: keyof JSX.IntrinsicElements;
  staggerDelay?: number;
}

export function FadeUpText({
  text,
  className = '',
  el: Wrapper = 'p',
  staggerDelay = 0.05,
}: FadeUpTextProps) {
  const words = text.split(' ');

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: staggerDelay, delayChildren: 0.1 * i },
    }),
  };

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        damping: 24,
        stiffness: 100,
        duration: 0.8,
        ease: [0.25, 0.1, 0.25, 1]
      },
    },
    hidden: {
      opacity: 0,
      y: 20,
    },
  };

  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
      className={`flex flex-wrap ${className}`}
      as={Wrapper as any}
    >
      {words.map((word, index) => (
        <motion.span variants={child} key={index} className="mr-[0.25em] last:mr-0 inline-block">
          {word}
        </motion.span>
      ))}
    </motion.div>
  );
}
