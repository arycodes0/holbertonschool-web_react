
export interface Teacher {
    readonly firstName: string;
    readonly lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    location: string;
    [propName: string]: any;
 }
 
 interface Directors extends Teacher {
     numberOfReports: number;
 }
 
 const teacher3: Teacher = {
     firstName: 'Miraya',
     fullTimeEmployee: false,
     lastName: 'EnveLda',
     location: 'Nomaswey',
     contract: false,
 };
 
 const director1: Directors = {
     firstName: 'Pepe',
     lastName: 'Trukete',
     location: 'Pikete',
     fullTimeEmployee: true,
     numberOfReports: 15,
 };
 
 interface printTeacherFunction {
     (firstName: string, lastName: string): string;
 }
 
 const printTeacher: printTeacherFunction = (firstName, lastName) => {
     return `${firstName.substring(0,1)}. ${lastName}`;
 }
 
 
 interface StudentClassInterface {
     firstName: string;
     lastName: string;
     workOnHomework(): string;
     displayName(): string;
 }
 interface StudentConstructor {
     new (firstName: string, lastName: string): StudentClassInterface;
 }
 class StudentClass {
     firstName: string;
     lastName: string;
 
     constructor(firstName: string, lastName: string) {
         this.firstName = firstName;
         this.lastName = lastName;
     };
 
     workOnHomework(): string {
         return 'Currently working'
     };
 
     displayName(): string {
         return this.firstName
     }
 }
 
 let s = new StudentClass("who", "me")
 console.log(s.workOnHomework());
 console.log(s.displayName());
 
 console.log(printTeacher(teacher3.firstName, teacher3.lastName))
   
 console.log(director1);
 
 console.log(teacher3);
