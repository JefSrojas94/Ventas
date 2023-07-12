const form=document.getElementById("myForm");
console.log(form);
const infoForm=[];


form.addEventListener("submit", e =>{
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.target))
    infoForm.push(data);
    form.reset();
    console.log(infoForm);
    let ventasj=0;
    let ventasp=0;
   for (let index = 0; index <= infoForm.length; index++) {
    const nombre = infoForm[index].vendedor;
    const perf = infoForm[index].Perfumes;
    const cant = infoForm[index].cantidad;
    console.log(nombre)
    console.log(perf)
    numcant = Number(cant)
    console.log(numcant)
     //identificar vendedor
    if (nombre == "Juana") {
        if (perf == "Aqua"){
            ventasj=200*numcant;
            
        }else if (perf == "Emoción"){
            ventasj=180*numcant;
        }else if (perf == "Alegría"){
            ventasj=160*numcant;
        }else if (perf == "Frescura"){
            ventasj=150*numcant;
        }
    }else if(nombre == "Pedro") {
        if (perf == "Aqua"){
            ventasp=200*numcant;
            
        }else if (perf == "Emoción"){
            ventasp=180*numcant;
        }else if (perf == "Alegría"){
            ventasp=160*numcant;
        }else if (perf == "Frescura"){
            ventasp=150*numcant;
        }
    
   }
    
    }
    alert("el total vendido por juana es: "+ventasj);
    alert("el total vendido por Pedro es: "+ventasp);
})

