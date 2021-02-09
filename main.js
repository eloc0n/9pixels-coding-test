function changeHeaderSize() {
    if (window.scrollY > 9) {
        console.log('hii')
        var element = document.getElementById('grab-header-top');
        console.log(element)
        element.classList.remove('header-top');
        element.classList.add('header-top-lg');
    }
    else {
        var element = document.getElementById('grab-header-top');
        element.classList.remove('header-top-lg');
        element.classList.add('header-top');
    }
}

window.onscroll = function() {
    changeHeaderSize();
}
