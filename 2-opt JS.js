
var n=3;
var matrice_distanze = new Array();
var ciclo_iniziale = new Array(n);
var ciclo_best = new Array(n);
ciclo_best = main()


function main()
crea_matrice_distanze();
//console.log(matrice_distanze);
crea_ciclo_iniziale();
//console.log(ciclo_iniziale);

var ciclo_best = ciclo_iniziale;
var costo_best = calcola_costo(ciclo_best);
var miglioramento = true;
while (miglioramento = true)
{
    var miglioramento = false;
    var ciclo_best = routine_di_scambio()
    var costo_best = calcola_costo()
}
return ciclo_best



function crea_matrice_distanze(){
    for (var i=0; i<n;i++){
        matrice_distanze[i] = new Array();
    }
    for (var i=0; i<n;i++){
        for (var j=0; j<n;j++){
            matrice_distanze[i][j] = 1;
        }    
    }
return matrice_distanze;
}
    

    
function crea_ciclo_iniziale(){
    for(var x=0;x<n;x++){
        ciclo_iniziale[x] = x+1;
    }
return ciclo_iniziale;
}

function calcola_costo(ciclo)
    var costo = 0;
    for(var x= 0; x<n; x++){
        nodo_testa = ciclo[x];
        nodo_coda = ciclo[x+1];
        costo += matrice_distanze[x][x+1];
    }
    return costo


 function routine_di_scambio(){
    var ciclo_corrente = new Array(n);
    for (var i=0;i<n;i++)
        for (var k=0; k<n+1;k++)
        var ciclo_corrente = Opt2Swap(ciclo_corrente,i,k);
        var costo_corrente = calcola_costo(ciclo_corrente);
        if (costo_corrente< costo_best){
            costo_best = costo_corrente;
            ciclo_best = ciclo_corrente;
            miglioramento = true;
        }

 } 
 
function Opt2Swap(ciclo_corrente,i,k){
    for (var w= 0; w<i-1;w++)
        ciclo_corrente.concat(ciclo_best[w]);
    for (var j=k; j<i-1;j--)
        ciclo_corrente.concat(ciclo_best[j-1]);
    for (var z=k; z<n; z++)
        ciclo_corrente.concat(ciclo_best[z])
return ciclo_corrente

}

