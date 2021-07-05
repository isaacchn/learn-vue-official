var app1 = new Vue({
    el: '#app-1',
    data: {
        counter: 0
    }
})
var app2 = new Vue({
    el: '#app-2',
    data: {
        name: 'Vue.js'
    },
    methods: {
        greet: function (event) {
            alert('Hello' + this.name + '!')
            if (event) {
                alert(event.target.tagName)
            }
        }
    }
})
var app3 = new Vue({
    el: '#app-3',
    methods: {
        say: function (message) {
            alert(message)
        }
    }
})
var app4 = new Vue({
    el: '#app-4',
    methods: {
        warn: function (message, event) {
            if (event) {
                event.preventDefault()
            }
            alert(message)
        }
    }
})