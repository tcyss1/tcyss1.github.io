
$(function () {

  var win = $(window);
  var scrollTop=0;

  win.resize(resizeHl);
  resizeHl();

  function resizeHl(){
    if ( $('body').hasClass("modal_on") && $(".modal_inner_inner").outerHeight() > $(window).innerHeight() ) {
      $("#modal .scroll").addClass("shorter");
    } else {
      $("#modal .scroll").removeClass("shorter");
    }
  }

  $('.modal_btn').bind('click', function(event){
    event.preventDefault();
    $('#modal .modal_contents').hide();
    $('body').addClass("modal_on");
		var modal_id = "#" + $(this).data("id");
		$(modal_id).show();
    var h = $(window).innerHeight();
    if ( $(".modal_inner_inner").outerHeight() > $(window).innerHeight() ) {
      $("#modal .scroll").addClass("shorter");
    } else {
      $("#modal .scroll").removeClass("shorter");
    }
		$('#modal').addClass("show");
		$('#modal .scroll').scrollTop(0);
    $(".modal_close,.modal_bg").bind('click',function(){
      $('body').removeClass("modal_on");
      $('#modal').removeClass("show");

      if ( $(modal_id).hasClass("modal_video_contents") ) {
        videoControl("pauseVideo");
        function videoControl(action) {
          var $playerWindow = $("iframe",modal_id)[0].contentWindow;
          $playerWindow.postMessage(
            '{"event":"command","func":"' + action + '","args":""}',
            "*"
          );
        }
      }

      $(this).unbind('click');
    })
	});

});

/* 2023/02　Summaryページアコーディオン */
$(function(){
  $('.summary_ac_btn').click(function(){
    $(this).next().slideToggle();
    $(this).toggleClass("open");

		if ($(this).hasClass("open")) {
      $(this).find("span")
      .html('<img src="../images/btn_close.svg" alt="">')
    }else{
      $(this).find("span")
      .html('<img src="../images/btn_open.svg" alt="">')
    }
  });
});
