const TodoCardComp = {
    template: `
        <div class="card my-card" 
         :class="[todo.isDone ? 'completetodo' : 'incompletetodo', selectedTodoId === todo.id ? 'selected-todo-border' : '']"
         @click="$emit('select-todo-id', todo.id)">
            <div class="d-flex justify-content-between align-items-start">
                <div class="flex-grow-1">
                    <h5 class="card-title todo-title">{{ todo.name }}</h5>
                    <p class="card-text todo-description">{{ todo.description }}</p>
                    
                    <div v-if="todo.subtasks && todo.subtasks.length > 0">
                        <h6 class="text-warning mt-3">Subtasks:</h6>
                        <subtasks-comp 
                            v-for="(subtask, index) in todo.subtasks" 
                            :key="index"
                            :subtask="subtask"
                        ></subtasks-comp>
                    </div>
                </div>
                
                <div class="d-flex flex-column ms-3">
                    <button class="btn btn-sm mb-2" 
                            :class="todo.isDone ? 'btn-success' : 'btn-warning'"
                            @click.stop="$emit('change-todo-status', todo)">
                        {{ todo.isDone ? 'Completed!' : 'Mark Complete' }}
                    </button>
                    <button class="btn btn-sm btn-danger mb-2" 
                            @click.stop="$emit('delete-todo', todo.id)">
                        Delete
                    </button>
                    <button class="btn btn-sm" 
                            :class="selectedTodoId === todo.id ? 'btn-primary' : 'btn-outline-primary'"
                            @click.stop="$emit('select-todo-id', todo.id)">
                        Add Subtasks
                    </button>
                </div>
            </div>
        </div>`,
    components: {
        'subtasks-comp': SubtasksComp
    },
    props: ['todo', 'selectedTodoId']
}