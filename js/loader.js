$(document).ready(function(){
    $('.sidenav').sidenav();
  });
  
  $('.carousel').carousel(); setInterval(function() {
    fullWidth: true,
    $('.carousel').carousel('next');}, 10000);
  
  $(document).ready(function(){
    $('.fixed-action-btn').floatingActionButton();
  });

  $(document).ready(function(){
    $('.modal').modal();
  });