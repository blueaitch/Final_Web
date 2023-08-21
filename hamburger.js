// function to link the buttons to the hamburger for when the screen gets narrow

function toggleNav(e){
    const nav = document.querySelectorAll(".button");
    console.log('click');
    console.log(nav);

    // links.mainNav.toggle('show');

}
/// grab the element by id 
const hamburger = document.querySelector('#hamburger');
hamburger.addEventListener('click', toggleNav);