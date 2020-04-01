'use strict';

var todoApp = new Vue({
    el: "#todo-app",
    data: {
        todoList:  [
            {text: "Todo 1", complete: false},
            {text: "Todo 2", complete: false},
            {text: "Todo 3", complete: false}
        ],
        newTodo: ""
    },
    methods: {
        addTodo: function () {
            this.todoList.push({text: this.newTodo, complete: false})
            this.newTodo = ""
        },
        completeTodo: function(event) {
            console.log(event)
        }
    }
})