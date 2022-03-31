;
(function ($) {
    "use strict";
    $(document).on('ready', function () {


        $(".menu-triger").click(function (e) {
            e.preventDefault();
            $("#wrapper").toggleClass("toggled");
        });

        /*-- WoW-Animation-JS --*/
        new WOW().init();

        $('.header-slider').slick({
            dots: false,
            arrows: true,
            prevArrow: '<div class="arrows"><button class="slick-prev"  type="button"><i class="angle-left"><span class="angle-one"></span><span class="angle-two"></span></i></button></div>',
            nextArrow: '<div class="arrows"><button class="slick-next" type="button"><i class="angle-right"><span class="angle-one"></span><span class="angle-two"></span></i></button></div>',
            infinite: true,
            centerMode: false,
            autoplay: true,
            vertical: false,
            verticalSwiping: false,
            speed: 1000,
            slidesToShow: 1,
            slidesToScroll: 1,
            responsive: [
                {
                    breakpoint: 1170,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                    }
                },
                {
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                    }
                },
                {
                    breakpoint: 500,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                    }
                },
                {
                    breakpoint: 220,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                    }
                }
            ]
        });


        /*-- Mobile-Menu-Active --*/
        $('.menu-triger').on('click', function () {
            $(this).toggleClass('toggled');
        });


        $('.primary-menu').slicknav({
            label: '',
            duration: 500,
            prependTo: '',
            closedSymbol: '<i class="fa fa-angle-right"></i>',
            openedSymbol: '<i class="fa fa-angle-right"></i>',
            appendTo: '.mainmenu-area',
            menuButton: '.menu-triger',
            closeOnClick: 'true' // Close menu when a link is clicked.
        });


        // Portfolio Image Loded with Masonry
        if (typeof imagesLoaded == 'function') {
            imagesLoaded($('.work-items'), function () {
                setTimeout(function () {
                    $('.work-items').isotope({
                        itemSelector: '.work-items .work-item',
                        resizesContainer: false,
                        layoutMode: 'masonry',
                        filter: '*'
                    });
                }, 500);

            });
        };


        // Set Active Class for Portfolio filter
        $('.work-filter li').on('click', function (event) {
            $('.work-filter li').removeClass('active');
            $(this).addClass('active');
            event.preventDefault();
        });



        // Filter JS for Porrtfolio
        $('.work-filter').on('click', 'li', function () {
            var filterValue = $(this).attr('data-filter');
            $('.work-items').isotope({
                filter: filterValue
            });
        });

        $('.count').counterUp({
            delay: 6,
            time: 1000
        });


    });


})(jQuery);
