const TodoCardComp = {
    template: `
        <div class="card my-card" style="width: 18rem;">
            <div class="card-body" :class="todo.isDone ? 'completetodo' : 'incompletetodo'">
                <h1>{{todo.id}}</h1>
                <h5 class="card-title">{{ todo.name }}</h5>
                <p class="card-text">{{ todo.description }}</p>
                <a href="#" class="btn btn-primary" @click="$emit('change-todo-status', todo)">{{ todo.isDone ? "undo" :
                        "done" }}</a>
                        <a href="#" class="btn btn-danger" @click="$emit('delete-todo', todo.id)">delete todo</a>
            </div>
        </div>`,
    props: ['todo']
}