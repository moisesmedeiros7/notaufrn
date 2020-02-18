let txn1 = document.querySelector("input#txnota1")
let txn2 = document.querySelector("input#txnota2")
let txn3 = document.querySelector("input#txnota3")

function calcular(){

    let n1 = Number(txn1.value)  // texto para número
    let n2 = Number(txn2.value)  // texto para número
    let n3 = Number(txn3.value)  // texto para número
    let media = ((n1+n2+n3)/3).toFixed(1)
    
   if(validarNotas(n1,n2, n3)){
   
        if (media >= 7.0) {
            res.innerHTML =`<p>Aluno(a) <strong>APROVADO(A) </strong> com média ${media}</p> </br>`
            res.innerHTML +=`<img id="imagem" src="feliz.jpg" alt="status">`
            
        }

        if (n1>=3.0 && n2 >=3.0 && n3>=3.0 && media >=5.0 && media < 7.0){  // aprovado por rendimento 
            res.innerHTML =`<p>Aluno(a) <strong>APROVADO(A) POR RENDIMENTO</strong> com média ${media}</p>`
            res.innerHTML +=`<img id="imagem" src="feliz.jpg" alt="status">`
        }

        if(media<3){
            res.innerHTML =`<p>Aluno(a) <strong>REPROVADO(A)</strong> por possuir média ${media}</p>`
            res.innerHTML +=`<img id="imagem" src="triste.jpeg" alt="status">`
        }

        else{
            reposicao(n1, n2, n3)
        }
    
   }
   
}   

function reposicao (n1, n2, n3){
    let menor = n1;
    if(n2<menor){
     menor=n2
    }               
    if(n3<menor){
        menor=n3 //guardando o menor valor
    }         
        rep = (n1+n2+n3-menor) // Guardo a soma das duas maiores notas

    let med = ((n1+n2+n3)/3).toFixed(1)    // calculando a média

    //tratando as reposições
    if (med >= 5.0 && med < 7.0 && (n1<3.0 || n2<3.0 || n3<3.0)){  //reposição com média 5 e uma nota menor que 3
        rep = 15.0 - rep
        if (rep<3.0) {// Reposição não pode ser menor que 3.0
            rep = 3.0
        }
        res.innerHTML =`<p>Aluno(a) com média ${med} na <strong> REPOSIÇÃO</strong> precisando de ${rep.toFixed(1)}</p>`
        res.innerHTML +=`<img id="imagem" src="reposicao.jpeg" alt="status">`
    }

    
    if(med<5.0 && med >= 3.0){  //reposição com média menor de 5.0
                
        if(n1<3.0 && n2<3.0 || n1<3.0 && n3<3.0 || n2<3.0 && n3<3.0 ){ // Se o aluno precisar de reposição com duas notas abaixo de 3
            rep = 21.0 - rep
            if (rep<3.0) {// Reposição não pode ser menor que 3.0
            rep = 3.0
            }
            if(rep>10){
                res.innerHTML =`<p>Aluno(a) com média ${med} <strong>REPROVADO</strong> pois precisaria de ${rep.toFixed(1)} na reposição</p>`
                res.innerHTML +=`<img id="imagem" src="triste.jpeg" alt="status">`
            }else{
            res.innerHTML =`<p>Aluno(a) com média ${med} na <strong> REPOSIÇÃO</strong> precisando de ${rep.toFixed(1)}</p>`
            res.innerHTML +=`<img id="imagem" src="reposicao.jpeg" alt="status">`
           }
        }
        else{  // Se o aluno precisar de reposição sem duas notas abaixo de 3
            rep = 15.0 - rep
            if (rep<3.0) {// Reposição não pode ser menor que 3.0
            rep = 3.0
            }
            res.innerHTML =`<p>Aluno(a) com média ${med} na <strong> REPOSIÇÃO</strong> precisando de ${rep.toFixed(1)}</p>`
            res.innerHTML +=`<img id="imagem" src="reposicao.jpeg" alt="status">`
        }
    }
    
}

function validarNotas(n1, n2, n3){
     // verifica se existe campo vazio
     if(txn1.value.length == 0 || txn2.value.length == 0 || txn3.value.length == 0){ 
        window.alert(`[ERRO - Campo vazio] Preencha todos os valores!`)
        return false
        } // verifica se as notas estão entre 0 e 10 
    else if(n1>10 || n1<0 || n2>10 || n2<0  || n3>10 || n3<0){ 
        window.alert(`[ERRO] Preencha as notas com valores entre 0.0 e 10.0`)
        return false
    }
    return true
}

function limpar(){
    txn1.value = ""
    txn2.value = ""
    txn3.value = ""
    res.innerHTML = "<p></p>"
    txn1.focus()
    res.innerHTML =`</br><img id="imagem" src="duvida.jpg" alt="status">`
}
