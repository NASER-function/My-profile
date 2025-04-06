let img2 = document.querySelector(".img2");
let shuttle = document.querySelector(".shuttle");

window.onscroll = function () {
  let value = window.scrollY; // قيمة التمرير
  img2.style.top = 90 + value + "px"; // اجعل top يزيد مع التمرير
  shuttle.style.right = 90 + value + "px"; // اجعل top يزيد مع التمرير
};
document.querySelectorAll(".home").forEach(function (el) {
  el.onclick = function () {
  menu.style.top = "-600px";
   button_menu_x.classList.add("hide");
     button_menu.classList.remove("hide");

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
});

document.querySelectorAll(".Skills").forEach(function (el) {
  el.onclick = function () {
    const con = document.getElementById("goodAt");
    const topPosition =
      con.getBoundingClientRect().top + window.scrollY - "120";
 menu.style.top = "-600px";
 button_menu_x.classList.add("hide");
 button_menu.classList.remove("hide");

    window.scrollTo({
      top: topPosition,
      behavior: "smooth",
      
    });
  };
});

document.querySelectorAll(".Projectsbtn").forEach(function (event) {
  event.onclick = function () {
    const element = document.getElementById("ProjectsDiv");
     menu.style.top = "-600px";
     button_menu_x.classList.add("hide");
     button_menu.classList.remove("hide");
    const topPosition =
      element.getBoundingClientRect().top + window.scrollY - "170";
        window.scrollTo({
          top: topPosition,
          behavior: "smooth",
        });
  };
});


document.querySelectorAll(".Customersbtn").forEach(function(event){
  event.onclick=function(){
 const element = document.getElementById("headerProjectcon")
  menu.style.top = "-600px";
  button_menu_x.classList.add("hide");
  button_menu.classList.remove("hide");
  const topPosition =
      element.getBoundingClientRect().top + window.scrollY - "90";
    window.scrollTo({
      top: topPosition,
      behavior: "smooth",
    });
  }
})


document.querySelectorAll(".Social_Media").forEach(function(event){
  event.onclick=function(){
    const element = document.getElementById("divsocialMedia");
     menu.style.top = "-600px";
     button_menu_x.classList.add("hide");
     button_menu.classList.remove("hide");
        const topPosition =
          element.getBoundingClientRect().top + window.scrollY - "90";
        window.scrollTo({
          top: topPosition,
          behavior: "smooth",
        });
  }
})


// let Social_Media = (document.querySelectorAll(".Social_Media").onclick =
//   function () {
//     const element = document.getElementById("divsocialMedia");
//     const topPosition =
//       element.getBoundingClientRect().top + window.scrollY - "90";
//     window.scrollTo({
//       top: topPosition,
//       behavior: "smooth",
//     });
//   });



var preloder = document.getElementById("preloder");
window.addEventListener("load", function () {
  preloder.style.display = "none";
});
// document.getElementById("goToProjects").onclick = function () {
//   const element = document.getElementById("Projects");
//   const topPosition = element.getBoundingClientRect().top + window.scrollY;

//   window.scrollTo({
//     top: topPosition,
//     behavior: "smooth",
//   });
// };

var button_menu = document.getElementById("dropdown_menu_button");
var button_menu_x = document.getElementById("dropdown_menu_x_button");
var menu = document.getElementById("dropdown_menu");

button_menu.onclick = function () {
  button_menu.classList.add("hide");
  button_menu_x.classList.remove("hide");

  menu.style.top = "65px";
};
button_menu_x.onclick = function () {
  this.classList.add("hide");
  button_menu.classList.remove("hide");

  menu.style.top = "-600px";
};

// calendarOpen.onclick = function () {
//   this.classList.add("hide");
//   conAll.classList.remove("hide");
//   calendarClose.classList.remove("hide");
// };
