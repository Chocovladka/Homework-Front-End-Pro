class MarksView extends StudentView{
    
    static DELETE_ICON_SELECTOR = '.delete-icon';
    static STUDENT_LINE_SELECTOR = '.student-line';
    static $MARK_INPUTS = $('.mark-input');

    constructor(options) {
        super()
        this._option = options;
        this._$el = this.initView();
        this._$addBtn = this.createBtn();
        this.$markInputs = $('.mark-input');
    }

    initView() {
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
            .on('click',
                MarksView.DELETE_ICON_SELECTOR,
                this.onDeleteIconClick.bind(this))
            .on('focusout',
                MarksView.STUDENT_LINE_SELECTOR,
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
        return el.closest(MarksView.STUDENT_LINE_SELECTOR);
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

    appendTo($container, el) {
        $container.append(el);
    }

    renderList(list) {
        let html = list.map(item => this.initStudentLine(item)).join('');
        this.appendTo(this._$el, html);
    }

    // generateItemHtml(item) {
    //     console.log(item)
    //     return MarksView.STUDENT_TEMPLATE
    //         .replace('{{name}}', item.name)
    //         .replace('{{id}}', item.id)
    //         .replace('{{email}}', item.email);
    // }

    renderStudent(item) {
        let studentHtml = this.initStudentLine(item)
        this.appendTo(this._$el, studentHtml);
    }

    renderUpdatedStudent(item) {
        let studentHtml = this.initStudentLine(item);
        this._$el.find(`[data-id="${item.id}"]`)
        .replaceWith(studentHtml)
    }
}