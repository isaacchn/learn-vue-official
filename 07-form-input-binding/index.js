//基础用法
var app1 = new Vue({
    el: '#app-1',
    data: {
        message: ''
    }
})
var app2 = new Vue({
    el: '#app-2',
    data: {
        message: ''
    }
})
var app3 = new Vue({
    el: '#app-3',
    data: {
        checked: false
    }
})
var app4 = new Vue({
    el: '#app-4',
    data: {
        checkedNames: []
    }
})
var app5 = new Vue({
    el: '#app-5',
    data: {
        picked: ''
    }
})
var app6 = new Vue({
    el: '#app-6',
    data: {
        selected: ''
    }
})
var app7 = new Vue({
    el: '#app-7',
    data: {
        selected: []
    }
})
var app8 = new Vue({
    el: '#app-8',
    data: {
        selected: 'C',
        options: [
            {text: 'One', value: 'A'},
            {text: 'Two', value: 'B'},
            {text: 'Three', value: 'C'}
        ]
    }
})
//值绑定
var app9 = new Vue({
    el: '#app-9',
    data: {
        toggled: ''
    }
})
var app10 = new Vue({
    el: '#app-10',
    data: {
        picked: '',
        one_value: 'One Value',
        another_value: 'Another Value'
    }
})
var app11 = new Vue({
    el: '#app-11',
    data: {
        selected: ''
    }
})