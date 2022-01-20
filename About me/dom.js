var myTimings = { duration: 2000, playbackRate: 1 }


let animateLogo = [
    { opacity: 00, width:'5%', transform: 'rotate(360deg)' },
    { opacity: 100}
]

let obj = document.getElementById('logoObject')
obj.animate(animateLogo, myTimings);

let expandImage = document.querySelector('.top-sidebar img');
let reset = document.querySelector('.top-sidebar button')
let originalWidth = expandImage.width;
let increaseWidth = originalWidth;

function enlargeImage() {
    increaseWidth++;
    expandImage.style.width = increaseWidth + 'px';
    if (increaseWidth>200){
        clearInterval(timer);
        increaseWidth = originalWidth;
        reset.style.visibility='visible';
    }
}

expandImage.addEventListener('click', () => {
    timer = setInterval(enlargeImage, 6);
})

reset.addEventListener('click', ()=>{
    expandImage.style.width = originalWidth + 'px';
    reset.style.visibility='hidden';
})

function updateColour(){
    var select = document.getElementById('colourSelect');
    var selVal = select.options[select.selectedIndex].value;
    if(selVal == 'grey'){
        mainBody.setAttribute('class','grey');
        localStorage.backColour = 'grey';
    }
    else if (selVal == 'blue'){
        mainBody.setAttribute('class','blue');
        localStorage.backColour = 'blue';
    }
    else if (selVal == 'yellow'){
        mainBody.setAttribute('class','yellow');
        localStorage.backColour = 'yellow';
    }
    else{
        mainBody.setAttribute('class','white');
        localStorage.backColour = 'white';
    }
}

function updateSize(){
    var select = document.getElementById('fontSize');
    var selVal = select.options[select.selectedIndex].value;
    if(selVal == 'small'){
        mydoc.setAttribute('id', 'smaller');
        localStorage.fontSize = 'smaller';
    }
    else if (selVal == 'large'){
        mydoc.setAttribute('id', 'larger');
        localStorage.fontSize = 'larger';
    }
    else{
        mydoc.setAttribute('id', 'normal');
        localStorage.fontSize = 'normal';
    }
}

let mainBody = document.querySelector('body');
let mydoc = document.querySelector('.mainContent');

if (localStorage.fontSize == 'larger'){
    mydoc.setAttribute('id', 'larger');
    document.getElementById('fontSize').value='large';
}
else if (localStorage.fontSize == 'smaller'){
    mydoc.setAttribute('id', 'smaller');
    document.getElementById('fontSize').value='small';
}
else{
    mydoc.setAttribute('id', 'normal');
    document.getElementById('fontSize').value='reg';
}

if (localStorage.backColour == 'grey'){
    mainBody.setAttribute('class','grey');
    document.getElementById('colourSelect').value='grey';
}
else if(localStorage.backColour == 'blue'){
    mainBody.setAttribute('class','blue');
    document.getElementById('colourSelect').value='blue';
}
else if(localStorage.backColour == 'yellow'){
    mainBody.setAttribute('class','yellow');
    document.getElementById('colourSelect').value='yellow';
}
else{
    mainBody.setAttribute('class','white');
}