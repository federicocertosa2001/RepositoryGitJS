const express = require("express");
const app = express();
const port = 4000;
var path = require('path');
app.use(express.json());

app.get("/",(req,res) => {
    res.send("Benvenuta a BellaVida");
});

app.post("/",(req,res) => {
    let nodo_iniziale = req.body.nodo_iniziale;
    //numero di nodi
    var n= 5;

    //creo matrice distanze 
    var matrice_distanze = new Array();
    crea_matrice_distanze(); 
    
    //creo_ciclo_iniziale
    var ciclo_iniziale = new Array();
    crea_ciclo_iniziale();
    console.log(ciclo_iniziale, "ciclo iniziale");

    //il ciclo_best diventa quello iniziale e ho un miglioramento
    var ciclo_best = ciclo_iniziale;
    var miglioramento = true

    //calcolo il costo del ciclo_best (cioè quello iniziale) e lo stampo
    var costo_best = calcola_costo(ciclo_best);
    console.log(costo_best, "costo ciclo iniziale");

    //eseguo lo swap fino a che ottengo miglioramenti
    while (miglioramento == true){
        miglioramento = false; 
        var ciclo_best = routine_di_scambio();
    }
    console.log(ciclo_best, "ciclo best");
    console.log(costo_best,"costo ciclo_best");



    //routine di scambio itero indici nodi da scambiare
    function routine_di_scambio(){
        var ciclo_best_prova = ciclo_best;   //se non trova cicli migliori ritorna il best iniziale
        for (var i=0;i<n;i++)
            for (var k=i+1; k<n+1;k++)
                var ciclo_best_prova = Opt2Swap(i,k,ciclo_best_prova); //scambio e memorizzo ciclo_best_prova
    return ciclo_best_prova
    }

    //scambio i nodi passando gli indici 
    function Opt2Swap(i,k,ciclo_best_prova){
        var ciclo_corrente = new Array();
        for (var w = 0; w<=i-1;w++){
            ciclo_corrente.push(ciclo_best[w]);
        }
        for (var j=k; j>=i;j--){
            ciclo_corrente.push(ciclo_best[j]);
        }
        for (var z=k+1; z<=5; z++){
            ciclo_corrente.push(ciclo_best[z]);
        }
        var costo_corrente = calcola_costo(ciclo_corrente);
        //se il nuovo ciclo ha costo migliore del ciclo_best attuale diventa lui il ciclo_best di prova
        if (costo_corrente < costo_best){
            if(ciclo_corrente[0] == nodo_iniziale){
            costo_best = costo_corrente;
            ciclo_best_prova = ciclo_corrente;
            miglioramento = true; //ho un effettivo miglioramento 
            }
        }
    return ciclo_best_prova;
    }


    //funzione per creare il ciclo iniziale
    function crea_ciclo_iniziale(){
        for(var x=0;x<=n;x++){
            if (x == nodo_iniziale){
                ciclo_iniziale[x] = 0;
                ciclo_iniziale[0] = nodo_iniziale;
            }else{
                ciclo_iniziale[x] = x;
                }
            
        }
    return ciclo_iniziale;
    }

    //funzione per calcolare i costi di un ciclo passandolo
    function calcola_costo(ciclo){
        var costo = 0;
        for(var x=0; x<n; x++){
            nodo_testa = ciclo[x]
            nodo_coda = ciclo[x+1]
            costo += matrice_distanze[nodo_testa][nodo_coda];
        }
        costo += matrice_distanze[ciclo[n]][ciclo[0]];
        return costo
    }

    //funzione che crea la matrice delle distanze
    function crea_matrice_distanze(){
        for (var i=0; i<=n;i++){
            matrice_distanze[i] = new Array();
        }
        for (var i=0; i<=n;i++){
            for (var j=0; j<=n;j++){
                matrice_distanze[i][j] = 7;
            }    
        }
        matrice_distanze[0][1] = 40;
        matrice_distanze[0][2] = 40;
        matrice_distanze[3][0] = -35;
        matrice_distanze[0][3] = 9;
        matrice_distanze[1][2] = 8;
        matrice_distanze[2][1] = 15;
        matrice_distanze[3][5] = 27; 
        matrice_distanze[2][3] = 10;
        matrice_distanze[3][2] = 23;
        matrice_distanze[4][2] = 700;
        matrice_distanze[3][4] = -20;
        matrice_distanze[4][5] = 10;
        matrice_distanze[5][0] = 50;
        matrice_distanze[4][1] = 9;
        matrice_distanze[2][0] = 8;
    return matrice_distanze;
    }
    res.write(("questo è il costo_best" +" " + costo_best + '\n' + "questo è il ciclo_best" +" "+ ciclo_best).toString())
    res.end();
  });

app.use(express.static(path.join(__dirname, 'public')));

app.listen(port, ()=>{
    console.log("Server is at hhtp://localhost:3000")    
});


//sul terminale cd expressdirectory 
//sul terminale node app.js