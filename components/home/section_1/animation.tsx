import React,{useEffect} from "react";

// Alternatively:
// import Lottie from 'react-lottie-player/dist/LottiePlayerLight'


export default function Animation() {
  useEffect(() => {
    import('@lottiefiles/lottie-player');
  });

  return (
    <lottie-player
    id="firstLottie"
    autoplay
    loop
    mode="normal"
    src="https://assets9.lottiefiles.com/packages/lf20_osrbi94c.json"
  />

  );
}