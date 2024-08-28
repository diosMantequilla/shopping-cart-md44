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
            miNodoBoton.setAttribute('marcador', info.id)
            // miNodoBoton.addEventListener('click', anadirProductosAlCarrito)

            // armar nuestra tarjetita de producto
            miNodoCardBody.appendChild(miNodoImagen)
            miNodoCardBody.appendChild(miNodoTitle)
            miNodoCardBody.appendChild(miNodoPrecio)
            miNodoCardBody.appendChild(miNodoBoton)
            miNodo.appendChild(miNodoCardBody)

            DOMitems.appendChild(miNodo)
        })
    }

    // creamos una funcion para renderizar el carrito
    function renderizarCarrito() {
        // limpiar el carrito
        DOMcarrito.textContent = ''
        // quitamos los duplicados del carrito
        const carritoSinDuplicados = [...new Set(carrito)]
        // generamos los elementos para mostrar a partir del carrito
        carritoSinDuplicados.forEach( (item) => {
            // obtenemos el elemento que necesitamos para compararlo con la base de datos
            const miItem = baseDeDatos.filter( (itemBaseDeDatos) => {
                // verificar si coincide el id en la base de datos
                return itemBaseDeDatos.id === parseInt(item) // int = numero entero
            } )
            // contar el numero de veces que se repite un producto
            const numeroDeUnidadesItem = carrito.reduce( (total, itemId) => {
                return itemId === item ? total += 1 : total // esto es como escribir un if
                // if (itemId === item) {
                //     return total += 1
                // } else {
                //     return total
                // }
            }, 0)

            // creamos el nodo del item del carrito
            const miNodo = document.createElement('li')
            miNodo.classList.add('list-group-item', 'text-right', 'mx-2')
            miNodo.textContent = `${numeroDeUnidadesItem} x ${miItem[0].nombre} -> ${miItem[0].precio} ${divisa}`

            // aqui vamos a agregar el boton para eliminar cada elemento del carrito
            // -----------------------

            // agregamos al carrito los nodos
            DOMcarrito.appendChild(miNodo)

            //creamos una funcion para mostrar el total del carrito
            // --------------------------------

        } )

        function anadirProductosAlCarrito (evento){
            // añadimos el nodo a nuestro carrito 
            carrito.push(evento.target.getAttribute('marcador'))
            // actualizar carrito
            renderizarCarrito()

        }

    }

    renderizarProductos()
})