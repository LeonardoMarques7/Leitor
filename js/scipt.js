const form = document.getElementById("spamProtectionForm");
const inputField = document.getElementById("text");
const buttonOuvir = document.getElementById("botaoOuvir");
let lastSubmitTime = 0;
const submitInterval = 3000; // Intervalo de 3 segundos (3000 milissegundos)
let i = 0;

buttonOuvir.addEventListener("click", function (e) {
    e.preventDefault();
    const text = inputField.value;

    const currentTime = new Date().getTime();
    if (currentTime - lastSubmitTime < submitInterval) {
    } else {
        // Faça aqui o processamento do formulário, por exemplo, envio de dados ou outra ação
        if (text.trim() !== "") {
            const textVoice = new SpeechSynthesisUtterance(text);
            window.speechSynthesis.speak(textVoice);
            i++;
        } else {
            inputField.placeholder = "Por favor, digite algo antes de ouvir.";
        }
        lastSubmitTime = currentTime;
    }
});
