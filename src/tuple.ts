const EPSILON = 0.00001;

export enum TupleTypes { 
    Point = 1,
    Vector = 0
}

export type Tuple = { 
    x: number,
    y: number,
    z: number,
    w: TupleTypes
}

export const getTupleType = ( tuple: Tuple ): TupleTypes => {
    return tuple.w === 0 ? TupleTypes.Vector : TupleTypes.Point;
}

export const createPoint = ( x: number, y: number, z: number): Tuple => {
    return { x, y, z, w: 1.0 }
}

export const createVector = ( x: number, y: number, z: number): Tuple => {
    return { x, y, z, w: 0.0 }
}

export const equalNumbers = (number1: number, number2: number): boolean => {
    return Math.abs(number1 - number2) < EPSILON;
}

export const equalTuples = (tuple1: Tuple, tuple2: Tuple): boolean => {
   return equalNumbers(tuple1.x, tuple2.x) &&
       equalNumbers(tuple1.y, tuple2.y) &&
       equalNumbers(tuple1.z, tuple2.z) &&
       equalNumbers(tuple1.w, tuple2.w);
}

export const addTuples = (tuple1: Tuple, tuple2: Tuple): Tuple => {
    return { x: tuple1.x + tuple2.x, y: tuple1.y + tuple2.y, z: tuple1.z + tuple2.z, w: tuple1.w + tuple2.w };
}

export const subtractTuples = (tuple1: Tuple, tuple2: Tuple): Tuple => {
    return { x: tuple1.x - tuple2.x, y: tuple1.y - tuple2.y, z: tuple1.z - tuple2.z, w: tuple1.w - tuple2.w };
}

export const negateTuple = (tuple: Tuple): Tuple => {
    const zeroTuple = { x: 0, y: 0, z: 0, w: TupleTypes.Vector };

    return subtractTuples(zeroTuple, tuple);
}

export const multiplyTuple = (tuple: Tuple, scalar: number): Tuple => {
    return { x: tuple.x * scalar, y: tuple.y * scalar, z: tuple.z * scalar, w: tuple.w * scalar };
}

export const divideTuple = (tuple: Tuple, scalar: number): Tuple => {
    return { x: tuple.x / scalar, y: tuple.y / scalar, z: tuple.z / scalar, w: tuple.w / scalar };
}
