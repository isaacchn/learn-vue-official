//解构插槽 Prop
var CurrentUser = {
    template: `
    <span>
        <slot v-bind:whatever="userProp">{{userProp.lastName}}</slot>
    </span>
    `,
    props: ['userProp']
}
var app1 = new Vue({
    el: '#app-1',
    components: {
        'current-user': CurrentUser
    },
    data: {
        user: {
            firstName: 'Jim',
            lastName: 'Green'
        }
    }
})