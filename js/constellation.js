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