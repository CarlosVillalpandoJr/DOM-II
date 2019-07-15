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
