import { subscribe } from './firebase/hellfire-club.js';

const txtName = document.getElementById('txtName');
const txtEmail = document.getElementById('txtEmail');
const txtLevel = document.getElementById('txtLevel');
const txtCharacter = document.getElementById('txtCharacter');
const btnSubscribe = document.getElementById('btnSubscribe');

btnSubscribe.addEventListener('click', async () => {

    if (!txtName.value || !txtEmail.value || !txtLevel.value || !txtCharacter.value) {
        alert('Please fill all fields!');
        return;
    }

    const subscribeResponse = await subscribe({
        name: txtName.value,
        email: txtEmail.value,
        level: txtLevel.value,
        character: txtCharacter.value
    });

    alert(`Subscription was created with sucess!: ${subscribeResponse}`);
    clearForm();
});

function clearForm() {
    txtName.value = '';
    txtEmail.value = '';
    txtLevel.value = '';
    txtCharacter.value = '';
}