import React,{useEffect} from "react";

// Alternatively:
// import Lottie from 'react-lottie-player/dist/LottiePlayerLight'


export default function AnimationSkill() {
  useEffect(() => {
    import('@lottiefiles/lottie-player');
  });

  return (
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
      <lottie-player
      id="firstLottie"
      autoplay
      loop
      mode="normal"
      src="https://assets7.lottiefiles.com/packages/lf20_c2x2b3vh.json"
    />
  </div>
  );
}
