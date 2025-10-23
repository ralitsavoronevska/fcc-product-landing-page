const switchForLevels = document.querySelector("#levels-toggle");
const midLevel = document.querySelector("#mid-level");
const midLevelHeading = document.querySelector(".heading-primary .fst-normal");
const seniorLevel = document.querySelector("#senior-level");
const seniorLevelHeading = document.querySelector(".heading-secondary .fst-normal");
const productsMidLevel = document.querySelector("#pricing .mid-level");
const productsSeniorLevel = document.querySelector("#pricing .senior-level");
const root = document.querySelector(":root");
const menu = document.querySelector(".header-navigation-wrapper");
const greenBoxShadow = "3px 3px 12px rgba(66, 184, 131, .25)";
const pinkBoxShadow = "3px 3px 12px rgba(248, 100, 189, .25)";
const outline = ["btn-outline", "primary-outline"];
const text = ["gradient-text", "primary-text"];

function switchUnchecked() {
  root.style.setProperty("--primary", "var(--green)");
  root.style.setProperty("--secondary", "var(--aquamarine)");
  document.querySelector("#header").style.boxShadow = greenBoxShadow;
  window.innerWidth < 768 ? (menu.style.boxShadow = greenBoxShadow) : "";
  seniorLevel.classList.remove(...outline);
  midLevel.classList.add(...outline);
  seniorLevelHeading.classList.remove(...text);
  seniorLevelHeading.classList.add("grayed-out-text");
  midLevelHeading.classList.remove("grayed-out-text");
  midLevelHeading.classList.add(...text);
  productsSeniorLevel.classList.remove("d-flex");
  productsSeniorLevel.classList.add("d-none");
  productsMidLevel.classList.remove("d-none");
  productsMidLevel.classList.add("d-flex");
}

function switchChecked() {
  root.style.setProperty("--primary", "var(--pink)");
  root.style.setProperty("--secondary", "var(--blue)");
  document.querySelector("#header").style.boxShadow = pinkBoxShadow;
  window.innerWidth < 768 ? (menu.style.boxShadow = pinkBoxShadow) : "";
  midLevel.classList.remove(...outline);
  seniorLevel.classList.add(...outline);
  midLevelHeading.classList.remove(...text);
  midLevelHeading.classList.add("grayed-out-text");
  productsMidLevel.classList.remove("d-flex");
  productsMidLevel.classList.add("d-none");
  productsSeniorLevel.classList.remove("d-none");
  productsSeniorLevel.classList.add("d-flex");
  seniorLevelHeading.classList.remove("grayed-out-text");
  seniorLevelHeading.classList.add(...text);
}

seniorLevel.addEventListener("click", (e) => {
  switchForLevels.checked = !0;
  switchChecked();
});

midLevel.addEventListener("click", (e) => {
  switchForLevels.checked = !1;
  switchUnchecked();
});

switchForLevels.addEventListener("change", (e) => {
  !switchForLevels.checked ? switchUnchecked() : switchChecked();
});