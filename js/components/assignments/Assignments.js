import AssignmentList from './AssignmentList.js';
import AssignmentCreate from './AssignmentCreate.js';

export default {
    components: { AssignmentList, AssignmentCreate },
    template: `
        <assignment-list :assignments="filters.inprogress" title="In progress"></assignment-list>
        <assignment-list :assignments="filters.complete" title="Completed"></assignment-list>
        <assignment-create @add='add'></assignment-create>
    `,
    data() {
        return {
            assignments: [
                { name: 'First assignment', complete: false },
                { name: 'Second assignment', complete: false },
                { name: 'Third assignment', complete: false },
                { name: 'Fourth assignment', complete: false },
            ],
        }
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
