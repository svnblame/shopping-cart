const app = Vue.createApp({
    data() {                   // <== ES6 Shorthand for: data: function () ...
        return {
            product: 'Socks',
            image: './assets/images/socks_green.jpg',
            inventory: 8,
            details: ['50% cotton', '30% wool', '20% polyester'],
            variants: [
                { id: 2234, color: 'Green'},
                { id: 2235, color: 'Blue'}
            ],
            sizes: [
                { id: 1, size: 'Small' },
                { id: 2, size: 'Medium' },
                { id: 3, size: 'Large' }
            ]
        }
    }
})