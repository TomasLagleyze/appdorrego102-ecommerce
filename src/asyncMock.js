const products = [    {
    "id": 1,
    "marca": "Chevrolet",
    "modelo": "Cruze",
    "lado": "izq",
    "precio": 15000,
    "imagen": "FARO-TRASERO-CHEVROLET-CRUZE-11-19.jpg",
    "categoria": "Faros",
    "cantidad": 1
},
{
    "id": 2,
    "marca": "Chevrolet",
    "modelo": "Corsa",
    "lado": "der",
    "precio": 12000,
    "imagen": "FARO-TRASERO-CORSA-CLASSIC.jpg",
    "categoria": "Faros",
    "cantidad": 1 
},
{
    
    "id": 3,
    "marca": "Fiat",
    "modelo": "Palio",
    "lado": "izq",
    "precio": 20000,
    "imagen": "FARO-TRASERO-FIAT-PALIO-97-01.jpg",
    "categoria": "Faros",
    "cantidad": 1 
},
{
    "id": 4,
    "marca": "Ford",
    "modelo": "Focus",
    "lado": "izq",
    "precio": 30000,
    "imagen": "FARO-TRASERO-FOCUS-99-09.jpg",
    "categoria": "Faros",
    "cantidad": 1 
},
{
    "id": 5,
    "marca": "Nissan",
    "modelo": "Tiida",
    "lado": "der",
    "precio": 25000,
    "imagen": "FARO-TRASERO-NISSAN-TIIDA-5P.jpg",
    "categoria": "Faros",
    "cantidad": 1 
},
{
    "id": 6,
    "marca": "Volskwagen",
    "modelo": "Gol",
    "lado": "der",
    "precio": 8000,
    "imagen": "FARO-TRASERO-VW-GOL-95-99.jpg",
    "categoria": "Faros",
    "cantidad": 1 
},
{
    "id": 7,
    "marca": "Chevrolet",
    "modelo": "Corsa-Classic",
    "lado": "izq",
    "precio": 35000,
    "imagen": "OPTICAS-CHEVROLET-CORSA-CLASSIC.jpg",
    "categoria": "Opticas",
    "cantidad": 1 
},
{
    "id": 8,
    "marca": "Chevrolet",
    "modelo": "Cruze",
    "lado": "der",
    "precio": 55000,
    "imagen": "OPTICAS-CHEVROLET-CRUZE-LD.jpg",
    "categoria": "Opticas",
    "cantidad": 1 
},
{
    "id": 9,
    "marca": "Chevrolet",
    "modelo": "Onix",
    "lado": "izq",
    "precio": 45000,
    "imagen": "OPTICAS-CHEVROLET-ONIX-LS-2013-2016.jpg",
    "categoria": "Opticas",
    "cantidad": 1 
},
{
    "id": 10,
    "marca": "Fiat",
    "modelo": "Palio",
    "lado": "izq",
    "precio": 15000,
    "imagen": "OPTICAS-FIAT-PALIO-12-20.jpg",
    "categoria": "Opticas",
    "cantidad": 1 
},
{
    "id": 11,
    "marca": "Ford",
    "modelo": "Ecosport",
    "lado": "der",
    "precio": 50000,
    "imagen": "OPTICAS-FORD-ECOSPORT-KINETIC-2013-2016.jpg",
    "categoria": "Opticas",
    "cantidad": 1 
},
{
    "id": 12,
    "marca": "Ford",
    "modelo": "Focus",
    "lado": "izq",
    "precio": 45000,
    "imagen": "OPTICAS-FORD-FOCUS-08-13.jpg",
    "categoria": "Opticas",
    "cantidad": 1 
},
{
    "id": 13,
    "marca": "Volskwagen",
    "modelo": "Gol",
    "lado": "izq",
    "precio": 30000,
    "imagen": "OPTICAS-VW-GOL-1999-2005.jpg",
    "categoria": "Opticas",
    "cantidad": 1 
},
{
    "id": 14,
    "marca": "Volskwagen",
    "modelo": "Polo",
    "lado": "der",
    "precio": 12000,
    "imagen": "OPTICAS-VW-POLO.jpg",
    "categoria": "Opticas",
    "cantidad": 1 
},
{
    "id": 15,
    "marca": "Ford",
    "modelo": "Ka",
    "lado": "-",
    "precio": 25000,
    "imagen": "PARAGOLPE-DEL-FORD-KA-16-18.jpg",
    "categoria": "Paragolpes",
    "cantidad": 1 
}]

export const getProducts = () =>{ 
    return new Promise ((resolve)=>{
        setTimeout(() => {
            resolve (products)
        }, 1000);
    })

}


export const getProductsByCategoria = (categoriaId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.filter(prod => prod.categoria === categoriaId))
        }, 1000)
    })
}




export const getProductsById = (productId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === productId))
        }, 1000)
    })
}