var app1 = new Vue({
    el: '#app-1',
    data: {
        message: 'Hello Vue.js!'
    },
    computed: {
        reversedMessage: function () {
            return this.message.split('').reverse().join('')
        }
    }
})
var app2 = new Vue({
    el: '#app-2',
    data: {
        firstName: 'Foo',
        lastName: 'Bar'
    },
    computed: {
        fullName: {
            get: function () {
                return this.firstName + ' ' + this.lastName
            },
            set: function (newValue) {
                var names = newValue.split(' ')
                this.firstName = names[0]
                this.lastName = names[names.length - 1]
            }
        }
    }
})
//侦听器
var app3 = new Vue({
    el: "#app-3",
    data: {
        question: '',
        answer: 'I cannot give you an answer until you ask me a question.'
    },
    watch: {
        question: function (newQuestion, oldQuestion) {
            this.answer = 'Waiting for you to stop typing...'
            this.debouncedGetAnswer()
        }
    },
    created: function () {
        this.debouncedGetAnswer = _.debounce(this.getAnswer, 500)
    },
    methods: {
        // debouncedGetAnswer: function () {
        //     _.debounce(this.getAnswer, 500)
        // },
        getAnswer: function () {
            if (this.question.indexOf('?') === -1) {
                this.answer = 'Questions usually contain a question mark. ;-)'
                return
            }
            this.answer = 'Thinking...'
            var vm = this
            axios.get('https://yesno.wtf/api')
                .then(function (response) {
                    vm.answer = _.capitalize(response.data.answer)
                })
                .catch(function (error) {
                    vm.answer = 'Error! Could not reach the API. ' + error
                })
        }
    }
})