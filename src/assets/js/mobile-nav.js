const burger = document.getElementById('sidebarToggle');
const sidebar = document.getElementById('sidebar');
const body = document.body;
const page = document.getElementById('page');

burger.addEventListener('click', event => {
	if (body.classList.contains('show-sidebar')) {
		closeSidebar();
	} else {
		showSideBar();
	}

	
/* 	sidebar.addEventListener('click', event => {
		event.stopPropagation();
	}) */
});

function showSideBar() {
	let mask = document.createElement('div');
	console.log(mask);
	mask.classList.add('page__mask');
	mask.addEventListener('click', closeSidebar);
	page.appendChild(mask);

	body.classList.add('show-sidebar');
}

function closeSidebar() {
	body.classList.remove('show-sidebar');
	document.querySelector('.page__mask').remove();

}
/* body.addEventListener('click', event => {
	body.classList.remove('show-sidebar');
})

burger.addEventListener('click', event => {
	event.stopPropagation();
}) */