var botao = document.getElementById('create-table');
    var tabela = document.getElementById('tabela')
    var corpo = document.getElementById('table-body')
    var numeroDaLinha = 1

    var criarTabela = () => {
        botao.style.display = 'none'
        tabela.style.display = 'table'
        
    }
    
    var alterarValor = (numeroBotao, operacao) => {
        var botaoClicado = document.getElementById(`quantidade-${numeroBotao}`)
       /*var letrasMinusculas = ['abcdefghijklmnopqrstuvwxyz']
        var letrasMaiusculas = ['ABCDEFGHIJKLMNOPQRSTUVWXYZ']*/

        if(operacao == '+') {
            botaoClicado.value++
            botaoClicado.style.borderBottom = '1px solid blue'
        } else if(operacao == '-') {
            if(botaoClicado.value > 0) {
                botaoClicado.value--
            }
        }

        if(botaoClicado.value == 0) {
            botaoClicado.style.borderBottom = '1px solid gray'

        }

       /*for(var c = 0; c <= botaoClicado.value.length; c++) {
            if(botaoClicado.value[c] in letrasMinusculas || botaoClicado.value[c] in letrasMaiusculas) {
                botaoClicado.style.backgroundColor = '#ffb8b8'
                botaoClicado.style.borderBottom = '1px solid red'

            } else if(botaoClicado.value[c] >= 0) {
                botaoClicado.style.borderBottom = '1px solid blue'
                botaoClicado.style.backgroundColor = 'none'

            }
        }*/
    }

    var excluirLinha = (numeroLinha) => {
        var linha = document.getElementById(`linha-${numeroLinha}`)
        console.log(`Linha excluida: ${numeroLinha}`)
        //linha.remove() Remover linha
        linha.style.display = 'none' //Faz a linha desaparecer, mas ela ainda se mantém no site.
    }

    var criarLinha = (getValue) => {
        if(getValue != false) {
            var linha = document.createElement('tr')

            linha.setAttribute('id', `linha-${numeroDaLinha}`), linha.setAttribute('class', 'linha')
            console.log(`Linha criada: ${numeroDaLinha}`)
            numeroDaLinha++

            corpo.appendChild(linha)
            
            var linhaAtual = document.getElementById(`linha-${numeroDaLinha - 1}`)
            
            //Table datas
            linha.appendChild(document.createElement('td'))
            var campoRoupa = linhaAtual.firstChild
            campoRoupa.setAttribute('id', `data-1`)

            linha.appendChild(document.createElement('td'))
            var campoTamanho = linhaAtual.children[1]
            campoTamanho.setAttribute('id', `data-2`)

            linha.appendChild(document.createElement('td'))
            var campoQuantidade = linhaAtual.children[2]
            campoQuantidade.setAttribute('id', `data-3`)    
            
            linha.appendChild(document.createElement('td'))
            var campoAlterar = linhaAtual.lastChild
            campoAlterar.setAttribute('id', `data-4`)

            //Input do nome
            var entradaDaLinha1 = document.createElement('input')
            entradaDaLinha1.setAttribute('placeholder', 'Nome da roupa...'), entradaDaLinha1.setAttribute('id', `entradaNome-${numeroDaLinha - 1}`)

            //Input do tamanho
            var entradaDaLinha2 = document.createElement('input')
            entradaDaLinha2.setAttribute('placeholder', 'Tamanho da roupa...')

            //Input da quantidade
            var entradaDaQuantidade = document.createElement('input')
            entradaDaQuantidade.setAttribute('class', 'valueInput')
            entradaDaQuantidade.setAttribute('id', `quantidade-${numeroDaLinha - 1}`)

            var divQuantidade = document.createElement('div')
            divQuantidade.setAttribute('class', 'divQuantidade')

            //Botões de aumentar/diminuir
            var botaoPositivo = document.createElement('button')
            botaoPositivo.setAttribute('class', `change-amount-positive button-positive`)
            botaoPositivo.setAttribute('id', `button-positive`)
            botaoPositivo.textContent = '+'

            var botaoNegativo = document.createElement('button')
            botaoNegativo.setAttribute('class', `change-amount-negative button-negative`)
            botaoNegativo.setAttribute('id', `button-negative`)
            botaoNegativo.textContent = '-'

            entradaDaQuantidade.setAttribute('value', 0)

            divQuantidade.appendChild(botaoPositivo), divQuantidade.appendChild(botaoNegativo)
            campoRoupa.appendChild(entradaDaLinha1)
            campoTamanho.appendChild(entradaDaLinha2)
            campoQuantidade.appendChild(entradaDaQuantidade), campoQuantidade.appendChild(divQuantidade)

            //Botão de excluir
            var botaoExcluir = document.createElement('button')
            botaoExcluir.setAttribute('class', 'botao-deletar')
            botaoExcluir.textContent = 'X'
            campoAlterar.appendChild(botaoExcluir)
        }
        //console.log(botaoPositivo.className[39]) - Pega apenas o número na classe do botão que identifica a linha

        //Adicionar evento aos botões de aumentar e diminuir
        if(document.getElementById('linha-1')) {
            var botoesPositivos = document.getElementsByClassName('button-positive')
            botoesPositivos = Array.from(botoesPositivos)

            var botoesNegativos = document.getElementsByClassName('button-negative')
            botoesNegativos = Array.from(botoesNegativos)

            var numeroPositivo = 1
            var numeroNegativo = 1

            botoesPositivos.forEach((element) => {
                var buttons = document.getElementsByClassName('button-positive')

                element.setAttribute('onClick', `alterarValor(${numeroPositivo}, '+')`)
                
                numeroPositivo++
            }), botoesNegativos.forEach((element) => {
                var buttons = document.getElementsByClassName('button-negative')

                element.setAttribute('onClick', `alterarValor(${numeroNegativo}, '-')`)
                
                numeroNegativo++
            })
            
            
        }
        //Adicionar evento ao botão de excluir
        var botoesExcluir = document.getElementsByClassName('botao-deletar')
        console.log(botoesExcluir)
        botoesExcluir = Array.from(botoesExcluir)
        var numeroLinha = 1

        botoesExcluir.forEach((element) => {
            element.setAttribute('onClick', `excluirLinha(${numeroLinha})`)
            numeroLinha++
        })
    }

    function pegarNumeros(str) {
        var numeros = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
        var numerosEncontrados = [];
        for(var c = 0; c <= str.length; c++) {
            if(str[c] in numeros) {
                numerosEncontrados.push(str[c])
            }
        }

        numerosEncontrados = numerosEncontrados.toString().replaceAll(',', '')
        return numerosEncontrados
    }
