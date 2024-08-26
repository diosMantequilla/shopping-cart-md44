document.addEventListener('DOMContentLoaded', () => {

    // en esta parte inicializamos todo los elementos que vamos a utilizar
    const baseDeDatos = [
        {
            id: 1,
            nombre: 'mantequilla',
            precio: 10,
            imagen: 'mantequilla.jpg'
        },
        {
            id: 2,
            nombre: 'coca de vidrio',
            precio: 30,
            imagen: 'coca.jpg'
        },
        {
            id: 3,
            nombre: 'cheetos',
            precio: 15,
            imagen: 'cheetos.jpg'
        },
        {
            id: 4,
            nombre: 'aguita',
            precio: 8,
            imagen: 'agua.jpg'
        }
    ]
    let carrito = []
    const divisa = '$'
    const DOMitems = document.querySelector('#items')
    const DOMcarrito = document.querySelector('#carrito')
    const DOMtotal = document.querySelector('#total')

    // funcionalidades
    function renderizarProductos() {
        baseDeDatos.forEach((info) => {
            // estructura del card
            const miNodo = document.createElement('div')
            miNodo.classList.add('card', 'col-sm-4')
            // contenido
            const miNodoCardBody = document.createElement('div')
            miNodoCardBody.classList.add('card-body')
            // titulo
            const miNodoTitle = document.createElement('h5')
            miNodoTitle.classList.add('card-title')
            miNodoTitle.textContent = info.nombre
            // imagen
            const miNodoImagen = document.createElement('img')
            miNodoImagen.classList.add('card-img-top')
            miNodoImagen.setAttribute('src', info.imagen)
            // precio
            const miNodoPrecio = document.createElement('p')
            miNodoPrecio.classList.add('card-text')
            miNodoPrecio.textContent = divisa + ' ' + info.precio
            // boton
            const miNodoBoton = document.createElement('button')
            miNodoBoton.classList.add('btn', 'btn-primary')
            miNodoBoton.textContent = '+'

            // armar nuestra tarjetita de producto
            miNodoCardBody.appendChild(miNodoImagen)
            miNodoCardBody.appendChild(miNodoTitle)
            miNodoCardBody.appendChild(miNodoPrecio)
            miNodoCardBody.appendChild(miNodoBoton)
            miNodo.appendChild(miNodoCardBody)

            DOMitems.appendChild(miNodo)
        })
    }

    renderizarProductos()
})