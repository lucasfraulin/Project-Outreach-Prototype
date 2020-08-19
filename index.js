
function onSmallerChange() {
  $("#about-carousel-container").removeClass("container");
  $("#about-carousel").removeClass("about-carousel");
  $("#about-carousel").removeClass("clearfix");
  $("#about-carousel img").removeClass("img-responsive");
  $("#about-carousel-container").addClass("container-fluid");
  $("#about-carousel").addClass("about-carousel-fluid");
  $("#about-carousel img").addClass("img-fluid w-100 about-car-img");

  $("#footer .address-text").html("22 Rolling Acres Drive<br>Calgary AB, Canada T3R 1B8");
}

function onLargerChange() {
  $("#about-carousel-container").removeClass("container-fluid");
  $("#about-carousel").removeClass("about-carousel-fluid");
  $("#about-carousel img").removeClass("img-fluid w-100 about-car-img");
  $("#about-carousel img").addClass("img-responsive");
  $("#about-carousel").addClass("about-carousel");
  $("#about-carousel").addClass("clearfix");
  $("#about-carousel-container").addClass("container");

  $("#footer .address-text").html("22 Rolling Acres Drive, Calgary AB, Canada T3R 1B8");
}
// define the boundries
var bounds = [
    {min:0,max:992,func:onSmallerChange},
    {min:993,func:onLargerChange}
];

// define a resize function. use a closure for the lastBoundry determined.
var resizeFn = function(){
    var lastBoundry; // cache the last boundry used
    return function(){
        var width = window.innerWidth; // get the window's inner width
        var boundry, min, max;
        for(var i=0; i<bounds.length; i++){
            boundry = bounds[i];
            min = boundry.min || Number.MIN_VALUE;
            max = boundry.max || Number.MAX_VALUE;
            if(width > min && width < max
               && lastBoundry !== boundry){
                lastBoundry = boundry;
                return boundry.func.call(boundry);
            }
        }
    }
};
$(window).resize(resizeFn()); // bind the resize event handler
$(document).ready(function(){
    $(window).trigger('resize'); // on load, init the lastBoundry
});
