let btn = document.querySelector('#btn-submit')

//btn.addEventListener('click', validar())

function validar(){
    let campoA = document.querySelector('#campo-A').value
    let campoB = document.querySelector('#campo-B').value
    let valido = true
    
    if(campoA === null || campoB === 0 || campoA == campoB){
        alert('Revise os dados e tente novamente')
        
    }
   else{
        if(campoA > campoB){
            alert(`O resultado está correto, o valor do primeiro campo: ${campoA} é maior que o valor do segundo campo : ${campoB}!`)
        }
        else{
            alert(`O resultado esta incorreto pois o valor do primeiro campo: ${campoA} é menor do que o valor do segundo campo: ${campoB}`)
        }
    }

   
}
