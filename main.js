hamberger = document.querySelector('.hamberger');
hamberger.onclick = () => {
    navbar = document.querySelector('.nav-bar');
    navbar.classList.toggle('active');
}
buttonActive = document.querySelector('.active');
buttonActive.onclick = () => {
    menuActive = document.querySelector('.menu');
    menuActive.classList.toggle('active');
}

openDropdown = document.querySelector('#openDropdown');
openDropdown.onclick = () => {
    dropdownList = document.querySelector('.dropdownList');
    dropdownList.classList.toggle('active');
}