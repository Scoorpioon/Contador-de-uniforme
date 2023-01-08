var botao = document.getElementById('create-table');
    var tabela = document.getElementById('tabela')
    var corpo = document.getElementById('table-body')
    var numeroDaLinha = 1

    var criarTabela = () => {
        botao.style.display = 'none'
        tabela.style.display = 'table'
        
    }

    var criarLinha = () => {
        var linha = document.createElement('tr')

        linha.setAttribute('id', `linha-${numeroDaLinha}`)
        numeroDaLinha++
        console.log(`Linha criada: ${numeroDaLinha}`)

        corpo.appendChild(linha)

        var entradaDaLinha1 = document.createElement('input')
        entradaDaLinha1 = 
        linha.appendChild(entradaDaLinha1)
    }