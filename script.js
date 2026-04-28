const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

if (!SpeechRecognition) {
    alert("Tu navegador no deja usar el micrófono. Usá Chrome.");
} else {
    const recognition = new SpeechRecognition();
    recognition.lang = 'es-ES'; 

    const btn = document.getElementById('btn-listen');
    const output = document.getElementById('output-text');

    btn.onclick = () => {
        recognition.start(); // Activa el micro
        btn.textContent = "Escuchando...";
    };

    recognition.onresult = (event) => {
        // Esto agarra lo que dijiste y lo pone en pantalla
        const transcript = event.results[0][0].transcript;
        output.textContent = transcript;
        btn.textContent = "🎤 Tocar para hablar";
    };

    recognition.onerror = () => {
        btn.textContent = "🎤 Error/Reintentar";
    };
}
