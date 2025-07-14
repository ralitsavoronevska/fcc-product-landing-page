window.addEventListener("DOMContentLoaded", () => {
	const burger = document.querySelector(".header-burger");
	const navWrapper = document.querySelector(".header-navigation-wrapper");
	const logo = document.querySelector("#header-img");
	const darkLogo = document.querySelector("#header-img-dark");

	if (burger && navWrapper) {
		burger.addEventListener("click", () => {
			burger.classList.toggle("active");
			navWrapper.classList.toggle("open");
			darkLogo.classList.toggle("d-none");
			logo.classList.toggle("d-none");
		});
	}

	document.querySelectorAll('a[href="#"]').forEach((link) => {
		link.addEventListener("click", (e) => {
			e.preventDefault();
		});
	});
});