class StudentFormView{
    constructor(options) {
        this._option = options;
        this.$createForm = this.initForm();
        this.$nameInput = this.$createForm.find('#name-input');
        this.$mailInput = this.$createForm.find('#mail-input');
    }

    initForm() {
        return $(`<form id="student-form">
        <input type="text" id="name-input">
        <input type="email" id="mail-input">
        <input type="submit" id="save-btn" class="student-btn" value="Сохранить">
        </form>`)
        .on ('submit', this.onCreateFormSubmit.bind(this))
        
    }

    onCreateFormSubmit(e) {
        e.preventDefault();
        console.log(1);
        let student = {
            name: this.$nameInput.val(),
            email: this.$mailInput.val()
        }
        this._option.onSave(student);
        this.clearInputs();
    }

    clearInputs() {
        this.$nameInput.val('');
        this.$mailInput.val('')
    }
}