
document.getElementById('agendamento-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio do formulário
    document.getElementById('success-message').style.display = 'block'; // Exibe o pop-up
    
    // Opcional: Ocultar o pop-up após 3 segundos
    setTimeout(function() {
        document.getElementById('success-message').style.display = 'none';
    }, 3000);
});