function Suma(){ 
    var A;
    var B;
    var suma;
    
    A = parseInt(prompt("Por favor ingresar el primer valor"));
    B = parseInt(prompt("Por favor ingresar el segundo valor"));
    
    suma = A + B;
    
    alert("El resultado es: " + suma);
    }
    

    function OperacionesBasicas(){ 

        var A;
        var B;
        var suma;
        var resta;
        var multiplicacion;
        var division;
        
        A = parseInt(prompt("Por favor ingresar el primer valor"));
        B = parseInt(prompt("Por favor ingresar el segundo valor"));
        
        suma = A + B;
        resta = A - B;
        multiplicacion = A * B;
        division = A % B;
    
        alert("El resultado de la suma es: " + suma);
        alert("El resultado de la resta es: " + resta);
        alert("El resultado de la multiplicacion es:: " + multiplicacion);
        alert("El resultado de la division es: " + division);
    
        }
    

        function NumeroMayor(){ 

            var A;
            var B;
           
            A = parseInt(prompt("Por favor ingrese el primer valor"));
            B = parseInt(prompt("Por favor ingrese el segundo valor"));
            
       if( A == B){
           alert("Los numeros ingresados son iguales");
       }
    
       else if( A > B){
           alert("El numero mayor es: " + A);
           
       }
       else{
           alert("El numero mayor es: " + B);
       }
    
            }
    

       function NumeroMenor(){
        var A
        var B
        var C
    
        A = parseInt(prompt("Por favor ingresar el primer valor"));
        B = parseInt(prompt("Por favor ingresar el segundo valor"));
        C = parseInt(prompt("Por favor ingresar el tercer valor"));
    
        if(A < B && A < C){
            alert("El numero menor es: " + A);
        }
    
        else if(B < A && B < C){
            alert("El numero menor es: " + B);
        }
        else{
            alert("El numero menor es: " + C);
        }
    

       }  
       
       
       function NumeroParImpar(){

        var A
       
        A = parseInt(prompt("Por favor ingrese el numero "));
    
        if(A % 2 == 0){

            alert("El numero " + A + " es par " );

        }
    
        else{

            alert("El numero " + A + " es impar " );

        }
    }
    

    function CuadradoNumero(){

        var A
        var cuadrado
       
    
        A = parseInt(prompt("Por favor ingrese el valor"));
    
        cuadrado = A*A;
    
        alert("El cuadrado del numero es: "  + cuadrado);
    
    
    }


    function AreaTriangulo (){

        var A;
        var B;
        var area;
       
    
        A = parseInt(prompt("Por favor ingrese la base: "));
        B = parseInt(prompt("Por favor ingrese la altura: "));
    
        area = A*B/2;
    
        alert("El area del triangulo es: "  + area);
    
    
    }


    function Conversion(){

        var A;
        var metros;
       
        A = parseInt(prompt("Por favor ingrese el valor en metros"));
        
        metros = A * 100;
    
        alert("El resultado es: " + metros + " cm");
    
    }
    

    function Edad(){

        var A;
        var edad;
    
        A = parseInt(prompt("Por favor ingrese su edad: "));
        
        edad = 2022 - A;
    
        alert("Su año de nacimiento es: " + edad);
    
    
    }



function Capital(){

            var A;
            var B;
            var C;
            var D;
        
            A=parseInt(prompt("Por favor ingrese cuanto dinero ha invertido a su capital:"));
            B=parseInt(prompt("Por favor ingrese los años que lleva invirtiendo a su capital:" ));
        
            C= ((A*2)/100)*12;
            D= (B*C) +A;
        
            alert("El interes es de " + C + " y su ganancia es: " + D);
        
        }

function Calificaciones(){

        var A
        var B
        var C
        var D
        var E
        var promedio
       
    
        A = parseFloat(prompt("Por favor ingrese la primera nota: "));
        B = parseFloat(prompt("Por favor ingrese la segunda nota: "));
        C = parseFloat(prompt("Por favor ingrese la tercera nota: "));
        D = parseFloat(prompt("Por favor ingrese la cuarta nota: "));
        E = parseFloat(prompt("Por favor ingrese la quinta nota: "));
        
    
        promedio = (A + B + C + D + E) / 5;
    
        if(promedio >= 3 && promedio <= 5){
        alert("Aprobado, su promedio es: "  + promedio);
    
    
    }

     else if(promedio >= 1 && promedio <= 2.9){
        alert("Reprobado, su promedio es: " + promedio);
     }
    
    else{
        alert("Error");
    }

    }


function Fruteria(){
        
    var A;
    var B;
    var C;
    
       
    A= parseInt(prompt("Digite la cantidad de kilos: "));
    
        if(A<0){

    alert("Error");

        }

        else if(A<=2){

            alert("No tiene descuento, total a pagar: " + (A*4500));

        }

        else if(A >= 3 && A <= 5){
           
            B = ((A*4500)*10)/100;
            C = (A*4500) - B;

            alert("Tiene descuento del 10%, total a pagar es: " + C);
        }

        else if(A >= 6 && A <= 10){

            B = ((A*4500)*15)/100;
            C= (A*4500) - B;

            alert("Tiene descuento del 15%, total a pagar es: " + C);
        }

        else{

            B = ((A*4500)*20)/100;
            C= (A*4500) - B;

            alert("Tiene descuento del 20%, total a pagar es: " + C);
        }
    }

