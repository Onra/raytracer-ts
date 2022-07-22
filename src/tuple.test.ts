import { Tuple, getTupleType, TupleTypes, createPoint, createVector } from "./tuple"

describe("tuple", () => {
    test("tuple should be a point", () => {
        const tuple: Tuple = { x: 4.3, y: -4.2, z: 3.1, w: 1.0 }

        expect(tuple.x).toEqual(4.3);
        expect(tuple.y).toEqual(-4.2);
        expect(tuple.z).toEqual(3.1);
        expect(tuple.w).toEqual(1.0);
        expect(getTupleType(tuple)).toEqual(TupleTypes.Point)
        expect(getTupleType(tuple)).not.toEqual(TupleTypes.Vector)
    })

    test("tuple should be a vector", () => {
        const tuple: Tuple = { x: 4.3, y: -4.2, z: 3.1, w: 0.0 }

        expect(tuple.x).toEqual(4.3);
        expect(tuple.y).toEqual(-4.2);
        expect(tuple.z).toEqual(3.1);
        expect(tuple.w).toEqual(0.0);
        expect(getTupleType(tuple)).not.toEqual(TupleTypes.Point)
        expect(getTupleType(tuple)).toEqual(TupleTypes.Vector)
    })

    test("should create a point", () => {
        const point: Tuple = createPoint(1.1, 2.2, 3.3);

        expect(point.x).toEqual(1.1);
        expect(point.y).toEqual(2.2);
        expect(point.z).toEqual(3.3);
        expect(point.w).toEqual(1.0);
        expect(getTupleType(point)).toEqual(TupleTypes.Point);
        expect(getTupleType(point)).not.toEqual(TupleTypes.Vector);
    })

    test("should create a vector", () => {
        const vector: Tuple = createVector(1.1, 2.2, 3.3);

        expect(vector.x).toEqual(1.1);
        expect(vector.y).toEqual(2.2);
        expect(vector.z).toEqual(3.3);
        expect(vector.w).toEqual(0.0);
        expect(getTupleType(vector)).toEqual(TupleTypes.Vector);
        expect(getTupleType(vector)).not.toEqual(TupleTypes.Point);
    })
})
