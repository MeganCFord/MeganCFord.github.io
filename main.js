
// enable bootstrap scrollspy.
$(document).ready(()=> {
  setUpAllTheStuff();
});


$(window).load(() => {
  setUpAllTheStuff();
});


function setUpAllTheStuff()  {

  //randomize splash images.
  const splashImages = ["asheville", "comicon", "dc", "giacometti", "ginormica", "moma", "panda", "picasso", "tomato"];
  const thisImg = splashImages[Math.floor(Math.random() * splashImages.length)];
  $(".splash").css({"background-image": `url(img/splash/${thisImg}.jpg)`});
  
  //enable bootstrap scrollspy.
  $("body").scrollspy({target: "#collapsing-nav-options"});

  // enable bootstrap tooltip.
  $(function () {
    $('[data-toggle="tooltip"]').tooltip();
  });

  //show navbar once secondary nav scrolls to it.
  $(document).scroll(() => {
    const y = $(document).scrollTop();
    const t = $("#secondary-nav").offset().top;
    if (y > t) {
      $(".navbar").fadeIn();
    } else {
      $(".navbar").fadeOut();
    }
  });

}
