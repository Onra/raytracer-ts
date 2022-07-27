const EPSILON = 0.00001;

export enum TupleTypes {
  Point = 1,
  Vector = 0,
}

export type Tuple = {
  x: number;
  y: number;
  z: number;
  w: TupleTypes;
};

export const getTupleType = (tuple: Tuple): TupleTypes => {
  return tuple.w === 0 ? TupleTypes.Vector : TupleTypes.Point;
};

export const createPoint = (x: number, y: number, z: number): Tuple => {
  return { x, y, z, w: 1.0 };
};

export const createVector = (x: number, y: number, z: number): Tuple => {
  return { x, y, z, w: 0.0 };
};

export const equalNumbers = (number1: number, number2: number): boolean => {
  return Math.abs(number1 - number2) < EPSILON;
};

export const equalTuples = (tuple1: Tuple, tuple2: Tuple): boolean => {
  return (
    equalNumbers(tuple1.x, tuple2.x) &&
    equalNumbers(tuple1.y, tuple2.y) &&
    equalNumbers(tuple1.z, tuple2.z) &&
    equalNumbers(tuple1.w, tuple2.w)
  );
};

export const addTuples = (tuple1: Tuple, tuple2: Tuple): Tuple => {
  return {
    x: tuple1.x + tuple2.x,
    y: tuple1.y + tuple2.y,
    z: tuple1.z + tuple2.z,
    w: tuple1.w + tuple2.w,
  };
};

export const subtractTuples = (tuple1: Tuple, tuple2: Tuple): Tuple => {
  return {
    x: tuple1.x - tuple2.x,
    y: tuple1.y - tuple2.y,
    z: tuple1.z - tuple2.z,
    w: tuple1.w - tuple2.w,
  };
};

export const negateTuple = (tuple: Tuple): Tuple => {
  const zeroTuple = { x: 0, y: 0, z: 0, w: TupleTypes.Vector };

  return subtractTuples(zeroTuple, tuple);
};

export const multiplyTuple = (tuple: Tuple, scalar: number): Tuple => {
  return {
    x: tuple.x * scalar,
    y: tuple.y * scalar,
    z: tuple.z * scalar,
    w: tuple.w * scalar,
  };
};

export const divideTuple = (tuple: Tuple, scalar: number): Tuple => {
  return {
    x: tuple.x / scalar,
    y: tuple.y / scalar,
    z: tuple.z / scalar,
    w: tuple.w / scalar,
  };
};

export const getVectorMagnitude = (vector: Tuple): number => {
  return Math.sqrt(
    Math.pow(vector.x, 2) +
      Math.pow(vector.y, 2) +
      Math.pow(vector.z, 2) +
      Math.pow(vector.w, 2)
  );
};

export const normalizeVector = (vector: Tuple): Tuple => {
  const magnitude = getVectorMagnitude(vector);

  return {
    x: vector.x / magnitude,
    y: vector.y / magnitude,
    z: vector.z / magnitude,
    w: vector.w / magnitude,
  };
};

export const dotProduct = (tuple1: Tuple, tuple2: Tuple): number => {
  return (
    tuple1.x * tuple2.x +
    tuple1.y * tuple2.y +
    tuple1.z * tuple2.z +
    tuple1.w * tuple2.w
  );
};

export const crossProduct = (vector1: Tuple, vector2: Tuple): Tuple => {
  return createVector(
    vector1.y * vector2.z - vector1.z * vector2.y,
    vector1.z * vector2.x - vector1.x * vector2.z,
    vector1.x * vector2.y - vector1.y * vector2.x
  );
};
