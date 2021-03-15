import $ from 'jquery';

export const API_URL = 'https://5dd3d5ba8b5e080014dc4bfa.mockapi.io';
export const STUDENTS_URL = API_URL + '/students';

export const DELETE_ICON_SELECTOR = '.delete-icon';
export const STUDENT_LINE_SELECTOR = '.student-line';
export function appendTo($container, el) {
        $container.append(el);
    }