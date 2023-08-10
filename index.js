// let navbar = document.querySelector(".navbar");

// document.querySelector("#menu-btn").onclick = () => {
//   navbar.classlist.toggle("active");
//   searchform.classList.remove("active");
//   cartItem.classList.remove("active");
// };

// let cartform = document.querySelector(".search-form");
// document.querySelector("#search-btn").onclick = () => {
//   searchform.classList.toggle("active");
//   navbar.classlist.remove("active");

//   cartItem.classList.remove("active");
// };
// let cartItem = document.querySelector(".cart-items-container");
// document.querySelector("#cart-btn").onclick = () => {
//   searchform;
//   cartItem.classList.toggle("active");
//   navbar.classList.remove("active");
//   searchform.classList.remove("active");
// };
// window.onscroll = () => {
//   navbar.classList.remove("active");
//   searchform.classList.remove("active");
//   cartItem.classList.remove("active");
// };

// let navbar = document.querySelector(".navbar");
// let searchform = document.querySelector(".search-form"); // Corrected variable name
// let cartItem = document.querySelector(".cart-items-container");

// document.querySelector("#menu-btn").onclick = () => {
//   navbar.classList.toggle("active"); // Corrected classList property
//   searchform.classList.remove("active");
//   cartItem.classList.remove("active");
// };

// document.querySelector("#search-btn").onclick = () => {
//   searchform.classList.toggle("active");
//   navbar.classList.remove("active"); // Corrected classList property
//   cartItem.classList.remove("active");
// };

// document.querySelector("#cart-btn").onclick = () => {
//   cartItem.classList.toggle("active");
//   navbar.classList.remove("active"); // Corrected classList property
//   searchform.classList.remove("active");
// };

// window.onscroll = () => {
//   navbar.classList.remove("active");
//   searchform.classList.remove("active");
//   cartItem.classList.remove("active");
// };
{
  //   /* <script>
  //   let navbar = document.querySelector(".navbar");
  //   let searchform = document.querySelector(".search-form");
  //   let cartItem = document.querySelector(".cart-items-container");
  //   document.querySelector("#menu-btn").onclick = () => {
  //     navbar.classList.toggle("active");
  //     searchform.classList.remove("active");
  //     cartItem.classList.remove("active");
  //   };
  //   document.querySelector("#search-btn").onclick = () => {
  //     searchform.classList.toggle("active");
  //     navbar.classList.remove("active");
  //     cartItem.classList.remove("active");
  //   };
  //   document.querySelector("#cart-btn").onclick = () => {
  //     cartItem.classList.toggle("active");
  //     navbar.classList.remove("active");
  //     searchform.classList.remove("active");
  //   };
  //   window.onscroll = () => {
  //     navbar.classList.remove("active");
  //     searchform.classList.remove("active");
  //     cartItem.classList.remove("active");
  //   };
  // </script> */
}
// 8
// let navbar = document.querySelector(".navbar");
// let searchform = document.querySelector(".search-form");
// let cartItem = document.querySelector(".cart-items-container");

// document.querySelector("#menu-btn").onclick = () => {
//   navbar.classList.toggle("active");
//   searchform.classList.remove("active");
//   .classList.remove("active");
// };

// document.querySelector("#search-btn").onclick = (event) => {
//   event.preventDefault(); // Prevent default form submission behavior
//   searchform.classList.toggle("active");
//   navbar.classList.remove("active");
//   cartItem.classList.remove("active");
//   let searchBox = searchform.querySelector("#search-box");
//   searchBox.focus(); // Focus on the search input field
// };

// document.querySelector("#cart-btn").onclick = () => {
//   cartItem.classList.toggle("active");
//   navbar.classList.remove("active");
//   searchform.classList.remove("active");
// };

// window.onscroll = () => {
//   navbar.classList.remove("active");
//   searchform.classList.remove("active");
//   cartItem.classList.remove("active");
// };   8

let navbar = document.querySelector(".navbar");
let searchform = document.querySelector(".search-form");
let cartItem = document.querySelector(".cart-items-container");

document.querySelector("#menu-btn").onclick = () => {
  navbar.classList.toggle("active");
  searchform.classList.remove("active");
  cartItem.classList.remove("active");
};

document.querySelector("#search-btn").onclick = (event) => {
  event.preventDefault(); // Prevent default form submission behavior
  searchform.classList.toggle("active");
  // navbar.classList.remove("active");
  cartItem.classList.remove("active");
  let searchBox = searchform.querySelector("#search-box");
  searchBox.focus(); // Focus on the search input field
};

document.querySelector("#cart-btn").onclick = () => {
  cartItem.classList.toggle("active");
  //navbar.classList.remove("active");
  searchform.classList.remove("active");
};

window.onscroll = () => {
  navbar.classList.remove("active");
  searchform.classList.remove("active");
  cartItem.classList.remove("active");
};

document.addEventListener("DOMContentLoaded", function () {
  const navbar = document.querySelector(".navbar");
  const searchForm = document.querySelector(".searchform");
  const menuBtn = document.getElementById("menu-btn");
  const searchBtn = document.getElementById("search-btn");

  // Toggle navbar visibility
  menuBtn.addEventListener("click", function () {
    navbar.classList.toggle("active");
  });

  // Toggle search form visibility
  searchBtn.addEventListener("click", function () {
    searchForm.classList.toggle("active");
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const addToCartButtons = document.querySelectorAll('.add-to-cart');
  const cartItemsContainer = document.querySelector('.cart-items-container');
  const checkoutButton = document.querySelector('.btn'); // Use the class "btn" for checkout button
  checkoutButton.style.display = 'none';

  addToCartButtons.forEach(button => {
    button.addEventListener('click', () => {
      const box = button.closest('.box');
      const itemName = box.querySelector('h3').textContent;
      const itemPrice = '$15.99/-'; // Updated price format
      const itemImageSrc = box.querySelector('img').src;
      const cartItem = document.createElement('div');
      cartItem.classList.add('carts-item');
      cartItem.innerHTML = `
        <span class="fas fa-times"></span>
        <img src="${itemImageSrc}" alt="${itemName}" />
        <div class="content">
          <h3>${itemName}</h3>
          <div class="price">${itemPrice}</div>
        </div>
      `;

      const removeButton = cartItem.querySelector('.fa-times');
      removeButton.addEventListener('click', () => {
        cartItem.remove();
        checkCartItems();
      });

      cartItemsContainer.insertBefore(cartItem, checkoutButton);
      checkCartItems();
 
    });
  });

  function checkCartItems() {
    const cartItems = cartItemsContainer.querySelectorAll('.carts-item');
    if (cartItems.length === 0) {
      checkoutButton.style.display = 'none';
    } else {
      checkoutButton.style.display = 'block';
    }
  }
});
