const darkModeButton = document.getElementById('darkMode');
const nameInput = document.getElementById('nameInput');
const numberInput = document.getElementById('numberInput');
const users = document.querySelector('.users');
const addButton = document.getElementById('addButton');

function addUser() {
    if (nameInput.value.trim() == '' || numberInput.value.trim() == '') {
        alert('Введите имя и номер!');
        return;
    }

    let user = document.createElement('li');
    user.classList.add('user');

    user.innerHTML = `
        <div class="user">
            <img class="userImg" src="Group 232.png" alt="">
            <div class="name">
                <h2>${nameInput.value}</h2>
                <p>${numberInput.value}</p>
            </div>
            <div class="buttons">
                <button class="editButton"><img src="tabler_edit.png" alt=""></button>
                <button class="deleteButton"><img src="Vector (6).png" alt=""></button>
            </div>
        </div>
    `;

    users.appendChild(user);
    
    nameInput.value = '';
    numberInput.value = '';
}

addButton.addEventListener('click', addUser);

darkModeButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});
