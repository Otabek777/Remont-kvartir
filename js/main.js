$(function(){
    $('.header__navbar .item').click(function(){
        var target = $(this).attr('href');
        $('html, body').animate({scrollTop: $(target).offset().top}, 800);
        return false; 
    });
    $('.banner__list').click(function(){
        var target = $(this).attr('href');
        $('html, body').animate({scrollTop: $(target).offset().top}, 800);
        return false; 
    });
});

$(".header__burgir").click(function() {
    $(".header__wrap").toggleClass("open");
    $(".header__navbar .item").click(function() {
        $(".header__wrap").removeClass("open");
        $(".header__burgir").removeClass("rotate");
        setTimeout(function() {
            $(".header__burgir").removeClass("active");
        }, 300);
    });
    if($(".header__burgir").hasClass("active")) {
        $(".header__wrap").removeClass("open");
        $(".header__burgir").removeClass("rotate");
        setTimeout(function() {
            $(".header__burgir").removeClass("active");
        }, 300);
    } else {
        $(".header__wrap").addClass("open");
        $(".header__burgir").addClass("active");
        setTimeout(function() {
            $(".header__burgir").addClass("rotate");
        }, 300);
    }
});

$(window).scroll(function(){
    if ( $(this).scrollTop() > 100) {
        $('.besamogas').css({bottom : '20px'});
        $('.header').addClass("fixed");
    } else {
        $('.besamogas').css({bottom : '-100%'});
        $('.header').removeClass("fixed");
    }
});
$('.besamogas').on('click', function(){
    $('html, body').animate({
        scrollTop: 0
    }, 500);
});

// modal
$(".open_modal").click(function() {
    $(".modal").addClass("active");
    setTimeout(function() {
        $(".modal").addClass("opacity");
    }, 1);
});
$(".modal .close").click(function() {
    $(".modal").removeClass("opacity");
    setTimeout(function() {
        $(".modal").removeClass("active");
    }, 500);
});

if(document.querySelector('.input_phone')) {
    window.addEventListener("DOMContentLoaded", function() {
        [].forEach.call( document.querySelectorAll('.tel'), function(input) {
        var keyCode;
        function mask(event) {
            event.keyCode && (keyCode = event.keyCode);
            var pos = this.selectionStart;
            if (pos < 3) event.preventDefault();
            var matrix = "+7 (___) ___ ____",
                i = 0,
                def = matrix.replace(/\D/g, ""),
                val = this.value.replace(/\D/g, ""),
                new_value = matrix.replace(/[_\d]/g, function(a) {
                    return i < val.length ? val.charAt(i++) || def.charAt(i) : a
                });
            i = new_value.indexOf("_");
            if (i != -1) {
                i < 5 && (i = 3);
                new_value = new_value.slice(0, i)
            }
            var reg = matrix.substr(0, this.value.length).replace(/_+/g,
                function(a) {
                    return "\\d{1," + a.length + "}"
                }).replace(/[+()]/g, "\\$&");
            reg = new RegExp("^" + reg + "$");
            if (!reg.test(this.value) || this.value.length < 5 || keyCode > 47 && keyCode < 58) this.value = new_value;
            if (event.type == "blur" && this.value.length < 5)  this.value = ""
        }
    
        input.addEventListener("input", mask, false);
        input.addEventListener("focus", mask, false);
        input.addEventListener("blur", mask, false);
        input.addEventListener("keydown", mask, false)
    
      });
    
    });
};