export default {
    template: `
        <div class="form-group">
            <input type="checkbox" v-model="assignment.complete" class="mr-3">
            <label>{{ assignment.name }}</label>
        </div>
    `,
    props: {
        assignment: Object
    }
}
