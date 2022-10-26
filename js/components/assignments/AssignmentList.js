export default {
    template: `
        <div v-show="assignments.length">
            <h3>{{ title }}</h3>
            <div class="form-group"
                v-for="assignment in assignments"
                :key="assignment.name"
            >
                <input type="checkbox" v-model="assignment.complete" class="mr-3">
                <label>{{ assignment.name }}</label>
            </div>
        </div>
    `,
    props: {
        assignments: Array,
        title: String,
    }
}
