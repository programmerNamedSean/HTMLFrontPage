$("#slideshow > div:gt(0)").hide();

setInterval(function() { 
  $('#slideshow > div:first')
    .fadeOut(1000)
    .next()
    .fadeIn(1000)
    .end()
    .appendTo('#slideshow');
},  3000);
/* When the user clicks on the button,
 toggle between hiding and showing the dropdown content */

function myFunction() {


    document.getElementById("drop1").classList.toggle("show");

}
function myFunction2() {

    document.getElementById("drop2").classList.toggle("show");
}
function myFunction3() {

    document.getElementById("drop3").classList.toggle("show");
}
// Close the dropdown if the user clicks outside of it
window.onclick = function (event) {
    if (!event.target.matches('.dropbtn')) {

        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}

// Create the dropdown base
$("<select />").appendTo("nav");

// Create default option "Go to..."
$("<option />", {
    "selected": "selected",
    "value": "",
    "text": "Go to..."
}).appendTo("nav select");

// Populate dropdown with menu items
$("nav a").each(function () {
    var el = $(this);
    $("<option />", {
        "value": el.attr("href"),
        "text": el.text()
    }).appendTo("nav select");
});

$("nav select").change(function () {
    window.location = $(this).find("option:selected").val();
});
s