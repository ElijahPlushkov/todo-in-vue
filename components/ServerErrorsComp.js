const ServerErrorsComp = {
    template: `
        <div v-for="(serverError) in serverErrors" :key="serverError"
            class="alert alert-danger alert-dismissible fade show" role="alert"
        >
            {{ serverError }}
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