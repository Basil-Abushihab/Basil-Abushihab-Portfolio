import { motion } from "framer-motion";

export const TopbarLogo = () => {

  return (
    <motion.span  className="text-2xl md:text-3xl lg:text-4xl font-satoshi flex items-end cursor-pointer"
    >
      Basil Abushihab
      <motion.span
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 1.4 ,}}
        className="text-sm md:text-lg flex items-center text-secondary font-bold "
      >
        .Dev
      </motion.span>
    </motion.span>
  );
};
