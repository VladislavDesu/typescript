abstract class User {
    constructor(public name: string, public age: number) {
        this.name = name;
        this.age = age;
    }

    greet(): void {
        console.log("Hello, " + this.name)
    }

    abstract getPass(): string
}

class Admin extends User {
    constructor(public name: string, public age: number) {
        super(name, age);
    }

    getPass(): string {
        return `${this.name}${this.age}`;
    }
}

const admin = new Admin("Admin", 20)