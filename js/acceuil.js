// constellation d'etoile
const canvas = document.getElementById('canvas');
        const ctx = canvas.getContext('2d');
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        const stars = [];
        const numStars = 100;

        for (let i = 0; i < numStars; i++) {
            stars.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                vx: (Math.random() - 0.5) * 0.5,
                vy: (Math.random() - 0.5) * 0.5
            });
        }

        function drawStars() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.fillStyle = 'white';
            stars.forEach(star => {
                ctx.beginPath();
                ctx.arc(star.x, star.y, 2, 0, Math.PI * 2);
                ctx.fill();
            });
        }

        function updateStars() {
            stars.forEach(star => {
                star.x += star.vx;
                star.y += star.vy;

                if (star.x < 0 || star.x > canvas.width) star.vx *= -1;
                if (star.y < 0 || star.y > canvas.height) star.vy *= -1;
            });
        }

        function drawLines() {
            ctx.strokeStyle = 'rgba(255, 255, 255, 0.5)';
            for (let i = 0; i < numStars; i++) {
                for (let j = i + 1; j < numStars; j++) {
                    const dx = stars[i].x - stars[j].x;
                    const dy = stars[i].y - stars[j].y;
                    const distance = Math.sqrt(dx * dx + dy * dy);
                    if (distance < 100) {
                        ctx.beginPath();
                        ctx.moveTo(stars[i].x, stars[i].y);
                        ctx.lineTo(stars[j].x, stars[j].y);
                        ctx.stroke();
                    }
                }
            }
        }

        function animate() {
            drawStars();
            updateStars();
            drawLines();
            requestAnimationFrame(animate);
        }

        animate();


document.getElementById('pagesuivante').addEventListener('click', function() {
    window.location.href = 'html/apropos.html'; 
});




//saisie
function typeWriter(text, elementId, delay = 100) {
    const element = document.getElementById(elementId);
    let index = 0;

    function addCharacter() {
        if (index < text.length) {
            element.innerHTML += text.charAt(index);
            index++;
            setTimeout(addCharacter, delay);
        }
    }

    addCharacter();
}

function typeWriter(text, elementId, delay = 100, callback) {
    const element = document.getElementById(elementId);
    let index = 0;

    function addCharacter() {
        if (index < text.length) {
            element.innerHTML += text.charAt(index);
            index++;
            setTimeout(addCharacter, delay);
        } else if (callback) {
            callback();
        }
    }

    addCharacter();
}

document.addEventListener('DOMContentLoaded', function () {
    const text1 = "BIENVENUE SUR MON PORTFOLIO";
    const text2 = " ";
    const text3 = "Cliquez sur continuer si vous souhaitez en savoir plus à propos de moi";

    // Affiche text1 d'abord
    typeWriter(text1, 'text1', 100, function () {
        // Ajoute la classe 'visible' pour déclencher l'animation de glissement de text2
        document.getElementById('text2').classList.add('visible');

        // Affiche text2 ensuite
        typeWriter(text2, 'text2', 100, function () {
            // Après 3 secondes, affiche text3
            setTimeout(function () {
                typeWriter(text3, 'text3', 100);
            }, 3000); // 3 secondes de délai
        });
    });
});


//transition
let scrollTimeout;
let currentPage = 0; // Indique la page actuellement affichée
const pages = document.querySelectorAll('.page');
const container = document.getElementById('container');

window.addEventListener('wheel', function(event) {
    // Annuler les actions multiples de scroll en les regroupant
    clearTimeout(scrollTimeout);

    scrollTimeout = setTimeout(() => {
        if (event.deltaY > 0 && currentPage < pages.length - 1) {
            // Scroll vers le bas (deltaY positif)
            currentPage++;
        } else if (event.deltaY < 0 && currentPage > 0) {
            // Scroll vers le haut (deltaY négatif)
            currentPage--;
        }

        // Appliquer le transform pour faire défiler
        container.style.transform = `translateY(-${currentPage * 100}vh)`;
    }, 100); // Délai pour regrouper les scrolls en un seul mouvement
});