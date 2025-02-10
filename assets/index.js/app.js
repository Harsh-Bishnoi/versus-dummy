const navbarbtn = () => {
    document.getElementById("name").classList.toggle("show-navbar")
    document.getElementById("rotates").classList.toggle("rotate-42")
    document.getElementById("transparent").classList.toggle("bg-transparent")
    document.getElementById("rotates-2").classList.toggle("rotate-43")
    document.body.classList.toggle("overflow-hidden")
}

$('.games-select-slider').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    dots: false,
    arrows: false,
    centerMode: true,
    centerPadding: '60px',
    responsive: [
        {
            breakpoint: 1200,
            settings: {
                dots: false,
                arrows: false,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 3,
            }
        },
        {
            breakpoint: 768,
            settings: {
                dots: false,
                arrows: false,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 2
            }
        },
        {
            breakpoint: 480,
            settings: {
                dots: false,
                arrows: false,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 1
            }
        }
    ]
});
