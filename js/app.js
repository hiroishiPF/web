$(function() {
  $('.about_desc, .title_sub, .service_box').waypoint(function(direction){
    let activePoint = $(this.element);
    activePoint.addClass('active');
    }, {offset: '70%'});

    $('.pageTop').click(() => {
      $('html, body').animate({
        scrollTop:0
      }, 500);
      return false;
    });

    $('.menu').on('click', function() {
      $('.menu__line').toggleClass('active');
      $('.gnav').fadeToggle();
    });
});



//下スクロールしたら表示され上スクロールで消える
// $(function() {
  // $('.about_desc, .title_sub, .service_box').waypoint(function(direction){
  //   let activePoint = $(this.element);
  //   if (direction === 'down') {
  //     activePoint.addClass('active');
  //   } else {
  //     activePoint.removeClass('active');
  //   }
  //   }, {offset: '60%'});

    // $('#top').click(() => {
    //   $('html, body').animate({
    //     scrollTop:0
    //   }, 500);
    //   return false;
    // });



// });

