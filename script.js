const toggle = document.getElementById('toggleDark');
const body = document.querySelector('body');
const all = document.getElementsByClassName("wrapper");
const log = document.querySelector("btn2");

toggle.addEventListener('click' , function(){
    this.classList.toggle('fa-moon');
    if(this.classList.toggle('toggleDark')){
        body.style.backgroundColor = '#092f4c';
        body.style.transition ='2s';
    }else{
        body.style.background = 'rgb(13, 180, 186)' ;
        body.style.color = 'white';
        body.style.transition ='2s';
    }
})

/////////////////////

const wrapper = document.querySelector('.wrapper');
const loginlink =document.querySelector('.login-link');
const registerlink =document.querySelector('.register-link');
const btnPopup =document.querySelector('.btnlogin-popup');


registerlink.addEventListener('click' ,()=>{
    wrapper.classList.add('active');
});

loginlink.addEventListener('click' ,()=>{
    wrapper.classList.remove('active');
});


btnPopup.addEventListener('click' ,()=>{
    wrapper.classList.add('active-popup');
});



