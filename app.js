function gerarNotaFiscal() {
    const form = document.getElementById('nfsForm');
    const inputs = form.querySelectorAll('input, textarea');

    // função para alerta caso o usuario não prencha o campo
    for (let input of inputs) {
        if (input.value.trim() == "") {
            alert(`Por favor, preencha o campo: ${input.previousElementSibling.textContent}`);
            input.focus();
            return;
        }
    }
     // Leitura dos dados do formulário
    const valorVenda = parseFloat(document.getElementById('valorVenda').value);
    const itens = document.getElementById('itens').value;
    const irpf = parseFloat(document.getElementById('irpf').value) / 100;
    const pis = parseFloat(document.getElementById('pis').value) / 100;
    const cofins = parseFloat(document.getElementById('cofins').value) / 100;
    const inss = parseFloat(document.getElementById('inss').value) / 100;
    const issqn = parseFloat(document.getElementById('issqn').value) / 100;

     // Cálculo dos impostos
    const valorIrpf = valorVenda * irpf;
    const valorPis = valorVenda * pis;
    const valorCofins = valorVenda * cofins;
    const valorInss = valorVenda * inss;
    const valorIssqn = valorVenda * issqn;

    const totalImpostos = valorIrpf + valorPis + valorCofins + valorInss + valorIssqn;
    const valorTotal = valorVenda + totalImpostos;

    // Exibição da Nota Fiscal
    document.getElementById('valorVendaNF').innerText = valorVenda.toFixed(2);
    document.getElementById('itensNF').innerText = itens;
    document.getElementById('irpfNF').innerText = valorIrpf.toFixed(2);
    document.getElementById('pisNF').innerText = valorPis.toFixed(2);
    document.getElementById('cofinsNF').innerText = valorCofins.toFixed(2);
    document.getElementById('inssNF').innerText = valorInss.toFixed(2);
    document.getElementById('issqnNF').innerText = valorIssqn.toFixed(2);
    document.getElementById('totalImpostosNF').innerText = totalImpostos.toFixed(2);
    document.getElementById('valorTotalNF').innerText = valorTotal.toFixed(2);

    // Exibir a nota fiscal
    document.getElementById('notaFiscal').style.display = 'flex';
}