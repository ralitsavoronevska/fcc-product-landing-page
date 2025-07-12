window.addEventListener("DOMContentLoaded", () => {
	const burger = document.querySelector(".header-burger");
	const navWrapper = document.querySelector(".header-navigation-wrapper");

	if (burger && navWrapper) {
		burger.addEventListener("click", () => {
			burger.classList.toggle("active");
			navWrapper.classList.toggle("open");
		});
	}

	document.querySelectorAll('a[href="#"]').forEach((link) => {
		link.addEventListener("click", (e) => {
			e.preventDefault();
		});
	});
});