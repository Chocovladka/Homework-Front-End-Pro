import $ from 'jquery';

export const chatWss = 'wss://fep-app.herokuapp.com'

export function appendTo($container, el) {
        $container.append(el);
}
    
export function prependTo($container, el) {
        $container.prepend(el);
    }