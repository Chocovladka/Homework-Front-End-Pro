const API_URL = 'https://5dd3d5ba8b5e080014dc4bfa.mockapi.io';
const STUDENTS_URL = API_URL + '/students';

class Controller{
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