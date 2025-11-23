const ServerErrorsComp = {
    template: `
        <div class="col-12">
          <div class="error-box">
            <h4 class="text-danger">Dragon Alert! Server Issues:</h4>
            <ul>
              <li v-for="error in serverErrors" :key="error">{{ error }}</li>
            </ul>
          </div>
        </div>
    `,
    props: {
        serverErrors: {
            type: Array,
            required: true
        }
    }
}