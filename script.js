//pintar lista recomendaciones nutricionales
const info = `<ul> Consumo diario:
                        <li>Fruta: 2-3 raciones</li>
                        <li>Verdura: 2-3 raciones</li>
                        <li>Cereales a diario</li>
                        <li>Aceite: 3-6 raciones</li>

                    </ul> 

                    <ul>Consumo semanal:
                        <li>Legumbres:2-4 veces</li>
                        <li>Pescado: 3-4 veces</li>
                        <li>Carne magra: 3-4 veces</li>
                        <li>Huevos: 2-4 veces</li>

                    </ul>`
const noInfo = '';
 
//variables globales de los objetos a pintar
let person;
const ctx = document.getElementById('myChart'); 

let arrozF = {};
let panF = {};
let pastaF = {};
let vacunoF = {};
let porcinoF = {};
let aveF = {};
let pFrescoF = {};
let huevosF = {};
let frutosF = {};
let azucarF = {};
let chocoF = {};
let heladoF = {};
let cafeNCF = {};
let cafeSCF = {};
let cervezaF = {};
let cerveza00F = {};
let aguaF = {};
// variables globales para los datos de consumo anual total
const nombres =['Arroz(k)','Pan(K)','Pasta(K)','Carne de vacuno(K)','Carne de porcino(k)','Carne de ave(k)','Pescado fresco o refrigerado(k)','Huevos(U)','Frutos secos(k)','Ázucar(k)','Chocolate(k)','Helados(k)','Café no en cápsulas(k)','Café en cápsulas(k)','Agua mineral(L)','Cerveza(L)','Cerveza baja en alcohol o sin alcohol(L)'];
const colors = ['#51CB20','#3A5683','#639A88','#F4CAE0','#ADA7C9','#90A8C3','#64A6BD','#7F7CAF','#28587B','#B892FF','#FFC2E2','#EF7A85','#CDB2AB','#A14A76','#C0DFA1','#F9DC5C','#78FFD6',]
let total;
let filtro;
let dosdos ={
  año:'2022',
  valores:[]
};
let dosuno ={
  año:'2021',
  valores: []
}

let doscero = {
  año:'2020',
  valores:[]
};

const ctx2 = document.getElementById('myChart2'); 



function again1(){
  document.getElementById('reset1').addEventListener('click', function(){
    location.reload();
  })
}

function again2(){
  document.getElementById('reset2').addEventListener('click', function(){
    location.reload();
  })
}



// primera asincronía para llamar a la APi y filtrar los objetos paso 1
async function loadApi(){
    let response = await fetch('https://servicios.ine.es/wstempus/jsCache/es/DATOS_TABLA/49141?tip=AM')
    let datos = await response.json();
    person = datos.filter(callback);  

}

// con esto cribamos el objeto y lo usamos como parámetro para el filter así se devuelven los datos formato array

function callback(arr){  
    if(arr.Nombre.includes('media por persona')){
        if (arr.Nombre.includes('Arroz') || arr.Nombre.includes( 'Azúcar')|| arr.Nombre.includes( 'Agua') ||arr.Nombre.includes( 'Ave') || arr.Nombre.includes('Frutos secos')|| arr.Nombre.includes( 'Café')|| arr.Nombre.includes( 'Chocolate')|| arr.Nombre.includes( 'Huevos')|| arr.Nombre.includes('Cerveza')|| arr.Nombre.includes( 'Pescado fresco')|| arr.Nombre.includes( 'Pasta')|| arr.Nombre.includes( 'Helado')|| arr.Nombre.includes('ave')|| arr.Nombre.includes( 'porcino')|| arr.Nombre.includes( 'vacuno')|| arr.Nombre.includes( 'Pan')){
            return arr
    
        }   
    } 
    
}    


// segunda asincronía para filtrar los obejetos paso 2. Así objetemos las variables globables llenas
async function alreadyLoad(){
  await loadApi();
  console.log(person)
  let [arroz,pan,pasta,vacuno,porcino,ave,pfresco,huevos,frutos,azucar,choco,helado,cafeNC,cafeSC,agua,cerveza,cerveza00] = person;

//   usamos un bucle for of en vez de for in. el bucle for nos permite recorrer el array y luego entramos a los valores de forma normal. con el bucle for in no podríamos recorrer ese array. si fueran solo un objeto si podríamos usar el for in, pero nos sacaría todas las claves y sus valores. Por eso solo se usa un bucle for of y leugo sacamos los datos que solo buscamos. 



//arroz
  let a = arroz.Data;
  arrozF.nombre = 'Arroz(k)';
  arrozF.fecha = [];
  arrozF.valor = [];
  
  for(let obj of a){
    arrozF.fecha.push(obj.Anyo)
    arrozF.valor.push(obj.Valor) 
       
  }
 
  //pan
  let b = pan.Data;
  panF.nombre = 'Pan(k)';
  panF.fecha = [];
  panF.valor = [];
  
  for(let obj of b){
    panF.fecha.push(obj.Anyo)
    panF.valor.push(obj.Valor) 
       
  }

  //pasta
  let c = pasta.Data;
  pastaF.nombre = 'Pastas alimentarias(k)';
  pastaF.fecha = [];
  pastaF.valor = [];
  
  for(let obj of c){
    pastaF.fecha.push(obj.Anyo)
    pastaF.valor.push(obj.Valor) 
       
  }

  //vacuno
  let d = vacuno.Data;
  vacunoF.nombre = 'Carne de vacuno(k)';
  vacunoF.fecha = [];
  vacunoF.valor = [];
  
  for(let obj of d){
    vacunoF.fecha.push(obj.Anyo)
    vacunoF.valor.push(obj.Valor) 
       
  }

  //porcino
  let e = porcino.Data;
  porcinoF.nombre = 'Carce de porcino(k)';
  porcinoF.fecha = [];
  porcinoF.valor = [];
  
  for(let obj of e){
    porcinoF.fecha.push(obj.Anyo)
    porcinoF.valor.push(obj.Valor) 
       
  }

  //ave
  let f = ave.Data;
  aveF.nombre = 'Carne de ave(k)';
  aveF.fecha = [];
  aveF.valor = [];
  
  for(let obj of f){
    aveF.fecha.push(obj.Anyo)
    aveF.valor.push(obj.Valor) 
       
  }

  //pescado fresco
  let g = pfresco.Data;
  pFrescoF.nombre = 'Pescado fresco(k)';
  pFrescoF.fecha = [];
  pFrescoF.valor = [];
  
  for(let obj of g){
    pFrescoF.fecha.push(obj.Anyo)
    pFrescoF.valor.push(obj.Valor) 
       
  }

  //huevos
  let h = huevos.Data;
  huevosF.nombre = 'Huevos(U)';
  huevosF.fecha = [];
  huevosF.valor = [];
  
  for(let obj of h){
    huevosF.fecha.push(obj.Anyo)
    huevosF.valor.push(obj.Valor) 
       
  }

  //frutos
  let i = frutos.Data;
  frutosF.nombre = 'Frutos secos (k)';
  frutosF.fecha = [];
  frutosF.valor = [];
  
  for(let obj of i){
    frutosF.fecha.push(obj.Anyo)
    frutosF.valor.push(obj.Valor) 
       
  }
  
  //azucar
  let j = azucar.Data;
  azucarF.nombre = 'Azúcar (k)';
  azucarF.fecha = [];
  azucarF.valor = [];
  
  for(let obj of j){
    azucarF.fecha.push(obj.Anyo)
    azucarF.valor.push(obj.Valor) 
       
  }
  //choco
  let k = choco.Data;
  chocoF.nombre = 'Chocolate (k)';
  chocoF.fecha = [];
  chocoF.valor = [];
  
  for(let obj of k){
    chocoF.fecha.push(obj.Anyo)
    chocoF.valor.push(obj.Valor) 
       
  }
  //helado
  let l = helado.Data;
  heladoF.nombre = 'Helado (k)';
  heladoF.fecha = [];
  heladoF.valor = [];
  
  for(let obj of l){
    heladoF.fecha.push(obj.Anyo)
    heladoF.valor.push(obj.Valor) 
       
  }
  //cafe sin capsulas
  let m = cafeNC.Data;
  cafeNCF.nombre = 'Café no en cápsulas(k)';
  cafeNCF.fecha = [];
  cafeNCF.valor = [];
  cafeNCF.backgroundColor = '#F0B7B3'
  
  for(let obj of m){
    cafeNCF.fecha.push(obj.Anyo)
    cafeNCF.valor.push(obj.Valor) 
       
  }
  //cafe capsulas
  let n = cafeSC.Data;
  cafeSCF.nombre = 'Café en cápsulas (cap)';
  cafeSCF.fecha = [];
  cafeSCF.valor = [];
  cafeSCF.backgroundColor = '#2B3A67'
  
  for(let obj of n){
    cafeSCF.fecha.push(obj.Anyo)
    cafeSCF.valor.push(obj.Valor) 
       
  }
  //cerveza normal
  let o = cerveza.Data;
  cervezaF.nombre = 'Cerveza (L)';
  cervezaF.fecha = [];
  cervezaF.valor = [];
  cervezaF.backgroundColor = '#2B3A67'
  
  for(let obj of o){
    cervezaF.fecha.push(obj.Anyo)
    cervezaF.valor.push(obj.Valor) 
       
  }
  //cerveza 00
  let p = cerveza00.Data;
  cerveza00F.nombre = 'Cerveza baja en alcohol o sin alcohol (L)';
  cerveza00F.fecha = [];
  cerveza00F.valor = [];
  cerveza00F.backgroundColor = '#F0B7B3'
  
  for(let obj of p){
    cerveza00F.fecha.push(obj.Anyo)
    cerveza00F.valor.push(obj.Valor) 
       
  }

  //agua
  let q = agua.Data;
  aguaF.nombre = 'Agua mineral (L)';
  aguaF.fecha = [];
  aguaF.valor = [];
  
  for(let obj of q){
    aguaF.fecha.push(obj.Anyo)
    aguaF.valor.push(obj.Valor) 
       
  }



}



//función general para pintar los gráficas. luego en el advent listener le diremos qué datos pintar, poniendo los parámetros correspondientes. con el rest le indicamos que acepta cualquier número de objetos, así nos vale para las gráfica múltiples
function printGraphs(ctx, ...objetos){
       
        // este objeto serán los datos que se pinten, tanto si se pasa  objeto como si se paan varios, se le pushearán los datos correspondientes
        let chartData ={
          labels:[],
          datasets:[]
        };

        objetos.forEach(objeto=>{
          chartData.labels = objeto.fecha.slice().reverse();
          chartData.datasets.push({
                                  label: objeto.nombre,
                                  data: objeto.valor.slice().reverse(),
                                  borderWidth: 1.5,
                                  borderColor: '#028090',
                                  backgroundColor: objeto.backgroundColor,
                                  pointStyle:'rectRot',
                                  pointRadius:7
                                  
      });
    });
      
   
       new Chart(ctx, {
            type: 'line',
            data: chartData,
            options: {
              responsive:false,
              scales: {
                y: {
                  beginAtZero: false
                }
              }
            }
          });
        }   
   
 
       

function arrozGraf(){
    document.getElementById('arroz').addEventListener('click', function(){
        printGraphs(ctx,arrozF)
    })
}
function aguaGraf(){
    document.getElementById('agua').addEventListener('click', function(){
        printGraphs(ctx,aguaF)
    })
}
function azucarGraf(){
    document.getElementById('azucar').addEventListener('click', function(){
        printGraphs(ctx,azucarF)
    })
}
function frutosGraf(){
    document.getElementById('frutos').addEventListener('click', function(){
        printGraphs(ctx,frutosF)
    })
}
function chocoGraf(){
    document.getElementById('chocolate').addEventListener('click', function(){
        printGraphs(ctx,chocoF)
    })
}
function huevosGraf(){
    document.getElementById('huevos').addEventListener('click', function(){
        printGraphs(ctx,huevosF)
    })
}
function vacunoGraf(){
    document.getElementById('vacuno').addEventListener('click', function(){
        printGraphs(ctx,vacunoF)
    })
}
function cerdoGraf(){
    document.getElementById('cerdo').addEventListener('click', function(){
        printGraphs(ctx,porcinoF)
    })
}
function heladoGraf(){
    document.getElementById('helado').addEventListener('click', function(){
        printGraphs(ctx,heladoF)
    })
}
function aveGraf(){
    document.getElementById('ave').addEventListener('click', function(){
        printGraphs(ctx,aveF)
    })
}
function pastaGraf(){
    document.getElementById('pasta').addEventListener('click', function(){
        printGraphs(ctx,pastaF)
    })
}
function pescadoGraf(){
    document.getElementById('pescado').addEventListener('click', function(){
        printGraphs(ctx,pFrescoF)
    })
}
function panGraf(){
    document.getElementById('pan').addEventListener('click', function(){
        printGraphs(ctx,panF)
    })
}
//graficas multiples

function cervezaGraf(){
    document.getElementById('cerveza').addEventListener('click', function(){
        printGraphs(ctx,cerveza00F,cervezaF)
    })
}
function cafeGraf(){
    document.getElementById('cafe').addEventListener('click', function(){
        printGraphs(ctx,cafeNCF,cafeSCF)
    })
}


//years 

async function loadApi2(){
  let response2 = await fetch('https://servicios.ine.es/wstempus/jsCache/es/DATOS_TABLA/49141?tip=AM')
  let datos2 = await response2.json();
  total = datos2.filter(callback2);    
  filtro = total.map((e)=>{ //con map devolvemos esos objetos filtrados en formato array para poder seguir filtrando
    return {
      años: e.Data.slice(0,3), //con este slice nos quedamos con los 3 ultimos años ya que así es como está ordenado
      nombre:e.Nombre
    }

  })
  console.log(filtro)
  
  

}

async function rellenarAños(){   //con esto rellenamos los objetos declarados arriba con los datos correspondientes
  await loadApi2();
  
  let filtro2;
  

    for(obj of filtro){   //por cada objeto que tiene filtro, entramos en los años, es decir, los 17 objetos, nos quedamos solo con años, que son los 3 que hemos coonseguido con el slice
    filtro2 = obj.años;
    console.log(filtro2)
    
    for (i = 0; i < filtro2.length;i++){  //recorremos ese nuevo array y le decimmos que entre a cada índice con la siguiente variable
      let indice = filtro2[i]  //cada uno de los índices del array
      if(indice.Anyo === 2022){  //si el año de ese indice es 2022, entonces cogemos esos valores y los pusheamos
        let valorF0 = indice.Valor
       dosdos.valores.push(valorF0) 
       
      }if(indice.Anyo === 2021){
        let valorF1 = indice.Valor
       dosuno.valores.push(valorF1) 
    
      }if(indice.Anyo === 2020){
        let valorF0 = indice.Valor
       doscero.valores.push(valorF0) 
     
   
 }
 
}
}
}




function pintarRosco(){
  
  document.getElementById('seleccion').addEventListener('submit', function (event){
    event.preventDefault();
    let selectElement = document.getElementById('year')
    let selectedYear = selectElement.value;
    
     if(selectedYear === '22'){
      
      new Chart(ctx2,{
        type:'doughnut',
        data: {
            labels: nombres,
            datasets: [{
              label: 'Valor',
              data: dosdos.valores,
              backgroundColor: colors,
             
             
            }]
          },
          options: {
            hoverOffset: 60,
            responsive:false
          },
         
      }) 
      
    }else if(selectedYear === '21'){
      
      new Chart(ctx2,{
        type:'doughnut',
        data: {
            labels: nombres,
            datasets: [{
              label: 'Valor',
              data: dosuno.valores,
              backgroundColor: colors,
              
            }]
          },
          options: {
            hoverOffset: 60,
            responsive:false
          },
      }) 
      

    }else if(selectedYear === '20'){
      
     new Chart(ctx2,{
        type:'doughnut',
        data: {
            labels: nombres,
            datasets: [{
              label: 'Valor',
              data: doscero.valores,
              backgroundColor: colors,
              
            }]
          },
          options: {
            hoverOffset: 60,
            responsive:false
            
          },
      }) 
      
    }
    
  })

}

function callback2(arr){  
  if(arr.Nombre.includes('Cantidad consumida total')){
      if (arr.Nombre.includes('Arroz') || arr.Nombre.includes( 'Azúcar')|| arr.Nombre.includes( 'Agua') ||arr.Nombre.includes( 'Ave') || arr.Nombre.includes('Frutos secos')|| arr.Nombre.includes( 'Café')|| arr.Nombre.includes( 'Chocolate')|| arr.Nombre.includes( 'Huevos')|| arr.Nombre.includes('Cerveza')|| arr.Nombre.includes( 'Pescado fresco')|| arr.Nombre.includes( 'Pasta')|| arr.Nombre.includes( 'Helado')|| arr.Nombre.includes('ave')|| arr.Nombre.includes( 'porcino')|| arr.Nombre.includes( 'vacuno')|| arr.Nombre.includes( 'Pan')){
          return arr
  
      }   
  } 
  
}   



if(document.title == 'Home'){
    document.getElementById('advice').addEventListener('click', function(){
        let advice = document.getElementById('list');
        if(advice.innerHTML === noInfo){
          console.log('un click')
            advice.innerHTML = info;
        }else{
            console.log('dos click')
            advice.innerHTML = noInfo;
        }
    
    })

};



if(document.title == 'Food'){
    alreadyLoad()
    .then(()=>{
        again2();
        arrozGraf();
        aveGraf();
        panGraf();
        aguaGraf();
        cafeGraf();
        cerdoGraf();
        chocoGraf();
        pastaGraf();
        azucarGraf();
        frutosGraf();
        heladoGraf();
        huevosGraf();
        vacunoGraf();
        cervezaGraf();
        pescadoGraf();
       
    
}
    )};

if(document.title == 'Years'){
  rellenarAños().then(()=>{
    again1();
    pintarRosco();
    
  })

}

