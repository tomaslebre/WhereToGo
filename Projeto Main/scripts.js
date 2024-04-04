
//Navigation
document.addEventListener('DOMContentLoaded', function() {
    var locaisLink = document.getElementById('locaisLink');
    var whereToEatLink = document.getElementById('wheretoeatLink');
    var homeLink = document.getElementById('homeLink');

    locaisLink.addEventListener('click', function() {
        window.location.href = 'Locais.html';
    });

    whereToEatLink.addEventListener('click', function() {
        window.location.href = 'WhereToEat.html';
    });

    homeLink.addEventListener('click', function() {
        window.location.href = 'index.html';
    });
    roteiroLink.addEventListener('click', function() {
        window.location.href = 'Roteiro.html';
    });
    

});



