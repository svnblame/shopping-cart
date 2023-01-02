const app = Vue.createApp({
    data() {                   // <== ES6 Shorthand for: data: function () ...
        return {
            cart: 0,
            product: 'Socks',
            image: './assets/images/socks_blue.jpg',
            inventory: 8,
            details: ['50% cotton', '30% wool', '20% polyester'],
            variants: [
                { id: 2234, color: 'Green', image: './assets/images/socks_green.jpg'},
                { id: 2235, color: 'Blue', image: './assets/images/socks_blue.jpg' }
            ],
            sizes: [
                { id: 1, size: 'Small' },
                { id: 2, size: 'Medium' },
                { id: 3, size: 'Large' }
            ]
        }
    },
    methods: {
        addToCart() {
            if(this.cart >= 0) this.cart += 1
        },
        subtractFromCart() {
            if (this.cart > 0) this.cart -= 1
        },
        updateImage(variantImage) {
            this.image = variantImage
        }
    }
})
