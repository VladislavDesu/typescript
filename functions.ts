// Arguments types
const createPassword = (name: string = "User", age?: number | string): string => `${name}${age}`;
const createSkills = (name: string = "User", ...skills: string[]): string => `${name}, my skills are: ${skills.join(" ")}`;

createPassword("Jack", 32);
createPassword();

createSkills("Jack", "HTML", "CSS");

let newPassword: (name: string, age?: number | string) => string

newPassword = createPassword;
newPassword("User", "10");

export = {}
