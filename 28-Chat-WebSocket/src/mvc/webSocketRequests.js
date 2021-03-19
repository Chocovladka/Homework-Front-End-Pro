import { chatWss } from './utils';

export const socket = new WebSocket(chatWss);

export function onOpen(data) {
    let msg = JSON.stringify(data);
    socket.onopen = sendMsg(msg);
}

export function sendMsg(data) {
    socket.send(data)
    console.log(data)
}
    
export function onMsg(data){
    socket.onmessage = showMsg(data);

}

export function showMsg(data) {
    let out = JSON.parse(data);
    console.log(out)
    return out
}
