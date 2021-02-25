class NewTodoFormView{

    constructor(options) {
        this._option = options;
        this.$saveForm = this.initForm();
        this.$todoInput = $('#todo-input');
    }

    initForm() {
        return $(`<form id="enter-todo-form">
                <input id="todo-input" type="text" name="list-input">
                <input type="submit" id="save-btn" value="Save">
            </form>`)
            .on('submit', this.onTodoFormSubmit.bind(this))
    }

    onTodoFormSubmit(e) {
        e.preventDefault;

        let todo = {
            title: this.$todoInput.val()
        }
        alert(todo)
        this._option.onSave(todo)
    }

    clearInput() {
        this.$todoInput.val('')
    }
}

