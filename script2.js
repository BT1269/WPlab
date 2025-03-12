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
      this.items = {};
    }
  
    addItem(product) {
      if (this.items[product.id]) {
        this.items[product.id].quantity += 1;
      } else {
        this.items[product.id] = { product: product, quantity: 1 };
      }
      this.updateCart();
    }
  
    removeItem(productId) {
      if (this.items[productId]) {
        if (this.items[productId].quantity > 1) {
          this.items[productId].quantity -= 1;
        } else {
          delete this.items[productId];
        }
      }
      this.updateCart();
    }
  
    getTotalPrice() {
      let total = 0;
      Object.values(this.items).forEach(itemObj => {
        total += itemObj.product.price * itemObj.quantity;
      });
      return total;
    }
  
    updateCart() {
      const cartItemsContainer = document.getElementById("cart-items");
      const totalPriceElement = document.getElementById("total-price");
      cartItemsContainer.innerHTML = '';
  
      const headerRow = document.createElement("div");
      headerRow.style.display = "flex";
      headerRow.style.justifyContent = "space-between";
      headerRow.style.fontWeight = "bold";
      headerRow.style.marginBottom = "10px";
      headerRow.innerHTML = `
        <span style="width:40%;">Item</span>
        <span style="width:20%;">Price</span>
        <span style="width:20%;">Quantity</span>
        <span style="width:20%;">Actions</span>
      `;
      cartItemsContainer.appendChild(headerRow);
  
      Object.values(this.items).forEach(itemObj => {
        const cartItem = document.createElement("div");
        cartItem.classList.add("cart-item");
        cartItem.style.display = "flex";
        cartItem.style.justifyContent = "space-between";
        cartItem.style.alignItems = "center";
        cartItem.style.marginBottom = "15px";
        cartItem.style.padding = "15px";
        cartItem.style.backgroundColor = "#FFF";
        cartItem.style.borderRadius = "8px";
  
        cartItem.innerHTML = `
          <span style="width:40%;">${itemObj.product.name}</span>
          <span style="width:20%;">$${itemObj.product.price}</span>
          <span style="width:20%;">${itemObj.quantity}</span>
          <span style="width:20%;">
            <button class="add-item" data-id="${itemObj.product.id}">Add</button>
            <button class="remove-item" data-id="${itemObj.product.id}">Remove</button>
          </span>
        `;
        cartItemsContainer.appendChild(cartItem);
      });
  
      totalPriceElement.innerText = this.getTotalPrice().toFixed(2);
  
      const addButtons = cartItemsContainer.querySelectorAll('.add-item');
      addButtons.forEach(button => {
        button.addEventListener('click', () => {
          const productId = Number(button.getAttribute('data-id'));
          const product = products.find(p => p.id === productId);
          if (product) {
            this.addItem(product);
          }
        });
      });
  
      const removeButtons = cartItemsContainer.querySelectorAll('.remove-item');
      removeButtons.forEach(button => {
        button.addEventListener('click', () => {
          const productId = Number(button.getAttribute('data-id'));
          this.removeItem(productId);
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
  
    const cartSection = document.querySelector('.cart');
    if (!document.querySelector('.proceed-to-buy')) {
      const proceedButton = document.createElement('button');
      proceedButton.innerText = 'Proceed to Buy';
      proceedButton.classList.add('proceed-to-buy');
      proceedButton.style.marginTop = '20px';
      proceedButton.addEventListener('click', () => {
        const userResponse = confirm('Do you wish to proceed?');
        if (userResponse) {
          alert("Items successfully bought. Please shop with us again in the future.");
          window.location.href = window.location.href;
        }
      });
  
      cartSection.appendChild(proceedButton);
    }
  
 
    const themeToggleButton = document.getElementById('theme-toggle');
    const currentTheme = localStorage.getItem('theme');
    if (currentTheme) {
      document.body.classList.add(currentTheme);
    }
  
    themeToggleButton.addEventListener('click', () => {
      const currentTheme = document.body.classList.contains('dark-mode') ? 'dark-mode' : 'light-mode';
      if (currentTheme === 'dark-mode') {
        document.body.classList.remove('dark-mode');
        localStorage.setItem('theme', 'light-mode');
      } else {
        document.body.classList.add('dark-mode');
        localStorage.setItem('theme', 'dark-mode');
      }
    });
  });
  