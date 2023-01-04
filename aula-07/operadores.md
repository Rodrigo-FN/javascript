# Operadores

## Aritméticos

5 + 2 == 7

5 - 2 == 3

5 * 2 == 10

5 / 2 == 2.5

5 % 2 == 1    // Resto da divisão

5 ** 2 == 25  // Potência

## Precedência

- ()    // de cima para baixo
- **
- / * %
- mais é menos
```JS
    a = 5 + 3
    8

    b = a % 5
    3
                            <<<<< ordem de precedência
    c = 5 * b ** 2
    45

    d = 10 - a/2
    6

    e = 6 * 2 / d
    2

    f = b % e + 4 / e
    3

    var n = 3
    n += 4  //  adição                        
    n == 7

    n -=  5 // subritação
    n == 2 


    > var num = 8

     num += 2
    10

     num **= 2
    100
                        // Auto atribuições
     num /= 2
    50

     num -= 30
    20

    num++  // pós encremento
    ++num  // encremento
```