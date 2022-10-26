export default {
    template: `
        <button :class="{
            'btn btn-primary': buttonType === 'primary',
            'btn btn-secondary': buttonType === 'secondary',
        }">
            {{ buttonType }}
        </button>
    `,
    props: {
        buttonType: {
            default: 'primary',
            type: String,
        }
    }
}
