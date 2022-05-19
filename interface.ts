interface User {
    readonly name: string, // can not be changed only read
    age: number,
    getName?(): string,
    [propName: string]: any
}

interface Admin extends User {
    nickname?: string,
    getPass?: () => string,
}

const user: Admin = {
    name: "Jack",
    age: 30,
    nickname: "YepYep",
    pass: "password"
};

class Jack implements Admin {
    name: "Jacky";
    age: 15
}