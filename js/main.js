//Scroll top open header --------------
$(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 60) {
            // $('#headerArea').addClass('headerShow');
            $('#headerArea').addClass('headerShow header_blue');
        } else if ($('#headerArea').hasClass('header_transparent')) {
            $('#headerArea').removeClass('header_blue');
        } else {
            $('#headerArea').removeClass('headerShow');
        }
    });
});

//????--------------
$(function () {
    if ($('body').hasClass(".modal-open")) {
        // $('body').css('padding-right','0');
        alert("000");
    }
});


//FAQ list title arrow--------------
$(function () {
    $(".listHead").click(function () {
        if ($(this).find(".icon_arrow").hasClass('arrow_down')) {
            $(this).siblings().toggle();
            $(this).find(".icon_arrow").removeClass('arrow_down');
        } else {
            $(this).siblings().toggle(300);
            $(this).find(".icon_arrow").addClass('arrow_down');

        }
    });
});

//close nav (for phone)--------------
$(function () {
    $(".btn_close").click(function () {
        $("#navbarNavAltMarkup").removeClass('show');
    });
});

// textarea height auto--------------
var textarea = document.querySelector('textarea');

textarea.addEventListener('keydown', autosize);
             
function autosize(){
  var el = this;
  setTimeout(function(){
    el.style.cssText = 'height:auto; padding:10px';
    // for box-sizing other than "content-box" use:
    // el.style.cssText = '-moz-box-sizing:content-box';
    el.style.cssText = 'height:' + el.scrollHeight*1.2 + 'px';
  },0);
}
