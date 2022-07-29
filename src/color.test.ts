import {
  Color,
  createColor,
  addColors,
  subtractColors,
  multiplyColors,
  multiplyColorByScalar,
  equalColors,
} from "./color";

describe("Color", () => {
  test("should create a color", () => {
    const color: Color = createColor(-0.5, 0.4, 1.7);

    expect(color.red).toEqual(-0.5);
    expect(color.green).toEqual(0.4);
    expect(color.blue).toEqual(1.7);
  });

  test("should add colors", () => {
    const color1: Color = createColor(0.9, 0.6, 0.75);
    const color2: Color = createColor(0.7, 0.1, 0.25);

    expect(
      equalColors(addColors(color1, color2), {
        red: 1.6,
        green: 0.7,
        blue: 1,
      })
    ).toBeTruthy();
  });

  test("should subtract colors", () => {
    const color1: Color = createColor(0.9, 0.6, 0.75);
    const color2: Color = createColor(0.7, 0.1, 0.25);

    expect(
      equalColors(subtractColors(color1, color2), {
        red: 0.2,
        green: 0.5,
        blue: 0.5,
      })
    ).toBeTruthy();
  });

  test("should multiply colors", () => {
    const color1: Color = createColor(1, 0.2, 0.4);
    const color2: Color = createColor(0.9, 1, 0.1);

    expect(
      equalColors(multiplyColors(color1, color2), {
        red: 0.9,
        green: 0.2,
        blue: 0.04,
      })
    ).toBeTruthy();
  });

  test("should multiply color by a scalar", () => {
    const color: Color = createColor(0.2, 0.3, 0.4);

    expect(
      equalColors(multiplyColorByScalar(color, 2), {
        red: 0.4,
        green: 0.6,
        blue: 0.8,
      })
    ).toBeTruthy();
  });
});
