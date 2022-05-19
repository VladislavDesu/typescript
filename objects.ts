type Person = {
    name: string,
    age: number,
    nickname?: string
    getPass?: (name?: string, age?: number | string) => string
};

let user: Person = {
    name: "Jack",
    age: 18,
    nickname: "UserDefault"
};

let admin: Person = {
    name: "Admin",
    age: 30,
    getPass(name= this.name, age= this.age): string {
    return `${name}${age}`;
}
};


user = {
    name: "User",
    age: 10
};
