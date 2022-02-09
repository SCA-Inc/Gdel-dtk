import Vue from 'vue'
import './folderLabel.css'

export default Vue.extend({
    name: 'folder-label',
    props: {
        left: {
            type: Boolean,
            default: false
        }
    },
    computed: {
        clasess() {
            return {
                'folder-label': true,
                'folder-label--left': this.left
            }
        }
    },
    render(h) {
        return h('div', {
            staticClass: 'folder-label',
            class: {
                'folder-label--left': this.left
            }
        }, this.$slots.default)
    }
})