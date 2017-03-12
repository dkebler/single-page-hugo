// requires jquery
$(document).ready(function () {
  // Intialize all the media i.e. photos with "media" id
  // TODO use Hugo params to initialize multiple galleries/albums
  var lg = $("#4005").lightGallery({
    thumbnail: true,
    thumbWidth: 80,
    controls: true,
    loop: false,
    download: false,
    counter: true,
    // videojs: true
  });

  lg.on('onBeforeOpen.lg', function (event) {
    $('.nav-bar').css("display", "none")
  });

  lg.on('onCloseAfter.lg', function (event) {
    $('.nav-bar').css("display", "flex")
  });

  // initialize hero size
  heroResize();
  iframeResize();

  $('section').flowtype({
    // maximum: 1000,
    minFont: 12,
    maxFont: 25,
    fontRatio: 20
  });

  $('#hero').flowtype({
    maxFont: 60,
    fontRatio: 15
  });

  // resize elements on change
  $(window).smartresize(function () {
    heroResize();
    iframeResize();
  });

});
