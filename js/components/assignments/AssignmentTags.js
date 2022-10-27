export default {
    template: `
        <div class='my-4'>
            <button
                v-for="tag in tags"
                class="btn btn-outline-primary mr-3 p-2"
                @click="$emit('change', tag)"
                :class="{'btn-primary text-white': tag == currentTag}"
            >{{ tag }}</button>
        </div>
    `,
    props: {
        initialTags: Array,
        currentTag: String,
    },
    computed: {
        tags() {
            return ['all', ...new Set(this.initialTags)];
        },
    },
}
