const spanishWords = document.querySelector('.spanish');
const englishWords = document.querySelector('.english');



words.forEach(word => {
    // console.log(word.targetWord);
    let nuDiv = document.createElement('div');
    let nuDiv2 = document.createElement('div');
    nuDiv.classList.add('wordBox');
    nuDiv2.classList.add('wordBox');
    nuDiv.textContent = word.targetWord;
    nuDiv2.textContent = word.englishWord;
    nuDiv2.addEventListener('click', function (event) {
        if (event.target.classList.contains('selected')) {
            event.target.classList.remove('selected')
        } else
            event.target.classList.add('selected');
    })
    nuDiv.addEventListener('click', function (event) {
        if (event.target.classList.contains('selected')) {
            event.target.classList.remove('selected')
        } else
            event.target.classList.add('selected');
    })
    spanishWords.append(nuDiv);
    englishWords.append(nuDiv2);
});

