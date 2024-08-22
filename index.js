const addUserButton = document.getElementById('user');
const popupForm = document.getElementById('popupForm');
const closePopup = document.querySelector('.close');
const submit = document.querySelector('#submit');
const nameInput = document.querySelector('#name');


addUserButton.addEventListener('click', () => {
    popupForm.style.display = 'block';
});


closePopup.addEventListener('click', () => {
    popupForm.style.display = 'none';
});


window.addEventListener('click', (event) => {
    if (event.target === popupForm) {
        popupForm.style.display = 'none';
    }
});

submit.addEventListener('click', () => {
    popupForm.style.display = 'none';
    const name = nameInput.value;
    alert(`Welcome ${name}`); 
});
