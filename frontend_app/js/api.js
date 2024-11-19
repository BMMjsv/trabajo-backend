const API_URL = "http://localhost:3000/api/videojuegosmoviles";

// obtener todos los productos
export const getPoducts = async () => {
    const response = await fetch(API_URL);
    return response.json();
};

// obtener producto por ID
export const getPoductByID = async (id) => {
    const response = await fetch(`${API_URL}/${id}`);
    return response.json();
};

// crear un producto
export const addProduct = async (product) => {
    const response = await fetch(API_URL, {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(product)
    });
    return response.json();
};

// actualisar un producto
export const updateProduct = async (id, product) => {
    const response = await fetch(`${API_URL}/${id}`, {
        method: "PUT",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(product)
    });
    return response.json();
};

// borrar un producto
export const deleteProduct = async (id) => {
    return fetch(`${API_URL}/${id}`, {
        method: "DELETE",
    });
};
