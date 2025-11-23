const SubTaskFormComp = {
    template: `
    <div class="p-3 rounded" style="background-color: rgba(31, 58, 8, 0.5);">
        <h3 class="text-center mb-3">Add Subtask</h3>
        <p v-if="!selectedTodoId" class="text-warning text-center">
          Select a task first to add subtasks!
        </p>
        <form v-else @submit.prevent="createNewSubtask()">
          <div class="mb-3">
            <label for="subtask" class="form-label">Subtask Name</label>
            <input v-model="subtaskName" type="text" class="form-control" id="subtask"
                   placeholder="What's the smaller task?">
          </div>
          <div class="mb-3">
            <label for="time" class="form-label">Estimated Time (minutes)</label>
            <input v-model="subtaskEstimatedTime" type="number" class="form-control" id="time"
                   placeholder="How long will it take?">
          </div>
          <div class="mb-3">
            <label for="executor" class="form-label">Assigned To</label>
            <input v-model="subtaskExecutor" type="text" class="form-control" id="executor"
                   placeholder="Who's doing this?">
          </div>
          <button class="btn btn-success w-100" type="submit">Add Subtask</button>
        </form>
      </div>
    `,
    props: {
        formMode: {
            type: String,
            required: true
        },
        selectedTodoId: {
            type: Number,
            required: true
        }
    },
    data() {
        return {
            subtaskName: '',
            subtaskExecutor: '',
            subtaskEstimatedTime: ''
        }
    },
    methods: {
        createNewSubtask() {
            let newSubtask = {
                name: this.subtaskName,
                executor: this.subtaskExecutor,
                estimatedTime: this.subtaskEstimatedTime
            }
            this.$emit('create-new-subtask', newSubtask)

            this.subtaskName = ''
            this.subtaskExecutor = ''
            this.subtaskEstimatedTime = ''
        }
    }
}