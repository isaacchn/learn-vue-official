//绑定HTML class
var app1 = new Vue({
    el: '#app-1',
    data: {
        isActive: true,
        hasError: false
    }
})
var app2 = new Vue({
    el: '#app-2',
    data: {
        classObject: {
            active: true,
            'text-danger': false
        }
    }
})
//使用计算属性
var app3 = new Vue({
    el: '#app-3',
    data: {
        isActive: true,
        error: null
    },
    computed: {
        classObject: function () {
            return {
                active: this.isActive && !this.error,
                'text-danger': this.error && this.error.type === 'fatal'
            }
        }
    }
})
//数组语法
var app4 = new Vue({
    el: '#app-4',
    data: {
        activeClass: 'active',
        errorClass: 'text-danger'
    }
})
//绑定内联样式
var app5 = new Vue({
    el: '#app-5',
    data: {
        styleObject: {
            color: 'red',
            fontSize: '13px'
        }
    }
})