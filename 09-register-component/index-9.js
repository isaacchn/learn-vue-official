//局部注册
//局部注册的组件在其子组件中不可用
var ComponentA = {
    template: `
    <button v-on:click="add">You clicked me {{times}} times.</button>
    `,
    data: function () {
        return {times: 0}
    },
    methods: {
        add: function () {
            this.times++
        }
    }
}
new Vue({
    el: '#app-1',
    components: {
        'component-a': ComponentA
    }
})