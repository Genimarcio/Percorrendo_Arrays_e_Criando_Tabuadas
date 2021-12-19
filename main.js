var palavrasArray = []

function palavraArray(elemento){
    
    elemento = document.getElementById('palavra_array').value

    elemento = elemento.toUpperCase()

    document.getElementById('palavra_array').value = ''

    palavrasArray.push(elemento)

    console.log(palavrasArray)
}

document.addEventListener('keydown', function(e) {
    if(e.key == "Enter"){
      document.getElementById("btFechar").click();
    }
});

function palavraArmazenadas(){
    
    alert(palavrasArray)

}

function ordenarArray(){
    
   palavrasArray.sort()
   alert(palavrasArray)

}

function percorrerArray(){

    alert('Os elementos serão exibido no console do navegado (Botão direito | Inspecionar')

    palavrasArray.forEach(function(indice){
       console.log(indice)
       
    })

}

// for(var y = 1 ; y<=10 ; y++){

//     for(var x = 1 ; x<=10 ; x++){
//         document.write(y + ' x ' + x + ' = ' + (y*x) + '<br>')
//     }

//     document.write('<hr>')

// }

// ou 

// x = 1
// y = 1

// while(y<=10){

    
//     for(var x = 1 ; x<=10 ; x++){
//         document.write(y + ' x ' + x + ' = ' + (y*x) + '<br>')
//     }

//     y++

//     document.write('<hr>')
    
// }

// ou 

// var x = 1;

// var y = 1;

// while (x <= 10) {

// y = 1;

// while (y <= 10) {

// console.log(x + ' x ' + y + ' = ' + x * y);

// document.write(x + ' x ' + y + ' = ' + x * y + '<br>');

// y++;

// }
// console.log("\n");

// document.write("<hr/>");

// x++;

// }

function escolherTabuada(valor){
  
    alert('Visualize a Tabuada Selecionada no console do navegado (Botão direito | Inspecionar')

  
    if (valor == 1){
        for(var x = 1 ; x<=10 ; x++){
            console.log(x + ' x ' + x + ' = ' + x)
        }

        console.log('\n')

    }else if(valor == 2){

        y = 2

        for(var x = 1 ; x<=10 ; x++){
            console.log(y + ' x ' + x + ' = ' + (y*x))
        }

        console.log('\n')

    }else if(valor == 3){

        y = 3

        for(var x = 1 ; x<=10 ; x++){
            console.log(y + ' x ' + x + ' = ' + (y*x))
        }

        console.log('\n')

    }else if(valor == 4){

        y = 4

        for(var x = 1 ; x<=10 ; x++){
            console.log(y + ' x ' + x + ' = ' + (y*x))
        }

        console.log('\n')

    }else if(valor == 5){

        y = 5

        for(var x = 1 ; x<=10 ; x++){
            console.log(y + ' x ' + x + ' = ' + (y*x))
        }

        console.log('\n')

    }else if(valor == 6){

        y = 6

        for(var x = 1 ; x<=10 ; x++){
            console.log(y + ' x ' + x + ' = ' + (y*x))
        }

        console.log('\n')

    }else if(valor == 7){

        y = 7

        for(var x = 1 ; x<=10 ; x++){
            console.log(y + ' x ' + x + ' = ' + (y*x))
        }

        console.log('\n')

    }else if(valor == 8){

        y = 8

        for(var x = 1 ; x<=10 ; x++){
            console.log(y + ' x ' + x + ' = ' + (y*x))
        }

        console.log('\n')

    }else if(valor == 9){

        y = 9

        for(var x = 1 ; x<=10 ; x++){
            console.log(y + ' x ' + x + ' = ' + (y*x))
        }

        console.log('\n')

    }else if(valor == 10){

        y = 10

        for(var x = 1 ; x<=10 ; x++){
            console.log(y + ' x ' + x + ' = ' + (y*x))
        }

        console.log('\n')

    }



    
}







