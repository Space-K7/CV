document.addEventListener('scroll', function() {
    const parallaxSection = document.querySelector('#hero');
    let scrollPosition = window.pageYOffset;

    parallaxSection.style.backgroundPositionY = (scrollPosition * 0.4) + 'px';
});