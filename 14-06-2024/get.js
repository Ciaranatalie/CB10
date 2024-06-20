const BASE_URL = "https://api.escuelajs.co/"

export const GET = async (id = '') => {
    const res = await fetch (BASE_URL+`/api/v1/products/${id}?limit=&offset=0`)

    const data = await res.json();

    return data
}

export const POST = async (object) => { //object: sarà l'object con le diverse categorie
    const res = await fetch(BASE_URL + "/api/v1/products/", {
        headers: {
            'Content-Type': 'application/json; charset=utf-8'
        },
        body: JSON.stringify(object)
    });

    const data = await res.json();

    return data; // data: sarà l'oggetto con i dati aggiunti
}

export const PUT = async (id, object) => {
    const res= await fetch (BASE_URL + `/api/v1/products/${id}`, {
        method: "PUT",
        headers: {
            'Content-Type': 'application/json; charset=utf-8'
    },
body: JSON.stringify(object)
})

const data = await res.json();

return data
}

export const PATCH = async (id, object) => {
    const res= await fetch (BASE_URL + `/api/v1/products/${id}`, {
        method: "PATCH",
        headers: {
            'Content-Type': 'application/json; charset=utf-8'
    },
body: JSON.stringify(object)
})

const data = await res.json();

return data
}