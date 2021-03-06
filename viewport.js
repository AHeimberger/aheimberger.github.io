$(document).ready(function () {
    function setViewPortHeight() {
        // First we get the viewport height and we multiple it by 1% to get a value for a vh unit
        let vh = window.innerHeight * 0.01;
        // Then we set the value in the --vh custom property to the root of the document
        document.documentElement.style.setProperty('--vh', `${vh}px`);
    }

    $(window).on('resize', _.debounce(function () {
        console.debug("hello world");
        setViewPortHeight();
    }, 400));

    setViewPortHeight();
});