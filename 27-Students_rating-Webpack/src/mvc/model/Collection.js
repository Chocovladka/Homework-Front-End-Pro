import $ from 'jquery';
import Http from './Http';

export default class Collection extends Http{

    constructor(baseUrl) {
        super(baseUrl)
        this.studentsList = [];
    }

    fetch() {
        return this.list().then((data) => this.setData(data));
    }

    setData(data) {
        return this.studentsList = data;
    }

    getList() {
        return this.studentsList;
    }

    deleteStudent(id) {
        this.delete(id)
        this.studentsList = this.studentsList.filter(item => item.id !== id)
        return Promise.resolve();
    }

    createStudent(item) {
        return this.create( item)
            .then(item => {
                this.studentsList.push(item);
                return item
            })
        
    }

    updateStudent(id, data) {
        let student = this.findStudentById(id);
        student.marks = data;
        
        return this.update(student)
            .then(item => {
                this.studentsList = this.studentsList.map((el) => (el.id != item.id ? el : item));
                return item
            });
    }

    findStudentById(id) {
        return this.studentsList.find(student => student.id == id)
           
    }
}