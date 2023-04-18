const miNumero = document.getElementById('miNumero')
const kc= document.getElementsByTagName('input')
const pantalla = document.getElementById('pantalla')
const pantalla2 = document.getElementById('pantalla2')
const mercurio = document.getElementById('mercurio')


function convertir (){

    let cambio = "-"

    if (isNaN(miNumero.value)){
        alert('Eso no es un numero')
        miNumero.value = " "
    }

    else {
        
        if (kc[1].checked==true){
            cambio = (miNumero.value*9/5)+32
            cambio = cambio.toFixed(2)
    
        }
        else if (kc[2].checked==true){
            cambio = (miNumero.value-32)*5/9
            cambio = cambio.toFixed(2)
    
        }
        else {
            alert ('Indique una opcion valida')
        }
        pantalla.textContent=`${cambio}°`
        pantalla2.textContent=`${cambio}°`
        mercurio.style.height=`${cambio}%`
        if (cambio<0){
            mercurio.style.height=0 
        }
    
        miNumero.value = " "
    }

}
