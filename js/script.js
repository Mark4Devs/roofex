let exec = true;
$(window).on("scroll", function() {
    if($(window).scrollTop() > 50) {
        $(".header-main").addClass("active");
    } else { 
       $(".header-main").removeClass("active");
    }
});
$(document).ready(function(){   
    //content animations
    $(window).on('activate.bs.scrollspy', function (){ 
        var linkTitle = $(".navbar .nav-link.active").text(); 
        switch(linkTitle){
            case "Home":
                $(".home .block-content").addClass('animate'); 
            break;
            case "About":
                $(".about .block-content").addClass('animate'); 
                $(".process-item").addClass('animate');
                $(".process-item").each(function(i){
                    $(this).css("animation-delay", i-.8 + "s");
                });
            break;
            case "Services":  
                if(exec == true){ 
                    $('.number-count').each(function () {
                        var $this = $(this);
                        jQuery({ count: 0 }).animate({ count: $this.text()}, {
                        duration: 4000, 
                        step: function () {
                            $this.text(Math.ceil(this.count) + '+');
                        }
                        })
                    });
                    exec = false;
                    $('.about-stats').addClass('animate');
                } 
                $(".services .block-content").addClass('animate');
            break;
            case "Prices":
                $(".visit-us").addClass('animate');  
                $(".prices .block-content").addClass('animate');
            break; 
            case "Projects":
                $(".testimonials").addClass('animate');  
                $(".projects .block-content").addClass('animate');
            break; 
            case "Contacts":  
                $(".contacts .block-content").addClass('animate'); 
            break; 
        } 
    });
    //content animations
    $(".expand-image-btn").on("click", function () {
        $(".gallery-expand-container").addClass("active");
        $(".gallery-expand-container .expanded-image").attr("src", $(this).prev().attr('src'));
        $(".expanded-image-header h4").text($(this).prev().attr('alt'));
        $("body").css('overflow', 'hidden'); 
    }); 
    $(".fa-xmark").on("click", function () {
        $(".gallery-expand-container").removeClass("active"); 
        $("body").css('overflow-y', 'scroll');
        
    });
});