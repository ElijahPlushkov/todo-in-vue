const MainFormComp = {
    template: `
    <div class="col-12 col-lg-6 mb-3">
      <!-- Form Toggle Buttons -->
      <div class="d-grid gap-2 d-md-block mb-4 text-center">
        <button type="button" class="btn me-2"
                :class="formMode === 'task' ? 'btn-primary' : 'btn-outline-primary'"
                @click="$emit('change-form-mode')">Todo Task</button>
        <button type="button" class="btn"
                :class="formMode === 'subtask' ? 'btn-success' : 'btn-outline-success'"
                @click="$emit('change-form-mode')">Subtask</button>
      </div>

      <!-- Task Form -->
    <task-form v-if="formMode === 'task'" 
        :next-todo-id="nextTodoId"
        :form-mode="formMode" 
        @add-todo="addTodo"
    ></task-form>
    
    <!-- Subtask Form -->
    <sub-task-form v-else  
        :form-mode="formMode" 
        :selected-todo-id="selectedTodoId" 
        @create-new-subtask="createNewSubtask"
    ></sub-task-form>
    </div>
    `,
    components: {
        'task-form': TaskForm,
        'sub-task-form': SubTaskFormComp
    },
    props: {
        selectedTodoId: {
            type: Number,
            required: true
        },
        formMode: {
            type: String,
            required: true
        },
        nextTodoId: {
            type: Number,
            required: true
        }
    },
    methods: {
        addTodo(todo) {
            this.$emit('add-todo', todo)
        },
        createNewSubtask(newSubtask) {
            this.$emit('create-new-subtask', newSubtask)
        }
    }
}