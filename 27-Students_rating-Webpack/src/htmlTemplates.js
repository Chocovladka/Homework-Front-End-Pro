import $ from 'jquery';

export function createTable(){
    return $(`<div id="rating-table">
            <div id="table-head">
                <div id="surname-title">Фамилия</div> 
                <div id="lection-title">Лекции</div>
                <div id="mail-title">E-mail</div>
            </div><div id="lection-numeration">
            <span class="lection-number">1</span><span class="lection-number">2</span>
            <span class="lection-number">3</span><span class="lection-number">4</span>
            <span class="lection-number">5</span><span class="lection-number">6</span>
            <span class="lection-number">7</span><span class="lection-number">8</span>
            <span class="lection-number">9</span><span class="lection-number">10</span>
            </div></div>`)
}

export function createStudentLine(item) {
    return (`<div class="student-line" data-id="${item.id}">
                <div class="surname">${item.name}
                    <span class="delete-icon">X</span>
                </div>
                ${item.marks.map(
                    (mark,index)=>`<input type="number" class="mark-input " value="${mark}">`
                ).join('')}
                <div id="student-mail">${item.email}</div>
            </div>
        </div> `)
}

export function createForm() {
    return $(`<form id="student-form">
        <input type="text" id="name-input">
        <input type="email" id="mail-input">
        <input type="submit" id="save-btn" class="student-btn" value="Сохранить">
        </form>`)
}