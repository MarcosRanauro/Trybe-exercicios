let getSendButton = document.getElementById("sendButton");

getSendButton.addEventListener('click', function (event){
    event.preventDefault();    
    let getName = document.getElementById("full-name");
    let getEmail = document.getElementById("email");
    let getTextArea = document.getElementById("textArea");

    if (getName.value.length < 10 || getEmail.value.length < 10 || getTextArea.value.length < 10) {
        alert ("Dados invalidos");
    } else {
        alert ('Dados enviados com sucesso! Obrigado por participar do concurso TrybeTrip!')
    }
})


    
