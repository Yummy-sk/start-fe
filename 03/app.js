class Todo {

    constructor() {
        this.todos = [];
    }

    add(todo) {
        this.todos.push(todo);
    }

    read() {
        this.todos.forEach((todo) => console.log(todo));
    }

    update(targetTodo, newTodo) {

        if (this.isInclude(targetTodo)) {
            const idx = this.findIndex(targetTodo);
            console.log(idx);
            this.todos[idx] = newTodo;
        }
    }

    delete(targetTodo) {
        if (this.isInclude(targetTodo)) {
            const idx = this.findIndex(targetTodo);
            this.todos.splice(idx, 1);
        }
    }

    isInclude(targetTodo) {
        return this.todos.includes(targetTodo);
    }

    findIndex(targetTodo) {
        return this.todos.indexOf(targetTodo);
    }
}

const todo = new Todo();

todo.add('안녕');
todo.add('안녕1');
todo.add('안녕2');
todo.update('안녕1', '바이');
todo.delete('바이');
todo.read();
