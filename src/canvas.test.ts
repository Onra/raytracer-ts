import {
  Canvas,
  createCanvas,
  writePixel,
  toPPMString,
  pixelAt,
} from "./canvas";
import { createColor, equalColors, Color } from "./color";

describe("Canvas", () => {
  test("should create a canvas of 10x20 full of black colors", () => {
    const canvas: Canvas = createCanvas(10, 20, 255);

    expect(canvas.width).toEqual(10);
    expect(canvas.height).toEqual(20);

    for (var i: number = 0; i < 10; i++) {
      for (var j: number = 0; j < 20; j++) {
        expect(
          equalColors(pixelAt(canvas, i, j), createColor(0, 0, 0))
        ).toBeTruthy();
      }
    }
  });

  test("should write a pixel on the canvas", () => {
    const canvas: Canvas = createCanvas(10, 20, 255);

    const red: Color = createColor(1, 0, 0);

    writePixel(canvas, 2, 3, red);

    expect(
      equalColors(pixelAt(canvas, 2, 3), createColor(1, 0, 0))
    ).toBeTruthy();
  });

  test("should generate PPM string from canvas", () => {
    const canvas: Canvas = createCanvas(5, 3, 255);

    const color1: Color = createColor(1.5, 0, 0);
    const color2: Color = createColor(0, 0.5, 0);
    const color3: Color = createColor(-0.5, 0, 1);

    writePixel(canvas, 0, 0, color1);
    writePixel(canvas, 2, 1, color2);
    writePixel(canvas, 4, 2, color3);

    const ppm = toPPMString(canvas);

    expect(ppm).toEqual(
      "P3\n5 3\n255\n255 0 0 0 0 0 0 0 0 0 0 0 0 0 0\n0 0 0 0 0 0 0 128 0 0 0 0 0 0 0\n0 0 0 0 0 0 0 0 0 0 0 0 0 0 255"
    );
  });
});
