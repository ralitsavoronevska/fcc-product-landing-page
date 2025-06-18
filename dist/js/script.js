let switchForLevels = document.querySelector("#levels-toggle");
let midLevel = document.querySelector("#mid-level");
let midLevelHeading = document.querySelector(".heading-primary .fst-normal")
let seniorLevel = document.querySelector("#senior-level");
let seniorLevelHeading = document.querySelector(".heading-secondary .fst-normal");
let productsMidLevel = document.querySelector("#pricing .mid-level");
let productsSeniorLevel = document.querySelector("#pricing .senior-level");
let root = document.querySelector(':root');
let header = document.querySelector("#header");

function switchUnchecked() {
  root.style.setProperty('--primary', 'var(--green)');
  root.style.setProperty('--secondary', 'var(--blue)');
  header.style.boxShadow = "3px 3px 12px rgba(66, 184, 131, .25)";
  seniorLevel.classList.remove("btn-outline");
  seniorLevel.classList.remove("primary-outline");
  midLevel.classList.add("btn-outline");
  midLevel.classList.add("primary-outline");
  seniorLevelHeading.classList.remove("gradient-text", "primary-text");
  midLevelHeading.classList.remove("grayed-out-text");
  midLevelHeading.classList.add("gradient-text", "primary-text");
  productsSeniorLevel.classList.remove("d-flex");
  productsSeniorLevel.classList.add("d-none");
  productsMidLevel.classList.remove("d-none");
  productsMidLevel.classList.add("d-flex");
  seniorLevelHeading.classList.add("grayed-out-text");
}

function switchChecked() {
  root.style.setProperty('--primary', 'var(--pink)');
  root.style.setProperty('--secondary', 'var(--purple)');
  header.style.boxShadow = "3px 3px 12px rgba(248, 100, 189, .25)";
  midLevel.classList.remove("btn-outline");
  midLevel.classList.remove("primary-outline");
  seniorLevel.classList.add("btn-outline");
  seniorLevel.classList.add("primary-outline");
  midLevelHeading.classList.remove("gradient-text", "primary-text");
  seniorLevelHeading.classList.add("gradient-text", "primary-text");
  productsMidLevel.classList.remove("d-flex");
  productsMidLevel.classList.add("d-none");
  productsSeniorLevel.classList.remove("d-none");
  productsSeniorLevel.classList.add("d-flex");
  seniorLevelHeading.classList.remove("grayed-out-text");
  midLevelHeading.classList.add("grayed-out-text");
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