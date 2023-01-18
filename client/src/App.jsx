import React from "react";
import { fabric } from "fabric";

const App = () => {
  const fabricRef = React.useRef(null);
  const canvasRef = React.useRef(null);

  React.useEffect(() => {
    const initFabric = () => {
      fabricRef.current = new fabric.Canvas(canvasRef.current);
    };

    const addRectangle = () => {
      const rect = new fabric.Circle({
        top: 50,
        left: 50,
        radius: 20,
        fill: "red",
      });

      fabricRef.current.add(rect);
    };

    const disposeFabric = () => {
      fabricRef.current.dispose();
    };

    initFabric();
    addRectangle();

    return () => {
      disposeFabric();
    };
  }, []);

  return <canvas ref={canvasRef} />;
};

export default App;
