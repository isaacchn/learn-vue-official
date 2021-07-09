//动态组件
var AComp = {
    template: `
    <p>组件A</p>
    `
}
var BComp = {
    template: `
    <p>组件B</p>
    `
}
var CComp = {
    template: `
    <p>组件C</p>
    `
}
var app1 = new Vue({
    el: '#app-1',
    components: {
        'a-comp': AComp,
        'b-comp': BComp,
        'c-comp': CComp
    },
    data: {
        whichComp: ''
    },
    methods: {
        chooseComp: function (x) {
            this.whichComp = x + "-comp"
        }
    }
})