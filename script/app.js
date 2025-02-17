function exibirMensagem() {
    let nomeAluno = document.getElementById("nomeAluno").value;
    let cidadeSelecionada = document.getElementById("cidade").value;
    let moraNaCidade = document.querySelector('input[name="mora"]:checked').value;

    alert("Bem vindo " + nomeAluno + ", a cidade escolhida foi " + cidadeSelecionada + ", você mora na cidade: " + moraNaCidade);
}
