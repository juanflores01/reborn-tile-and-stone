var reborn = {};

$(document).ready(function () {
    $("#photoGalleryBtn").on("click", reborn.togglePhototGallery);
    $("#testGalleryBtn").on("click", reborn.backToMain);
    reborn.runLightBoxGallery();
    reborn.runFilteredGallery();

    $('#myModal').on('show.bs.modal', function (e) {
        var image = $(e.relatedTarget).attr('src');
        $(".img-responsive").attr("src", image);
    });
});

reborn.togglePhototGallery = function (event) {
    $(".main-page").addClass("hidden");
    $(".test-gallery").removeClass("hidden");
    $('html,body').scrollTop(0);
}

reborn.backToMain = function () {
    $(".test-gallery").addClass("hidden");
    $(".main-page").removeClass("hidden");
}

reborn.runLightBoxGallery = function () {
    /* activate the carousel */ 
    $("#modal-carousel").carousel({ interval: false });

    /* change modal title when slide changes */
    $("#modal-carousel").on("slid.bs.carousel", function () {
        $(".modal-title")
            .html($(this)
                .find(".active img")
                .attr("title"));
    });

    /* when clicking a thumbnail */
    $(".row .thumbnail").click(function () {
        var content = $(".carousel-inner");
        var title = $(".modal-title");

        content.empty();
        title.empty();

        var id = this.id;
        var repo = $("#img-repo .item");
        var repoCopy = repo.filter("#" + id).clone();
        var active = repoCopy.first();

        active.addClass("active");
        title.html(active.find("img").attr("title"));
        content.append(repoCopy);

        //   show the modal
        $("#modal-gallery").modal("show");
    });

}

reborn.runFilteredGallery = function () {
    console.log("this is the filtered gallery function");
}

$(function () {
    $(".dropdown-menu").on('click', 'li a', function () {
        // $(".btn:first-child").text($(this).text());
        // $(".btn:first-child").val($(this).text());

        $("#btnText").text($(this).text());
        $("#btnText").val($(this).text());
    });
});

filterSelection("all") 
function filterSelection(c) {
    var x, i;
    x = document.getElementsByClassName("column");
    if (c == "all") c = "";
    // Add the "show" class (display:block) to the filtered elements, and remove the "show" class from the elements that are not selected
    for (i = 0; i < x.length; i++) {
        w3RemoveClass(x[i], "show");
        if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
    }
}

// Show filtered elements
function w3AddClass(element, name) {
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
        if (arr1.indexOf(arr2[i]) == -1) {
            element.className += " " + arr2[i];
        }
    }
}

// Hide elements that are not selected
function w3RemoveClass(element, name) {
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
        while (arr1.indexOf(arr2[i]) > -1) {
            arr1.splice(arr1.indexOf(arr2[i]), 1);
        }
    }
    element.className = arr1.join(" ");
}

// Add active class to the current button (highlight it)
var btnContainer = document.getElementById("myBtnContainer");
var btns = btnContainer.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function () {
        var current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active", "");
        this.className += " active";
    });
}
