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
                { name: 'First assignment', complete: false, tag: 'science' },
                { name: 'Second assignment', complete: false, tag: 'maths' },
                { name: 'Third assignment', complete: false, tag: 'nepali' },
                { name: 'Fourth assignment', complete: false, tag: 'science' },
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
