function gerarNotaFiscal() {
    const valorVenda = parseFloat(document.getElementById('valorVenda').value) || 0;
    const itens = document.getElementById('itens').value;
    const irpf = parseFloat(document.getElementById('irpf').value) || 0;
    const pis = parseFloat(document.getElementById('pis').value) || 0;
    const cofins = parseFloat(document.getElementById('cofins').value) || 0;
    const inss = parseFloat(document.getElementById('inss').value) || 0;
    const issqn = parseFloat(document.getElementById('issqn').value) || 0;

    // Cálculo dos impostos
    const valorIRPF = (valorVenda * irpf) / 100;
    const valorPIS = (valorVenda * pis) / 100;
    const valorCOFINS = (valorVenda * cofins) / 100;
    const valorINSS = (valorVenda * inss) / 100;
    const valorISSQN = (valorVenda * issqn) / 100;

    const totalImpostos = valorIRPF + valorPIS + valorCOFINS + valorINSS + valorISSQN;
    const valorLiquido = valorVenda - totalImpostos;

    // Exibição da Nota Fiscal
    const output = document.getElementById('output');
    output.innerHTML = `
        <h2>Nota Fiscal de Serviço</h2>
        <p><strong>Valor da Venda:</strong> R$ ${valorVenda.toFixed(2)}</p>
        <p><strong>Itens Vendidos:</strong> ${itens}</p>
        <p><strong>Impostos:</strong></p>
        <ul>
            <li>IRPF: R$ ${valorIRPF.toFixed(2)}</li>
            <li>PIS: R$ ${valorPIS.toFixed(2)}</li>
            <li>COFINS: R$ ${valorCOFINS.toFixed(2)}</li>
            <li>INSS: R$ ${valorINSS.toFixed(2)}</li>
            <li>ISSQN: R$ ${valorISSQN.toFixed(2)}</li>
        </ul>
        <p><strong>Total de Impostos:</strong> R$ ${totalImpostos.toFixed(2)}</p>
        <p><strong>Valor Líquido:</strong> R$ ${valorLiquido.toFixed(2)}</p>
    `;
}