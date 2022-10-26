import Assignment from "./Assignment.js"

export default {
    components: { Assignment },
    template: `
        <div v-show="assignments.length">
            <h3>{{ title }}</h3>
            <assignment
                v-for="assignment in assignments"
                :key="assignment.name"
                :assignment="assignment"
            ></assignment>
        </div>
    `,
    props: {
        assignments: Array,
        title: String,
    }
}
