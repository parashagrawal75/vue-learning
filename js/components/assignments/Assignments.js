import AssignmentList from './AssignmentList.js';

export default {
    components: { AssignmentList },
    template: `
        <assignment-list :assignments="incompleteAssignments" title="In progress"></assignment-list>
        <assignment-list :assignments="completedAssignments" title="Completed"></assignment-list>
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
        completedAssignments() {
            return this.assignments.filter(assignment => assignment.complete)
        },
        incompleteAssignments() {
            return this.assignments.filter(assignment => !assignment.complete)
        }
    }
}
