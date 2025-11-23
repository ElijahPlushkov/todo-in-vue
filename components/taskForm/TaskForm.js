const TaskForm = {
    template: `
       <div v-if="formMode === 'task'" class="p-3 rounded" style="background-color: rgba(31, 58, 8, 0.5);">
        <h3 class="text-center mb-3">Add New Task</h3>
        <form @submit.prevent="addTodo()">
          <div class="mb-3">
            <label for="todo" class="form-label">Task Name</label>
            <input v-model="todoName" type="text" class="form-control" id="todo"
                   placeholder="What needs to be done?">
          </div>
          <div class="mb-3">
            <label for="description" class="form-label">Description</label>
            <textarea v-model="todoDescription" class="form-control" id="description" rows="3"
                      placeholder="Describe your task..."></textarea>
          </div>
          <button class="btn btn-primary w-100" type="submit">Add to Swamp</button>
        </form>
      </div>
    `,
    props: {
        formMode: {
            type: String,
            required: true
        }
    },
    data() {
        return {
            todoName: '',
            todoDescription: ''
        }
    },
    methods: {
        addTodo() {
            let todo = {
                id: Date.now(),
                name: this.todoName,
                isDone: false,
                description: this.todoDescription,
                subtasks: []
            }

            console.log(todo)
            this.$emit('add-todo', todo)

            this.todoName = ''
            this.todoDescription = ''
        }
    }
}