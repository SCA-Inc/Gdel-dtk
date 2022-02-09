import Vue from 'vue'
import './folderBox.css'

export default Vue.extend({
    name: 'foldr-box',
    props: {
        outlined: {
            type: Boolean,
            default: false
        },
        rounded: {
            type: Boolean,
            default: false
        },
        tile: {
            type: Boolean,
            default: false 
        }
    },
    computed: {
        classes() {
            return {
                'folder-box': true,
                'folder-box-outlined': this.outlined,
                'folder-box-rounded': this.rounded,
                'folder-box-tile': this.tile
            }
        }
    },
    render(h) {
        return h('div', {
            staticClass: 'folder-box',
            class: {
                'folder-box-outlined': this.outlined,
                'folder-box-rounded': this.rounded,
                'folder-box-tile': this.tile
            }
        }, this.$slots.default)
    }
})