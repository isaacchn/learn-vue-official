//kebab-case
var ComponentBlogPost = {
    props: ['postTitle'],
    template: `
    <h3>{{postTitle}}</h3>
    `
}
var app1 = new Vue({
    el: '#app-1',
    components: {
        'component-blog-post': ComponentBlogPost
    }
})