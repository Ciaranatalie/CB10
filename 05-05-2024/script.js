function myFunction() {
    console.log(this);
}

const parent = document.getElementById('parent');
const modal = document.getElementById('myModal');
const timerElement = document.getElementById('timer');

let countdown;

parent.addEventListener('click', (event) => {
    if (event.target.tagName === 'BUTTON') {
        myFunction.call(event.target);
        console.log('event.target:', event.target);
        
        switch (event.target.id) {
            case 'button1':
                console.log('Hai cliccato il bottone 1');
                break;
            case 'button2':
                console.log('Hai cliccato il bottone 2');
                break;
            case 'button3':
                console.log('Hai cliccato il bottone 3');
                break;
            case 'openModal':
                openModal();
                break;
            default:
                break;
        }
    }
});

const openModal = () => {
    modal.classList.add('show');
    let timeLeft = 5;
    timerElement.textContent = timeLeft;
    countdown = setInterval(() => {
        timeLeft--;
        timerElement.textContent = timeLeft;
        if (timeLeft <= 0) {
            clearInterval(countdown);
            modal.classList.remove('show');
        }
    }, 1000);
};

const closeModal = () => {
    clearInterval(countdown);
    modal.classList.remove('show');
};

document.getElementById('closeModal').addEventListener('click', closeModal);
document.getElementById('yesBtn').addEventListener('click', () => {
    console.log('Hai cliccato Si');
    closeModal();
});
document.getElementById('noBtn').addEventListener('click', () => {
    console.log('Hai cliccato No');
    closeModal();
});
