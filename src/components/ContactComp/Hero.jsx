import React from "react";
import ReuseableHero from "../../ReuseableHero";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const Hero = () => {
  return (
    <motion.h2
      variants={fadeIn("down", 0.2)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0 }}
    >
      <div>
        <ReuseableHero text1={"CONTACT"} />
      </div>
    </motion.h2>
  );
};

export default Hero;
