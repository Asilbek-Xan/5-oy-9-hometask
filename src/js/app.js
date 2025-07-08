 AOS.init();

const template = document.querySelector("template");
const productsList = document.getElementById("products-list");

function updateUi({ products }) {
    products.forEach(() => {
    const clone = template.content.cloneNode(true);


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