const btnSwicht = document.querySelector('#switch');

btnSwicht.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    btnSwicht.classList.toggle('active');
});
