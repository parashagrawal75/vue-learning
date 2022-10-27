export default {
    template: `
        <form @submit.prevent='add'>
            <div class='form-group d-flex'>
                <input placeholder='new assignment' class='form-control col-4 mr-3' v-model='newAssignment' />
                <button type='submit' class='btn btn-primary'>Add</button>
            </div>
        </form>
    `,
    data() {
        return {
            newAssignment: '',
        }
    },
    methods: {
        add() {
            this.$emit('add', this.newAssignment);

            this.newAssignment = '';
        }
    }
}
