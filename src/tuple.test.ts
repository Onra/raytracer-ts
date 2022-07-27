import {
  Tuple,
  getTupleType,
  TupleTypes,
  createPoint,
  createVector,
  equalNumbers,
  equalTuples,
  addTuples,
  subtractTuples,
  negateTuple,
  multiplyTuple,
  divideTuple,
  getVectorMagnitude,
  normalizeVector,
  dotProduct,
  crossProduct,
} from "./tuple";

describe("tuple", () => {
  test("tuple should be a point", () => {
    const tuple: Tuple = { x: 4.3, y: -4.2, z: 3.1, w: TupleTypes.Point };

    expect(tuple.x).toEqual(4.3);
    expect(tuple.y).toEqual(-4.2);
    expect(tuple.z).toEqual(3.1);
    expect(tuple.w).toEqual(TupleTypes.Point);
    expect(getTupleType(tuple)).toEqual(TupleTypes.Point);
    expect(getTupleType(tuple)).not.toEqual(TupleTypes.Vector);
  });

  test("tuple should be a vector", () => {
    const tuple: Tuple = { x: 4.3, y: -4.2, z: 3.1, w: TupleTypes.Vector };

    expect(tuple.x).toEqual(4.3);
    expect(tuple.y).toEqual(-4.2);
    expect(tuple.z).toEqual(3.1);
    expect(tuple.w).toEqual(TupleTypes.Vector);
    expect(getTupleType(tuple)).not.toEqual(TupleTypes.Point);
    expect(getTupleType(tuple)).toEqual(TupleTypes.Vector);
  });

  test("should create a point", () => {
    const point: Tuple = createPoint(1.1, 2.2, 3.3);

    expect(point.x).toEqual(1.1);
    expect(point.y).toEqual(2.2);
    expect(point.z).toEqual(3.3);
    expect(point.w).toEqual(TupleTypes.Point);
    expect(getTupleType(point)).toEqual(TupleTypes.Point);
    expect(getTupleType(point)).not.toEqual(TupleTypes.Vector);
  });

  test("should create a vector", () => {
    const vector: Tuple = createVector(1.1, 2.2, 3.3);

    expect(vector.x).toEqual(1.1);
    expect(vector.y).toEqual(2.2);
    expect(vector.z).toEqual(3.3);
    expect(vector.w).toEqual(TupleTypes.Vector);
    expect(getTupleType(vector)).toEqual(TupleTypes.Vector);
    expect(getTupleType(vector)).not.toEqual(TupleTypes.Point);
  });

  test("numbers should be equal", () => {
    const number1 = 1.564;
    const number2 = 1.564;

    expect(equalNumbers(number1, number2)).toBeTruthy();
  });

  test("numbers should not be equal", () => {
    const number1 = 1.564;
    const number2 = 2.129;

    expect(equalNumbers(number1, number2)).toBeFalsy();
  });

  test("tuples should be equal", () => {
    const tuple1: Tuple = { x: 1.132, y: 6.231, z: 2.234, w: TupleTypes.Point };
    const tuple2: Tuple = { x: 1.132, y: 6.231, z: 2.234, w: TupleTypes.Point };

    expect(equalTuples(tuple1, tuple2)).toBeTruthy();
  });

  test("tuples should not be equal", () => {
    const tuple1: Tuple = { x: 1.132, y: 6.231, z: 2.234, w: TupleTypes.Point };
    const tuple2: Tuple = {
      x: 1.132,
      y: 6.231,
      z: 2.234,
      w: TupleTypes.Vector,
    };

    expect(equalTuples(tuple1, tuple2)).toBeFalsy();
  });

  test("should add point and vector", () => {
    const point: Tuple = { x: 1, y: 2, z: 3, w: TupleTypes.Point };
    const vector: Tuple = { x: 2, y: 3, z: 4, w: TupleTypes.Vector };

    const expectedPoint: Tuple = { x: 3, y: 5, z: 7, w: TupleTypes.Point };

    expect(addTuples(point, vector)).toEqual(expectedPoint);
  });

  test("should add two vectors", () => {
    const vector1: Tuple = { x: 1, y: 2, z: 3, w: TupleTypes.Vector };
    const vector2: Tuple = { x: 2, y: 3, z: 4, w: TupleTypes.Vector };

    const expectedVector: Tuple = { x: 3, y: 5, z: 7, w: TupleTypes.Vector };

    expect(addTuples(vector1, vector2)).toEqual(expectedVector);
  });

  test("should subtract two points", () => {
    const point1: Tuple = createPoint(1, 2, 3);
    const point2: Tuple = createPoint(3, 5, 2);

    const expectedVector: Tuple = { x: -2, y: -3, z: 1, w: TupleTypes.Vector };

    expect(subtractTuples(point1, point2)).toEqual(expectedVector);
  });

  test("should subtract a vector from a point", () => {
    const point: Tuple = createPoint(1, 2, 3);
    const vector: Tuple = createVector(3, 5, 2);

    const expectedPoint: Tuple = { x: -2, y: -3, z: 1, w: TupleTypes.Point };

    expect(subtractTuples(point, vector)).toEqual(expectedPoint);
  });

  test("should subtract two vectors", () => {
    const vector1: Tuple = createVector(1, 2, 3);
    const vector2: Tuple = createVector(3, 5, 2);

    const expectedVector: Tuple = { x: -2, y: -3, z: 1, w: TupleTypes.Vector };

    expect(subtractTuples(vector1, vector2)).toEqual(expectedVector);
  });

  test("should negate a tuple", () => {
    const tuple: Tuple = { x: 2, y: -3, z: -2, w: 2 };

    expect(negateTuple(tuple)).toEqual({ x: -2, y: 3, z: 2, w: -2 });
  });

  test("should multiply a tuple by a scalar", () => {
    const tuple: Tuple = { x: 2, y: -3, z: -2, w: 2 };
    const scalar = 3.5;

    const expectedTuple: Tuple = { x: 7, y: -10.5, z: -7, w: 7 };

    expect(multiplyTuple(tuple, scalar)).toEqual(expectedTuple);
  });

  test("should multiply a tuple by a fraction", () => {
    const tuple: Tuple = { x: 2, y: -3, z: -2, w: 2 };
    const fraction = 0.5;

    const expectedTuple: Tuple = { x: 1, y: -1.5, z: -1, w: 1 };

    expect(multiplyTuple(tuple, fraction)).toEqual(expectedTuple);
  });

  test("should divide a tuple by a scalar", () => {
    const tuple: Tuple = { x: 2, y: -3, z: -2, w: 2 };
    const scalar = 2;

    const expectedTuple: Tuple = { x: 1, y: -1.5, z: -1, w: 1 };

    expect(divideTuple(tuple, scalar)).toEqual(expectedTuple);
  });

  test("should return the magnitude of a vector", () => {
    let vector = createVector(1, 0, 0);

    expect(getVectorMagnitude(vector)).toEqual(1);

    vector = createVector(0, 1, 0);

    expect(getVectorMagnitude(vector)).toEqual(1);

    vector = createVector(0, 0, 1);

    expect(getVectorMagnitude(vector)).toEqual(1);

    vector = createVector(1, 2, 3);

    expect(getVectorMagnitude(vector)).toEqual(Math.sqrt(14));

    vector = createVector(-1, -2, -3);

    expect(getVectorMagnitude(vector)).toEqual(Math.sqrt(14));
  });

  test("should normalize a vector", () => {
    let vector = createVector(4, 0, 0);

    expect(
      equalTuples(normalizeVector(vector), createVector(1, 0, 0))
    ).toBeTruthy();

    vector = createVector(1, 2, 3);

    expect(
      equalTuples(
        normalizeVector(vector),
        createVector(0.26726, 0.53452, 0.80178)
      )
    ).toBeTruthy();
  });

  test("normalized vector should have a magnitude of 1", () => {
    const vector = createVector(1, 2, 3);

    const normalizedVector = normalizeVector(vector);

    expect(getVectorMagnitude(normalizedVector)).toEqual(1);
  });

  test("should return the dot product of two vectors", () => {
    const vector1 = createVector(1, 2, 3);
    const vector2 = createVector(2, 3, 4);

    expect(dotProduct(vector1, vector2)).toEqual(20);
  });

  test("should do the cross product of two vectors", () => {
    const vector1 = createVector(1, 2, 3);
    const vector2 = createVector(2, 3, 4);

    expect(crossProduct(vector1, vector2)).toEqual(createVector(-1, 2, -1));
    expect(crossProduct(vector2, vector1)).toEqual(createVector(1, -2, 1));
  });
});
