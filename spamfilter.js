const inputText = document.querySelector('.input');
const button = document.querySelector('.send-btn');
const comments = [];

const checkSpam = () => inputText.value.replace(/viagra|xxx/gi, '***');

function handler() {

    if (inputText.value !== '') {

        comments.push(checkSpam());
        console.log(comments);

        let newComment = '';

        for (let item of comments) {
            newComment += `<p class="new">${item}</p>`;
            document.querySelector('.output').innerHTML = newComment;
        }

        inputText.value = ''; //очищаем текстовое поле после отправки комментария
    }
}

button.addEventListener('click', handler);





