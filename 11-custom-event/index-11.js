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