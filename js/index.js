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

// Sign up buttons

let signUpBtn = document.querySelectorAll('.btn')
signUpBtn.forEach(element => {
    element.addEventListener('contextmenu', event => {
        event.target.style.fontSize = '30px';
        event.preventDefault()
    })
})