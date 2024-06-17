document.getElementById('startButton').addEventListener('click', function() {
    // Prompt para pedir o nome do usuário
    const name = prompt("Por favor, insira seu nome:");
    
    // Seleciona o elemento de mensagem
    const messageElement = document.getElementById('message');
    
    if (name) {
        // Confirm para perguntar se o usuário quer continuar
        const confirmContinue = confirm(`Olá ${name}, deseja continuar?`);
        
        if (confirmContinue) {
            // Usuário decidiu continuar
            messageElement.textContent = `Obrigado, ${name}. Vamos continuar!`;
            messageElement.classList.remove('alert-error');
            messageElement.classList.add('alert-success');
        } else {
            // Usuário decidiu não continuar
            messageElement.textContent = `Até logo, ${name}. Espero te ver novamente!`;
            messageElement.classList.remove('alert-error');
            messageElement.classList.add('alert-success');
        }
    } else {
        // Usuário não inseriu o nome
        messageElement.textContent = 'Erro: Você não inseriu um nome.';
        messageElement.classList.remove('alert-success');
        messageElement.classList.add('alert-error');
    }
    
    // Exibe a mensagem
    messageElement.style.display = 'block';
});
