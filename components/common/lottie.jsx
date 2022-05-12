import React, { useState } from "react";
import Lottie from "react-lottie";

const LottieFile = ({ animationData, height, width, loop, speed }) => {
  const defaultOptions = {
    loop: loop ? false : true,
    autoplay: true,
    speed: speed ? speed : "",
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const [isStopped, setIsStopped] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  return (
    <div
      // onClick={() => window.open("https://support.wwf.org.uk", "_blank")}
      className="cursor"
    >
      <Lottie
        options={defaultOptions}
        height={height ? height : 400}
        width={width ? width : 400}
        isStopped={isStopped}
        isPaused={isPaused}
      />
    </div>
  );
};

export default LottieFile;
