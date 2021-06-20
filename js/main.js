//ARRAY CARNES//

let asadoAchuras = [
    {
        corte: "Chorizo",
        porcion: 0.15,
        unidad: "g",
        valor: 75,
        id:"chori"
    },
    {
        corte: "Chorizo bombon",
        porcion: 0.15,
        unidad: "g",
        valor: 75,
        id:"choriBombon"
    },
    {
        corte: "Chinchulin",
        porcion: 0.2,
        unidad: "g",
        valor: 60,
        id:"chinchu"
    },
    {
        corte: "Morcilla",
        porcion: 0.125,
        unidad: "g",
        valor: 56,
        id:"morci"
    },
    {
        corte: "Riñon",
        porcion: 0.2,
        unidad: "g",
        valor: 58,
        id:"riñon"
    },
    {
        corte: "Molleja",
        porcion: 0.2,
        unidad: "g",
        valor: 258,
        id:"molleja"
    }
]

let asadoCortes = [
    {
        corte: "Vacio",
        porcion: 0.4,
        unidad: "g",
        valor: 380,
        id:"vacio"
    },
    {
        corte: "Tira de asado",
        porcion: 0.5,
        unidad: "g",
        valor: 448,
        id:"tiraAsado"
    },
    {
        corte: "Tapa de asado",
        porcion: 0.5,
        unidad: "g",
        valor: 448,
        id:"tapaAsado"
    },
    {
        corte: "Bondiola",
        porcion: 0.4,
        unidad: "g",
        valor: 278,
        id:"bondiola"
    },
    {
        corte: "Bife de chorizo",
        porcion: 0.4,
        unidad: "g",
        valor: 556,
        id:"bideDeChorizo"
    },
    {
        corte: "Matambre",
        porcion: 0.4,
        unidad: "g",
        valor: 448,
        id:"matambre"
    },
    {
        corte: "Entraña",
        porcion: 0.4,
        unidad: "g",
        valor: 596,
        id:"entraña"
    }
];

let extraCortes = [
    {
        corte: "Provoleta",
        porcion: 0.250,
        unidad: "g",
        valor: 120,
        proporcion:0.125,
        id:"provoleta"   
    },
    {
        corte: "Chimi churri",
        porcion: 1,
        unidad: "u.",
        valor: 375,
        proporcion: 0.25,
        id:"chimiChurri"   
    },
    {
        corte: "Salsa criolla",
        porcion: 1,
        unidad: "u.",
        valor: 160,
        proporcion:0.25,
        id:"criolla"   
    }    
];
let combustibleAsado= [
    {
        material:"Carbón",
        porcion: 4,
        unidad:"bolsas",
        valor: 260,
        proporcion: 2,
        id:"carbon"
        
    },
    {
        material:"Leña",
        porcion: 1,
        unidad:"atados",
        valor: 230,
        proporcion:1.5,
        id:"leña"
    },
    {
        id:"otro"
    }
]


//FUNCIONES
function vanAComerAsado(pregunta,clasePregunta,array,variable){

    pregunta = document.getElementsByClassName(clasePregunta);
    for(i=0; i<pregunta.length;i++){
        if(pregunta[i].checked){
            variable.push(array[i]);
        };
    };
    return variable;
}


function valorUnidad(array,comensales){
    let calculo=document.getElementsByClassName("calculo");
    lista=document.createElement("ul");
    lista.className="calculo__lista";
    calculo[0].innerHTML= `<h2 class="calculo__subtitulo">LISTA DEL ASADO</h2>`;
    hijo=document.createElement("p");
    hijo.className='calculo__texto';
    hijo.innerHTML=`Seran ${comensales} comensales`;
    calculo[0].appendChild(hijo);
    calculo[0].appendChild(lista);


    for (const item of array) {
        let li =document.createElement("li");
        li.className="calculo__item";
        li.innerHTML=`${item.corte}: ${(item.porcion*comensales).toFixed(3)}${item.unidad} kg x $${(item.valor*comensales).toFixed(2)}`;
        lista.appendChild(li);

        console.log(`${item.corte}: ${(item.porcion*comensales).toFixed(3)}${item.unidad} kg x $${(item.valor*comensales).toFixed(2)}`);
    };

}

function CalcCumbustible (combustible, kilos,precioCombustible){
    for(const item of combustible){
        if(item.id!="otro"){

            let cantidad= parseInt((kilos*item.proporcion)/item.porcion);
            if((kilos*item.proporcion)%item.porcion){
                cantidad=cantidad+1;
            }
            precioCombustible= cantidad*item.valor;
            let calculo=document.getElementsByClassName("calculo");
            let p = document.createElement('p');
            p.className='calculo__texto';
            p.innerHTML=`van a usar ${item.material} para el fuego, tienen que comprar ${cantidad} ${item.unidad} son $${precioCombustible}`;
            calculo[0].appendChild(p);
            
            console.log(`van a usar ${item.material} para el fuego, tienen que comprar ${cantidad} ${item.unidad} son $${precioCombustible}`);
        }else{
            precioCombustible=0;
        }
    };
    return precioCombustible;
}

function CalcExtra (extra, comensales,precioExtra){
    precioExtra=0;
    for(const item of extra){
        let cantidad = parseInt((comensales*item.proporcion)/item.porcion);
        if((comensales*item.proporcion)%item.porcion){
            cantidad=cantidad+1;
        }
        let precioItem = cantidad*item.valor;
        let calculo=document.getElementsByClassName("calculo");
        let p = document.createElement('p');
        p.className='calculo__texto';
        if (item.unidad=="g"){
            p.innerHTML=`Tienen que comprar ${(cantidad*item.porcion).toFixed(3)} ${item.unidad} de ${item.corte} a un valor de $${precioItem.toFixed(2)}`;
        }else{
            p.innerHTML=`Tienen que comprar ${cantidad*item.porcion} ${item.unidad} de ${item.corte} a un valor de $${precioItem.toFixed(2)}`;
        }
        calculo[0].appendChild(p);
        
        precioExtra=precioExtra+precioItem;
        // console.log(`van a usar ${item.material} para el fuego, tienen que comprar ${cantidad} ${item.unidad} son $${precioCombustible}`);
        
    };
    return precioExtra;
}

//funcion del boton

function chequeo (){
    let limpiar=document.getElementsByClassName("calculo");
    limpiar[0].innerHTML="";
    
    let comensales = parseInt(document.getElementById("pregunta1").value);
    let calculo=document.getElementsByClassName("calculo");
    calculo[0].style.display="block";
    if (comensales >= 1){
        calculo[0].className="calculo";
        console.log(`seran ${comensales} comensales`);

        //variables del pedido
        let asado = [],carnes =[], extra=[], combustible = [], pesoFinal=0, precioFinal=0, precioCombustible,precioExtra;
  
        //completar los array con lo que se va a consumir en el asado
        asado=vanAComerAsado(carnes,"achuras__checkbox",asadoAchuras,asado);
        asado=vanAComerAsado(carnes,"asado__checkbox",asadoCortes,asado);
        extra=vanAComerAsado(carnes,"extra__checkbox",extraCortes,extra);
        combustible=vanAComerAsado(carnes,"combustible__radio",combustibleAsado,combustible);

        //calcular valor por unidad//
        valorUnidad(asado,comensales);
        precioExtra=CalcExtra(extra,comensales,precioExtra);

        ///calcular kilos//

        for (const kilos of asado) {
            pesoFinal= pesoFinal+(kilos.porcion*comensales); 
            precioFinal=precioFinal+(kilos.valor*comensales);           
        }
        //se toma el valor del combustible para sumarlo al precio final
        precioCombustible=CalcCumbustible(combustible,pesoFinal,precioCombustible);
        precioFinal=precioFinal+precioCombustible+precioExtra;

        let textoUno=document.createElement("p"), textoDos=document.createElement("p");
        textoUno.className="calculo__texto";
        textoDos.className="calculo__texto";
        textoUno.innerHTML=`en total se van a comer ${pesoFinal.toFixed(3)} kg un total de $${precioFinal.toFixed(2)}`;
        textoDos.innerHTML=`por cabeza van a ser $${(precioFinal/comensales).toFixed(2)}`;
        calculo[0].appendChild(textoUno);
        calculo[0].appendChild(textoDos);

        console.log(`en total se van a comer ${pesoFinal.toFixed(3)} kg un total de $${precioFinal.toFixed(2)}`);
        console.log(`por cabeza van a ser $${(precioFinal/comensales).toFixed(2)}`)

    }else{
        console.log("Tiene que ingresar la cantidad de comensales");
        calculo[0].className='calculo calculo--error';
        calculo[0].innerHTML= `<h2 class="calculo__subtitulo">ERROR</h2>`;
        hijo=document.createElement("p");
        hijo.className="calculo__texto";
        hijo.innerHTML="Tiene que ingresar la cantidad de comensales";
        calculo[0].appendChild(hijo);

    }



}
