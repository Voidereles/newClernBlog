$(function () {
    var time = 5; // time in seconds

    var $progressBar,
        $bar,
        $elem,
        isPause,
        tick,
        percentTime;

    function progressBar(elem) {
        $elem = elem;
        buildProgressBar();
        start();
    }

    function buildProgressBar() {
        $progressBar = $("<div>", {
            class: "progressBar"
        });
        $bar = $("<div>", {
            class: "bar"
        });
        $progressBar.append($bar).appendTo($(".news-slider__owl .owl-dots .active"));
    }

    function moved() {
        $(".progressBar").remove();
        buildProgressBar();
        clearTimeout(tick);
        start();
    }

    const newsSliderOwl = $(".news-slider__owl");

    newsSliderOwl.owlCarousel({
        onInitialized: progressBar,
        onTranslate: moved,
        nav: true,
        dots: true,
        items: 1,
        responsiveClass: true,
        responsive: {
            0: {
                dots: false,
            },
            600: {
                dots: true,
            }
        },
        lazyLoad: true,
        loop: true,
        // margin: 32,
        autoplay: true,
        // autoplay: false,
        autoplayTimeout: 5000,
    });

    function interval() {
        if (isPause === false) {
            percentTime += 1 / time;
            //reset timer
            $(".bar").css({
                width: percentTime + "%"
            });
            //if percentTime is equal or greater than 100
            if (percentTime >= 100) {
                //slide to next item 
                // console.log(true);
                $(".news-slider__owl").trigger('next.owl.carousel');
            }
        }
    }

    function start() {

        percentTime = 0;
        isPause = false;
        //run interval every 10 miliseconds
        tick = setInterval(interval, 10);
    };
    newsSliderOwl.on('mouseover', function () {
        // isPause = true;
        isPause = false;
    });
    newsSliderOwl.on('mouseout', function () {
        isPause = false;
    });









    $('.owl-instagram').owlCarousel({
        loop: true,
        autoplay: true,
        lazyLoad: true,
        items: 1,
        nav: false,
        autoplayHoverPause: true,
        dots: false,
        responsiveClass: true,
        responsive: {
            1200: {
                items: 4,
                nav: false
            },
            600: {
                items: 2,
                nav: false
            },
            0: {
                items: 1,
                nav: false,
                stagePadding: 48
            }
        }
    })

});