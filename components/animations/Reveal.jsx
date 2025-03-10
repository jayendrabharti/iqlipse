import React, { useRef, useEffect } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';

const Reveal = ({ children, width = "fit-content" }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const mainControls = useAnimation();
  const slideControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
      slideControls.start("visible");
    }
  }, [isInView, mainControls, slideControls]);

  return (
    <div ref={ref} style={{ position: 'relative', width: width, overflow: 'hidden' }}>
      <motion.div
        className="slide"
        variants={{
          hidden: { left: 0 },
          visible: { left: '100%' },
        }}
        initial="hidden"
        animate={slideControls}
        transition={{ duration: 0.5, delay: 0.25, ease: "easeIn" }}
        style={{
          position: 'absolute',
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
          background: 'var(--logoColor)',
          zIndex: 20,
        }}
      />
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.5, delay: 0.25 }}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default Reveal;
