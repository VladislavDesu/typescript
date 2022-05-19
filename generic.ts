const getterNumber = <T>(data: T): T => data;

function getterString<T>(data: T): T {
    return data;
}

getterNumber<number>(10);
getterString<boolean>(true);

class User<T> {
    constructor(public name: T, public age: T) {}

    getPass(): string {
        return `${this.name}${this.age}`
    }
}

class Admin<T, K extends number>{
    constructor(public name: T, public age: K) {}
}

const user = new User<string>("User", "20");
const anonymous = new User<number>(20, 30);
const admin = new Admin<string, number>("User", 30);
