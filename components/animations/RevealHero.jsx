import { motion } from 'framer-motion';

export default function RevealHero({ children, width = "fit-content" }){

  return (
    <div style={{ position: 'relative', width: width, overflow: 'hidden' }}>
      <motion.div
        className="slide absolute top-0 left-0 bottom-0 right-0 bg-logoColor z-20"
        variants={{
          hidden: { left: 0 },
          visible: { left: '100%' },
        }}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.5, delay: 0, ease: "easeIn" }}
      />
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 0,x: 100 },
          visible: { opacity: 1, y: 0, x: 0 },
        }}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.5, delay: 0 }}
      >
        {children}
      </motion.div>
    </div>
  );
};
