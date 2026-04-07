"use client";

import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa6";

const SCROLL_THRESHOLD = 50;

const ScrollToTop = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShow(window.scrollY > SCROLL_THRESHOLD);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const onClickBtn = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      onClick={onClickBtn}
      className={`fixed bottom-8 right-6 z-50 flex items-center justify-center rounded-full 
      bg-gradient-to-r from-pink-500 to-violet-600 p-4 text-white 
      shadow-lg transition-all duration-300 hover:scale-110
      ${!show && "hidden"}`}
    >
      <FaArrowUp />
    </button>
  );
};

export default ScrollToTop;