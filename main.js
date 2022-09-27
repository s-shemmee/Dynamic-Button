const no = document.getElementById('yes');
no.addEventListener('mouseover', () => {
    if (no.classList.contains('animF')) {
        no.classList.remove('animF');
        no.classList.add('animB');
    } else if (no.classList.contains('animB')) {
        no.classList.remove('animB');
        no.classList.add('animF');
    } else {
        no.classList.add('animF');
    }
});   