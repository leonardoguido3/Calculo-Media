function media(){
 var valor1 = parseFloat(document.getElementById("valor1").value);
 var valor2 = parseFloat(document.getElementById("valor2").value);
 var valor3 = parseFloat(document.getElementById("valor3").value);
 var valor4 = parseFloat(document.getElementById("valor4").value);
 var valor5 = parseFloat(document.getElementById("valor5").value);
 var valor6 = parseFloat(document.getElementById("valor6").value);

 var media = (valor1 + valor2 + valor3 + valor4 + valor5 + valor6) /6 ;

 if(media >= 7)
  if(media==10)
   alert("Número acima do padrão, favor verificar: " +media ,"Mbps.");
  else
   alert("A média semestral do consumo do link é: "+media ,"Mbps.");
 else
  alert("Número abaixo do padrão, favor verificar: " +media ,"Mbps.")

}
