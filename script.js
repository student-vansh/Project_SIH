const Hamburger = document.querySelector(".hamburger");
const Mobilemenu = document.querySelector(".mobile-menu"); 
const bars = document.querySelector(".fa-bars");
Hamburger.addEventListener("click",()=>Mobilemenu.classList.toggle('mobile-menu-active'));
Hamburger.addEventListener("click",()=>bars.classList.toggle('fa-xmark'));

var swiper = new Swiper(".mySwiper", {
  loop: true, 
  navigation: {
    nextEl: "#next",
    prevEl: "#prev",
  },
});

const carticon = document.querySelector(".cart-icon");
const carttab = document.querySelector(".cart-tab");
const closebtn = document.querySelector(".close-btn");
const cardlist = document.querySelector(".card-list");
const cartList = document.querySelector(".cart-list");
const cartTotal = document.querySelector(".cart-total");
const cartValue = document.querySelector(".cart-value");



carticon.addEventListener("click", () => {
  carttab.classList.add("cart-tab-active");
});
closebtn.addEventListener("click", () => {
  carttab.classList.remove("cart-tab-active");
});





let productlist = [];
let cartproduct = [];

const updateTotals = () =>{
  let totalPrice = 0;
  let totalQuantity =0;
  document.querySelectorAll(".item").forEach(item =>{

    const quantity = parseInt(item.querySelector(".Quantity-value").textContent)
    const price = parseFloat(item.querySelector('.item-total').textContent.replace("$"," "));
    totalPrice += price;

    totalQuantity +=quantity;
  })
  cartTotal.textContent = `$${totalPrice.toFixed(2)}`
  cartValue.textContent = totalQuantity;
}



const showCards = () => {
  productlist.forEach((product) => {
    const oredrcard = document.createElement("div");
    oredrcard.classList.add("order-card");

    oredrcard.innerHTML = `
               <div class="card-image">
                <img src="${product.image}" alt="" />
              </div>
              <h4>${product.name}</h4>
              <h4 class="price">${product.price}</h4>
              <a href="" class="btn card-btn">Add to cart</a>
              `;
    cardlist.appendChild(oredrcard);

    const cardBtn = oredrcard.querySelector(".card-btn");
    cardBtn.addEventListener("click", (e) => {
      e.preventDefault();
      addTocart(product);
    });
  });
};

const addTocart = (product) => {
  const Exitingproduct = cartproduct.find((item) => item.id === product.id);
  if (Exitingproduct) {
    alert("Item already in your cart");
    return;
  }
  cartproduct.push(product);
  let quantity = 1;
  let price = parseFloat(product.price.replace("$", ""));
  const cartitem = document.createElement("div");
  cartitem.classList.add("item");
  cartitem.innerHTML = `
                <div class="item-image">
                   <img src="${product.image}" alt="" />
                   </div>
                <div class="detail">
                  <h4>${product.name}</h4>
                  <h4 class="item-total">${product.price}</h4>
                </div>
                <div class="flex">
                  <a href="#" class="quantity-btn minus">
                    <i class="fa-solid fa-minus"></i>
                  </a>
                  <h4 class="Quantity-value">${quantity}</h4>
                  <a href="#" class="quantity-btn plus">
                    <i class="fa-solid fa-plus"></i>
                  </a>
                </div>`;

  cartList.appendChild(cartitem);
  updateTotals();
  const quantityvalue = cartitem.querySelector(".Quantity-value");
  const plusBtn = cartitem.querySelector(".plus");
  const ItemTotal = cartitem.querySelector(".item-total");
  const minusBtn = cartitem.querySelector(".minus");

  plusBtn.addEventListener("click", (e) => {
    e.preventDefault();
    quantity++;
    quantityvalue.textContent = quantity;
    ItemTotal.textContent = `$${(price * quantity).toFixed(2)}`;
    updateTotals();
  });

  minusBtn.addEventListener("click", (e) => {
    e.preventDefault();
    if (quantity > 1) {
      quantity--;
      quantityvalue.textContent = quantity;
      ItemTotal.textContent = `$${(price * quantity).toFixed(2)}`;
      updateTotals();
    } else {
      cartitem.classList.add('slide-out');
      setTimeout(()=>{
        cartitem.remove();
      cartproduct = cartproduct.filter((item) => item.id !== product.id);
      updateTotals();
      },300)
    }
  });
};

const initApp = () => {
  fetch("product.json")
    .then((response) => response.json())
    .then((data) => {
      productlist = data;
      showCards();
    });
};

initApp();
