//具名插槽
var BaseLayout = {
    template: `
    <div class=container>
        <header>
            <slot name="header"></slot>
        </header>
        <main>
            <slot></slot>
        </main>
        <footer>
            <slot name="footer"></slot>
        </footer>
    </div>
    `
}
var app1 = new Vue({
    el: '#app-1',
    components: {
        'base-layout': BaseLayout
    }
})
//作用域插槽
var CurrentUser = {
    template: `
    <span>
        <slot v-bind:user="user">{{user.lastName}}</slot>
    </span>
    `,
    props: ['user']
}
var app2 = new Vue({
    el: '#app-2',
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
