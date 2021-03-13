import { STUDENTS_URL } from '../../configs';
import Collection from '../model/Collection.js';
import MarksView from '../view/MarksView';

export default class Controller{
    constructor($container) {
        this.$container = $container

        this.studentsCollection = new Collection(STUDENTS_URL);
        this.studentsCollection.fetch()
            .then(() => this.renderList());
        
        this.marksView = new MarksView({
            onDelete: (id) => this.deleteStudent(id),
            onAdd: () => this.addForm(),
            onUpdate: (id, data)=> this.updateStudent(id, data)
        });
        this.marksView.appendTo($container, this.marksView._$el);
        this.marksView.appendTo($container, this.marksView._$addBtn);
        this.studentForm = new StudentFormView({
            onSave: (item) => this.createStudent(item)
        })
    }

    renderList() {
        this.marksView.renderList(this.studentsCollection.getList())
    }

    deleteStudent(id) {
        this.studentsCollection.deleteStudent(id)
            .then(() => this.marksView.removeElement(id));
    }

    addForm() {
       this.marksView.appendTo(this.$container, this.studentForm.$createForm) 
    }

    createStudent(item) {
        this.studentsCollection.createStudent(item)
        .then((item)=> this.renderStudent(item))
    }

    updateStudent(id, data) {
        return this.studentsCollection.updateStudent(id, data)
            .then((item) => this.marksView.renderUpdatedStudent(item))
        
    }

    renderStudent(student) {
        return this.marksView.renderStudent(student)
    }
}