import $ from 'jquery';

export default class FormView{
    constructor(options) {
        this.options = options;
        this.$form = this.initForm();
        this.$nameInput = this.$form.find('#name-input');
        this.$msgInput = this.$form.find('#msg-input');
    }

    initForm() {
        return $(`<form id="chat-form">
        <input type="text" id="name-input">
        <input type="text" id="msg-input">
        <input type="submit" id="save-btn" value="Отправить">
        </form>`)
            .on('submit', this.onChatFormSubmit.bind(this));
    }

    onChatFormSubmit(e) {
        e.preventDefault();

        let chatMsg = {
            username: this.$nameInput.val(),
            message: this.$msgInput.val()
        }
        this.options.onSave(chatMsg);
        this.clearInputs();
    }

    clearInputs() {
        this.$nameInput.val('');
        this.$msgInput.val('');
    }
}