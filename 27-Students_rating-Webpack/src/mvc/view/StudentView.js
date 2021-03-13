export default class StudentView{
    

    initStudentLine(item) {
        return (`<div class="student-line" data-id="${item.id}">
                <div class="surname">${item.name}
                    <span class="delete-icon">X</span>
                </div>
                <input type="text" class="mark-input data-mark-1" value="${item.marks[0]}">
                <input type="text" class="mark-input data-mark-2" value="${item.marks[1]}">
                <input type="text" class="mark-input data-mark-3" value="${item.marks[2]}">
                <input type="text" class="mark-input data-mark-4" value="${item.marks[3]}">
                <input type="text" class="mark-input data-mark-5" value="${item.marks[4]}">
                <input type="text" class="mark-input data-mark-6" value="${item.marks[5]}">
                <input type="text" class="mark-input data-mark-7" value="${item.marks[6]}">
                <input type="text" class="mark-input data-mark-8" value="${item.marks[7]}">
                <input type="text" class="mark-input data-mark-9" value="${item.marks[8]}">
                <input type="text" class="mark-input data-mark-10" value="${item.marks[9]}">
                <div id="student-mail">${item.email}</div>
            </div>
        </div> `)
    }
}