//在动态组件上使用keep-alive
Vue.component("tab-home", {
    template: "<div>Home component</div>"
});
Vue.component("tab-posts", {
    template: "<div>Posts component</div>"
});
Vue.component("tab-archive", {
    template: "<div>Archive component</div>"
});
//这里还有些问题
Vue.component("vertical-tab-posts", {
    template: `
    <div class="dynamic-component-demo-posts-tab dynamic-component-demo-tab">
        <ul class="dynamic-component-demo-posts-sidebar">
            <li v-for="post in postProps"
                v-bind:key="post.title"
                v-on:click="activePost=post">
            {{post.title}}
            </li>
        </ul>
        <div class="dynamic-component-demo-post-container">
            <div class="dynamic-component-demo-post">
                <h3>{{activePost.title}}</h3>
                <div>
                    <p>{{activePost.content}}</p>
                </div>
            </div>
        </div>
    </div>
    `,
    props: ['postProps'],
    data: {
        activePost: {}
    }
})
new Vue({
    el: '#app-1',
    data: {
        currentTab: 'Home',
        tabs: ['Home', 'Posts', 'Archive'],
        posts: [
            {title: "Cat Ipsum", content: "Don't wait for the storm to pass."},
            {title: "Hipster Ipsum", content: "Something..."},
            {title: "Cupcake Ipsum", content: "Anything..."}
        ]
    },
    computed: {
        currentTabComponent: function () {
            return 'tab-' + this.currentTab.toLowerCase();
        }
    }
})