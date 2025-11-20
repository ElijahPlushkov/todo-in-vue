const ServerErrorsComp = {
    template: `
    <div class="error-box">
        <h4 class="text-danger">Dragon Alert! Server Issues:</h4>
        <ul>
          <li v-for="(serverError) in serverErrors" :key="serverError">{{ serverError }}</li>
        </ul>
      </div>
      <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>
    `,
    props: {
        serverErrors: {
            type: Array,
            required: true
        }
    }
}