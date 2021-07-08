var BaseInput = {
    inheritAttrs: false,
    props: ['label', 'value'],
    computed: {
        inputListeners: function () {
            var vm = this
            return Object.assign({},
                this.$listeners,
                {
                    input: function (event) {
                        vm.$emit('input', event.target.value)
                    }
                }
            )
        }
    },
    template: `
    <label>
        {{label}}
        <input 
                v-bind="$attrs"
                v-bind:value="value"
                v-on="inputListeners"
                >
    </label>
    `
}
var BaseCheckbox = {
    model: {
        prop: 'checked',
        event: 'change'
    },
    props: {
        checked: Boolean
    },
    template: `
    <input 
            type="checkbox"
            v-bind:checked="checked"
            v-on:change="$emit('input-change',$event.target.checked)"
            >
    `
}
var app1 = new Vue({
    el: '#app-1',
    components: {
        'base-checkbox': BaseCheckbox
    },
    data: {
        loginVue: true
    },
    methods: {
        "changed": function (checked) {
            console.log(checked)//未实现
        }
    }
})
var app2 = new Vue({
    el: '#app-2',
    components: {
        'base-input': BaseInput
    },
    data: {
        'label1': "LABEL"
    },
    methods: {
        focused: function () {
            console.log('focused')
        }
    }
})