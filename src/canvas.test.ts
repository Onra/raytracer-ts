import { Canvas, createCanvas, writePixel } from "./canvas";
import { createColor, equalColors, Color } from "./color";

describe("Canvas", () => {
  test("should create a canvas of 10x20 full of black colors", () => {
    const canvas: Canvas = createCanvas(10, 20);

    expect(canvas.width).toEqual(10);
    expect(canvas.height).toEqual(20);

    for (var i: number = 0; i < 10; i++) {
      for (var j: number = 0; j < 20; j++) {
        expect(
          equalColors(canvas.pixels[i][j], createColor(0, 0, 0))
        ).toBeTruthy();
      }
    }
  });

  test("should write a pixel on the canvas", () => {
    const canvas: Canvas = createCanvas(10, 20);

    const red: Color = createColor(1, 0, 0);

    writePixel(canvas, 2, 3, red);

    expect(equalColors(canvas.pixels[2][3], createColor(1, 0, 0))).toBeTruthy();
  });
});
