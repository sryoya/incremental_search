$(window).on('load', function() {
var input = '',
preinput = '',
prefunc = null;

var ajaxSearch = function(){
  $.ajax({
    type: 'GET',
    url: 'search',
    data: ("keyword=" + input),
  });
};

  $("#inc_search").on("keyup", function(){
  input = $.trim($(this).val());
  if(preinput !== input){
    clearTimeout(prefunc);
    prefunc = setTimeout(ajaxSearch, 500);
  };
  preinput = input;
  });
});
