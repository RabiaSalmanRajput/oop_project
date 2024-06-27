#! /usr/bin/env node

import inquirer from "inquirer";

class Student {
    name:String;
    constructor(n:string){
        this.name=n;
    }
};

class Person{
    students:Student[]=[];

    addStudent(obj:Student){
        this.students.push(obj);
    }
};

const persons = new Person();
const programStart = async(persons:Person) => {
do{
    console.log("Wellcome Guest");

    const ans = await inquirer.prompt({
        type: "list",
        message: "What do you like to talk to?",
        name: "select",
        choices: ["self", "student"],
    });
    if(ans.select == "self"){
        console.log("Hello Myself");
        console.log("Alhumdulillah i am good.");
    };
    if(ans.select == "student"){
        const ans = await inquirer.prompt({
            type: "input",
            message: "Which Student Do You Want To Talk To?",
            name: "student",
        });

        const student = persons.students.find(val => val.name ==ans.student);
        if (!student){
            const name = new Student(ans.student);
            persons.addStudent(name);

            console.log(`Hello i am ${name.name}, and i am fine.........`);
            console.log(persons.students);
        }
    };
}while(true)
};
   


programStart(persons);