export enum TupleTypes { 
    Point = "POINT",
    Vector = "VECTOR"
}

export type Tuple = { 
    x: number,
    y: number,
    z: number,
    w: 0 | 1 
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
