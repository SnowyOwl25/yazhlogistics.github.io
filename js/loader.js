$(document).ready(function(){
    $('.sidenav').sidenav();
  });
  $('.carousel').carousel(); setInterval(function() {
    fullWidth: true,
    $('.carousel').carousel('next');}, 10000);