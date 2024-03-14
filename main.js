document.getElementById('formulario').addEventListener('submit', function (e) {
    e.preventDefault();
    var numeroA = parseFloat(document.getElementById('campo-a').value);
    var numeroB = parseFloat(document.getElementById('campo-b').value);
    var messageElement = document.getElementById('message');

    if (numeroB > numeroA) {
        messageElement.innerHTML = "<p class='message'>Formulário válido! O Número B é maior do que o Número A.</p>";
        messageElement.classList.remove('error-message');
        messageElement.classList.add('message');

    } else {
        messageElement.innerHTML = "<p class='error-message'>O Número B deve ser maior do que o Número A!</p>";
        messageElement.classList.remove('message');
        messageElement.classList.add('error-message');
    }

    messageElement.style.display = "block";
    document.getElementById('campo-a').value = '';
    document.getElementById('campo-b').value = '';

});
