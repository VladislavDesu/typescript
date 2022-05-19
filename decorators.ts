const first = () => {
    console.log("first() completing");
    return (target: any, propertyKey: string | symbol, descriptor: PropertyDescriptor) => {
        console.log("first() called");
    }
}

const second = () => {
    console.log("second() completing");
    return (target: any, propertyKey: string | symbol, descriptor: PropertyDescriptor) => {
        console.log("second() called");
    }
}

class User {
    constructor(public name: string, public age: number) {
    }

    @first()
    @second()
    public getPass(): string {
        return `${this.name}${this.age}`
    }
}