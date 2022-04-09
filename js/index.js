window.addEventListener("scroll", () => {
    document
        .querySelector(".navbar")
        .classList.toggle("window-scroll", window.scrollY > 0);
});

const faqs = document.querySelectorAll('.faq');
faqs.forEach(el => {
    el.addEventListener('click', () => {
        el.classList.toggle('open');
    });
});

// function myFunction(x) {
//     if (x.matches) { // If media query matches
//       document.body.innerHTML = `<h2>This web not available for small screen.</h2>`;
//     } else {
//       document.body.style.backgroundColor = "pink";
//     }
//   }
  
//   var x = window.matchMedia("(max-width: 700px)")
//   myFunction(x) // Call listener function at run time
//   x.addListener(myFunction)