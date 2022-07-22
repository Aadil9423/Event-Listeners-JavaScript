/** @format */

//element.addEventListner('click',function)

const buttonTwo = document.querySelector(".btn-2");

function alertBtn() {
  alert("I Love JavaScript");
}

buttonTwo.addEventListener("click", alertBtn);

//Mouseover

const newBackgroundcolor = document.querySelector(".box-3");

function chngeBhColor() {
  newBackgroundcolor.style.backgroundColor = "red";
}

newBackgroundcolor.addEventListener("mouseover", chngeBhColor);
