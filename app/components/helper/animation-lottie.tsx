"use client";

import dynamic from "next/dynamic";

const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

type Props = {
  animationPath: any; // bisa diperketat nanti
  width?: number;
};

const AnimationLottie = ({ animationPath, width }: Props) => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationPath,
    style: {
      width: width ? `${width}px` : "95%",
    },
  };

  return <Lottie {...defaultOptions} />;
};

export default AnimationLottie;