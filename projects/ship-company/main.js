$(document).ready()

var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
    // var prevScrollpos = window.pageYOffset;
    if (window.pageYOffset > 150) {
        var currentScrollPos = window.pageYOffset;
        if (prevScrollpos > currentScrollPos) {
            document.getElementById("navbar").style.top = "0";
        } else {
            document.getElementById("navbar").style.top = "-80px";
        }
        prevScrollpos = currentScrollPos;
    }
}

$(function () {
    $('#itemB').hover(function () {
        $('#itemC').css('opacity', '0.5');
        $('#itemD').css('opacity', '0.5');
    }, function () {
        $('#itemC').css('opacity', '');
        $('#itemD').css('opacity', '');
    });
});

$(function () {
    $('#itemC').hover(function () {
        $('#itemB').css('opacity', '0.5');
        $('#itemD').css('opacity', '0.5');
    }, function () {
        $('#itemB').css('opacity', '');
        $('#itemD').css('opacity', '');
    });
});

$(function () {
    $('#itemD').hover(function () {
        $('#itemB').css('opacity', '0.5');
        $('#itemC').css('opacity', '0.5');
    }, function () {
        $('#itemB').css('opacity', '');
        $('#itemC').css('opacity', '');
    });
});

$(function () {
    $('#spaceA').hover(function () {
        $('#itemB').css('opacity', '0.5');
        $('#itemC').css('opacity', '0.5');
        $('#itemD').css('opacity', '0.5');
    }, function () {
        $('#itemB').css('opacity', '');
        $('#itemC').css('opacity', '');
        $('#itemD').css('opacity', '');
    });
});

$(function () {
    $('#spaceB').hover(function () {
        $('#itemB').css('opacity', '0.5');
        $('#itemC').css('opacity', '0.5');
        $('#itemD').css('opacity', '0.5');
    }, function () {
        $('#itemB').css('opacity', '');
        $('#itemC').css('opacity', '');
        $('#itemD').css('opacity', '');
    });
});
