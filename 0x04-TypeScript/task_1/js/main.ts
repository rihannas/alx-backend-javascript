// task 1

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
