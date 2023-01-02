const app = Vue.createApp({
    data() {                   // <== ES6 Shorthand for: data: function () ...
        return {
            product: 'Socks',
            image: './assets/images/socks_green.jpg',
            inventory: 8
        }
    }
})