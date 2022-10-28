import AssignmentList from './AssignmentList.js';
import AssignmentCreate from './AssignmentCreate.js';

export default {
    components: { AssignmentList, AssignmentCreate },
    template: `
        <div class="d-flex">
            <assignment-list :assignments="filters.inprogress" title="In progress">
                <assignment-create @add='add'></assignment-create>
            </assignment-list>
            <assignment-list :assignments="filters.complete" title="Completed"></assignment-list>
        </div>
    `,
    data() {
        return {
            assignments: [],
        }
    },
    created() {
        fetch('http://localhost:3001/assignments')
            .then(response => response.json())
            .then(assignments => {
                this.assignments = assignments;
            })
    },
    computed: {
        filters() {
            return {
                inprogress: this.assignments.filter(assignment => !assignment.complete),
                complete: this.assignments.filter(assignment => assignment.complete),
            }
        }
    },
    methods: {
        add(name) {
            this.assignments.push({
                name: name,
                complete: false
            });
        }
    }
}
