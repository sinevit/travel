console.log( " Слайдер изображений в секции destinations 45/50 \n Нажатие на кнопку Login (кнопка Account в мобильной версии) показывает сверстанный логин попап 50/50 \n Нажатие на кнопку Register на Login попапе меняет разметку попапа на разметку Sign Up попапа согласно макету (То есть нажатие не закрывает модал а просто меняет его наполнение). 25/25");


window.onload = function(){
    console.log('Hi');

    addMenuClickHandler();
    addOverlayClickHandler();

    moveRight();
    moveLeft();
    animationEndHandler();

    openPopup();
    closePopup();
    addClickRegister();
    addClickLogin();

    getData();
}

const addClickRegister =() => {
    document.querySelector("#register").addEventListener('click', (e)=>{
        changePopup();
        deleteData();
    })
}
const addClickLogin =() => {
    document.querySelector("#loginpopup").addEventListener('click', (e)=>{
        changePopup();
        deleteData();
    })
}

const changePopup = () =>{
    if (document.getElementById('popup__title').innerHTML === 'Log in to your account'){
        document.getElementById('popup__title').innerHTML = 'Create account'
    }else{
        document.getElementById('popup__title').innerHTML = 'Log in to your account'
    }
    document.querySelector('.popup__text1').classList.toggle('hidden');
    document.querySelector('.popup__text2').classList.toggle('hidden');
    document.querySelector('.form1').classList.toggle('hidden');
    document.querySelector('.form2').classList.toggle('hidden');
    document.querySelector('.title--or').classList.toggle('hidden');
    document.querySelector('.forgot').classList.toggle('hidden');
}

const getData =() => {
    document.querySelector('.popup__button').addEventListener('click', (e) => {
      e.preventDefault();
      const email = document.querySelector('#email');
      const password = document.querySelector('#password');
      alert(`Email: ${email.value}, Password: ${password.value}`);
    });
}

const deleteData =() => {
    const email = document.querySelector('#email');
    const password = document.querySelector('#password');
    email.value= '';
    password.value= '';

}

const openPopup = () => {
    document.querySelector('#login').addEventListener('click', (e)=>{
        document.querySelector('.popup').classList.toggle('active');
        document.body.style.overflow = "hidden";
    })
    document.querySelector('#account').addEventListener('click', (e)=>{
        document.querySelector('.popup').classList.toggle('active');
        document.body.style.overflow = "hidden";
    })
}

const closePopup = () => {
    document.querySelector('.popup').addEventListener('click', (e)=>{
        if(e.target.classList[0] === 'popup'){
            document.querySelector('.popup').classList.toggle('active');
            document.body.style.overflow = "auto";
            if(document.getElementById('popup__title').innerHTML ==='Create account'){
                changePopup();
            }
            deleteData();
        }
    })
}

const moveRight=() =>{
    const RIGHT_CARD = document.getElementById('card-right');
    const LEFT_CARD = document.getElementById('card-left');
    const RIGHT_ARR = document.querySelector('.arrow--right');
    const LEFT_ARR = document.querySelector('.arrow--left');

    window.addEventListener("resize", function() {
        // console.log(document.body.clientWidth);
        if (document.body.clientWidth < 768) {
            RIGHT_ARR.addEventListener('click', (e) =>{
            document.querySelector(".carusel").classList.add('transition-right');
            RIGHT_ARR.removeEventListener('click', moveRight )
            LEFT_ARR.removeEventListener('click', moveLeft )
        })}
    });
            RIGHT_CARD.addEventListener('click', (e) =>{
            document.querySelector(".carusel").classList.add('transition-right');
            RIGHT_CARD.removeEventListener('click', moveRight )
            LEFT_CARD.removeEventListener('click', moveLeft )
    
        })

}
const moveLeft=() =>{
    const RIGHT_CARD = document.getElementById('card-right');
    const LEFT_CARD = document.getElementById('card-left');
    const RIGHT_ARR = document.querySelector('.arrow--right');
    const LEFT_ARR = document.querySelector('.arrow--left');


    window.addEventListener("resize", function() {
        // console.log(document.body.clientWidth);
        if (document.body.clientWidth < 768) {
            LEFT_ARR.addEventListener('click', (e) =>{
                document.querySelector(".carusel").classList.add('transition-left');
                RIGHT_ARR.removeEventListener('click', moveRight )
                LEFT_ARR.removeEventListener('click', moveLeft )
            })}
    });
    LEFT_CARD.addEventListener('click', (e) =>{
        document.querySelector(".carusel").classList.add('transition-left');
        RIGHT_CARD.removeEventListener('click', moveRight )
        LEFT_CARD.removeEventListener('click', moveLeft )
    })
}


const animationEndHandler=() =>{
    document.querySelector(".carusel").addEventListener('animationend', (e)=>{
        const ITEM_LEFT = document.querySelector('#card-left');
        const ITEM_RIGHT = document.querySelector('#card-right');
        const ITEM_ACTIVE = document.querySelector('#card-active');
        if(e.animationName === 'move-left' || e.animationName === 'move-left-l' || e.animationName === 'move-left-t' || e.animationName === 'move-left-m'){
            document.querySelector(".carusel").classList.remove('transition-left');
            ITEM_RIGHT.innerHTML=ITEM_ACTIVE.innerHTML;
            ITEM_ACTIVE.innerHTML= ITEM_LEFT.innerHTML;

            const card = createCardLeft(ITEM_ACTIVE.children[0].id);
            ITEM_LEFT.innerHTML = "";
            ITEM_LEFT.append(card);

        }else{
            document.querySelector(".carusel").classList.remove('transition-right');

            ITEM_LEFT.innerHTML=ITEM_ACTIVE.innerHTML;
            ITEM_ACTIVE.innerHTML= ITEM_RIGHT.innerHTML;

            const card = createCardRight(ITEM_ACTIVE.children[0].id);
            ITEM_RIGHT.innerHTML = "";
            ITEM_RIGHT.append(card);
        }
        changePaginationActive(ITEM_ACTIVE.children[0].id);
    
    })
}

const changePaginationActive =(id) => {
    const DOT = document.querySelectorAll('.pagination__dot')
    DOT.forEach(el => (el.id == id)? el.classList.add('active'): el.classList.remove('active'));
}


const createCardLeft =(id) =>{
    const card = document.createElement('div');
    const span = document.createElement('span');
    if(id === 'spain'){
        card.classList.add('card', 'card3');
        card.id = 'usa'
        span.innerHTML="USA"
    }
    if(id === 'usa'){
        card.classList.add('card', 'card2');
        card.id = 'japan'
        span.innerHTML="JAPAN"
    }

    if(id === 'japan'){
        card.classList.add('card', 'card1');
        card.id = 'spain'
        span.innerHTML="SPAIN"
    }

    card.append(span);
    return card;
}

const createCardRight =(id) =>{
    const card = document.createElement('div');
    const span = document.createElement('span');
    if(id === 'spain'){
        card.classList.add('card', 'card2');
        card.id = 'japan'
        span.innerHTML="JAPAN"
    }
    if(id === 'usa'){
        card.classList.add('card', 'card1');
        card.id = 'spain'
        span.innerHTML="SPAIN"
    }

    if(id === 'japan'){
        card.classList.add('card', 'card3');
        card.id = 'usa'
        span.innerHTML="USA"
    }

    card.append(span);
    return card;
}

const addMenuClickHandler =() => {
    document.querySelector('.hamburger').addEventListener('click', (e) =>{
        document.querySelector('.hamburger').classList.toggle('active');
        document.querySelector('.hamburger__menu').classList.toggle('active');
    })
}

const addOverlayClickHandler =() => {
    document.querySelector('.hamburger__menu').addEventListener('click', (e) =>{
        document.querySelector('.hamburger').classList.toggle('active');
        document.querySelector('.hamburger__menu').classList.toggle('active');
    })
}

