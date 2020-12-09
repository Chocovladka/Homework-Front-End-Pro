const students = [
    {
        id: 10,
        name: 'John Smith',
        marks: [10, 8, 6, 9, 8, 7]
    },
    {
        id: 11,
        name: 'John Doe',
        marks: [9, 8, 7, 6, 7]
    },
    {
        id: 12,
        name: 'Thomas Anderson',
        marks: [6, 7, 10, 8]
    },
    {
        id: 13,
        name: 'Jean-Baptiste Emanuel Zorg',
        marks: [10, 9, 8, 9]
    }
];

let allMarks = getMarksMassive(students);

console.log(averageStudentMark(12));

console.log(averageGroupMark());

// let avg = arr.reduce((acc, { marks }) => acc + marks, 0) / marks.length
// console.log(arr[0].marks)

function averageStudentMark(idNum) {
    let index = getIndex(idNum);
    let avg =
        students[index].marks.reduce((acc, marks) => acc + marks, 0)
        / students[index].marks.length;
    return index, avg
}

function getIndex(idNum) {
    let index = students.findIndex(item => item.id === idNum);
    return index
}

function averageGroupMark() {
    let avg;
    avg = allMarks.reduce((sum, current) => sum + current)/allMarks.length
    return avg
}

function getMarksMassive(students) {
    let massive = [];
    for (let i = 0; i < students.length; i++){
        massive[i] = students[i].marks;
    }
    return massive.flat()
}




