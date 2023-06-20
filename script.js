const JSON={
    "Aqua":"200",
    "Emoción":"180",
    "Alegría":"160",
    "Frescura":"150"
};

document.getElementById("myForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Evita que el formulario se envíe y la página se recargue
  
    // Obtén los valores de los campos del formulario
    let juana = document.getElementById("perfumesJuana").value;
    let pedro = document.getElementById("perfumesPedro").value;
    let cantJuana=document.getElementById("cantJuana").value;
    let cantPedro=document.getElementById("cantPedro").value;


  
    // Haz lo que necesites con los valores obtenidos
    console.log("Perfume vendido por Juana:", juana," Cantidad vendida: ",cantJuana);
    
    console.log("Perfume vendido por Pedro:", pedro, " Cantidad vendida: ",cantPedro);
  
    // Puedes enviar los datos a un servidor, realizar validaciones, etc.
    const totalVentJ=0;
    const totalVentP=0;
    if (juana==="Aqua") {
        totalVentJ=cantJuana*200
    }else if (juana==="Emoción") {
        totalVentJ=cantJuana*180;
    }
  
    // Opcionalmente, puedes resetear el formulario después de obtener los datos
    document.getElementById("myForm").reset();
  });
  