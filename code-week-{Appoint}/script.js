document.addEventListener("DOMContentLoaded", () => {

    // Aggiungiamo un event listener che eseguirà il codice al suo interno una volta che tutto il contenuto del DOM è stato caricato.
    // memorizziamo in variabili elementi del DOM
    const notCompletedList = document.getElementById("not-completed-list");
    const completedList = document.getElementById("completed-list");
    const modal = document.getElementById("modal");
    const yesBtn = document.getElementById("yes-btn");
    const noBtn = document.getElementById("no-btn");
// appointments è una variabile come array vuota per memorizzare gli appunt
    let appointments = [];

    // fetch per recuperare i dati da un'API. 
    // Una volta ottenuta la risposta, viene convertita in formato JSON.
    // I dati ottenuti vengono memorizzati nella variabile appointments e 
    //viene chiamata la funzione renderAppointments per visualizzare gli appuntamenti.
    fetch('https://jsonplaceholder.typicode.com/todos')
        .then(response => response.json())
        .then(data => {
            appointments = data;
            renderAppointments();
        });
// Queste righe iniziano la funzione renderAppointments, che pulisce 
//il contenuto delle liste notCompletedList e 
//completedList.
    function renderAppointments() {
        notCompletedList.innerHTML = '';
        completedList.innerHTML = '';

        appointments.forEach(appointment => {
            const li = document.createElement("li");
            li.textContent = appointment.title;
            li.dataset.id = appointment.id;
            li.style.backgroundColor = getRandomColor();
// Queste righe iterano attraverso ogni appuntamento nell'array 
// appointments, creando un nuovo elemento li per ciascuno. 
// Impostano il testo del li al titolo dell'appuntamento, aggiungono un attributo data-id con l'id dell'appuntamento e assegnano un colore di sfondo casuale utilizzando la funzione getRandomColor.
            if (appointment.completed) {
                completedList.appendChild(li);
            } else {
                li.addEventListener("click", () => openModal(appointment.id));
                notCompletedList.appendChild(li);
            }
        });
    }

    function getRandomColor() {
        const colors = [
            "#fffaf2",
            "#fffbe0",
            "#fffff7",
            "#ffffdb",
            
        ];
        return colors[Math.floor(Math.random() * colors.length)];
    }

    function openModal(id) {
        modal.style.display = "flex";
        yesBtn.onclick = () => completeAppointment(id);
        noBtn.onclick = () => closeModal();
    }

    function closeModal() {
        modal.style.display = "none";
    }

    function completeAppointment(id) {
        const appointment = appointments.find(app => app.id === id);
        if (appointment) {
            appointment.completed = true;
            renderAppointments();
            closeModal();
        }
    }
});
