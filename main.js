
// enable bootstrap scrollspy.
$('body').scrollspy({target: "#collapsing-nav-options"});

// enable bootstrap tooltip.
$(function () {
  $('[data-toggle="tooltip"]').tooltip();
});


$(document).scroll(function () {
    const y = $(document).scrollTop();
    const t = $("#secondary-nav").offset().top;
    if (y > t) {
        $(".navbar").fadeIn();
    } else {
        $(".navbar").fadeOut();
    }
});
