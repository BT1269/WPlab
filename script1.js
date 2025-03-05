class Product {
    constructor(id, name, price, image) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.image = image;
    }
}

class Cart {
    constructor() {
        this.items = [];
    }

    addItem(product) {
        this.items.push(product);
        this.updateCart();
    }

    removeItem(productId) {
        this.items = this.items.filter(item => item.id !== productId);
        this.updateCart();
    }

    getTotalPrice() {
        return this.items.reduce((total, item) => total + item.price, 0);
    }

    updateCart() {
        const cartItemsContainer = document.getElementById("cart-items");
        const totalPriceElement = document.getElementById("total-price");

        cartItemsContainer.innerHTML = '';
        this.items.forEach(item => {
            const cartItem = document.createElement("div");
            cartItem.classList.add("cart-item");
            cartItem.innerHTML = `
                <span>${item.name}</span>
                <span>$${item.price}</span>
                <button class="remove-item" data-id="${item.id}">Remove</button>
            `;
            cartItemsContainer.appendChild(cartItem);
        });

        totalPriceElement.innerText = this.getTotalPrice().toFixed(2);

       
        const removeButtons = cartItemsContainer.querySelectorAll('.remove-item');
        removeButtons.forEach(button => {
            button.addEventListener('click', () => {
                const productId = button.getAttribute('data-id');
                this.removeItem(Number(productId)); 
            });
        });
    }
}

const products = [
    new Product(1, 'Nothing Phone 3a', 29.99, 'https://th.bing.com/th/id/OIP.Q0Zc4x4ZOCzYdbXiug00wQHaEK?w=324&h=182&c=7&r=0&o=5&pid=1.7'),
    new Product(2, 'Tomatoes(per kg)', 59.99, 'https://th.bing.com/th/id/OIP.REwsBj746YRmmLXoJr4enQHaGY?w=246&h=211&c=7&r=0&o=5&pid=1.7'),
    new Product(3, 'Toshiba Smart TV 55 inch', 17.99, 'https://th.bing.com/th/id/OIP.08t9rIDZNxqc1Q01rnWgJwHaHB?w=185&h=180&c=7&r=0&o=5&pid=1.7'),
    new Product(4, 'Potatoes(per kg)', 69.99, 'https://th.bing.com/th/id/OIP.ssqkg_dH6jCHZVY5r4g5iAHaFB?w=287&h=194&c=7&r=0&o=5&pid=1.7'),
    new Product(5, 'Amul Gold(1 ltr pack)', 59.99, 'https://th.bing.com/th/id/OIP.2gytavvwd6Z1TtDFr4ZBDQHaIq?w=187&h=219&c=7&r=0&o=5&pid=1.7'),
    new Product(6, 'Amul Cheese Cubes(250g)', 59.99, 'https://ts3.mm.bing.net/th?id=OIP.BJvZan3vo0ZPE4Fu_VYKzwHaHa&pid=15.1'),
    new Product(7, 'Oreo Cookies(Family pack)', 35.99, 'https://th.bing.com/th/id/OIP.BMLVivED6GwV1YfMOTLpDAHaHv?w=195&h=204&c=7&r=0&o=5&pid=1.7'),
    new Product(8, 'PS5(Spiderman 2 edition)', 9.99, 'data:image/jpeg;base64,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'),
    new Product(9, 'MacBook Pro', 19.99, 'https://th.bing.com/th/id/OIP.Y9tUX5s3zlLqHF5wR2YDNQHaEK?w=303&h=180&c=7&r=0&o=5&pid=1.7'),
];

const cart = new Cart();

function displayProducts() {
    const productList = document.getElementById('product-list');

    products.forEach(product => {
        const productItem = document.createElement('div');
        productItem.classList.add('product-item');
        productItem.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>$${product.price}</p>
            <button data-id="${product.id}">Add to Cart</button>
        `;
        productList.appendChild(productItem);

        const addToCartButton = productItem.querySelector('button');
        addToCartButton.addEventListener('click', () => {
            cart.addItem(product);
        });
    });
}

document.addEventListener('DOMContentLoaded', () => {
    displayProducts();
});
