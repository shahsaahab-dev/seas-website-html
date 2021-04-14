jQuery(document).ready(function($){
    $(".testimonials").slick({
        slidesToShow:5,
        nav:true,
        prevArrow:"<button class='slick-prev'><i class='fa fa-arrow-left'></i></button>",
        nextArrow:"<button class='slick-next'><i class='fa fa-arrow-right'></i></button>"

    })
    
    
    $(".team-members").slick({
        slidesToShow:3,
        nav:true,
        prevArrow:"<button class='slick-prev'><i class='fa fa-arrow-left'></i></button>",
        nextArrow:"<button class='slick-next'><i class='fa fa-arrow-right'></i></button>"

    })
})