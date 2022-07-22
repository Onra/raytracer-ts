import { Tuple } from "./tuple"

const foobar = (tuple: Tuple) => {
    console.log(tuple)
}

console.log(foobar([1,2,3,1]));
