var typed = new Typed("#element", {
    strings: ["Web developer", "Web designer"],
    typeSpeed: 100,
    backSpeed: 50,
    loop: true,
    loopCount: Infinity,
    smartBackspace: false,
    autoInsertCss: true,
    showCursor: false,
  });

  var menuIcon = document.getElementById("menu-icon");
  var navbar = document.getElementById("navbar");

  console.log(navbar.style.display);

  menuIcon.addEventListener("click", function(){
    if ((navbar.style.right === "-100%")) {
      navbar.style.right = "0";
    } else  {
      navbar.style.right = "-100%";
    }
  });
function myFunction() {
  var element = document.body;
  element.classList.toggle("dark-mode");
 }
