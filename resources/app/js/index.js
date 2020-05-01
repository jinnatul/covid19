$(function() {
    
    $(document).ready(function(){
        $('.collapsible').collapsible();
    });

    // Smooth scrolling
    var scrollLink = $(".scroll");
    scrollLink.click(function(e) {
        e.preventDefault();
        $("body,html").animate(
        {
            scrollTop: $(this.hash).offset().top
        },
        2000
        );
    });
})

