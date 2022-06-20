const prev = document.querySelector('.prev');
const next = document.querySelector('.next');

const img1 = document.querySelector('#img1');
const img2 = document.querySelector('#img2');
const img3 = document.querySelector('#img3');

const dot1 = document.querySelector('#dot1');
const dot2 = document.querySelector('#dot2');
const dot3 = document.querySelector('#dot3');


function changeImgAndDot(pic1, pic2, d1, d2){
    pic1.style.display = 'none';
    pic2.style.display = 'block';
    d1.className = '';
    d2.className = 'active'
}

function nextImg(){
    if(img1.style.display == 'block'){changeImgAndDot(img1, img2, dot1, dot2);}else 
    if(img2.style.display == 'block'){changeImgAndDot(img2, img3, dot2, dot3);}else
    if(img3.style.display == 'block'){changeImgAndDot(img3, img1, dot3, dot1);}
}
function prevImg(){
    if(img1.style.display == 'block'){changeImgAndDot(img1, img3, dot1, dot3);}else 
    if(img2.style.display == 'block'){changeImgAndDot(img2, img1, dot2, dot1);}else
    if(img3.style.display == 'block'){changeImgAndDot(img3, img2, dot3, dot2);}
}

next.addEventListener('click', ()=>{
    nextImg();
});

prev.addEventListener('click', ()=>{
    prevImg();
});

dot1.addEventListener('click', ()=>{
    img1.style.display = 'block';
    img2.style.display = 'none';
    img3.style.display = 'none';
    dot1.className = 'active';
    dot2.className = '';
    dot3.className = '';
});

dot2.addEventListener('click', ()=>{
    img1.style.display = 'none';
    img2.style.display = 'block';
    img3.style.display = 'none';
    dot1.className = '';
    dot2.className = 'active';
    dot3.className = '';
});

dot3.addEventListener('click', ()=>{
    img1.style.display = 'none';
    img2.style.display = 'none';
    img3.style.display = 'block';
    dot1.className = '';
    dot2.className = '';
    dot3.className = 'active';
});
