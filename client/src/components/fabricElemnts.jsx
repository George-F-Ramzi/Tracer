import { fabricRef } from "../components/cav";

export const AddRectangle = () => {
  const rect = new fabric.Rect({
    top: 50,
    left: 50,
    width: 100,
    height: 100,
    fill: "white",
  });

  fabricRef.current.add(rect);
};

export const AddCircle = () => {
  const cir = new fabric.Circle({
    top: 50,
    left: 50,
    radius: 50,
    fill: "white",
  });

  fabricRef.current.add(cir);
};

export const AddTriangle = () => {
  const tri = new fabric.Triangle({
    top: 50,
    left: 50,
    width: 100,
    height: 100,
    fill: "white",
  });

  fabricRef.current.add(tri);
};
