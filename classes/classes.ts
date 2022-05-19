export class User {

    // public name: string; // default
    // private age: string | number; // only this class can use
    // protected nickname: string; // only inherit classes
    // readonly getPass: () => string; // only read

    static secret = 12345;

    constructor(
        public name: string,
        public age: string | number,
        public nickname: string
    ) {
        this.name = name;
        this.age = age;
        this.nickname = nickname;
    }

    getPass(): string {
        return `${this.name}${User.secret}`
    }


    setAge(age: number): void {
        this.age = age
    }

    set myAge(age: number) {
        this.age = age
    }
}

const jack = new User("Jack", 30, "SuperClass");
jack.setAge(31);
jack.myAge = 32;