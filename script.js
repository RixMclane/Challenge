/*/                                      PARTE I

  /************************        E N C R I P T A C I O N         ***************************/            

 
/*/

1.Definiremos Variable o espacio de memoria de información

2.Se declara la variable Constante "const" para "textArea"

¿Que guardaremos dentro de la variable "const"?
Se captura lo que el usuario escribe en la aplicacion de encriptador
¿Como se captura?

3.con un DOM :  "document.querySelector()"
¿Que es un DOM y qué es el QuerySelector? 

El Modelo de Objetos de Documento  (DOM) DEL W3C (World Wide Web Consortium)
es una plataforma y una interfaz de lenguaje neutral que permite que 
los programas y scripts accedan y actualicen dinamicamente el contenido, 
la estructura y el estilo de un documento. El estandar W3C DO se divide en 3 partes diferentes:

- CORE DOM
- XML DOM
- HTML DOM

Por lo tanto: Con el DOM capturamos lo que el usuario va ingresando en el "text-area"
Utilizando el metodo QuerySelector que devuelve el primer elemento dentro del documento que coincide con el selector o grupo de selectores especificado.

4.Requerimos crear otra constante para el campo de Mensaje, que es donde va a aperecer el texto encriptado.

5.Almacenaremos las llaves o codigos de encriptacion dentro de una matriz con arreglos multidimencioanles, arreglos de arreglos o Conjunto de arreglos.

La letra "e" es convertida para "enter"
La letra "i" es convertida para "imes"
La letra "a" es convertida para "ai"
La letra "o" es convertida para "ober"
La letra "u" es convertida para "ufat

6.La variable "matrizCodigo" necesita estar dentro de una funcion, que sera la Funcion de Encriptar.La funcion "encriptar" requiere de un parametro en los parentesis(). A traves de él recibira las letras que están siendo ingresadas y se realizara todo el proceso de encriptacion

7-Se crea el parametro "stringEncriptada". 

8-Sera llamado luego de la variable "matrizCodrigo". 
Y se llamará a si mismo. Como una de las reglas es que las letras sean en minusculas se utilizara un metodo llamado toLowerCase().

9.Para realizar el recorrido de la matriz utilizaremos el bucle "for" 
con 3 paranetros

10. Necesitamos crear una condicion dentro del "for" para realizar la verificación del array y de las letras que se ingresan. Para ello usaremos un "if".

¿Que condicion pasaremos tendro del parentesis del "if"? 

Necesitamos pasar el parametro "stringEncriptada" y realizar la verificacion de las letras que estan siendo ingresadas con el metodo "includes()" . Debemos pasarle un parametro dentro de los parentesis.
Será la llave que necesita ser verificada. Cual sera la llave?
Sera "matrizCodigo[]"", en los corchetes le pasaremos el indice y la posicion.


11. Ahora Necesitamos comenzar a hacer la sutitucion. Despues de verificar que las letras ingresadas estan dentro del arreglo, haremos la sutitucion
de las letras.
¿Como lo hacenos?
Con el metodo "replace". Cambia una cadena de caracteres poor otros


12.Finalmente debemos retornar la cadena con un "return stringEncriptada"
Con esto se hace todo el proceso de encriptacion y esta devolviendo lo que sería el resultado.

13. Ya tenemos nuestra funcion de encriptacion. ¿Pero como hacemos para llamar esta funcion? En la visual del programa nos fijamos que el usuario ingresará su texto en "Ingrese el texto aqui" y cuando clickee en el boton "Encriptar" debe aparecer el texto encriptado en el campo del encriptado. (donde esta el muñeno).¿Como realizamos eso? Con los "eventos". 
Si el usuario hace click en "Encriptar" nosotros realizaremos la accion con una nueva funcion relacinada al boton: "function btnEncriptar()"

14.¿Que le pasaremos a esta funcion? Dentro de la funcion se creara una constante que se llamara "textoEncriptado". 
Este textoEncriptado recibirá la funcion ya creada anteriormente "encriptar()". Y necesitamos pasarle un parametro a esta funcion que sera el valor de nuestra "textArea": 

15. Ahora que tenemos el valor de la constante "textArea" necesitamos mostrarlo en el campo de mensaje. Para ello tomamos la constatnte creada anteriormente llamada "mensaje" y le agregamos  el ".value" , que sera igual al textoEncriptado. 
Con esto se deberia realizar el llamado de la funcion "encriptar"


16.Ahora necesitamos crear este evento en el index.html.
<button class="btn-encriptar" onclick="btnEncriptar()" >Encriptar</button> 
(Ver Linea 24 del codigo index)

!! Probar boton "Encriptar"

17.Ahora que funciona el boton "Encriptar" necesitamos limpiar el campo de texto cuando el usuario ingresa. Y necestiamos que la imagen del muñeco desaparzca cuando el texto se encripte.

Para limpiar el campo ingresamos la constante creada "textArea" con un valor , y que sea igual a comillas


18. Y para quitar la imagen podemos utilizar la propiedad "style.backgroundImage"
./*/



/*/                                      PARTE II

  /************************       D E S E N C R P T A C I O N         ***************************/            

 
/*/

19.Crearemos la funcion del boton Desencriptar. Copiaremos la funcion encriptar y sustituiremos por Desencriptar. Y eliminamos el codigo de mensaje.style.backgroundImage



20. Para realizar la desencriptacion sustituiremos los parametros, y llaves para verificar en los mismos codigos creados. Copiamos la funcion "encriptar" y cambiamos "encriptar" por "desencriptar" y cambiamos "stringEncriptada" por "stringDesencriptada".
Tambien necesitamos cambiar el parametro dentro del "includes" ya que la verificacion no seria en el indice "i"/ posicion "cero". Sino que sería  indice "i"/posicion "uno".
Se realiza el proceso inverso. Lo mismo en el "replaceAll". Se intercambia  la llave indice "i"/posicion "uno" por la llave "i"/ posicion "cero"










/************************       E L   C  O D I G O        ***************************/


let resultado = document.getElementById(".mensaje");
/*/2.Se declara la variable Constante "const" para "textArea"/*/
const textArea = document.querySelector(".text-area"); 
/*/4.Requerimos crear otra constante para el campo de Mensaje, que es donde va a aperecer el texto encriptado /*/
const mensaje = document.querySelector(".mensaje"); 


/*/13. Ya tenemos nuestra funcion de encriptacion. ¿Pero como hacemos para llamar esta funcion? En la visual del programa nos fijamos que el usuario ingresará su texto en "Ingrese el texto aqui" y cuando clickee en el boton "Encriptar" debe aparecer el texto encriptado en el campo del encriptado. (donde esta el muñeno).¿Como realizamos eso? Con los "eventos". 
Si el usuario hace click en "Encriptar" nosotros realizaremos la accion con una nueva funcion relacinada al boton : "function btnEncriptar()" /*/

function btnEncriptar(){
    /*/14.¿Que le pasaremos a esta funcion? Dentro de la funcion se creara una constante que se llamara "textoEncriptado". 
    Este textoEncriptado recibirá la funcion ya creada anteriormente "encriptar()". Y necesitamos pasarle un parametro a esta funcion que sera el valor de nuestra constante creada anteriormente llamada "textArea" /*/ 
    const textoEncriptado = encriptar(textArea.value);

    /*/15. Ahora que tenemos el valor de la constante "textArea" necesitamos mostrarlo en el campo de mensaje. Para ello tomamos la constante creada anteriormente llamada "mensaje" y le agregamos  el ".value" , que sera igual al textoEncriptado. 
    Con esto se deberia realizar el llamado de la funcion "encriptar" /*/

    mensaje.value = textoEncriptado;

    /*/16.Ahora necesitamos crear este evento en el index.html.
    <button class="btn-encriptar" onclick="btnEncriptar()" >Encriptar</button> 
    (Ver Linea 24 del codigo index)/*/

    /*/17.Ahora que funciona el boton "Encriptar" necesitamos limpiar el campo de texto cuando el usuario ingresa. Y necestiamos que la imagen del muñeco desaparzca cuando el texto se encripte.

    Para limpiar el campo ingresamos la constante creada "textArea" con un valor , y que sea igual a comillas /*/

    textArea.value = "";

    /*/18. Y para quitar la imagen podemos llamara a la constante creada de "imagen" y asociarla a la propiedad "style.backgroundImage" /*/

    mensaje.style.backgroundImage = "none";





}


/*/6.La variable "matrizCodigo" necesita estar dentro de una funcion, que sera la Funcion de Encriptar. La funcion "encriptar" requiere de un parametro en los parentesis(). A traves de él recibira las letras que están siendo ingresadas y se realizara todo el proceso de encriptacion/*/
/*/7-Se crea el parametro "stringEncriptada"./*/
function encriptar(stringEncriptada){ 

    /*/5.Almacenaremos las llaves o codigos de encriptacion dentro de una matriz con arreglos multidimencioanles /*/

    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]]; 
    /*/8-Sera llamado luego de la variable "matrizCodrigo". 
    Y se llamará a si mismo. Como una de las reglas es que las letras sean en minusculas se utilizara un metodo llamado toLowerCase() /*/
    stringEncriptada = stringEncriptada.toLowerCase();

    /*/   9.Para realizar el recorrido de la matriz utilizaremos el bucle "for" con 3 paranetros /*/

    for(let i = 0; i < matrizCodigo.length; i++){

        /*/10. Necesitamos crear una condicion dentro del "for" para realizar la verificación del array y de las letras que se ingresan. Para ello usaremos un "if".

        ¿Que condicion pasaremos tendro del parentesis del "if"? 
        
        Necesitamos pasar el parametro "stringEncriptada" y realizar la verificacion de las letras que estan siendo ingresadas con el metodo "includes()" . Debemos pasarle un parametro dentro de los parentesis.
        Será la llave que necesita ser verificada. Cual sera la llave?
        Sera "matrizCodigo[]"", en los corchetes le pasaremos el indice "i" y la posicion cero. /*/

        if(stringEncriptada.includes(matrizCodigo[i][0])){

            /*/11. Ahora Necesitamos comenzar a hacer la sutitucion. Despues de verificar que las letras ingresadas estan dentro del arreglo, haremos la sutitucion
            de las letras.
            ¿Como lo hacenos?
            Con el metodo "replaceAll()". Cambia toda una cadena de caracteres por otros. 
            
            A este replaceAll() debemos ingresarle parametros en sus ()
            Sera la llave que se va a sustituir por el valor que sera sustitudo
            
            Entonces: 

            "matrizCodigo[i][0]"" (indice "i" y la posicion cero.) 
            "matrizCodigo[i][0]" es El texto que esta ingresado
            
            sera sustituido por 
            
            "matrizCodigo[i][1]"  (indice "i" y la posicion uno.) 
            "matrizCodigo[i][1]" sera el codigo o llave que será sustituida

            ¡¡   En este ambito estamos trabajando el reemplazo de las vocales con las llaves de encriptacion  !!    

            /*/

            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }

    }

    /*/12.Finalmente debemos retornar la cadena con un "return stringEncriptada"
    Con esto se hace todo el proceso de encriptacion y esta devolviendo lo que sería el resultado...... paso 13 continúa despues del paso 4 /*/ 

    return stringEncriptada;

}

/*/19.Crearemos la funcion del boton Desencriptar. Copiaremos la funcion encriptar y sustituiremos por Desencriptar. Y eliminamos el codigo de mensaje.style.backgroundImage, y pasaremos ese boton al HTML 
<button class="btn-desencriptar" onclick="btnDesencriptar()" >Desencriptar</button>  (Ver Linea 25 del codigo index)/*/

function btnDesencriptar(){
    const textoEncriptado = desencriptar(textArea.value);
    mensaje.value = textoEncriptado;
    textArea.value = "";

}


/*/ 20. Para realizar la desencriptacion sustituiremos los parametros, y llaves para verificar en los mismos codigos creados. Copiamos la funcion "encriptar" y cambiamos "encriptar" por "desencriptar" y cambiamos "stringEncriptada" por "stringDesencriptada".
Tambien necesitamos cambiar el parametro dentro del "includes" ya que la verificacion no seria en el indice "i"/ posicion "cero". Sino que sería  indice "i"/posicion "uno".
Se realiza el proceso inverso. Lo mismo en el "replaceAll". Se intercambia  la llave indice "i"/posicion "uno" por la llave "i"/ posicion "cero" /*/


function desencriptar(stringDesencriptada){ 
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]]; 
    stringDesencriptada = stringDesencriptada.toLowerCase();
    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringDesencriptada.includes(matrizCodigo[i][1])){
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
        }
    }
    return stringDesencriptada;

}

/*/ 21. Creamos la funcion para Copiar/*/

function copiar() {
    mensaje.select();
    navigator.clipboard.writeText(mensaje.value);
}