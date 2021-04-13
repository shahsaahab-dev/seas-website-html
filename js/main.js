jQuery(document).ready(function($){
    if(window.innerHeight < 1080){
        $(document).on("mousemove",function(e){
            $(".pencil").css({
                "right":`${e.pageX*0.5}`
            })
        })
    }
})