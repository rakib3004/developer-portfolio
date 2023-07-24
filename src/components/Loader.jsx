import { Html, useProgress } from "@react-three/drei";


const Loader = () => {
  const { progress } = useProgress();

  return (
    <Html>
      <span className="canvas-load">

      </span>

      <p className="font-2xl text-[#f1f1f1] font-extrabold">
        {progress.toFixed(2)}%
      </p>
    </Html>
  )
}

export default Loader;