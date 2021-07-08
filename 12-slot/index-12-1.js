Vue.component('navigation-link', {
    props: ['url'],
    template: `<a v-bind:href='url' class='nav-link'><slot></slot></a>`
})
Vue.component('submit-button',{
    template: `<button type='submit'><slot>Submit</slot></button>`
})
var app1 = new Vue({
    el: '#app-1'
})