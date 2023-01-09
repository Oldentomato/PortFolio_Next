import {useEffect} from "react"

export default function PageNotFound() {

  useEffect(() => {
    import('@lottiefiles/lottie-player');
  });

  return (
    <div className="justify-center items-center w-40 h-40">
      <lottie-player
      id="404lottie"
      autoplay
      loop
      mode="normal"
      src="https://assets3.lottiefiles.com/packages/lf20_GIyuXJ.json"
    />
    </div>

  );
}
