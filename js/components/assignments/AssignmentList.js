import Assignment from "./Assignment.js"
import AssignmentTags from "./AssignmentTags.js";

export default {
    components: { Assignment, AssignmentTags },
    template: `
        <div v-show="assignments.length">
            <h3>
                {{ title }}
                <span>({{ filteredAssignments.length }})</span>
            </h3>
            <assignment-tags
                :initial-tags="this.assignments.map(assignment => assignment.tag)"
                @change="this.currentTag = $event"
                :current-tag="currentTag"
            />
            <assignment
                v-for="assignment in filteredAssignments"
                :key="assignment.name"
                :assignment="assignment"
            ></assignment>
        </div>
    `,
    props: {
        assignments: Array,
        title: String,
    },
    computed: {
        filteredAssignments() {
            if(this.currentTag == 'all') {
                return this.assignments
            } else {
                return this.assignments.filter(assignment => assignment.tag == this.currentTag)
            }
        }
    },
    data() {
        return {
            currentTag: 'all',
        };
    }
}
