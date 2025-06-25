let switchForLevels = document.querySelector("#levels-toggle");
let midLevel = document.querySelector("#mid-level");
let midLevelHeading = document.querySelector(".heading-primary .fst-normal")
let seniorLevel = document.querySelector("#senior-level");
let seniorLevelHeading = document.querySelector(".heading-secondary .fst-normal");
let productsMidLevel = document.querySelector("#pricing .mid-level");
let productsSeniorLevel = document.querySelector("#pricing .senior-level");
let root = document.querySelector(':root');
let header = document.querySelector("#header");
const outline = ["btn-outline", "primary-outline"];
const text = ["gradient-text", "primary-text"];

function switchUnchecked() {
  root.style.setProperty('--primary', 'var(--green)');
  root.style.setProperty('--secondary', 'var(--blue)');
  header.style.boxShadow = "3px 3px 12px rgba(66, 184, 131, .25)";
  seniorLevel.classList.remove(...outline);
  midLevel.classList.add(...outline);
  seniorLevelHeading.classList.remove(...text).add("grayed-out-text");
  midLevelHeading.classList.remove("grayed-out-text").add(...text);
  productsSeniorLevel.classList.remove("d-flex").add("d-none");
  productsMidLevel.classList.remove("d-none").add("d-flex");
}

function switchChecked() {
  root.style.setProperty('--primary', 'var(--pink)');
  root.style.setProperty('--secondary', 'var(--purple)');
  header.style.boxShadow = "3px 3px 12px rgba(248, 100, 189, .25)";
  midLevel.classList.remove(...outline);
  seniorLevel.classList.add(...outline);
  midLevelHeading.classList.remove(...text).add("grayed-out-text");
  productsMidLevel.classList.remove("d-flex").add("d-none");
  productsSeniorLevel.classList.remove("d-none").add("d-flex");
  seniorLevelHeading.classList.remove("grayed-out-text").add(...text);
}

seniorLevel.addEventListener("click", (e) => {
  switchForLevels.checked = true;
  switchChecked();
});
  
midLevel.addEventListener("click", (e) => {
  switchForLevels.checked = false;
  switchUnchecked();
});  

// on change for the switchForLevels
switchForLevels.addEventListener("change", (e) => {
  !switchForLevels.checked ? switchUnchecked() : switchChecked();
});

window.addEventListener("load", (event) => {
  switchUnchecked();
})