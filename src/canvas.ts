import { Color, createColor } from "./color";

export type Canvas = {
  width: number;
  height: number;
  pixels: Array<Array<Color>>;
};

export const createCanvas = (width: number, height: number): Canvas => {
  let pixels = [];

  for (var i: number = 0; i < width; i++) {
    pixels.push([]);
    for (var j: number = 0; j < height; j++) {
      pixels[i].push(createColor(0, 0, 0));
    }
  }
  return { width, height, pixels };
};

export const writePixel = (canvas: Canvas, x, y, color: Color) => {
  canvas.pixels[x][y] = color;
};
