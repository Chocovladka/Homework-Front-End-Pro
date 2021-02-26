class TodoListView{

    static TODO_ITEM_SELECTOR = '.todo';
    static DELETE_ICON_SELECTOR = '.delete-icon';

    constructor(options) {
        this._option = options;
        this._$el = this.initView();
    }

    initView() {
        return $(`<ul class="todo-list"></ul>`)
            .on(
            'click',
            TodoListView.DELETE_ICON_SELECTOR,
            this.onDeleteIconClick.bind(this)
        )
            .on(
            'click',
            TodoListView.TODO_ITEM_SELECTOR,
            this.onItemClick.bind(this)
        )
    }

    appendTo($container, el) {
        $container.append(el);
    }

    renderList(list) {
        const html = list.map(item => this.generateItemHtml(item)).join('');
        this._$el.html(html);
    }

    generateItemHtml(item) {
        return `<li class="todo ${item.completed ? 'done' : ''}" data-id="${item.id}">
        ${item.title}
        <span class="delete-icon">X</span>
        </li>`
    }

    onDeleteIconClick(e) {
        e.stopPropagation();
        let id = this.getElementId(e.target);
        this._option.onDelete(id)
    }

    onItemClick(e) {
        let id = this.getElementId(e.target);
        this._option.onToggle(id);
    }

    getElementId(el) {
        let parent = el.closest(TodoListView.TODO_ITEM_SELECTOR);
        return parent && parent.dataset.id
    }

    removeElement(id) {
        this._$el.find(`[data-id = "${id}"]`).remove();
    }

    renderElement(item) {
        console.log(item)
        let itemHtml = this.generateItemHtml(item);
        this._$el.find(`[data-id="${item.id}"]`)
            .replaceWith(itemHtml)
        
    }

    renderNewTodo(item) {
        let itemHtml = this.generateItemHtml(item);
        this._$el.append(itemHtml)
    }
}

