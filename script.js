let cartCount = 0;

document.querySelectorAll('.add-to-cart').forEach(button => {
  button.addEventListener('click', () => {
    cartCount++;
    document.getElementById('cart-count').textContent = cartCount;

    
    button.textContent = 'Added!';
    setTimeout(() => {
      button.textContent = 'Add to Cart';
    }, 1000);
  });
});