// PRIMITIVE TYPES
const isCompleted: boolean = true; // boolean: false, true

const decimal: number = 10; // number
const hex: number = 0xf00d; // number
const PI: number = 3.1415926535897932384626433832795028841971693993751058209; // number

const name: string = "testing..."; // string

const u: undefined = undefined; // undefined
const n: null = null; // null

// ---------------------

// ARRAY TYPES
const listArray: number[] = [1, 2, 3]; // Array Type

const listGeneric: Array<number> = [4, 5, 6]; // generic Type

const listTuple: [number, string] = [1, "Hello"]; // Tuple Type

// ---------------------

// OBJECT
const obj: object = {
    foo: "a",
    bar: "b"
};

//Multiple types
const multiple: object | number = {} // {} or number

// ---------------------

// ANY TYPES
const lAny: any[] = [1, true, null];

const nAny: any = true;

const gAny: Array<any> = [undefined, true, 3.14, "hello"]; // generic Type

// ---------------------

// NEVER
const throwError = (msg: string): never => {
    throw new Error(msg);
};

const infinityLoop = (): never => {
    while (true) {}
};

// ---------------------

// VOID
const greeting = (): void => {
    console.log("Hello, World");
    // function return nothing = void
};

export {}

