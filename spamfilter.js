const inputText = document.querySelector('.input');
const button = document.querySelector('.send-btn');
const comments = [];

function handler() {

    if (inputText.value !== '') {

        function checkSpam() {
            return inputText.value.replace(/viagra|xxx/gi, '***');
        }

        const checkedText = checkSpam();

        comments.push(checkedText);
        console.log(comments);

        let newComment = '';

        for (let item of comments) {
            newComment += `<p class="new">${item}</p>`;
            document.querySelector('.output').innerHTML = newComment;
        }

        inputText.value = '';
    }
}

button.addEventListener('click', handler);





