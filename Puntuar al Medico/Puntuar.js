var contador;
function calificar(item){
    contador = item.id[0]; //Capturando el primer caracter
    let nombre = item.id.substring(1);  //capturamos la cadena despues del primer caracter
    for( let i=0;i<5;i++)
    {
        if(i<contador)
        {
            document.getElementById((i+1)+ nombre).style.color = "orange";

        }else{
            document.getElementById((i+1)+nombre).style.color = "black";
        }
    }

}