let capturaBody = document.getElementById("body");
let criandoBotao = document.createElement('input');
criandoBotao.id = "input";
capturaBody.appendChild(criandoBotao);

document.addEventListener("keyup", function() {
   capturaBody.style.backgroundColor = criandoBotao.value;
   localStorage.setItem("capturaBody", capturaBody);
});