function openTab(evt, tabName) {
    // Declare all variables
    var i, tabcontent, tablinks;

    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Show the current tab, and add an "active" class to the link that opened the tab
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
    evt.preventDefault();
}


function loadPage(page) {
    $("#main-container").load(page);
    window.scrollTo(0, 0);
    //evt.preventDefault();
}


// First catch the mouse enter, grab position, make new element, append it, then animate
$(document).on("mouseenter", ".zoom-image", function () {
    var top = $(this).position().top;
    var left = $(this).position().left;
    var src = $(this).find("img").attr("src");
    $('<div class="zoom-over" style="top:' + top + ' left:' + left + '">' +
            '<img class="responsive-img" src="' + src + '" /></div>')
            .appendTo(this);
    //.animate({height: 250, width: 250}, "fast");

    console.log(src);
});

// Note the mouseleave on the hovered element instead of the img
$(document).on("mouseleave", ".zoom-image", function () {
    $('.zoom-over').remove();
});