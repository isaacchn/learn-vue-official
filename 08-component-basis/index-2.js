Vue.component('alert-box', {
    template: `
    <div class="demo-alert-box">
        <strong>Error!</strong>
        <slot></slot>
    </div>
    `
})
var app1 = new Vue({
    el: '#app-10',
    data: {}
})