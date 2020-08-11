var $window = $(window);
var $test = $('.test');
var breakpoint = 992;
var last = $window.width() > breakpoint;

$window.on('resize', function(){
  var wWwidth = $window.width();
  var isLarger = wWwidth > breakpoint

  if(last !== isLarger) {
    if(isLarger) {
      onLargerChange();
    } else {
      onSmallerChange();
    }
    last = isLarger;
  }
});

function onLargerChange() {
  $("#about-carousel").add
}

function onSmallerChange() {
  $test.append('smaller ');
}
