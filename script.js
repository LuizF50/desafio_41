function decodeMessage() {
    const encryptedMessage = document.getElementById('encryptedMessage').value;
    let decodedMessage = '';

    for (let i = 0; i < encryptedMessage.length; i++) {
        const char = encryptedMessage[i];
        if (char.match(/[a-z]/)) {
            // Calcula a posição no alfabeto (a=0, b=1, ..., z=25)
            const position = char.charCodeAt(0) - 'a'.charCodeAt(0);
            // Substitui pela letra três posições à frente
            const decodedPosition = (position + 3) % 26;
            decodedMessage += String.fromCharCode(decodedPosition + 'a'.charCodeAt(0));
        } else {
            // Se não for letra minúscula, mantém o caractere original
            decodedMessage += char;
        }
    }

    document.getElementById('decodedMessage').innerText = decodedMessage;
}
