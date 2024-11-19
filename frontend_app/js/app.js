// importar los metodos de api.js
import { getProducts, getProductByID, updateProduct, deleteProduct } from "./api";

// traer todos los productos y mostralos en la pagina principal
document.addEventListener("DOMContentLoaded", async () => {
    const productList = document.getElementById("product-list");

    const productos = await getProducts();
    productList.innerHTML = productos.map(product => `
        <div class="col-xs-12 col-sm-6 col-md-3 card">
        <div class="card-body d-flex flex-column justify-content-end">
        <h5 class="card-title">${product.name}</h5>
        <p class="card-text">${product.price}</p>
        <a onclick="viewProduct(${product.id})" class=btn btn-primary">ver mas</a>
        </div>
        </div>
    `).join("");89+
});