// vue app
var app = new Vue({
    el: '#app',
    data: {
        message: 'Hello Vue!'
    }
})

// binding with v-bind
var app2 = new Vue({
    el: '#app-2',
    data: {
        message: 'You loaded this page on ' + new Date().toLocaleString()
    }
})

// structural binding example with v-if
var app3 = new Vue({
    el: '#app-3',
    data: {
        seen: true
    }
})

// displaying items in an array with v-for
var app4 = new Vue({
    el: '#app-4',
    data: {
        todos: [
            { text: 'Learn JS' },
            { text: 'Learn Vue' },
            { text: 'Build something awesome' }
        ]
    }
})

// attach event listeners with v-on
var app5 = new Vue({
    el: '#app-5',
    data: {
        message: 'Hello Vue.js!'
    },
    methods: {
        reverseMessage: function () {
            this.message = this.message.split('').reverse().join('')
        }
    }
})

// binding between form input and app state with v-model
var app6 = new Vue({
    el: '#app-6',
    data: {
        message: 'Hello Vue!'
    }
})

// vue component example
Vue.component('todo-item', {
    props: ['todo'],
    template: '<li>{{ todo.text }}</li>'
})
var app7 = new Vue({
    el: '#app-7',
    data: {
        groceryList: [
            { id: 0, text: 'Vegetables' },
            { id: 1, text: 'Cheese' },
            { id: 2, text: 'Whatever else humans are supposed to eat' },
        ]
    }
})