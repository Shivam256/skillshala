import React from "react";
import Lottie from "react-lottie";
import LoadingLottie from "../../assets/lotties/loading.json";

const LoadingScreen = ({ loading, text, children }) => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: LoadingLottie,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div className="w-full h-full">
      {loading ? (
        <div className="w-full h-full grid place-items-center">
          <Lottie options={defaultOptions} height="70%" width="70%" />
        </div>
      ) : (
        <div className="w-full h-full">{children}</div>
      )}
    </div>
  );
};

export default LoadingScreen;
