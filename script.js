
$(document).ready(function() {
    $('.nav-link-puma').on('click', function() {
        if ($('.navbar-toggler').is(':visible')) {
            $('.navbar-collapse').collapse('hide');
        }
    });
    
    console.log('Navbar de PUMA cargado correctamente');
});