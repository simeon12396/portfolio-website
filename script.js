window.addEventListener('DOMContentLoaded', () => {
    const text = ["a Front End Developer  "];
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

    const backToTopBtn = document.querySelector('.backToTopBtn');

    const checkYOffset = () => {
        if(window.pageYOffset > 100) {
            backToTopBtn.style.opacity = 1;
            backToTopBtn.classList.remove('js-hide-btn')
            backToTopBtn.classList.add('js-appear-btn');
        } else {
            backToTopBtn.style.opacity = 0;
            backToTopBtn.classList.remove('js-appear-btn');
            backToTopBtn.classList.add('js-hide-btn')
        }
    };

    const backToTop = () => {
        window.scrollTo(0, 0);
    };
    
    window.addEventListener('scroll', checkYOffset);
    backToTopBtn.addEventListener('click', backToTop)

    const portfolioWrapper = document.querySelector('#portfolio-wrapper');
    const progressBar = document.querySelector('.custom-progress-bar');
    
    const progressBarEffect = () => {
        let scrollValue = window.pageYOffset;
        let portfolioWrapperHeight = portfolioWrapper.clientHeight - window.innerHeight

        let progressPercentage = (scrollValue / portfolioWrapperHeight) * 100;

        progressBar.style.width = `${progressPercentage}%`;
    };

    window.addEventListener('scroll', progressBarEffect)
});

