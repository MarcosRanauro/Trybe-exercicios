const getSendButton = document.getElementById("sendButton");

getSendButton.addEventListener('click', function (event) {
    event.preventDefault();
    const getName = document.getElementById("full-name");
    const getEmail = document.getElementById("email");
    const getTextArea = document.getElementById("textArea");

    if (getName.value.length < 10 || getEmail.value.length < 10 || getTextArea.value.length < 10) {
        alert("Dados invalidos");
    } else {
        alert('Dados enviados com sucesso! Obrigado por participar do concurso TrybeTrip!')
    }
})

function enableSubmit() {
    const getSubmit = document.getElementById("sendButton");
    const getCheckbox = document.getElementById("verificationIMG");
    getSubmit.disabled = !getCheckbox.checked;

}

window.onload = function () {
    const agreement = document.querySelector('#verificationIMG');
    agreement.addEventListener('change', enableSubmit);
}
