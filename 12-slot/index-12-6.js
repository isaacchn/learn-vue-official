var ToDoList = {
    template: `
    <ul>
        <li v-for="todoItem in filteredTodos"
            v-bind:key="todoItem.id">
            <slot name="todo-slot" v-bind:slot-bind="todoItem">
                {{todoItem.text}}
            </slot>
        </li>
    </ul>
    `,
    props: ['filteredTodos']
}
var app1 = new Vue({
    el: '#app-1',
    components: {
        'todo-list': ToDoList
    },
    data: {
        todoData: [
            {key: '1', text: "plain text one"},
            {key: '2', text: "plain text two"},
            {key: '3', text: "plain text three", isCompleted: true},
            {key: '4', text: "plain text four"}
        ]
    }
})