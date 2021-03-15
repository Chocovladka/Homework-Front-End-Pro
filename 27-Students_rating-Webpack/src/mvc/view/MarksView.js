import $ from 'jquery';
import { DELETE_ICON_SELECTOR, STUDENT_LINE_SELECTOR, appendTo  } from '../../configs.js';

import { createTable,createStudentLine } from '../../htmlTemplates';

export default class MarksView{

    constructor(options) {
        this._option = options;
        this._$el = this.initView();
        this._$addBtn = this.createBtn();
        this.$markInputs = $('.mark-input');
    }

    initStudentLine(item) {
        return createStudentLine(item);
    }

    initView() {
        return createTable()
            .on('click',
                DELETE_ICON_SELECTOR,
                this.onDeleteIconClick.bind(this))
            .on('focusout',
                STUDENT_LINE_SELECTOR,
                this.onTableFocusOut.bind(this))
    }

    createBtn() {
        return $(`<button id="add-btn" class="student-btn">Добавить</button>`)
            .on('click', this.onCreateBtnClick.bind(this));
    }

    onCreateBtnClick(e) {
        e.preventDefault();
        this._option.onAdd();
    }

    onDeleteIconClick(e) {
        e.stopPropagation();
        let id = this.getElementId(e.target);
        this._option.onDelete(id)
    }

    onTableFocusOut(e) {
        e.preventDefault();
        this._option.onUpdate(this.getElementId(e.target), this.getMarks(this.getMarkInputs(e.target)))
    }

    getElementId(el) {
        let parent = this.getParentLine(el);
        return parent && parent.dataset.id
    }

    getMarkInputs(el) {
        let parent = this.getParentLine(el);
        let markInputs = parent.querySelectorAll('.mark-input');
        return(markInputs)
    }

    getParentLine(el) {
        return el.closest(STUDENT_LINE_SELECTOR);
    }

    getMarks(inputs) {
        let marks = [];
        for (let i = 0; i < inputs.length; i++){
            marks[i] = +inputs[i].value
        }
        return marks
        
    }

    removeElement(id) {
        this._$el.find(`[data-id = "${id}"]`).remove();
    }

    renderStudentList(list) {
        let html = list.map(item => this.initStudentLine(item)).join('');
        appendTo(this._$el, html);
    }

    renderStudent(item) {
        let studentHtml = this.initStudentLine(item)
        appendTo(this._$el, studentHtml);
    }

    renderUpdatedStudent(item) {
        let studentHtml = this.initStudentLine(item);
        this._$el.find(`[data-id="${item.id}"]`)
        .replaceWith(studentHtml)
    }
}