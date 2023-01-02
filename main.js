const app = Vue.createApp({
    data() {                   // <== ES6 Shorthand for: data: function () ...
        return {
            product: 'Socks',
            description: 'A warm fuzzy pair of socks.'
        }
    }
})