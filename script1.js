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
  new Product(8, 'PS5(Spiderman 2 edition)', 9.99, 'dhttps://www.cnn.com/cnn-underscored/electronics/spider-man-2-ps5-console-pre-order'),
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
});
