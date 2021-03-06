//独占默认插槽
var CurrentUser = {
    template: `
    <span>
        <slot v-bind:user-bind="userProp">{{userProp.lastName}}</slot>
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
        userData: {
            firstName: 'Jim',
            lastName: 'Green'
        }
    }
})

