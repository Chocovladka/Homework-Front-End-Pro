import $ from 'jquery';

export default class ChatView{
    constructor(options) {
        this.options = options;
        this.$chat = this.initChat();
    }

    initChat() {
        return $(`<div id="table-head">
                <div class="chat-head">Имя</div> 
                <div class="chat-head">Сообщение</div>
            </div>`)
    }

    generateChatLine(item) {
        return $(`<div class="chat-line">
                <div class="username">${item.username}</div> 
                <div class="msg">${item.message}</div>
            </div>`)
        
    }

}