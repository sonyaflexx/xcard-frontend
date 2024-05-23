'use client'

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const Notification = ({ message, duration = 3000, onClose }: { message: any, duration: number, onClose: () => void }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, duration);
    return () => clearTimeout(timer);
  }, [duration]);

  useEffect(() => {
    if (!isVisible) {
      new Promise(resolve => {
        setTimeout(resolve, 200);
      }).then(() => {
        onClose();
      });
    }
  }, [isVisible, onClose]);
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 20, opacity: 1 }}
          exit={{ y: -100, opacity: 0 }}
          transition={{ duration: 0.2 }}
          style={{zIndex: '100'}}
          className="fixed top-5 left-0 right-0 mx-auto text-white bg-green-40 rounded-xl px-4 py-3 dark:shadow-[0_0_50px_0px_rgba(0, 0, 0, 0.15)] dark:shadow-[0_0_50px_0px_rgba(226, 226, 232, 0.15)] w-max"
        >
          {message}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Notification;
