 AOS.init();

const template = document.querySelector("template");
const productsList = document.getElementById("products-list");

function updateUi({ products }) {
    products.forEach((product) => {
      const {id, title, price, thumbnail, description: _description } = product;
    const clone = template.content.cloneNode(true);


    const images = clone.querySelector(".product-image");
      const cardTitle = clone.querySelector(".card-title");
    const description = clone.querySelector(".description");
    const li = clone.querySelector("li");


images.src = thumbnail;
cardTitle.textContent = title;
description.textContent =  _description;


  productsList.appendChild(clone)
});

    
}

async function getData(url) {
const req = await fetch(url);
const data = await req.json();
return data;

}


getData("https://dummyjson.com/products") 
.then((data) => updateUi(data))
.catch((error) => console.log(error));