import { fabricRef } from "./cav";

export const AddRectangle = () => {
  const rect = new fabric.Rect({
    width: 100,
    height: 100,
    fill: "white",
  });

  fabricRef.current.add(rect);
};

export const AddCircle = () => {
  const cir = new fabric.Circle({
    radius: 50,
    fill: "white",
  });

  fabricRef.current.add(cir);
};

export const AddTriangle = () => {
  const tri = new fabric.Triangle({
    width: 100,
    height: 100,
    fill: "white",
  });

  fabricRef.current.add(tri);
};

export const AddText = () => {
  const txt = new fabric.Textbox("Hello World");

  fabricRef.current.add(txt);
};
