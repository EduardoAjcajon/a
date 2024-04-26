let div_header = document.querySelector("#header");

// Modificar el contenido del header
let parte_ariba = `
    <span class="material-symbols-outlined menu">
        menu
    </span>
    <span class="material-symbols-outlined carrito_compras">
        shopping_cart
    </span>

`;

div_header.innerHTML = parte_ariba;