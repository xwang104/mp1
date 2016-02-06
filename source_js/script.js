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

$(document).scroll(function() {
    if($(window).scrollTop() > 80) {
        navResize();
    }
});


function slide(dir) {
    //alert("in slide");
    if (dir != -1) {
        dir = 1;
    }
    slider_entries.stop().animate({"left": "+=" + (-800 * dir)}, 250, function() {
        //alert("slide" + current + ", "  + dir + ", " + len);
        current += dir;
        var cycle = !!(current === 0 || current > len);
        if(cycle) {
            current = (current === 0)? len: 1;
            slider_entries.css({left: -800 * current});
        }
    });
}   

function navResize() {
  $("#logo").hide();
  $("#name").hide();
  $("#navigation").css({'height': '3.8em',
                        'margin-top': '0',
                        'position': 'fixed'});
}
 
