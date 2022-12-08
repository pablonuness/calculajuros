import entradaDados from 'readline-sync';

var valor_original;
var dias_vencimento;
var taxa_juros;
var valor_total;

console.log("Aplicação de Juros: ");

valor_original = entradaDados.question('Informe o valor devido: R$ ');
dias_vencimento = entradaDados.question("Informe quantos dias se passaram desde o vencimento do boleto: ");

if(Number(dias_vencimento)>0){
    if(Number(dias_vencimento)<=15){
    taxa_juros=0.05;
    var valor_divida= ( Number(valor_original) * taxa_juros );
    var valor_total= ( Number(valor_original) + valor_divida );

    console.log("Valor original da dívida: R$ "+valor_original);

    console.log("Dias atrasados: "+ dias_vencimento);

    console.log("Taxa de Juros: " +taxa_juros +"%");

    console.log("Valor total com juros: R$ "+valor_total);

    }else{
        taxa_juros=0.1;
    var valor_divida= ( Number(valor_original) * taxa_juros );
    var valor_total= ( Number(valor_original) + valor_divida );

    console.log("Valor original da dívida: R$ "+valor_original);

    console.log("Dias atrasados: "+ dias_vencimento);

    console.log("Taxa de Juros: " +taxa_juros +"%");

    console.log("Valor total com juros: R$ "+valor_total);
    }
}else{
    console.log("Você está em dia!");   
}