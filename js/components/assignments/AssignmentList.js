import Assignment from "./Assignment.js"
import AssignmentTags from "./AssignmentTags.js";

export default {
    components: { Assignment, AssignmentTags },
    template: `
        <div v-show="show && assignments.length" class="col-6">
            <div class="d-flex">
                <h3>
                    {{ title }}
                    <span>({{ filteredAssignments.length }})</span>
                </h3>
                <span role="button" class="ml-5" @click="show = false" v-show="canBeClosed">&times;</span>
            </div>
            <assignment-tags
                :initial-tags="this.assignments.map(assignment => assignment.tag)"
                v-model:currentTag="currentTag"
            />
            <assignment
                v-for="assignment in filteredAssignments"
                :key="assignment.name"
                :assignment="assignment"
            ></assignment>

            <slot />

            <div v-if="$slots.secondSlot"> <slot name="secondSlot" /> </div>
        </div>
    `,
    props: {
        assignments: Array,
        title: String,
        canBeClosed: { type: Boolean, default: false }
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
            show: true,
        };
    }
}
