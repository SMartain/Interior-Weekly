$(document).on('scroll', function () {

  // The scroll top method gives us back a pixel value for how far 
  // is it from the top of the page (from our current scroll position)
  
  var pixelsFromTop = $(document).scrollTop();

  if (pixelsFromTop > 50) {
    $ ('header').addClass('hidden')
  } else {
    $ ('header').removeClass('hidden')
  }

  if (pixelsFromTop < 600) {
    $('body').css('background-color', '#fff')
  } else if (pixelsFromTop < 1400) {
    $('body').css('background-color', '#a29c97')
  } else if (pixelsFromTop < 2200) {
    $('body').css('background-color', '#d9dfe4')
  } else if (pixelsFromTop < 3000) {
    $('body').css('background-color', '#fff0f0')
  } else {
    $('body').css('background-color', '#cdccc7')
  }




var documentHeight = $(document).height()
var windowHeight = $(window).height()

var difference = documentHeight - windowHeight

var percentage = 100 * pixelsFromTop / difference

console.log(percentage)

$('.bar').css('width', percentage + '%')


})


