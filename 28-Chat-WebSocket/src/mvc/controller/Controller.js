import $ from 'jquery';
import FormView from '../view/FormView';
import ChatView from '../view/ChatView';
import { appendTo} from '../utils';
import WebSocketRequests from '../webSocketRequests';

export default class Controller{
    constructor($container) {
        this.$container = $container;
        this.chat = new WebSocketRequests({
            onAdd: (data)=> this.showMsg(data)
        });

        this.chat.createChat();

        this.chatView = new ChatView();
        appendTo(this.$container, this.chatView.$chat);

        this.formView = new FormView({
            onSave: (data) => this.sendMsg(data)
            
        });
        appendTo(this.$container, this.formView.$form);

        

    }

    sendMsg(data) {
        this.chat.sendMsg(data);
    }

    showMsg(data) {
        appendTo(this.chatView.$chat,this.chatView.generateChatLine(data));
    }
}

    