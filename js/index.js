// Your code goes here

// Navigation Header 
let navigationHeader = document.getElementsByClassName('logo-heading');
navigationHeader[0].addEventListener('click', event => {
    event.target.style.color = 'red';
})

// Navigation Links
let navigationLinks = document.querySelectorAll('.nav-link')
navigationLinks.forEach(element => {
    element.addEventListener('mouseover', event => {
        event.target.style.color = 'orange';
    })
})

navigationLinks.forEach(element => {
    element.addEventListener('mouseout', event => {
        event.target.style.display = 'none'
    })
})

// Images
let images = document.querySelectorAll('.img')
images.forEach(element => {
    element.addEventListener('dblclick', event => {
        event.target.style.display = 'none';
    })
})

let lastImage = document.querySelector('.last-img')
lastImage.addEventListener('drag', () => {
    lastImage.style.display = 'none'
})

// Sign up buttons

let signUpBtn = document.querySelectorAll('.btn')
signUpBtn.forEach(element => {
    element.addEventListener('contextmenu', event => {
        event.target.style.fontSize = '30px';
        event.preventDefault()
    })
})


// Window Event Listeners 
window.setTimeout(() => {
    alert("You won't find 10 event listeners! :) ")
}, 0)

window.addEventListener('scroll', event => {
    if(scrollY = 900) {
        console.log('You found me!!')
    }
})

// Body Event Listeners 
const body = document.getElementsByTagName('body');
body[0].addEventListener('keydown', event => {
    event.target.style.backgroundColor = 'purple'
})

body[0].addEventListener('keyup', event => {
    event.target.style.backgroundColor = 'gold'
})

body[0].addEventListener('click', event => {
    event.target.style.backgroundColor = 'white'
})




