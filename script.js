var num = prompt("Ingresa un numero");
var num2 = prompt("Ingresa otro numero");

function tripler(num){
    return num*3;
}

function multiply(num,num2){
    return num*num2;
}

function divide(num,num2){
    return num/num2;
}

function reminder(num,num2){
    return num%num2;
}

function esPar(num){
    if(num%2==0){
        return true;
    }else{
        return false;
    }
}

function multiplesFunciones(num){
    var aux = multiply(num,5);
    aux = multiply(aux,12);
    aux = divide(aux,12);
    aux = reminder(aux,3);
    return aux;   
}

var fraseUno = "Esta es la frase uno";
var fraseDos = "Esta es la frase dos";
var fraseTres = "Esta es la frase tres";



function crearFrase(){
    var num = Math.random() * (10 - 0) + 0;

    if(num>=7){
        return fraseTres;
    }{
        if(num<=3){
            return fraseUno;
        }
        else{
            return fraseDos;
        }
    }
}


function bucle(){
    var contador = 0;
    while(contador<10){
        alert("Contador: "+contador+ " "+ crearFrase());
        contador++;
    }
}

function contarDeA_n(contar_desde,contar_hasta){
    var contar_desde = prompt("Desde aca: ");
    var contar_hasta = prompt("Hasta aca: ");
    var contadorInicial = Number(contar_desde);
while(contadorInicial<=contar_hasta){
    alert(contadorInicial);
    contadorInicial++;
}
}


var resultado = 0;
function factorial(num){
    if(num==0){
        return 1;
    }
    else{
        resultado = num*factorial(num-1);
    }
    return resultado;
   
}
resultado=0;

function fibonacci(num){
    if(num<0){
        alert("Solo se aceptan numeros positivos!");
    }
    else{
        if(num==0){
            return 0;
        }
        else{
            if(num==1){
                return 1;
            }
            else{
             resultado=fibonacci(num-1)+fibonacci(num-2);
            }
    
        }
        return resultado;
    }
    
    return 0;
}

alert(fibonacci(num-1));