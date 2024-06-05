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
                console.log('Button 1 clicked');
                break;
            case 'button2':
                console.log('Button 2 clicked');
                break;
            case 'button3':
                console.log('Button 3 clicked');
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
document.getElementById('yesButton').addEventListener('click', () => {
    console.log('YES clicked');
    closeModal();
});
document.getElementById('noButton').addEventListener('click', () => {
    console.log('NO clicked');
    closeModal();
});
