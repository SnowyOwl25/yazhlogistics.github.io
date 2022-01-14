$(document).ready(function(){
    $('.sidenav').sidenav();
  });
  
  $('.carousel').carousel(); setInterval(function() {
    fullWidth: true,
    $('.carousel').carousel('next');}, 10000);
  
  document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.fixed-action-btn');
    var instances = M.FloatingActionButton.init(elems, {
      hoverEnabled: false
    });
  });

  $(document).ready(function(){
    $('.modal').modal();
  });