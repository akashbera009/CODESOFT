document.addEventListener("DOMContentLoaded", function() {
    const textElement1 = document.querySelector('.text');
    const textElement2=document.querySelector('.text2');
    const textElement3=document.querySelector('.text3');
    const textContent1 = textElement1.textContent;
    const textContent2 = textElement2.textContent;
    const textContent3 = textElement3.textContent;
    textElement1.innerHTML = textContent1.split('').map((char, index) =>
        char === ' ' ? `<span>&nbsp;</span>` : `<span>${char}</span>`
    ).join('');
    textElement2.innerHTML = textContent2.split('').map((char, index) =>
        char === ' ' ? `<span>&nbsp;</span>` : `<span>${char}</span>`
    ).join('');
    textElement3.innerHTML = textContent3.split('').map((char, index) =>
        char === ' ' ? `<span>&nbsp;</span>` : `<span>${char}</span>`
    ).join('');
});


//navbar    
let navList= document.querySelectorAll('.navbar ul li a')
navList.forEach((ele)=>{
    ele.style.color="white"
    console.log(ele.innerHTML);
})
navList[0].style.color="#66fcf1"
let element=document.querySelector('.navbar ul')
element.addEventListener('click',(e)=>{
    let navElement= e.target.innerHTML
    
    navList.forEach((ele)=>{
        if(ele.innerHTML===navElement){
            ele.style.color="#66fcf1"
        }else{
            ele.style.color="white"
        }
    })
    console.log(navElement);
})

// zoom blur 
function toggle(){
    let blur=document.querySelector('#blur')
    blur.classList.toggle('active')
    let popup=document.querySelector('.popup')
    popup.classList.toggle('active')
}