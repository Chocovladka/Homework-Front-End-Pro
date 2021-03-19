import { chatWss } from './utils';

export default class WebSocketRequests{
    constructor(options) {
        this.options = options;
    }

    createChat() {
        this.socket = new WebSocket(chatWss);
        this.socket.onopen = this.onSocketOpen.bind(this);
        this.socket.onmessage = this.onSocketMessage.bind(this);
    }

    onSocketOpen() {
        this.socket.send('Welcome to the Chat')
    }

    onSocketMessage(data) {
        let msg = JSON.parse(data);
        this.options.onAdd(msg)
    }

    sendMsg(data) {
        this.socket.send(JSON.stringify(data))
    }
}
    
