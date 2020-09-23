// Question 1 
// Create the basic shopping website as done in the class and enhance the website by adding the following 
// functionalities 
// 1. Add 6 new products so that the count of products becomes 12. 
// 2. A price filter where you have to add two input boxes one for maximum price and one for minimum price. 
// 3. A place which counts the number of products added in the cart. 
// 4. If a product is already added in cart then it should show a message that this product is already in cart.

let products = [
    {
      id: 1, 
      name: "White Tshirt", size: "M", color: "white", price: 900,
      image: "product1.jpg",
      description: "Solid T-shirt, has a round neck, and short sleeves",
    },
    {
      id: 2, 
      name: "Checked Casual Shirt", size: "L", color: "Blue & Red", price: 1200,
      image: "product2.jpg",
      description: "Checked casual shirt, has a button-down collar, long sleeves"
    },
  
    {
      id: 3,
      name: "Solid Cargos Pant", size: "M", color: "Olive Green", price: 1500, 
      image: "product3.jpg",
      description: "Solid mid-rise trousers, button closure, and 6 pockets",
    },
  
    {
      id: 4,
      name: "Kurta with Dupatta", size: "L", color: "Blue & Golden", price: 3000,
      image: "product4.jpg",
      description: "Embroidered Layered Kurta with Churidar & Dupatta",
    },
  
    {
      id: 5,
      name: "Black Solid Top", size: "S", color: "Black", price: 800, 
      image: "product5.jpg",
      description: "Black solid woven A-line top, has a tie-up neck, long bell sleeves",
    },
  
    {
      id: 6,
      name: "Navy Blue Pullover", size: "XS", color: "Navy Blue", price: 1000,
      image: "product6.jpg",
      description: "Navy blue pullover, has a round neck, long sleeves, straight hem",
    },

    {
      id: 7,
      name: "Olive Green Denim Jacket", size: "M", color: "Olive Green", price: 1700,
      image: "product7.jpg",
      description: "Denim jacket has a spread collar, 4 pockets, long sleeves",
    },
    {
      id: 8,
      name: "Casual Blazer", size: "L", color: "Blue", price: 2500,
      image: "product8.jpg",
      description: "Casual blazer, has a collar, button closure, long sleeves",
    },
  
    {
      id: 9,
      name: "Men Kurta", size: "S", color: "Maroon or Red", price: 1100,
      image: "product9.jpg",
      description: "Kurta with hand-block print, Mandarin Collar, Long sleeves",
    },
  
    {
      id: 10,
      name: "Saree", size: "L", color: "Maroon or Red", price: 2500,
      image: "product10.jpg",
      description: "Maroon chanderi saree and has an embellished border",
    },
  
    {
      id: 11,
      name: "Women Single-Breasted Coat", size: "M", color: "Beige or cream", price: 3600,
      image: "product11.jpg",
      description: "Beige solid coat, has a notched lapel collar, button closure",
    },
  
    {
      id: 12,
      name: "Floral Ditsy Print Dress", size: "S", color: "Pink & Green", price: 800,
      image: "product12.jpg",
      description: "floral ditsy print woven dress, has a round neck and sleeveless",
    },
  ];
  
  cart = [];
  count = 0;

// Display Function
  function displayProducts(productsData, who = "productwrapper") {
    let productsString = "";
  
    productsData.forEach(function (product, index) {
      let { id, name, image, color, description, price, size } = product;
  
      if (who == "productwrapper") {
        productsString += ` <div class="product">
          <div class="prodimg">
            <img src="images/${image}" width="100%" />
          </div>
          <h3>${name}</h3>
          <p>Price : <b>Rs. ${price}</b></p>
          <p>Size : ${size}</p>
          <p>Color : ${color}</p>
          <p>${description}</p>
          <p>
            <button onclick="addToCart(${id})" 
            style="background-color:green;color: white;">Add to Cart</button>
          </p>
        </div> `;
      } else if (who == "cart") {
        productsString += ` <div class="product">
          <div class="prodimg">
            <img src="images/${image}" width="100%" />
          </div>
          <h3>${name}</h3>
          <p>Price : ${price}$</p>
          <p>Size : ${size}</p>
          <p>Color : ${color}</p>
          <p>${description}</p>
          <p>
            <button onclick="removeFromCart(${id})" 
            style="background-color:red;color: white;">Remove from Cart</button>
          </p>
        </div>`;
      }
    });
  
    document.getElementById(who).innerHTML = productsString;
  }
  
  displayProducts(products);

// Search by name/color/description Function
  function searchProduct(searchValue) {
    let searchedProducts = products.filter(function (product, index) {
      let searchString =
        product.name + " " + product.color + " " + product.description;
  
      return searchString.toUpperCase().indexOf(searchValue.toUpperCase()) != -1;
    });
  
    displayProducts(searchedProducts);
  }

// Filter by Price function
  function filter(event) {
    event.preventDefault()
    let minValue = document.getElementById("minPrice").value;
    let maxValue = document.getElementById("maxPrice").value;
    let filterData = products.filter(function(item) {
      return item.price >= minValue && item.price <= maxValue;
    });

    displayProducts(filterData);
    document.getElementById("minPrice").value;
    document.getElementById("maxPrice").value;
  }

  // this is a function to get a product based on id from a particular array
  // @parameter 1 the array u want to get products from
  // @parameter 2 the id u want to search
  
  function getProductByID(productArray, id) {
    return productArray.find(function (product) {
      return product.id == id;
    });
  }

// Add to Cart Function
  let flag=false;
  function addToCart(id) 
  {
  flag=false;
    let pro = getProductByID(products, id);
  
    cart.forEach(function(element){
        if(element.id==pro.id){
            flag=true;
        }
    })
    if (flag) {
        alert("Product is already in cart");
      return 0;
    }
    count += 1;
    document.getElementById("num").innerText=count;
    
    cart.push(pro);
    displayProducts(cart, "cart");
  }

// Remove from Cart Function
  function removeFromCart(id) {
    // Getting the index based on id
    let index = cart.findIndex(function (product) {
      return product.id == id;
    });
    // Removing from cart based on index
    cart.splice(index, 1);
    count -= 1;
    document.getElementById("num").innerText = count;
    displayProducts(cart, "cart");
  }