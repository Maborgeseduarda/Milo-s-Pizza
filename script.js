const card = document.querySelector('.card');

card.addEventListener('click', function() {
    card.style.transform = 'scale(1.1)';

    setTimeout(function() {
        card.style.transform = 'scale(1)';
    }, 200); 
});