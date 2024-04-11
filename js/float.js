

$(function(){
  var body=$("body");
  var win=$(window);
  var winW=win.width();
  var winH=win.height();
  var keyW = 768;
  var scrollTop=0;
  var html=$("html");
  var header = $("header");
  var fix_posi = 0;
  var closed = false;

  $(".floating_banner .close").bind('click',function(){
    $(".floating_banner").removeClass("show");
    closed = true;
  })

  resize_event();
  $(window).bind("resize", resize_event);
	$(window).bind("scroll", scroll_event);


  function resize_event(){
    winW=win.width();
    winH=win.height();
    winH=window.innerHeight;

    if (winW<=keyW) {
      fix_posi = header.outerHeight();
    } else {
      fix_posi = header.outerHeight();
    }
    scroll_event();
  }

	function scroll_event(){
    scrollTop=win.scrollTop();

    if ( scrollTop >= fix_posi ) {
      if (!closed) {
        $(".floating_banner").addClass("show");
      }
    } else {
      $(".floating_banner").removeClass("show");
    }
	}






})
