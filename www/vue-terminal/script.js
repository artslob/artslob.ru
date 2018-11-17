var demo = new Vue({
    el: '#demo',
    data: {
        name: 'demo name'
    }
});

var app = new Vue({
    el: '#app',
    data: {
        name: 'artyom',
        demo: demo.name
    },
    methods: {
        test: function () {
            return new Date();
        }
    },
    computed: {
        reversed: function () {
            return this.name.split('').reverse().join('');
        }
    },
    mounted: function () {
        console.log('hi');
    },
});
