import Vue from 'vue'
import './folder.css'

export default Vue.extend({
    name: 'folder',
    computed: {
        folderClass() {
            return {
                'folder': true
            }
        }
    },
    render(h) {
        return h('div', {staticClass: 'folder'},
        this.$slots.default)
    }
})
