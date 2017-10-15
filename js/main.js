$(document).ready(function(){
    var main2x2 = $('#main2x2').css('display');
    var main3x3 = $('#main3x3').css('display');
    var main4x4 = $('#main4x4').css('display');

    console.log(main2x2);
    $('#btn2x2').on('click', function(){
        if (!cekHiddenClass('#main3x3')){
            slideUp('#main3x3');
        } else if (!cekHiddenClass('#main4x4')){
            noneClass('#main4x4');
        }
        slideDown('#main2x2');
    });
    $('#btn3x3').on('click', function(){
        if (!cekHiddenClass('#main2x2')){
            slideUp('#main2x2');
        } else if (!cekHiddenClass('#main4x4')){
            noneClass('#main4x4');
        }
        slideDown('#main3x3');
    });
    $('#btn4x4').on('click', function(){
        if (!cekHiddenClass('#main2x2')){
            slideUp('#main2x2');
        } else if (!cekHiddenClass('#main3x3')){
            noneClass('#main3x3');
        }
        slideDown('#main4x4');
    });

    $('#reset2x2').on('click', function(){
        reset('.in2x2', '.2x2hasil');
    });
    $('#reset3x3').on('click', function(){
        reset('.in3x3', '.3x3hasil');
    });
    $('#reset4x4').on('click', function(){
        reset('.in4x4', '.4x4hasil');
    });

    $('#submit2x2').on('click', function() {
        if (cekEmpty('#2x2_1') || cekEmpty('#2x2_2') || cekEmpty('#2x2_3') || cekEmpty('#2x2_4')){
            showSnackBar();
        } else {
            hitung2x2();
        }
    });
    $('#submit3x3').on('click', function(){
        if (cekEmpty('#3x3_1') || cekEmpty('#3x3_2') || cekEmpty('#3x3_3') || 
            cekEmpty('#3x3_4') || cekEmpty('#3x3_5') || cekEmpty('#3x3_6') ||
            cekEmpty('#3x3_7') || cekEmpty('#3x3_8') || cekEmpty('#3x3_9')){
            showSnackBar();
        } else {
            hitung3x3();
        }
    });
    $('#submit4x4').on('click', function(){
        if (cekEmpty('#4x4_1') || cekEmpty('#4x4_2') || cekEmpty('#4x4_3') || cekEmpty('#4x4_4') ||
            cekEmpty('#4x4_5') || cekEmpty('#4x4_6') || cekEmpty('#4x4_7') || cekEmpty('#4x4_8') ||
            cekEmpty('#4x4_9') || cekEmpty('#4x4_10') || cekEmpty('#4x4_11') || cekEmpty('#4x4_12') ||
            cekEmpty('#4x4_13') || cekEmpty('#4x4_14') || cekEmpty('#4x4_15') || cekEmpty('#4x4_16')){
            showSnackBar();
        } else {
            hitung4x4();
        }
    });

    $('.modal').on('click', function(){
        $('.modal').removeClass('is-active');
    });

    $('#yesModal').on('click', function(){
        tizen.application.getCurrentApplication().exit();
    });

    $('#noModal').on('click', function(){
        $('.modal').removeClass('is-active');
    });

    $('#menu').on('click', function(){
        if ($('.dropdown-menu').css('display') == 'none'){
            $('.dropdown-menu').slideDown();
            console.log("drop" + $('.dropdown-menu').css('display'));
        } else {
            $('.dropdown-menu').slideUp();
            console.log("drop" + $('.dropdown-menu').css('display'));
        }
        
    });

    $('#about').on('click', function(){
        $('.dropdown-menu').slideUp();
        $('#modalAbout').addClass('is-active');
    });
    
    $('#exit').on('click', function(){
        tizen.application.getCurrentApplication().exit();
    });
});

function hitung2x2() {
    var hasil = ($('#2x2_1').val() * $('#2x2_4').val()) - ($('#2x2_2').val() * $('#2x2_3').val());
    $('.2x2hasil').html(hasil);
}
function hitung3x3(){
    var hasil = (($('#3x3_1').val() * $('#3x3_5').val() * $('#3x3_9').val()) + 
                ($('#3x3_2').val() * $('#3x3_6').val() * $('#3x3_7').val()) + 
                ($('#3x3_3').val() * $('#3x3_4').val() * $('#3x3_8').val())) - 
                (($('#3x3_7').val() * $('#3x3_5').val() * $('#3x3_3').val()) + 
                ($('#3x3_8').val() * $('#3x3_6').val() * $('#3x3_1').val()) + 
                ($('#3x3_9').val() * $('#3x3_4').val() * $('#3x3_2').val()));
    $('.3x3hasil').html(hasil);
}
function hitung4x4(){
    var hasil = (($('#4x4_1').val() * $('#4x4_6').val() * $('#4x4_11').val() * $('#4x4_16').val()) -
                ($('#4x4_2').val() * $('#4x4_7').val() * $('#4x4_12').val() * $('#4x4_13').val()) + 
                ($('#4x4_3').val() * $('#4x4_8').val() * $('#4x4_9').val() * $('#4x4_14').val()) -
                ($('#4x4_4').val() * $('#4x4_5').val() * $('#4x4_10').val() * $('#4x4_15').val()) -
                ($('#4x4_1').val() * $('#4x4_8').val() * $('#4x4_11').val() * $('#4x4_14').val()) +
                ($('#4x4_2').val() * $('#4x4_5').val() * $('#4x4_12').val() * $('#4x4_15').val()) -
                ($('#4x4_3').val() * $('#4x4_6').val() * $('#4x4_9').val() * $('#4x4_16').val()) +
                ($('#4x4_4').val() * $('#4x4_7').val() * $('#4x4_10').val() * $('#4x4_13').val()));
    $('.4x4hasil').html(hasil);
}
function slideUp(main){
    $(main).slideUp('fast');
}

function slideDown (main){
    $(main).slideDown('slow');
}

function noneClass(main){
    $(main).css('display', 'none');
}

function cekDisplay (main){
    console.log($(main).css('display'));
}

function cekHiddenClass(main){
    if ($(main).css('display') == 'none'){
        return true;
    } else {
        return false;
    }
}

function cekEmpty(main){
    if ($(main).val() == ''){
        return true;
    } else {
        return false;
    }
}

function showSnackBar(){
    var x = document.getElementById("snackbar")

    // Add the "show" class to DIV
    x.className = "show";

    // After 3 seconds, remove the show class from DIV
    setTimeout(function(){ x.className = x.className.replace("show", ""); }, 2000);
}

function reset(main, hasil){
    $(main).val('');
    $(hasil).html('Results');
}

window.onload = function() {
    // TODO:: Do your initialization job

    // add eventListener for tizenhwkey
    document.addEventListener('tizenhwkey', function(e) {
        if (e.keyName === "back") {
            try{
                // tizen.application.getCurrentApplication().exit();
            	if ($('#modalAbout').css('display') != 'none'){
            		$('#modalAbout').removeClass('is-active');
            	} else {
            		$('#modalExit').addClass('is-active');
            	}
            } catch (ignore) {}
        }
    });

    // Sample code
    var mainPage = document.querySelector('#main');

    mainPage.addEventListener("click", function() {
        var contentText = document.querySelector('#content-text');

        contentText.innerHTML = (contentText.innerHTML === "Basic") ? "Tizen" : "Basic";
    });
};