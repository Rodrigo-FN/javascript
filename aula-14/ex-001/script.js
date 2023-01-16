function contar() {
    let ini =  document.querySelector('#txti');
    let fim = document.querySelector('#txtf');
    let passo = document.querySelector('#txtp');
    let res = document.querySelector('.resultado')

   
    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length ==0) {
        alert('[ERRO] Faltam dados!');
        res.innerHTML = "Impossível contar!"
    } else {
        res.innerHTML = "Contando: <br>"
        let i = Number(ini.value);
        let f = Number(fim.value);
        let p = Number(passo.value);
        if (p <= 0) {
            alert('Passo inválido! Considerando PASSO 1');
            p = 1
        }
        if (i < f) {
            // CONTAGEM CRESCENTE
            for(let c = i; c <= f; c += p) {
                res.innerHTML += `${c}  \u{1F449}`
             }

         } else {
            // CONTAGEM REGRESSIVA
            for (c = i; c >= f; c -= p) {
                res.innerHTML += `${c}  \u{1F449}`
            }
           
         }
         res.innerHTML += `\u{1F3C1}`
        }
        
}