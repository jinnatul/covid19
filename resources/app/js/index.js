$(function() {
    Counter();
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

// Text Start 0 to N
function Counter() {
    $(".count").each(function () {
        $(this).prop("Counter", 0)
            .animate(
            {
                Counter: $(this).text(),
            },
            {
                duration: 3000,
                easing: "swing",
                step: function (now) {
                    $(this).text(Math.ceil(now));
                },
            }
        );
    });
}