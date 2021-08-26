/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/
const sections = document.querySelectorAll("section");


/**
 * End Global Variables*/
 

// Add class 'active' to section when near top of viewport
// Scroll to anchor ID using scrollTO event
// Scroll to section on link click
// Set sections as active
const  addActiveClass = ()=>{

    sections.forEach((sec)=>{
        const sectionTop = sec.getBoundingClientRect().top; 
        if(sectionTop >=0 && sectionTop<= 400){
            sec.classList.add("active-class");
        }
        else{
            sec.classList.remove("active-class");
        }
    });

};

 document.addEventListener('scroll', addActiveClass);



//build nav

sections.forEach( (elm ,index)=>{

    const navbarList = document.getElementById('navbar__list');
    const list = document.createElement('li');
    list.innerHTML =`<a href="#section${index+1}" class="menu__link"> ${ elm.getAttribute("data-nav")}  </a>`;
    navbarList.appendChild(list);


});





