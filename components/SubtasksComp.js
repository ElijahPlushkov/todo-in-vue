const SubtasksComp = {
    template:`
        <div class="subtask-item mt-2">
            <h6 class="text-warning mb-1">{{ subtask.subtaskName }}</h6>
            <ul class="mb-0">
                <li>Estimated: {{ subtask.subtaskEstimatedTime }} minutes</li>
                <li>Assigned to: {{ subtask.subtaskExecutor }}</li>
            </ul>
        </div>`,
    props: ['subtask']
}