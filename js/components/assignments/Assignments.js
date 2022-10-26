import AssignmentList from './AssignmentList.js';

export default {
    components: { AssignmentList },
    template: `
        <assignment-list :assignments="filters.inprogress" title="In progress"></assignment-list>
        <assignment-list :assignments="filters.complete" title="Completed"></assignment-list>
    `,
    data() {
        return {
            assignments: [
                { name: 'First assignment', complete: false },
                { name: 'Second assignment', complete: false },
                { name: 'Third assignment', complete: false },
                { name: 'Fourth assignment', complete: false },
            ]
        }
    },
    computed: {
        filters() {
            return {
                inprogress: this.assignments.filter(assignment => !assignment.complete),
                complete: this.assignments.filter(assignment => assignment.complete),
            }
        }
    }
}
