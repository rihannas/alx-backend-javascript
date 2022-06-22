// task 1

import { StringLiteral } from "@babel/types";

interface Teacher {
    readonly firstName: string;
    readonly lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    location: string;
    [key: string]: any;
}

//task 2

interface Directors extends Teacher {
    numberOfReports: number;
}

// task 3

function printTeacher (firstName: string, lastName: string): string {
    return `${firstName[0]}. ${lastName}`;
}

interface printTeacherFunction {
    printTeacher(firstName: string, lastName: string): string;
}

// task 4

interface Student {
    firstName: string;
    lastName: string;
}

interface classStudent {
    new (firstName: string, lastName: string): StudentClass;
}

class StudentClass {
    firstName: string;
    lastName: string;

    constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    workOnHomework() : string {
        return "Currently working";
    }

    displayName() : string {
        return this.firstName;
    }
}

