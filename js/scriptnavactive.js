
        document.addEventListener('DOMContentLoaded', function() { 
            const navLinks = document.querySelectorAll('nav a'); 
            const currentPage = window.location.pathname.split('/').pop(); 
            navLinks.forEach(link => { 
                if (link.getAttribute('href') === currentPage) { 
                    link.classList.add('active'); 
                } 
        });
        });
