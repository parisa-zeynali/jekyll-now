$(function() {
    var owl = $(".owl-carousel");
    owl.owlCarousel({
        items: 5,
        margin: 10,
        loop: true,
        autoplay:true,
    });
});

$(function() {
    var header = $(".menu");
    $(window).scroll(function() {
        var scroll = $(window).scrollTop();

        if (scroll >= 200) {
            header.removeClass('menu').addClass("menu1");
        } else {
            header.removeClass("menu1").addClass('menu');
        }
    });
});


const counters = document.querySelectorAll('.value');
const speed = 200;

counters.forEach( counter => {
    const animate = () => {
        const value = +counter.getAttribute('akhi');
        const data = +counter.innerText;

        const time = value / speed;
        if(data < value) {
            counter.innerText = Math.ceil(data + time);
            setTimeout(animate, 1);
        }else{
            counter.innerText = value;
        }

    }

    animate();
});



$(function() {
    var header1 = $(".logo");
    $(window).scroll(function() {
        var scroll = $(window).scrollTop();

        if (scroll >= 200) {
            $(".logo img").attr("src","https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img/https://demo.themexbd.com/wpv/context/wp-content/uploads/2020/06/lo-1.png");
        }
        else
            {
            $(".logo img").attr("src","https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img/https://demo.themexbd.com/wpv/context/wp-content/uploads/2020/06/logo-1.png");
        }
    });
});




