jQuery(document).ready(function($){
    $(".testimonials").slick({
        slidesToShow:5,
        nav:true,
        prevArrow:"<button class='slick-prev'><i class='fa fa-arrow-left'></i></button>",
        nextArrow:"<button class='slick-next'><i class='fa fa-arrow-right'></i></button>",
        responsive: [
            {
              breakpoint: 501,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: false,
                dots: false,
              }
            },

        ]

    })
    
    
    $(".team-members").slick({
        slidesToShow:3,
        nav:true,
        prevArrow:"<button class='slick-prev'><i class='fa fa-arrow-left'></i></button>",
        nextArrow:"<button class='slick-next'><i class='fa fa-arrow-right'></i></button>",
        responsive: [
            {
              breakpoint: 501,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: false,
                dots: false,
              }
            },

        ]
    })
})