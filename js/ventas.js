var valorTicket=200;

const descuentoEstudiante=0.8;
const descuentoTrainee=0.5;
const descuentoJunior=0.15;



let nombre          = document.getElementById("nombre");
let apellido        = document.getElementById("apellido");
let correo            = document.getElementById("correo");
let cantidadTickets = document.getElementById("cantidad");
let categoria       = document.getElementById("categoria");

let btnBorrar = document.getElementById("btnBorrar");
let btnResumen = document.getElementById("btnResumen");


function total_a_pagar()
{
    quitarClaseError();

    if(nombre.value==="")
    {
        alert("Error, no ingreso la nombre");
        nombre.classList.add("is-invalid");
        nombre.focus();
        return;
    }

    if(apellido.value==="")
    {
        alert("Error, no ingreso la apellido");
        apellido.classList.add("is-invalid");
        apellido.focus();
        return;
    }

    if(correo.value==="")
    {
        alert("Error, no ingreso la e-mail");
        correo.classList.add("is-invalid");
        correo.focus();
        return;
    }

    const emailValido = correo => 
    {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(correo); 
    }

    if(!emailValido(correo.value))
    {
        alert("Error, no ingreso la e-mail");
        correo.classList.add("is-invalid");
        correo.focus();
        return;
    }

    if((cantidadTickets.value<=0)) //|| isNaN(cantidadTickets.value))
    {
        alert("Error, no ingreso la cantidad");
        cantidadTickets.classList.add("is-invalid");
        cantidadTickets.focus();
        return;
    }

/*     if(cantidadTickets.value==="")
    {
        alert("Error, no ingreso la cantidad");
        categoria.classList.add("is-invalid");
        categoria.focus();
        return;
    } */


    let totalValorTickets=(cantidadTickets.value)*valorTicket;



    if(categoria.value==0)
    {
        totalValorTickets=totalValorTickets;
        
    }
   if(categoria.value==1)
    {
        totalValorTickets=totalValorTickets-(descuentoEstudiante*totalValorTickets);
        
    }
    if(categoria.value==2)
    {
        totalValorTickets=totalValorTickets-(descuentoTrainee*totalValorTickets);
        
    }
    if(categoria.value==3)
    {
        totalValorTickets=totalValorTickets-(descuentoJunior*totalValorTickets);
        
    }

    totalPago.innerHTML=totalValorTickets;
    
    
}



function quitarClaseError()
{
    let x=document.querySelectorAll(".form-control,.form-select")
    let i;

    for(i=0;i<x.length;i++)
    {
        x[i].classList.remove("is-invalid");
    }
}


function reset_total_a_pagar()
{
    quitarClaseError();
    totalPago.innerHTML="";
}




//boton borrar
btnBorrar.addEventListener("click",reset_total_a_pagar);
//boton resumen
btnResumen.addEventListener("click",total_a_pagar);










