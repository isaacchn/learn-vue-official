//基本示例
Vue.component('button-counter', {
    //一个组件的data选项必须是一个函数
    data: function () {
        return {
            count: 0
        }
    },
    template: '<button v-on:click="count++">You clicked me {{count}} times.</button>'
})

new Vue({el: '#app-1'})

//通过Prop向子组件传递数据
Vue.component('blog-post', {
    props: ['title'],
    template: '<h3>{{title}}</h3>'
})
new Vue({
    el: '#app-2',
    data: {
        posts: [
            {id: 1, title: 'My journey with Vue'},
            {id: 2, title: 'Blogging with Vue'},
            {id: 3, title: 'Why Vue is so fun'}
        ]
    }
})

//监听子组件事件
Vue.component('blog-post-2', {
    props: ['post_prop'],
    template: `
    <div class="blog-post">
      <h3>{{ post_prop.title }}</h3>
      <button v-on:click="$emit('enlarge-text',0.1)">
        Enlarge text
      </button>
      <div v-html="post_prop.content"></div>
    </div>
  `
})
new Vue({
    el: '#app-3',
    data: {
        posts: [
            {
                title: 'My journey with Vue',
                content: '<p>...content 1...</p>'
            },
            {
                title: 'My journey with Vue',
                content: '<p>...content 2...</p>'
            },
            {
                title: 'My journey with Vue',
                content: '<p>...content 3...</p>'
            }
        ],
        postFontSize: 1
    }
})
//在组件上使用v-model
