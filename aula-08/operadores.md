# Operadores

* 1 operadores Aritmeticos
* 2 opreradores Telacionais    // ordem que feito
* 3 operadores Lógicos

## Relacionais

```JS

>  // maior
<  // menor
>= // maior ou igual
<= // menor ou igual
== // igual
!= // diferente

ex:

 5 > 2
true

 7 < 4
false                       preço >= 200.50  // o preço é maior ou igual a 200.5?
                            idade <= 18  // a idade é menor do que 18?
                            curso == JavaScript // o curso é JavaScript?

 8>= 8
true

 9 <= 7
false

 5 == 5
true

 4 != 4
false
```

## Operadores de Identidade
```JS
 ===

 ex:

 5 == 5 ---> true

 5 == '5' ---> true

 5 === '5' ---> false  // identidade


 5 != '5' ---> false

 5 !== '5' ---> true
```

## Operadores Lógicos

!  --- > negação
&& ---> comjunção     
|| ---> disjunção


Ordem de execução: ! >>> && >>> || 

ex: 
```JS

 idade >= 15 && idade <= 17     // a idade está entre 15 e 17?
 
 estado == 'RJ' || estado == 'SP' // o estado é RJ ou SP?

 Salário > 1500 && sexo != 'M'  // o salário é acima de 1500 e não é homem?
```

## Operador ternário

```JS
    media = 5.5
    5.5

    media > 7? 'Aprovado' :'Reprovado'
    'Reprovado'

    media > 5? 'Aprovado' : 'Reprovado'
    'Aprovado'
___________________________________________

    res = x % 2 == 0 ? 5: 9
    5
___________________________________________
    idade = 19
    19

    r = idade >= 18 ? 'Maior' : 'Menor'
    'Maior'
