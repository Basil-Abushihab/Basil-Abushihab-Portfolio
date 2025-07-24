import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

type HamburgerMenuButtonProps = {
  isOpen?: boolean;
  setIsOpen?: (isOpen: boolean) => void;
};
export const HamburgerMenuButton = (props: HamburgerMenuButtonProps) => {
  const { isOpen = false, setIsOpen } = props;
  const handleClick = () => {
    if (setIsOpen) {
      setIsOpen(!isOpen);
    }
  };
  return (
    <>
      <Button
        onClick={handleClick}
        className="flex z-50 outline-none md:hidden lg:hidden flex-col items-center justify-center w-20 h-10 bg-transparent shadow-none focus-visible:ring-0 cursor-pointer"
      >
        <motion.span
          animate={{ rotate: isOpen ? 45 : 0, y: isOpen ? 15 : 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          className="w-6 h-1 bg-white rounded-full"
        ></motion.span>
        <motion.span
          animate={{ opacity: isOpen ? 0 : 1 }}
          transition={{ duration: 0.2 }}
          className="w-6 h-1 bg-white rounded-full"
        ></motion.span>
        <motion.span
          animate={{ rotate: isOpen ? -45 : 0, y: isOpen ? -6 : 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          className="w-6 h-1 bg-white rounded-full"
        ></motion.span>
      </Button>
    </>
  );
};
