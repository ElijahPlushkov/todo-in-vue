const SubtasksComp = {
    template:`
        <h3>{{subtask.subtaskName}}</h3>
        <li>{{subtask.subtaskEstimatedTime}}</li>
        <li>{{subtask.subtaskExecutor}}</li>
    `,
    props: ['subtask']
}