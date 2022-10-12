const products =  [
    { 
        id: '1', 
        name: ' Bajo mesada', 
        price: 1000, 
        category: 'mueble de cocina', 
        img:'https://http2.mlstatic.com/D_NQ_NP_2X_741840-MLA51802909786_102022-F.webp', 
        stock: 25, 
        description:'Descripcion de mueble de cocina',
        button: <button>Agregar al carrito</button>,
    },
    { id: '2', name: 'baiut', price: 800, category: 'Muebles de living', img:'https://http2.mlstatic.com/D_NQ_NP_2X_869322-MLA49877480069_052022-F.webp', stock: 16, description:'Descripcion de Samsung s21', button: <button>Agregar al carrito</button>},
    { id: '3', name: 'Vanitory', price: 1200, category: 'Muebles de baño', img:'https://http2.mlstatic.com/D_NQ_NP_2X_840349-MLA48494873197_122021-F.webp', stock: 10, description:'Descripcion de Ipad', button: <button>Agregar al carrito</button>}
]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 2000)
    })
}