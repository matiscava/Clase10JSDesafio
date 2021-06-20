

//FUNCIONES

function numeroComensales(numero){
    numero=parseInt(prompt("Ingrese la cantidad de comensales:"));
    while(isNaN(numero)){
        if (isNaN(numero)){
            numero=parseInt(prompt ("Ingresa nuevamente el número de comensales"));
        } else {
            break;
        };
    };
    return numero;
};

function cortes(numero,corte,nombre){
    numero=parseInt(prompt ("Ingresa cuantas porciones de "+corte+" va a comer "+nombre));
    while(isNaN(numero)){
            numero=parseInt(prompt ("Ingresa las porciones en numeros:"));
    };
    return numero;
};
//CLASE-OBJETO//
class Comensal{
    constructor(nombre,vacio,bondiola,chorizo,morcilla){
        this.nombre=nombre.toLowerCase();
        this.vacio=vacio;
        this.bondiola=bondiola;
        this.chorizo=chorizo;
        this.morcilla=morcilla;
    }
    vegetariano(){
        if(this.vacio==0 && this.bondiola == 0 && this.chorizo==0 && this.morcilla==0 ){
            console.log(this.nombre+", ¿Es vegetarian@?");
        }else{
            console.log(this.nombre+", es mas carnivor@ que un T-Rex.");
        }
    }
    queCome(){
        alert(this.nombre+" va a comer:\n"+this.vacio+" porciones de Vacio;\n"+this.bondiola+" porciones de bondiola;\n"+this.chorizo+" porciones de chorizo;\n"+this.morcilla+" porciones de morcilla;\n");
    }
}
let asado = [];
let comensales;

comensales=numeroComensales(comensales);

//LLENADO DE ARRAY//
for(i=0;i<comensales;i++){
    let persona = new Comensal(
        this.nombre=prompt("Ingrese el nombre del comensal:"),
        cortes(this.vacio,"Vacio",this.nombre),
        cortes(this.bondiola,"Bondiola",this.nombre),
        cortes(this.chorizo,"Chorizo",this.nombre),
        cortes(this.morcilla,"Morcilla",this.nombre) 
    );
    persona.queCome();
    asado.push(persona);
}

// const chorizos = asado.filter(chori=>chori.chorizo != 0);
//calcular choris//
let chori=0, vacio=0,mondio=0,morci=0;
let choriPrecio, vacioPrecio,mondioPrecio,morciPrecio,precioFinal;

//calcular vacio//
for(i=0;i<asado.length;i++){
    vacio=asado[i].vacio+vacio;
    // console.log(asado[i].nombre+" va a comer "+asado[i].vacio+" pedazos de vacio");
}


//calcular mondiola//
for(i=0;i<asado.length;i++){
    mondio=asado[i].bondiola+mondio;
    // console.log(asado[i].nombre+" va a comer "+asado[i].bondiola+" pedazos de bondiola");
}


//calcular choris//
for(i=0;i<asado.length;i++){
    chori=asado[i].chorizo+chori;
    // console.log(asado[i].nombre+" va a comer "+asado[i].chorizo+" pedazos de chori");
}

//calcular morcis//
for(i=0;i<asado.length;i++){
    morci=asado[i].morcilla+morci;
    // console.log(asado[i].nombre+" va a comer "+asado[i].morcilla+" pedazos de morci");
}

console.log("se van a comer "+vacio+" porciones de vacio\nEn total van a tener que comprar "+parseFloat(vacio*0.5).toFixed(3)+"kilos");
console.log("se van a comer "+mondio+" porciones de bondio\nEn total van a tener que comprar "+parseFloat(mondio*0.5).toFixed(3)+"kilos");
console.log("se van a comer "+chori+" porciones de chori\nEn total van a tener que comprar "+parseFloat(chori*0.125).toFixed(3)+"kilos");
console.log("se van a comer "+morci+" porciones de morci\nEn total van a tener que comprar "+parseFloat(morci*0.15).toFixed(3)+"kilos");

vacioPrecio=(parseFloat(vacio*0.5)*950).toFixed(2);
mondioPrecio=(parseFloat(mondio*0.5)*440).toFixed(2);
choriPrecio=(parseFloat(chori*0.125)*350).toFixed(2);
morciPrecio=(parseFloat(morci*0.15)*320).toFixed(2);
precioFinal=parseFloat(vacioPrecio+mondioPrecio+choriPrecio+morciPrecio).toFixed(2);


alert("El asado va a ser para: "+asado.length+" personas\n\nVan a tener que comprar:\n"+
parseFloat(vacio*0.5).toFixed(3)+" kilos de Vacio x $"+vacioPrecio+"\n"+
parseFloat(mondio*0.5).toFixed(3)+"kilos de Bondiola x $"+morciPrecio+"\n"+
parseFloat(chori*0.125).toFixed(3)+"kilos de Chori x $"+choriPrecio+"\n"+
parseFloat(morci*0.125).toFixed(3)+"kilos de Morcilla x $"+morciPrecio+"\n"+
"En total van a gastar $"+precioFinal+"\n\n"+
"Son $"+(precioFinal/asado.length).toFixed(2)+" por cabeza.");



