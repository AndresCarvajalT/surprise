document.getElementById('btn-empezar').addEventListener('click', () => {
    // 1. Reproducir música con efecto suave (Fade In)
    let musica = document.getElementById('musica-fondo');
    musica.volume = 0; // Arranca en silencio total
    musica.play().catch(e => console.log("Bloqueo de autoplay en el navegador"));

    let volumenFinal = 0.1; // Volumen máximo al que llegará
    let subirVolumen = setInterval(() => {
        if (musica.volume < volumenFinal) {
            // Sube un poquito cada vez, evitando pasarse del límite
            musica.volume = Math.min(musica.volume + 0.05, volumenFinal);
        } else {
            clearInterval(subirVolumen); // Se detiene cuando alcanza el volumen final
        }
    }, 250); // Sube el volumen cada cuarto de segundo

    // Transición de pantallas
    document.getElementById('pantalla-inicio').classList.add('oculto');
    document.getElementById('pantalla-sorpresa').classList.remove('oculto');

    // Explosión de fuegos artificiales (sin rojo)
    let duration = 3 * 1000;
    let end = Date.now() + duration;

    (function frame() {
        confetti({
            particleCount: 5,
            angle: 60,
            spread: 55,
            origin: { x: 0 },
            colors: ['#ffffff', '#ffd700', '#ffc0cb'] // Blanco, dorado y rosado suave
        });
        confetti({
            particleCount: 5,
            angle: 120,
            spread: 55,
            origin: { x: 1 },
            colors: ['#ffffff', '#ffd700', '#ffc0cb']
        });

        if (Date.now() < end) {
            requestAnimationFrame(frame);
        }
    }());
});
// Interacción táctil para celulares
const polaroids = document.querySelectorAll('.polaroid');
polaroids.forEach(polaroid => {
    polaroid.addEventListener('click', () => {
        // Quita la clase 'activa' de todas
        polaroids.forEach(p => p.classList.remove('activa'));
        // Se la pone solo a la que tocaste para traerla al frente
        polaroid.classList.add('activa');
    });
});