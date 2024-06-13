// const POST = async () => { // post ci permette di aggiungere dati all'api stessa
//     fetch ('url', {
//         method: 'POST',
//         headers: {
//             accept: 'application/json',
//         },
//         body: { // mettiamo dentro l'oggetto che vogliamo mandare 
//         }
//     })
// }
// offset dipende dall'api

const testOBJ = {
    title: "string",
    price : 0, 
    description: "string",
    categoryId: 0,
    images: "string"

}

const inputTitleEl = document.querySelector('.title');
const inputPriceEl = document.querySelector('.price')
const inputDescriptionEl = document.querySelector('.description')
const inputCategoryEl = document.querySelector('.category')
const inputImagesEl = document.querySelector('.images')
const buttonSendEl = document.querySelector('.button-send')

console.log(inputPriceEl)

buttonSendEl.addEventListener('click', e =>{
    e.preventDefault();
    const objProductForm = {
        title:inputTitleEl.value,
        price:inputPriceEl.value,
        description: inputDescriptionEl.value,
        categoryId: inputCategoryEl.value,
        images:[inputImagesEl.value]
    };

    POST (objProductForm)
})
const BASE_URL = "https://api.escuelajs.co/"

const getProductEndpoint = "api/v1/products"

// fetch(`${BASE_URL}${getProductEndpoint}?limit=8&offset=0`)
//     .then((res) =>res.json())
//     .then(data => console.log(data))

const getById = async (id) => {
    const res = await fetch (`${BASE_URL}${getProductEndpoint}/${id}`, {
        method: "DELETE"
    })
}

const POST = async (product) => { 
    const res = await fetch (`${BASE_URL}${getProductEndpoint}`, {
        method: 'POST',
        headers: {
            "Content-Type": 'application/json',
        },
        body: JSON.stringify(product) 

    })

    const data = await res.json();
    console.log (data.images.map (img => img.split ('"')[1] ))
    return data.id;

}

getById(275)