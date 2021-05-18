const themeToggle = document.getElementById('theme-toggle');
const ballToggle = document.getElementById('ball-toggle');
const body = document.querySelector('body');
var theme = 1;

themeToggle.addEventListener('click', ()=>{
    theme++;
    switch(theme){
        case 2:
            body.classList.add('theme-2');
            ballToggle.classList.add('justify-center');
            break;
        case 3:
            body.classList.remove('theme-2');
            body.classList.add('theme-3');
            ballToggle.classList.remove('justify-center');
            ballToggle.classList.add('justify-end');
            break;
        case 4:
            theme = 1;
            body.classList.remove('theme-3');
            ballToggle.classList.remove('justify-end');
            break;
    }

    //console.log('theme: ', theme);
    //console.log(body);
    //console.log(ballToggle);
});