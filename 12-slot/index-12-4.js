var CurrentUser = {
    template: `
    <span>
        <slot v-bind:user="user">{{user.lastName}}</slot>
    </span>
    `,
    props: ['user']
}
var app1 = new Vue({
    el: '#app-1',
    components: {
        'current-user': CurrentUser
    },
    data: {
        userData: {
            firstName: 'Jim',
            lastName: 'Green'
        }
    }
})