interface User {
    name: string
}

const user: Readonly<User> = { // only read
    name: "user"
}

interface Props {
    name?: string;
    age?: number;
}

const obj: Required<Props> = { // need all parameters
    name: "user",
    age: 30
}

interface PageInfo {
    title: string
}

type Pages = "home" | "about"

const obj2: Record<Pages, PageInfo> = {
    home: {title: "home"},
    about: {title: "about"},
}

interface Todo {
    title: string;
    description: string;
    completed: false;
}

type TodoPreview = Pick<Todo, "title" | "completed">; // include selected parameters

const todo: TodoPreview = {
    title: "hi",
    completed: false
}

type TodoPreviewOmit = Omit<Todo, "description">; // exclude second parameters

const todoOmit: TodoPreviewOmit = {
    title: "hi",
    completed: false
}

type foo = Exclude<"a" | "b" | "c", "a">; // b and c
type bar = Exclude<"a" | "b" | "c", "b" | "c">; // only a

type T0 = Exclude<"a" | "b" | "c", "c">; // only c

type T1 = NonNullable<string | number | undefined>; // delete undefined or null
type T2 = NonNullable<string | string[] | null>; // delete  null

declare function f1(): {a: string}

type T3 = ReturnType<() => string>; // return function return // string
type T4 = ReturnType<typeof f1>; // return function return // {a: string}

class C {
    a = 10
}

type T5 = InstanceType<typeof C>; // return C
