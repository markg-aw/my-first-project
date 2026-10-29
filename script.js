function scrollToProducts() {
  document.getElementById('products').scrollIntoView({ behavior: 'smooth' });
}

let cartCount = 0;
const cartBtn = document.getElementById('cartBtn');

function addToCart(productName) {
  cartCount++;
  cartBtn.innerText = `Cart (${cartCount})`;
  alert(`${productName} added to cart! 🛒`);
}

window.addEventListener("scroll", function() {
  const image = document.getElementById("floatingImage");
  const scrollPosition = window.scrollY;
  
  if (scrollPosition < 600) {
    image.style.transform = `translateY(${scrollPosition * 0.4}px) rotate(${scrollPosition * 0.1}deg)`;
  }
});