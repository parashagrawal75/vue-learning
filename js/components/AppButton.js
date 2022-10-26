export default {
    template: `
        <button class='btn btn-primary'>
            <slot />
        </button>
    `,
    mounted() {
        console.log('Mounted')
    }
}
