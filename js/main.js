let nav = document.querySelector('#list-nav'),
    items = document.querySelectorAll('.item'),
    sections = document.querySelectorAll('section');

    //-----------------burger-------------------
    let burger = document.querySelector('.burger');

    burger.addEventListener('click',()=>{
        document.querySelector('.navigate').classList.toggle('activ-menu');
        burger.classList.toggle('activ-menu');
    })

    //-------------------
    nav.addEventListener('click',(e)=>{
        items.forEach((elem,i)=>{
            if(e.target==elem){
                if(document.querySelector('.navigate').classList.contains('activ-menu')){
                    document.querySelector('.navigate').classList.remove('activ-menu');
                }
                if(burger.classList.contains('activ-menu')){
                    burger.classList.remove('activ-menu');
                }

                let y=html.scrollTop;
                let step =0;
               if(sections[i].getBoundingClientRect().y<0)
                {
                    step = -25;
                }
                 else step = 25;
                let interval = setInterval(()=>{
                    window.scrollTo(0,y);
                    console.log(html.scrollTop,sections[i].scrollTop)
                    if(sections[i].getBoundingClientRect().y < 13 && sections[i].getBoundingClientRect().y > -13)
                    {
                        clearInterval(interval);
                    }
                    
                     y+=step;
                },1)
            }
        })
    })


// ---------------------------------------------------------------

let nextSection = document.querySelector('.next-slide__border');

nextSection.addEventListener('click',()=>{
    let y = html.scrollTop;
    let interval = setInterval(()=>{
        window.scrollTo(0,y);
        if(sections[0].getBoundingClientRect().y < 13 && sections[0].getBoundingClientRect().y > -13)
        {
            clearInterval(interval);
        }
        y+=25;
    },1)
})

let project = document.querySelector('.button__project');
project.addEventListener('click',()=>{
    let y = html.scrollTop;
    let interval = setInterval(()=>{
        window.scrollTo(0,y);
        if(sections[sections.length-1].getBoundingClientRect().y < 13 && sections[sections.length-1].getBoundingClientRect().y > -13)
        {
            clearInterval(interval);
        }
        y+=25;
    },1)
})

//----------------------------------------------------------------
let contact = document.querySelector('.button__contact');
let cancelContact = document.querySelector('.cancel-contact');

    contact.addEventListener('click',()=>{
        document.querySelector('.header__contact-container').style.display = 'block';
        document.body.style.overflowY = 'hidden';
    })
    cancelContact.addEventListener('click',()=>{
        document.querySelector('.header__contact-container').style.display = 'none';
        document.body.style.overflow = ' ';
    })



//------------------------------------------------------------------

let filmCard = document.querySelectorAll('.film__card'),
    sectionFilms = document.querySelector('.section-films');

    window.onscroll = function(){

        if(sectionFilms.getBoundingClientRect().y < 300){
            let i = 0;
            let interval = setInterval(()=>{
                filmCard[i].classList.remove('inactive');
                filmCard[i].classList.add('activ');
                
                i++;
                if(i == filmCard.length){
                    clearInterval(interval);
                }
            },300);
        }
    }

    


//------------------------------------
let up = document.querySelector('.container-button-up');
let html = document.querySelector('html');

up.addEventListener('click',()=>{
    if(html.scrollTop>0)
    {
         let up = setInterval(()=>{
            html.scrollTop -=30 ;
            if(html.scrollTop==0)
            {
                clearInterval(up);
            }
        },1);
    }
})

//-----------white-dark----------------

let checkboxDark = document.querySelector('#dark'),
    labelDark = document.querySelector('.label-mod');
    let darkcs;
labelDark.addEventListener('click',()=>{
    if(!checkboxDark.checked){
        darkcss = document.createElement('link');
        darkcss.rel = 'stylesheet';
        darkcss.href = 'css/dark.css';
        let  head = document.querySelector('head');
        head.append(darkcss);
        localStorage.setItem('pageStyle','black');
    }
    else{
        darkcss.remove();
        localStorage.removeItem('pageStyle');
    }
})
if(localStorage.getItem('pageStyle')=='black'){
        darkcss = document.createElement('link');
        darkcss.rel = 'stylesheet';
        darkcss.href = 'css/dark.css';
        let  head = document.querySelector('head');
        head.append(darkcss);   
        checkboxDark.checked = true;
}
//-----------Slider----------------------------------

let img = document.querySelectorAll('.sity__slider-img'),
    next = document.querySelector('.next'),
    prev = document.querySelector('.prev'),
    index = 0;

    function hidden(){
        img.forEach((elem)=>{
            elem.classList.add('opasity');
        })
    }
    hidden();
    img[0].classList.remove('opasity');

    next.addEventListener('click',()=>{
        index++;
        if(index>img.length-1){
            index = 0;
        }
        hidden();
        img[index].classList.remove('opasity');
    })
    prev.addEventListener('click',()=>{
        index--;
        if(index<0){
            index = img.length-1;
        }
        hidden();
        img[index].classList.remove('opasity');
    })

//--------------PC control----------------------------


let model = document.querySelector('.model');

let position = {
    x:0,
    y:0,
    move: false
}
model.addEventListener('mousedown',(e)=>{
    
    position.x=e.clientX;
    position.y=e.clientY;
    position.move = true;
    document.addEventListener('mousemove',(el)=>{
        if(position.move){
            model.style.transform ='rotateY(' + (-position.x+el.clientX) + 'deg)' +'rotateX(' + (position.y-el.clientY) +'deg)';
        }
    })
})

document.addEventListener('mouseup',()=>{
    position.move = false;
})
//------------mobile control----------------

model.addEventListener('touchstart',(e)=>{

    if ((e.clientX)&&(e.clientY)) {
        position.x = e.clientX;
        position.y = e.clientY;
     } 
    else if (e.targetTouches) {
        position.x = e.targetTouches[0].clientX;
        position.y = e.targetTouches[0].clientY;
        e.preventDefault();
    }

    position.move = true;
    console.log("lf")
    document.addEventListener('touchmove',(el)=>{
        if(position.move){
            console.log(position)
            model.style.transform ='rotateY(' + (-position.x+el.targetTouches[0].clientX) + 'deg)' +'rotateX(' + (position.y-el.targetTouches[0].clientY) +'deg)';
        }
    })
})

document.addEventListener('touchend',()=>{
    position.move = false;
})


//-----------------------------------------------