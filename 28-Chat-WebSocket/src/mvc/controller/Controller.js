import $ from 'jquery';
import FormView from '../view/FormView';
import ChatView from '../view/ChatView';
import { socket, onOpen, onMsg } from '../webSocketRequests';
import { appendTo, prependTo} from '../utils';

export default class Controller{
    constructor($container) {
        this.$container = $container;
        this.socket = socket;

        this.chatView = new ChatView();
        appendTo(this.$container, this.chatView.$chat);

        this.formView = new FormView({
            onSave: (data) => this.showMsg(data)
            
        });
        appendTo(this.$container, this.formView.$form);

        

    }

    showMsg(data) {
        onOpen(data);
        appendTo(this.chatView.$chat,this.chatView.generateChatLine(JSON.parse(data)));
    }
}

    