$(document).ready(function () {
   $('div.color').each(function () {
        var $element = $(this);
        var $color = $element.find('span.hidden-color');
        $element.css('background-color', $color.text());
   });
   
   $('div.color').hover(
      function () {
        var $element = $(this);
        var $span = $element.find('span.hidden-color');
        $span.removeClass('hidden-color');
        $element.css('background-color', '#F1F1F1');
   }, function () {
        var $element = $(this);
        var $span = $element.find('span');
        $span.addClass('hidden-color');
        $element.css('background-color', $span.text());
   });
    
   $('div.color').dblclick(function () {
       var $element = $(this);
       var $span = $element.find('span');
			 window.prompt("Copy to clipboard: Ctrl+C, Enter", $span.text());
       //alert("Selected Color: " + $span.text());
   });
});