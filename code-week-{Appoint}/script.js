document.addEventListener("DOMContentLoaded", () => {
    const notCompletedList = document.getElementById("not-completed-list");
    const completedList = document.getElementById("completed-list");
    const modal = document.getElementById("modal");
    const yesBtn = document.getElementById("yes-btn");
    const noBtn = document.getElementById("no-btn");

    let appointments = [];

    fetch('https://jsonplaceholder.typicode.com/todos')
        .then(response => response.json())
        .then(data => {
            appointments = data;
            renderAppointments();
        });

    function renderAppointments() {
        notCompletedList.innerHTML = '';
        completedList.innerHTML = '';

        appointments.forEach(appointment => {
            const li = document.createElement("li");
            li.textContent = appointment.title;
            li.dataset.id = appointment.id;
            li.style.backgroundColor = getRandomColor();

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
            "#ffea94", 
            "#fff2bf",
            "#ffffb6",
            "#f4de9b",
            "#ffe180",
            "#f8efba",
            "#fffaf2",
            "#fffbe0",
            "#fffff7",
            "#cbf4f7",
            
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
