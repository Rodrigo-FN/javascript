# Convertendo  string >>> Número

            
           - Number.parseInt(n)  << Inteiro

           - Number.parseFloat(n) << Reais

           - numbre(n) << Inteiro é Reais


# Convertendo  Número >>> String


           - String(n)
           - n.toString()
```JS
        nome = 'Rodrigo'
        idade = '26'
        nota = '10'

    
     'O aluno ' + nome + ' com ' + idade + ' anos tirou a nota ' + nota
    'O aluno Rodrigo com 26 anos tirou a nota 10' // Contatenação
    
     `O aluno ${nome} com ${idade} anos tirou a nota ${nota}` // Crase (``) == Templete string
    'O aluno Rodrigo com 26 anos tirou a nota 10' // Template string (recomendado)
```

## Formatando Strings

* var  s = 'JavaScript'

- s.length    // quantos caracteres a string tem

- s.toUpperCase() // tudo em "Maiúsculas"

- s.toLowerCase() // tudo em "minúsculas"
    
## Formatos Números
```JS
    var n1 =1547.5
    
    n1.toFixed(2)
    '1547.50'

    n1.toFixed(2).replace('.' , ',') // Trocar uma coisa pela outra
    '1547,50'

    n1.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'}) // Declara em dinheiro
    'R$ 1.547,50'
```