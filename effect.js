$(window).load(function () {
    $('.loading').fadeOut('fast');
    $('.container').fadeIn('fast');
});
$('document').ready(function () {
    var vw;
    $(window).resize(function () {
        vw = $(window).width() / 2;
        $('#b1,#b2,#b3,#b4,#b5,#b6,#b7,#b8,#b9,#b10,#b20').stop();
        $('#b11').animate({top: 240, left: vw - 550}, 500);
        $('#b22').animate({top: 240, left: vw - 450}, 500);
        $('#b33').animate({top: 240, left: vw - 300}, 500);
        $('#b44').animate({top: 240, left: vw - 200}, 500);
        $('#b55').animate({top: 240, left: vw - 100}, 500);
        $('#b66').animate({top: 240, left: vw}, 500);
        $('#b77').animate({top: 240, left: vw + 100}, 500);
        $('#b88').animate({top: 240, left: vw + 250}, 500);
        $('#b99').animate({top: 240, left: vw + 350}, 500);
        $('#b100').animate({top: 240, left: vw + 450}, 500);
        $('#b200').animate({top: 240, left: vw + 550}, 500);
    });

    $('#turn_on').click(function () {
        $('#bulb_yellow').addClass('bulb-glow-yellow');
        $('#bulb_red').addClass('bulb-glow-red');
        $('#bulb_blue').addClass('bulb-glow-blue');
        $('#bulb_green').addClass('bulb-glow-green');
        $('#bulb_pink').addClass('bulb-glow-pink');
        $('#bulb_orange').addClass('bulb-glow-orange');
        $('body').addClass('peach');
        $(this).fadeOut('slow').delay(5000).promise().done(function () {
            var audio = $('.song')[0];
            audio.play();
            $('#bulb_yellow').addClass('bulb-glow-yellow-after');
            $('#bulb_red').addClass('bulb-glow-red-after');
            $('#bulb_blue').addClass('bulb-glow-blue-after');
            $('#bulb_green').addClass('bulb-glow-green-after');
            $('#bulb_pink').addClass('bulb-glow-pink-after');
            $('#bulb_orange').addClass('bulb-glow-orange-after');
            $('body').css('backgroud-color', '#FFF');
            $('body').addClass('peach-after');
            $(this).fadeOut('slow').delay(6000).promise().done(function () {
                $('.bannar').addClass('bannar-come');
                $(this).fadeOut('slow').delay(6000).promise().done(function () {
                    $('.balloon-border').animate({top: -500}, 8000);
                    $('#b1,#b4,#b5,#b7,#b8,#b20').addClass('balloons-rotate-behaviour-one');
                    $('#b2,#b3,#b6,#b9,#b10').addClass('balloons-rotate-behaviour-two');
                    loopOne();
                    loopTwo();
                    loopThree();
                    loopFour();
                    loopFive();
                    loopSix();
                    loopSeven();
                    loopEight();
                    loopNine();
                    loopTen();
                    loopEleven();

                    $(this).fadeOut('slow').delay(5000).promise().done(function () {
                        $('.cake').fadeIn('slow');
                        $(this).fadeOut('slow').delay(5000).promise().done(function () {
                            $('.fuego').fadeIn('slow');
                            $(this).fadeOut('slow').promise().done(function () {
                                vw = $(window).width() / 2;

                                $('#b1,#b2,#b3,#b4,#b5,#b6,#b7,#b8,#b9,#b10,#b20').stop();
                                $('#b1').attr('id', 'b11');
                                $('#b2').attr('id', 'b22')
                                $('#b3').attr('id', 'b33')
                                $('#b4').attr('id', 'b44')
                                $('#b5').attr('id', 'b55')
                                $('#b6').attr('id', 'b66')
                                $('#b7').attr('id', 'b77')
                                $('#b8').attr('id', 'b88')
                                $('#b9').attr('id', 'b99')
                                $('#b10').attr('id', 'b100')
                                $('#b20').attr('id', 'b200')
                                $('#b11').animate({top: 240, left: vw - 550}, 500);
                                $('#b22').animate({top: 240, left: vw - 450}, 500);
                                $('#b33').animate({top: 240, left: vw - 300}, 500);
                                $('#b44').animate({top: 240, left: vw - 200}, 500);
                                $('#b55').animate({top: 240, left: vw - 100}, 500);
                                $('#b66').animate({top: 240, left: vw}, 500);
                                $('#b77').animate({top: 240, left: vw + 100}, 500);
                                $('#b88').animate({top: 240, left: vw + 250}, 500);
                                $('#b99').animate({top: 240, left: vw + 350}, 500);
                                $('#b100').animate({top: 240, left: vw + 450}, 500);
                                $('#b200').animate({top: 240, left: vw + 600}, 500);
                                $('.balloons').css('opacity', '0.9');
                                $('.balloons h2').fadeIn(3000);
                            });
                        });
                    });
                });
            });
        });
    });
    function loopOne() {
        var randleft = 1000 * Math.random();
        var randtop = 500 * Math.random();
        $('#b1').animate({left: randleft, bottom: randtop}, 10000, function () {
            loopOne();
        });
    }

    function loopTwo() {
        var randleft = 1000 * Math.random();
        var randtop = 500 * Math.random();
        $('#b2').animate({left: randleft, bottom: randtop}, 10000, function () {
            loopTwo();
        });
    }

    function loopThree() {
        var randleft = 1000 * Math.random();
        var randtop = 500 * Math.random();
        $('#b3').animate({left: randleft, bottom: randtop}, 10000, function () {
            loopThree();
        });
    }

    function loopFour() {
        var randleft = 1000 * Math.random();
        var randtop = 500 * Math.random();
        $('#b4').animate({left: randleft, bottom: randtop}, 10000, function () {
            loopFour();
        });
    }

    function loopFive() {
        var randleft = 1000 * Math.random();
        var randtop = 500 * Math.random();
        $('#b5').animate({left: randleft, bottom: randtop}, 10000, function () {
            loopFive();
        });
    }

    function loopSix() {
        var randleft = 1000 * Math.random();
        var randtop = 500 * Math.random();
        $('#b6').animate({left: randleft, bottom: randtop}, 10000, function () {
            loopSix();
        });
    }

    function loopSeven() {
        var randleft = 1000 * Math.random();
        var randtop = 500 * Math.random();
        $('#b7').animate({left: randleft, bottom: randtop}, 10000, function () {
            loopSeven();
        });
    }

    function loopEight() {
        var randleft = 1000 * Math.random();
        var randtop = 500 * Math.random();
        $('#b8').animate({left: randleft, bottom: randtop}, 10000, function () {
            loopEight();
        });
    }

    function loopNine() {
        var randleft = 1000 * Math.random();
        var randtop = 500 * Math.random();
        $('#b9').animate({left: randleft, bottom: randtop}, 10000, function () {
            loopNine();
        });
    }

    function loopTen() {
        var randleft = 1000 * Math.random();
        var randtop = 500 * Math.random();
        $('#b10').animate({left: randleft, bottom: randtop}, 10000, function () {
            loopTen();
        });
    }

    function loopEleven() {
        var randleft = 1000 * Math.random();
        var randtop = 500 * Math.random();
        $('#b20').animate({left: randleft, bottom: randtop}, 10000, function () {
            loopEleven();
        });
    }
});