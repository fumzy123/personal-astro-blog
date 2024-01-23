import React from 'react';
import '../../styles/component-styling/HeaderLink.css';
import { motion } from 'framer-motion';

function HeaderLink() {
  return (
    <motion.div className="headerlink" whileHover="hover">
      <a className="headerlink__title" href="/pages">
        Interactive Home
      </a>
      <motion.span
        className="headerlink__underline"
        variants={{
          initial: { scaleX: 0 },
          hover: { scaleX: 1 },
        }}
        transition={{ duration: 0.3 }}
      >
        hyyyys
      </motion.span>
    </motion.div>
  );
}
export default HeaderLink;
