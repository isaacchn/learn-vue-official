var app1 = new Vue({
    el: '#app-1',
    data: {
        items: [{message: 'Foo'}, {message: 'Bar'}]
    }
})
var app2 = new Vue({
    el: '#app-2',
    data: {
        parentMessage: 'Parent',
        items: [{message: 'Foo'}, {message: 'Bar'}]
    }
})
var app3 = new Vue({
    el: '#app-3',
    data: {
        object: {
            title: 'How to do lists in Vue',
            author: 'Jane Doe',
            publishedAt: '2016-04-10'
        }
    }
})
var app4 = new Vue({
    el: '#app-4',
    data: {
        sets: [[1, 2, 3, 4, 5], [6, 7, 8, 9, 10]]
    },
    methods: {
        even: function (numbers) {
            return numbers.filter(function (number) {
                return number % 2 === 0
            })
        }
    }
})