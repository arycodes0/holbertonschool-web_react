interface DirectorInterface {
    workFromHome(): string;
    getCoffeeBreak(): string;
    workDirectorTask(): string;
};

interface TeacherInterface {
    workFromHome(): string;
    getCoffeeBreak(): string;
    workTeacherTasks(): string;
};

export const Director = class Director implements DirectorInterface {
    workFromHome(): string {
        return "Working from home";
    }

    getCoffeeBreak(): string {
        return "Getting a coffe a break"
    }

    workDirectorTask(): string {
        return "Getting to director tasks";
    }
}

export const Teacher = class Teacher implements TeacherInterface {
    workFromHome(): string {
        return "Cannot work from home";
    }

    getCoffeeBreak(): string {
        return "Cannot have a break";
    }

    workTeacherTasks(): string {
        return "Getting to work"
    }
}

export function createEmployee(salary: number | string): DirectorInterface | TeacherInterface {
    if (typeof salary === 'number' && salary < 500) {
        return new Teacher();
    } else {
        return new Director();
    }
}

export function isDirector(employee: DirectorInterface | TeacherInterface): employee is DirectorInterface {
    return (employee as DirectorInterface).workDirectorTask !== undefined;
}

export function executeWork(employee: DirectorInterface | TeacherInterface): string{
    if (isDirector(employee)) {
        return employee.workDirectorTask();
    } else {
        return employee.workTeacherTasks();
    }
}

export type Subjects = 'Math' | 'History';

export function teachClass(todayClass: Subjects): string {
    if (todayClass === 'Math') {
        return 'Teaching Math';
    } 
    else if (todayClass === 'History') {
        return 'Teaching History';
    }
}

let d1: Director = new Director();
let t1: Teacher = new Teacher();

executeWork(createEmployee(200));
executeWork(createEmployee(1000));

console.log(teachClass('Math'));
console.log(teachClass('History'));

console.log(createEmployee(200));

console.log(createEmployee(1000));

console.log(createEmployee('$500'));
