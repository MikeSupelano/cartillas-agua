let x = document.getElementsByClassName("actividad");
(x).on('submit', function(e) {
    alert('submit');
    e.preventDefault();
});