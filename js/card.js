const d = document;
export default function cards(id) {
    console.log("Ejecutando cards con id:", id);
    const categoria = [
        {
            titulo: "Pretul",
            descripcion: "•Encuentra todos nuestros productos de la marca Pretul.",
            img: "./assets/LOGOPRETUL.png",
        },
        {   
            titulo: "Truper",
            descripcion: "•Encuentra todos nuestros productos de la marca Truper",
            img: "./assets/LOGOTRUPER.png",
        },
        {
            titulo: "STEREN",
            descripcion: "Encuentra todos nuestros productos de la marca STEREN",
            img: "./assets/STERENLOGO.jpg",
        }
    ];
    const container = d.getElementById(id);
    console.log("Contenedor encontrado:", container);
    if (!container) {
        console.log("IDs disponibles en el DOM:", Array.from(d.querySelectorAll('[id]')).map(el => el.id));
        return;
    }
    container.innerHTML = categoria.map(categorias => `
        <div class="card-content">
            <img src="${categorias.img}"alt="${categorias.titulo}"class="card-img">
            <h3 class="card-title">${categorias.titulo}</h3>
            <p class="card-text">${categorias.descripcion}</p>
            <button class="card-button" data-marca="${categorias.titulo}">Ver más</button>
        </div>
    `).join('');
    console.log("Cards insertadas, total:", categoria.length);
    container.addEventListener('click', (e) => {
        if (e.target.classList.contains('card-button')) {
            const marca = e.target.dataset.marca;
            console.log(`Redirigiendo a productos de: ${marca}`);
            window.location.href = 'productos.html';
        }
    });
}