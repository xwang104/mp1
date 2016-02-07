var divs = document.getElementsByTagName('div');
for(var i=0; i<divs.length; i++) {
  /*divs[i].addEventListener("click", highlightThis);
  
  divs[i].addEventListener("click", highlightThis, true);
  divs[i].addEventListener("click", highlightThis, false);*/
}

function highlightThis(event) {
    //event.stopPropagation();

    var backgroundColor = this.style.backgroundColor;
    this.style.backgroundColor='yellow';
    //alert(this.className);
    this.style.backgroundColor=backgroundColor;
}

//----------------carousel animation------------------

var current = 1,
    slider_entries = $('#inner'),
    items = slider_entries.find('li'),
    len = items.length,
    first = items.filter(':first'),
    last = items.filter(':last');
slider_entries.css({left: -800 * current});

first.before(last.clone(true));
last.after(first.clone(true));

$('#left').click(function(){
    //alert("in left");
    slide(-1);
    return false;
});

$('#right').click(function(){
    slide(1);
    return false;
});

$(document).ready(function() {
    setInterval(slide, 2000);
    return;
});

function slide(dir) {
    //alert("in slide");
    if (dir != -1) {
        dir = 1;
    }
    slider_entries.animate({"left": "+=" + (-800 * dir)}, 250, function() {
        //alert("slide" + current + ", "  + dir + ", " + len);
        current += dir;
        var cycle = !!(current === 0 || current > len);
        if(cycle) {
            current = (current === 0)? len: 1;
            slider_entries.css({left: -800 * current});
        }
    });
}   

//----------------header animation------------------

$(document).scroll(function() {
    if($(window).scrollTop() > 80) {
        scrollDown();
    }
    if($(window).scrollTop() > 120) {
        $("#navigation").css('height', '3em');
    }
    if($(window).scrollTop() <= 80) {
        scrollUp();
    }
});

function scrollDown() {
  $("#logo").hide();
  $("#name").hide();
  $("#navigation").css({'height': '3.8em',
                        'margin-top': '0',
                        'position': 'fixed'});
  $("#carousel-container").css('padding-top', '170px');
}

function scrollUp() {
  $("#logo").show();
  $("#name").css('display', 'inline');
  $("#navigation").css({'height': '3em',
                        'margin-top': '5.8em',
                        'position': 'absolute'});
  $("#carousel-container").css('padding-top', '0px');
}


//-----------modal-------------

$(document).ready(function() {
    //alert("ready");
    var activeWindow;
    $(".chadiv").click(function() {
        var id = $(this).attr('id');
        activeWindow = $("#" + id + "-detail")
            .css('opacity', '0')
            .css('top', '50%')
            .css('left', '50%')
            .fadeTo(500, 1);
        $("#modal")
            .append('<div id="blind" />')
            .find("#blind")
            .css('opacity', '0')
            .fadeTo(500, 0.6)
            .click(function() {
                closeModal();
            });
    });

    $("a.close").click(function(e) {
        e.preventDefault();
        closeModal();
    });

    function closeModal() {
        activeWindow.fadeOut(250, function(){ $(this).css('top', '-1000px').css('left','-1000px');});
        $("#blind").fadeOut(250, function() { $(this).remove();});
    }
});

//--------Smooth Scrolling-------------

$(".changeBackground a").click(function(e) {
    e.preventDefault();
    var id = $(this).attr('href');
    if (id == "part1") {
        $('html, body').animate({
            scrollTop: $("#carousel-container").offset().top - 50}, 1000);
    }
    if (id == "part2") {
        $('html, body').animate({
            scrollTop: $("#characters").offset().top - 50}, 1000);
    }
    if (id == "part3") {
        $('html, body').animate({
            scrollTop: $("video").offset().top-50}, 1000);
    }

});

