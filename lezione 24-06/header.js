export function getHeaderHTML (){
    const menuHTML = getMenuHTML();

    return `
    <header>
        <div class="container">
            <div class="wrapper">
                <div class="logo">Logo</div>
                ${menuHTML}
                </div>
            </div>
        </div>
    </header>
    `;
}


function getMenuHTML(){
    const menuItems = [
        {label: "About us"},
        {label: "Blog"},
        {label: "Contacts"},
    ]
    const itemHTML = getMenuItemHTML({
        label: 'About Us',
        href: '#'
    });

    return `
    <nav class="nav">
        <ul class="list">
            ${menuItems.map((item) => getMenuItemHTML(item)).join("")}
        </ul>
    </nav>
    `;
}

function getMenuItemHTML(options = {}){
    // const a = 'ciao'; 
    // const obj = {a}; // {'a' : a}

    // destructuring serve a tirare fuori due variabili 'label' e 'href' da options
    // qeuste variabili hanno come valore respettivamente:
    // label = options.label
    // href = options.href -> se href non è definito e sotto ho {href = '#'} = options, allora href avrà come valore #
    const {label, href = "#"} = options; 

    const subitemsHTML = children
        .map(item => `<li class="item subitem">${item.label}</li>`)
        .join("");
    const subMenuHTML = "<ul>" + subitemsHTML + "</ul>";

    return `
            <li class="item">
                <a href="${href}">${label}</a>
                ${children.length > 0 ? subMenuHTML : ""}
            </li>
    `;
}


// il CSS viene definito tutto in console (inspector style sheet e poi lo copio su foglio css)