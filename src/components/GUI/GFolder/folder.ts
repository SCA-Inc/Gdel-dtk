import Vue from 'vue'
import './styles.css'

export default Vue.extend({
    name: 'folder',
    props: {
        tile: {
            type: Boolean,
            default: false
        },
        outlined: {
            type: Boolean,
            default: false
        },
        color: {
            type: String,
            default: 'blue'
        }
    },
    computed: {
        folderClass() {
            return {
                'folder': true,
                'folder-color': this.color,
                'folder-tile': this.tile,
                'folder-outlined': this.outlined
            }
        }
    },
    render(h) {
        return h('div', { 
            staticClass: 'folder', 
            class: {
                'folder-color': this.color,
                'folder-tile': this.tile,
                'folder-outlined': this.outlined
            }
        })
    }
})