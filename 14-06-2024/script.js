import {GET, POST} from "./get.js";

const inputTitleEl = document.querySelector('.title');
const inputPriceEl = document.querySelector('.price');
const inputDescriptionEl = document.querySelector('.description');
const inputCategoryEl = document.querySelector('.category-id');
const inputImagesEl = document.querySelector('.images');
const buttonSendEl = document.querySelector('.button-send');
const inputSearchById = document.querySelector('.check-id')
const buttonSearchById = document.querySelector('.check-id-button')

const updateProduct = {};

const id = inputSearchById.value

buttonSearchById.addEventListener('click',async () => {
    id = inputSearchById.value

    // const result = await GET(id)
    // inputTitleEl.value = result.title
    // inputPriceEl.value = result.price
    // inputDescriptionEl.value = result.value
    // inputCategoryEl.value = result.category.id
    // inputImagesEl.value = result.images.join('').replace(/[\[\]"]/g,''); // regex : viene generata su siti
})
    buttonSendEl.addEventListener('click', async (e) => {
        console.log(e)
        e.preventDefault();
        if(inputTitleEl.value === ""){
            console.log('scrivi qualcosa')
        }
        updateProduct.title = inputTitleEl.value
        updateProduct.price = inputPriceEl.value
        updateProduct.description = inputDescriptionEl.value
        updateProduct.categoryId = inputCategoryEl.value
        updateProduct.images = [inputImagesEl.value]

        const editedProduct = await PUT(id, updateProduct);

        conso


});

const mainContainerEl = document.querySelector('.main-container');

const results = await GET(31);

console.log("GET PRIMA DELLA MODIFICA ==>",results);

const newProduct = {
    title: "PippoPhone",
    price: 899,
    description: "Best Phone", 
    categoryId: 2,
    images: ["https://pippo.asd"]
}

// const updateProduct = {
//     title: "Pluto",
//     price: 399,
//     description: "Nonsi", 
//     categoryId: 2,
//     images: ["https://pippo.asd"]
// }
const postResult = await POST(newProduct)

console.log(postResult);

const putResult = await PUT (915, updateProduct)

console.log("AGGIORNATO CON PUT ==>", putResult)

const afterUpdate = await GET (915);

console.log("GET DOPO LA MODIFICA ==>", afterResult)

// const updateProduct = {
//     title: "UNICA MODIFICA"
// }

const updateProductTitle = await PUT(915, updateProduct)

console.log("AGGIORNO IL TITOLO =>",updateProductTitle)


console.log("GET prima del delete ==>", await GET (915));

console.log("Risposta del DELETE ==>", await DELETE(915));

console.log("GET dopo del delete ==>", await GET(915));
