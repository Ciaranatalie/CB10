import { getHeaderHTML } from "./header.js";
import { getMainHTML } from "./main.js";
import { getFooterHTML } from "./footer.js";
// obiettivo: stampare una pagina HTML in JS 


// abbiamo un punto di accesso per essere sicuri che il codice possa essere eseguito

window.addEventListener("DOMContentLoaded", () => {
    console.log("ciao mondo, la pagina è stata caricata");

    const appEl = document.querySelector ("#app");

    if (appEl){
        //dentro la function sono sicuro che appEl sia un elemento caricato nel dom
        renderPage(appEl)

    }
})


async function renderPage (appEl){
    appEl.innerHTML = 'Ciao Mondo';

    // andare a creare una function per ogni elemento della pagina 
    // ogni function mi torna dell'HTML, e una volta messa insieme li stampo

    const header = getHeaderHTML();
    const main = await getMainHTML();
    const footer = getFooterHTML();

    const html = header + main + footer;

    appEl.innerHTML = html;
}

// const asideEl = document.querySelector('aside');

// createElement ('div', {className: 'prova-class', innerHTML: 'Ciao Mondo', asideEl:'aside'})
//function per creare elementi che posso riusare
function createElement (element, attrs = {}, parent = document.body) { // l'ultimo parametro è il parent perchè magari non mi serve in tutte le funzioni
       //creo elemento
    const el = document.createElement(element);

        // attributi per me sono un object, posso iterarlo 
    for (let prop in attrs) {
            //se la proprietà (ex. className) esiste, la imposto
        if(prop in el){
            el[prop] = attrs[prop];
                // se l'ho impostata, vado avanti nel for e non eseguo il resto per questo elemento
            continue; // è un break solo per il corrente for
        }
            // in tutte le altre casistiche setto solo un attribute
        el.setAttribute(prop, attrs[prop]);
    
    }
    parent.append(el);

    
}





