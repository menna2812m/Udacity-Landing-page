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
const listLink = document.querySelectorAll('a');

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/

// Add class 'active' to section when near top of viewport
// Scroll to anchor ID using scrollTO event
// Scroll to section on link click
// Set sections as active
const  addActiveClass = ()=>{

    sections.forEach((sec)=>{
        const sectionTop = sec.getBoundingClientRect().top; 
        if(sectionTop >=0 && sectionTop<= 400){
            sec.classList.add("your-active-class");
            listLink.forEach(anchor=>{
                if(sec.getAttribute("data-nav") === anchor.textContent){
                  
                    anchor.classList.add("your-active-class");
                }
                else{
                    anchor.classList.remove("your-active-class");
                }
              
            });

        }
        else{
            sec.classList.remove("your-active-class");
        }
       

       
    })

};

 document.addEventListener('scroll', addActiveClass);



//build nav

sections.forEach( (elm ,index)=>{

    const navList = document.getElementById('navbar__list');
    const list = document.createElement('li');
    list.innerHTML =`<a href="#section${index+1}" class="menu__link"> ${ elm.getAttribute("data-nav")}  </a>`;
    navList.appendChild(list);


});



