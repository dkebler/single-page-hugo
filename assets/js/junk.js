// videos - preload
(function videoInit() {

  var $allVideos = $("iframe[src*='//player.vimeo.com'], iframe[src*='//www.youtube.com'], object, embed"),
    $fluidEl = $("figure");

  $allVideos.each(function () {
    $(this)
      // jQuery .data does not work on object/embed elements
      .attr('data-aspectRatio', this.height / this.width)
      .removeAttr('height')
      .removeAttr('width');
  })
}());

// resize videos on window change
function videoResize() {

  $allVideos.each(function () {

    var $el = $(this);
    var newWidth = $el.parents('figure').width();
    $el
      .width(newWidth)
      .height(newWidth * $el.attr('data-aspectRatio'));
  });
}