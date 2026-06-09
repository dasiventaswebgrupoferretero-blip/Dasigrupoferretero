const d = document;
export default function cardsProductos(id) {
    const $contenedor = d.getElementById(id);
    if (!$contenedor) {
        console.error(`No se encontró el elemento con id "${id}"`);
        return;
    }
    // Base de datos de productos
    const productos = [
        {
            id: 1,
            nombre: "Juego terminales p/batería, poste superior, plomo, Pretul",
            descripcion: "Juego terminales p/batería, poste superior, plomo, Pretul",
            precio: "$67 MXN",
            imagen: "./assets/23041.png",
            marca: "Petul"
        },
        {
            id: 2,
            nombre: "Pistola plástica pretul",
            descripcion: "Cuerpo fabricado en polipropileno, clip para flujo continuo, permite que el agua fluya sin apretar constantemente.",
            precio: "$59 MXN",
            imagen: "./assets/22765.png",
            marca: "Pretul"
        },
        {
            id: 3,
            nombre: "Encendedor para cocina, 27 cm, Pretul",
            descripcion: "Seguro de bloqueo apagado / encendido, ventana de nivel de gas, para lugares de difícil acceso.",
            precio: "$39 MXN",
            imagen: "./assets/25130.png",
            marca: "Pretul"
        },
        {
            id: 4,
            nombre: "Juego de pinceles en blister con 5 piezas, Pretul.",
            descripcion: "100% Cerda natural, pelo extrafino para un mejor acabado, mango de madera con casquillo de metal, 2 Pinceles redondos y 3 planos",
            precio: "$53 MXN",
            imagen: "./assets/24740.png",
            marca: "Pretul"
        },
        {
            id: 5,
            nombre: "Conector Y 3/4 plástico para manguera, PRETUL",
            descripcion: "Cuerpo de plástico, válvulas para ajustar el flujo o cerrar cada conexión.",
            precio: "$41 MXN",
            imagen: "./assets/20050.png",
            marca: "Pretul"
        },
        {
            id: 6,
            nombre: "Conector sencillo 1/2', macho, Pretul",
            descripcion: "Fabricado en latón laminado para máxima resistencia al desgaste, conector macho, ideal para reparar y unir mangueras, requieren uso de abrazaderas (no incluidas).",
            precio: "$30 MXN",
            imagen: "./assets/26031.png",
            marca: "Petul"
        },
        {
            id: 7,
            nombre: "Plomada #2 de zinc",
            descripcion: "Fabricado en aleación de aluminio y zinc, punta para marcar y determinar centros, carrete (compás) para alinear perpendicularmente al piso, castillo, paredes, ventanas, puertas, etcétera.",
            precio: "$160 MXN",
            imagen: "./assets/22462.png",
            marca: "Pretul"
        },
        {
            id: 8,
            nombre: "Juego de desarmadores, 8 piezas, mango PVC, Pretul",
            descripcion: "Barra de acero, marcado y código de color para fácil identificación de medida y punta, mango de PVC con diseño hexagonal para evitar que ruede.",
            precio: "$238 MXN",
            imagen: "./assets/22013.png",
            marca: "Pretul"
        },
        {
            id: 9,
            nombre: "Mini pinza de punta y corte 5, PRETUL",
            descripcion: "Fabricada en acero al carbono, mordazas maquinadas con precisión, para lugares de difícil acceso.",
            precio: "$64 MXN",
            imagen: "./assets/22662.png",
            marca: "Pretul"
        },
        {
            id: 10,
            nombre: "Llave ajustable (perico), cromado 10' Pretul",
            descripcion: "Forjado en acero al carbono, acabado cromo que protege de la corrosión, graduación en pulgadas y milímetros, mango con orificio para colgar.",
            precio: "$185 MXN",
            imagen: "./assets/21816.png",
            marca: "Pretul"
        },
        {
            id: 11,
            nombre: "Resistol 5000 21 ml SUPER TRANSPARENTE.",
            descripcion: "Resistol 5000 21 ml SUPER TRANSPARENTE.",
            precio: "$52 MXN",
            imagen: "./assets/90090.png",
            marca: "Resistol"
        },
        {
            id: 12,
            nombre: "Pegamento instantaneo goterito 3.5g KRAZY KOLA LOKA.",
            descripcion: "Pegamento instantaneo goterito 3.5g KRAZY KOLA LOKA.",
            precio: "$28 MXN",
            imagen: "./assets/90106.png",
            marca: "Kola loka"
        }
    ];
    // Limpiar el contenedor por si tiene contenido previo
    $contenedor.innerHTML = '';
    // Recorrer el arreglo de productos y crear cada card
    productos.forEach(producto => {
        // Crear el contenedor de la card
        const card = d.createElement('div');
        card.className = 'producto-card';
        card.setAttribute('data-id', producto.id);
        card.setAttribute('data-nombre', producto.nombre);
        card.setAttribute('data-precio', producto.precio);
        // Crear estructura interna de la card
        // Imagen
        const img = d.createElement('img');
        img.src = producto.imagen;
        img.alt = producto.nombre;
        img.loading = 'lazy'; // Carga perezosa para mejorar rendimiento
        img.onerror = function() {
            // Si la imagen no existe, usar una imagen por defecto
            this.src = 'https://placehold.co/200x150/f1f5f9/64748b?text=Sin+Imagen';
        };
        // Nombre del producto
        const titulo = d.createElement('h3');
        titulo.textContent = producto.nombre;
        // Marca
        const marca = d.createElement('p');
        marca.className = 'marca';
        marca.textContent = `Marca: ${producto.marca}`;
        // Descripción
        const descripcion = d.createElement('p');
        descripcion.className = 'descripcion';
        descripcion.textContent = producto.descripcion;
        // Precio
        const precio = d.createElement('p');
        precio.className = 'precio';
        precio.textContent = producto.precio;
        // Botón para agregar al pedido (opcional)
        const btnPedido = d.createElement('button');
        btnPedido.textContent = 'Solicitar producto';
        btnPedido.className = 'btn-solicitar';
        btnPedido.setAttribute('data-id', producto.id);
        btnPedido.setAttribute('data-nombre', producto.nombre);
        btnPedido.setAttribute('data-precio', producto.precio);
        // Evento para el botón (puedes personalizarlo)
        btnPedido.addEventListener('click', (e) => {
            e.preventDefault();
            const productoInfo = `${producto.nombre} - ${producto.precio}`;
            alert(`Producto seleccionado: ${productoInfo}\n\nPor favor, completa el formulario de pedido con los detalles.`);
            
            // Opcional: llenar automáticamente el textarea del formulario
            const textareaProducto = d.querySelector('textarea[name="producto"]');
            if (textareaProducto) {
                const textoActual = textareaProducto.value;
                const nuevoTexto = textoActual ? `${textoActual}\n${producto.nombre}` : producto.nombre;
                textareaProducto.value = nuevoTexto;
                textareaProducto.focus();
            }
        });
        // Ensamblar la card
        card.appendChild(img);
        card.appendChild(titulo);
        card.appendChild(marca);
        card.appendChild(descripcion);
        card.appendChild(precio);
        card.appendChild(btnPedido);
        
        // Agregar la card al contenedor
        $contenedor.appendChild(card);
    });
}