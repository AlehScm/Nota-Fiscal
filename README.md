# Processamento e Geração de NFS-e

## Desafio: Leitura e Cálculo de Dados para Emissão de Nota Fiscal de Serviço (NFS-e)

Este repositório contém um projeto desenvolvido como parte de um desafio para a leitura, processamento e geração de uma Nota Fiscal de Serviço Eletrônica (NFS-e). A aplicação permite que os usuários insiram dados relacionados a uma transação comercial, calculem os impostos aplicáveis e gerem a nota fiscal diretamente na página.

## Funcionalidades

1. **Leitura de Dados de Entrada:**
   - Valor da Venda.
   - Itens que estão sendo vendidos.
   - Porcentagem de impostos aplicáveis:
     - IRPF (Imposto de Renda Pessoa Física)
     - PIS (Programa de Integração Social)
     - COFINS (Contribuição para o Financiamento da Seguridade Social)
     - INSS (Instituto Nacional do Seguro Social)
     - ISSQN (Imposto Sobre Serviços de Qualquer Natureza)

2. **Cálculo Automático dos Impostos:**
   - Os valores dos impostos são calculados com base nas porcentagens inseridas pelo usuário.

3. **Geração da Nota Fiscal:**
   - Exibição detalhada da Nota Fiscal na página.
   - Informarções sobre os itens vendidos, valor total, e a discriminação dos impostos.

## Mobile First

Este projeto foi desenvolvido com a abordagem **Mobile First**, garantindo uma experiência otimizada para dispositivos móveis e responsividade em diferentes tamanhos de tela.

## Estrutura do Projeto

```
root/
├── index.html           # Interface principal do usuário
├── app.js               # Lógica para cálculo e exibição da NFS-e
├── styles.css           # Estilos principais
├── README.md            # Documentação do projeto
├── styles/              # Pasta com arquivos de estilo adicionais
│   ├── responsive.css   # Estilos responsivos
│   └── reset.css        # Reset de estilos
```

## Como Executar o Projeto

1. Clone este repositório:
   ```bash
   git clone https://github.com/AlehScm/Nota-Fiscal.git
   ```

2. Abra o arquivo `index.html` em um navegador da web.

3. Insira os dados solicitados:
   - Valor da venda.
   - Lista de itens.
   - Porcentagens dos impostos (IRPF, PIS, COFINS, INSS, ISSQN).

4. Clique no botão para gerar a Nota Fiscal.

5. Visualize a Nota Fiscal gerada diretamente na página.

## Exemplo de Saída

A Nota Fiscal gerada exibirá:
- Valor da venda
- Itens vendidos
- Valor do imposto sobre o valor da venda
- Valor total dos impostos
- Valor total da venda com os impostos


## Licença

Este projeto está licenciado sob a [MIT License](LICENSE).

