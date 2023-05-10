// set current year

const yearEl=document.querySelector(".year");
const currentYear=new Date().getFullYear();
console.log(currentYear);
yearEl.textContent=currentYear;

// make mobile navigation work
const btnNav=document.querySelector(".btn-mobile-nav");
const headerEl=document.querySelector(".header");
btnNav.addEventListener('click', function(){
  headerEl.classList.toggle('nav-open');
})

// smooth scrolling animation

const allLinks = document.querySelectorAll('a:link');
// console.log(allLinks);
allLinks.forEach(function(link){
  link.addEventListener('click', function(e){
    e.preventDefault();
    const href= link.getAttribute("href");
    // console.log(href);
    if(href == "#"){
      window.scrollTo({
        top:0,
        behavior:"smooth"
      });
    } 
    // scrool to other links
    if(href !=="#" && href.startsWith("#")){
      // console.log(href);
      const sectionEl = document.querySelector(href);
      sectionEl.scrollIntoView({
        behavior:"smooth"
      });
    }
    // close mobile navigation
    if(link.classList.contains('main-nav-link')){
      headerEl.classList.toggle("nav-open");
    }

  });
});

























































































/////////////////////////////////////////////////////////
// Fixing flexbox gap property missing in some Safari versions
// function checkFlexGap() {
//   var flex = document.createElement("div");
//   flex.style.display = "flex";
//   flex.style.flexDirection = "column";
//   flex.style.rowGap = "1px";

//   flex.appendChild(document.createElement("div"));
//   flex.appendChild(document.createElement("div"));

//   document.body.appendChild(flex);
//   var isSupported = flex.scrollHeight === 1;
//   flex.parentNode.removeChild(flex);
//   console.log(isSupported);

//   if (!isSupported) document.body.classList.add("no-flexbox-gap");
// }
// checkFlexGap();

document.addEventListener("DOMContentLoaded", function() {
  function checkFlexGap() {
    var flex = document.createElement("div");
    flex.style.display = "flex";
    flex.style.flexDirection = "column";
    flex.style.rowGap = "1px";

    flex.appendChild(document.createElement("div"));
    flex.appendChild(document.createElement("div"));

    document.body.appendChild(flex);
    var isSupported = flex.scrollHeight === 1;
    flex.parentNode.removeChild(flex);
    console.log(isSupported);

    if (!isSupported) {
      document.body.classList.add("no-flexbox-gap");
      console.log('Flex gap not supported');
    } else {
      console.log('Flex gap supported');
    }
  }
  checkFlexGap();
});


// https://unpkg.com/smoothscroll-polyfill@0.4.4/dist/smoothscroll.min.js

/*
.no-flexbox-gap .main-nav-list li:not(:last-child) {
  margin-right: 4.8rem;
}

.no-flexbox-gap .list-item:not(:last-child) {
  margin-bottom: 1.6rem;
}

.no-flexbox-gap .list-icon:not(:last-child) {
  margin-right: 1.6rem;
}

.no-flexbox-gap .delivered-faces {
  margin-right: 1.6rem;
}

.no-flexbox-gap .meal-attribute:not(:last-child) {
  margin-bottom: 2rem;
}

.no-flexbox-gap .meal-icon {
  margin-right: 1.6rem;
}

.no-flexbox-gap .footer-row div:not(:last-child) {
  margin-right: 6.4rem;
}

.no-flexbox-gap .social-links li:not(:last-child) {
  margin-right: 2.4rem;
}

.no-flexbox-gap .footer-nav li:not(:last-child) {
  margin-bottom: 2.4rem;
}

@media (max-width: 75em) {
  .no-flexbox-gap .main-nav-list li:not(:last-child) {
    margin-right: 3.2rem;
  }
}

@media (max-width: 59em) {
  .no-flexbox-gap .main-nav-list li:not(:last-child) {
    margin-right: 0;
    margin-bottom: 4.8rem;
  }
}
*/
