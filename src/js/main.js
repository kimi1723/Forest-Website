const footerYear = document.querySelector('.footer-year');

const navBtn = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav__links');
const navLinks = document.querySelectorAll('.nav__links-link');

const offerBtns = document.querySelectorAll('.cards-box__button');
const activeBtn = document.querySelector('.cards-box__button--active');
const btnEventListeners = ['click', 'keydown'];
let i = 0;

const scrollSpySections = document.querySelectorAll('.scrollspy-section');

const handleYear = () => {
	const year = new Date().getFullYear();

	footerYear.textContent = year;
};

const handleNav = () => {
	navBtn.classList.toggle('is-active');
	navMenu.classList.toggle('show-menu');
};

const handleBtns = () => {
	setTimeout(
		() =>
			offerBtns.forEach(btn => {
				if (i === 0 && document.activeElement === btn) {
					activeBtn.classList.remove('cards-box__button--active');
					i++;
				}
			}),
		'1'
	);
};

const handleScrollSpy = () => {
	if (document.body.classList.contains('main-page')) {
		const sections = [];

		scrollSpySections.forEach(section => {
			if (window.scrollY <= section.offsetTop + section.offsetHeight - 112) {
				sections.push(section);

				const activeSection = navMenu.querySelector(`[href*="${sections[0].id}"]`);

				navLinks.forEach(link => link.classList.remove('nav__links-link--active'));

				activeSection.classList.add('nav__links-link--active');
			}
		});
	}
};

handleYear();
navBtn.addEventListener('click', handleNav);
navLinks.forEach(link => link.addEventListener('click', handleNav));
btnEventListeners.forEach(e => {
	window.addEventListener(e, handleBtns);
});

window.addEventListener('scroll', handleScrollSpy);
window.addEventListener('DOMContentLoaded', handleScrollSpy);
