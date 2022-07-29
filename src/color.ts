import { equalNumbers } from "./tuple";

export type Color = {
  red: number;
  green: number;
  blue: number;
};

export const equalColors = (color1: Color, color2: Color): boolean => {
  return (
    equalNumbers(color1.red, color2.red) &&
    equalNumbers(color1.green, color2.green) &&
    equalNumbers(color1.blue, color2.blue)
  );
};

export const createColor = (
  red: number,
  green: number,
  blue: number
): Color => {
  return { red, green, blue };
};

export const addColors = (color1: Color, color2: Color): Color => {
  return createColor(
    color1.red + color2.red,
    color1.green + color2.green,
    color1.blue + color2.blue
  );
};

export const subtractColors = (color1: Color, color2: Color): Color => {
  return createColor(
    color1.red - color2.red,
    color1.green - color2.green,
    color1.blue - color2.blue
  );
};

export const multiplyColors = (color1: Color, color2: Color): Color => {
  return createColor(
    color1.red * color2.red,
    color1.green * color2.green,
    color1.blue * color2.blue
  );
};

export const multiplyColorByScalar = (color: Color, scalar: number): Color => {
  return createColor(
    color.red * scalar,
    color.green * scalar,
    color.blue * scalar
  );
};
