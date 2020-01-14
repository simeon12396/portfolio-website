window.addEventListener('DOMContentLoaded', () => {
    const text = ['Simeon Ieroteev', 'a Front End Developer'];
    let wordCounter = 0;
    let indexOfLetter = 0;
    let currentLetter = '';
    let typingText = '';

    const typing = () => {

        if(wordCounter === text.length) {
            wordCounter = 0;
        }; 

        currentLetter = text[wordCounter].charAt(indexOfLetter);

        typingText += currentLetter;

        document.querySelector('.typewriter-typed-text').innerHTML = typingText;

        indexOfLetter++;

        if(indexOfLetter === text[wordCounter].length) {
            wordCounter++;
            indexOfLetter = 0;
            typingText = '';
        };
    };
    
    setInterval(() => {
        typing();
    }, 200);

});

