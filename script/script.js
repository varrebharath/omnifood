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

// STICKY NAVIGATION
const sectionHeroEl=document.querySelector(".section-hero");
const obs= new IntersectionObserver(function(entries){
  const ent=entries[0];
  console.log(ent);
  if(ent.isIntersecting==false){
    document.body.classList.add('sticky');
  }
  if(ent.isIntersecting==true){
    document.body.classList.remove('sticky');
  }

},
{
  // in viewport
  root:null,
  threshold:0,
  rootMargin:"-80px"
});

obs.observe(sectionHeroEl);























































































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

*/
