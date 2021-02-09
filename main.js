var grab_header_top = document.getElementById('grab-header-top');
var grab_dropdown = document.getElementById('grab-dropdown');


function changeHeaderSize() {
    if (window.pageYOffset > 9) {
        console.log('> 9 pixels')
        grab_header_top.classList.remove('header-top');
        grab_header_top.classList.add('header-top-lg');
        grab_dropdown.classList.remove('dropdown-content-sm');
        grab_dropdown.classList.add('dropdown-content-lg');
    }
    else {
        console.log('< 9 pixels')
        grab_header_top.classList.add('header-top');
        grab_header_top.classList.remove('header-top-lg');
        grab_dropdown.classList.add('dropdown-content-sm');
        grab_dropdown.classList.remove('dropdown-content-lg');
    }
}

window.onscroll = function() {
    changeHeaderSize();
}
