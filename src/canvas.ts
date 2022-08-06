import { Color, createColor } from "./color";

export type Canvas = {
  width: number;
  height: number;
  pixels: Array<Array<Color>>;
  maxColorValue: number;
};

export const createCanvas = (
  width: number,
  height: number,
  maxColorValue: number
): Canvas => {
  let pixels = [];

  for (var i: number = 0; i < height; i++) {
    pixels.push([]);
    for (var j: number = 0; j < width; j++) {
      pixels[i].push(createColor(0, 0, 0));
    }
  }
  return { width, height, pixels, maxColorValue };
};

export const writePixel = (
  canvas: Canvas,
  x: number,
  y: number,
  color: Color
) => {
  canvas.pixels[y][x] = color;
};

export const pixelAt = (canvas: Canvas, x: number, y: number): Color => {
  return canvas.pixels[y][x];
};

const sanitizePixelColor = (pixelColor: number): number => {
  return Math.max(Math.min(pixelColor, 1), 0);
};

export const toPPMString = (canvas: Canvas): string => {
  let ppm: string = `P3\n${canvas.width} ${canvas.height}\n${canvas.maxColorValue}`;

  for (var i = 0; i < canvas.height; i++) {
    ppm += "\n";
    for (var j = 0; j < canvas.width; j++) {
      const pixel: Color = pixelAt(canvas, j, i);

      ppm += `${Math.round(
        canvas.maxColorValue * sanitizePixelColor(pixel.red)
      )} ${Math.round(
        canvas.maxColorValue * sanitizePixelColor(pixel.green)
      )} ${Math.round(canvas.maxColorValue * sanitizePixelColor(pixel.blue))}${
        j !== canvas.width - 1 ? " " : ""
      }`;
    }
  }

  return ppm;
};
