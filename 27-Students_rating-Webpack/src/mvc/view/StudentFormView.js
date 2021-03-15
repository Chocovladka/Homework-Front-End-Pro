import $ from 'jquery';
import { createForm } from '../../htmlTemplates';

export default class StudentFormView{
    constructor(options) {
        this._option = options;
        this.$createForm = this.initForm();
        this.$nameInput = this.$createForm.find('#name-input');
        this.$mailInput = this.$createForm.find('#mail-input');
    }

    initForm() {
        return createForm()
        .on ('submit', this.onCreateFormSubmit.bind(this))
        
    }

    onCreateFormSubmit(e) {
        e.preventDefault();
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