'use strict'


class Group{
    constructor() {
        this._students = [];
    }

    get students() {
        return this._students;
    }

    addStudent(student) {
        return this._students.push(student);
    }

    getAverageMark() {
        let groupMarks = this._students.flatMap(({marks}) => marks)
        return groupMarks.reduce((sum, item) => sum + item)/groupMarks.length;
    }
}

class Student{
    constructor(name, marks) {
        this.name = name,
        this.marks = marks    
    }
}

let fepGroup = new Group();

let firstStudent = new Student('John Doe', [10, 102, 0]);
let secondStudent = new Student('Alex Smith', [10, 9, 8]);

fepGroup.addStudent(firstStudent);
fepGroup.addStudent(secondStudent);
fepGroup._students;
fepGroup.getAverageMark(this._students, 'marks')

// let getGroupMarks = [].concat.apply([], getMarks);