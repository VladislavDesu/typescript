import {User} from "./classes";

class Admin extends User {

    constructor(name: string, age: number, nickname: string) {
        super(name, age, nickname);
    }

    getPass(): string {
        return `${this.name}${this.age}${User.secret}`;
    }
}

const admin = new Admin("Admin", 50, "SuperAdmin");
admin.getPass();