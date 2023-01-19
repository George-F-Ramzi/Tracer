import { fabric } from "fabric";
import { useEffect, useRef } from "react";

export let fabricRef;

const Cav = () => {
  fabricRef = useRef(null);
  const canvasRef = useRef(null);

  useEffect(() => {
    const initFabric = () => {
      fabricRef.current = new fabric.Canvas(canvasRef.current, {
        height: 800,
        width: 800,
        backgroundColor: "wheat",
      });
    };

    const disposeFabric = () => {
      fabricRef.current.dispose();
    };

    initFabric();

    return () => {
      disposeFabric();
    };
  }, []);

  return <canvas ref={canvasRef} />;
};

export default Cav;
