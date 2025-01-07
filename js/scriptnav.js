window.addEventListener('scroll', function() { 
    const nav = document.querySelector('nav'); 
    if (window.scrollY > 50) { 
        nav.classList.add('fixed'); 
    } 
    else { 
        nav.classList.remove('fixed'); 
    } 
});
