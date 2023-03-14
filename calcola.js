var n= 5;
var matrice_distanze = new Array();
crea_matrice_distanze();
//console.log(matrice_distanze);
var ciclo_iniziale = new Array();
crea_ciclo_iniziale();
console.log(ciclo_iniziale, "ciclo iniziale! Prima versione commit");
var costo_ciclo_iniziale = calcola_costo(ciclo_iniziale)
console.log(costo_ciclo_iniziale, "costo ciclo iniziale");
var ciclo_best = ciclo_iniziale;
var costo_best = calcola_costo(ciclo_best);
var ciclo_best = routine_di_scambio();
//miglioramento = true;
//while (miglioramento = true){
    //miglioramento = false;
    //var ciclo_best = routine_di_scambio();
    //var costo_best = calcola_costo(ciclo_best);

//}
console.log(ciclo_best, "ciclo best");
console.log(costo_best,"costo ciclo_best");



function routine_di_scambio(){
    for (var i=0;i<n;i++)
        for (var k=i+1; k<n+1;k++)
            var ciclo_corrente = Opt2Swap(i,k);
            var costo_corrente = calcola_costo(ciclo_corrente);
            if (costo_corrente < costo_best){
                costo_best = costo_corrente;
                ciclo_best = ciclo_corrente;
                miglioramento = true;
            }
return ciclo_best
}

function Opt2Swap(i,k){
    var ciclo_corrente = new Array();
    for (var w = 0; w<=i-2;w++){
        ciclo_corrente.push(ciclo_best[w]);
    }
    for (var j=k-1; j>i-2;j--){
        ciclo_corrente.push(ciclo_best[j]);
    }
    for (var z=k; z<=5; z++){
        ciclo_corrente.push(ciclo_best[z]);
    }
return ciclo_corrente;
}

function crea_ciclo_iniziale(){
    for(var x=0;x<=n;x++){
        ciclo_iniziale[x] = x
    }
return ciclo_iniziale;
}

function calcola_costo(ciclo){
    var costo = 0;
    for(var x=0; x<n; x++){
        nodo_testa = ciclo[x]
        nodo_coda = ciclo[x+1]
        costo += matrice_distanze[nodo_testa][nodo_coda];
    }
    return costo
}

function crea_matrice_distanze(){
    for (var i=0; i<=n;i++){
        matrice_distanze[i] = new Array();
    }
    for (var i=0; i<=n;i++){
        for (var j=0; j<=n;j++){
            matrice_distanze[i][j] = 1;
        }    
    }
    matrice_distanze[0][1] = 200;
    matrice_distanze[1][2] = 10;
    matrice_distanze[2][1] = 10;
    matrice_distanze[2][3] = 7;
    matrice_distanze[3][2] = 7;
    matrice_distanze[4][3] = 150;
    matrice_distanze[3][4] = 150;
return matrice_distanze;
}