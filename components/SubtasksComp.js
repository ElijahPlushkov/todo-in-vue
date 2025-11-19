const SubtasksComp = {
    template:`
            <div>
                <h3>{{subtask.subtaskName}}</h3>
                <ul>
                    <li>{{subtask.subtaskEstimatedTime}}</li>
                    <li>{{subtask.subtaskExecutor}}</li>
                </ul>
            </div>`,
    props: ['subtask']
}