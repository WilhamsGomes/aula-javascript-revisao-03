var salarioColaborador = 1200.00;
var reajuste;
var novoSalario;
var percentual;

if (salarioColaborador < 280.00){
    percentual = "20%"
    reajuste = salarioColaborador * 0.20
    novoSalario = salarioColaborador + reajuste

} else if (salarioColaborador > 280.00 && salarioColaborador < 700.00){
    percentual = "15%"
    reajuste = salarioColaborador * 0.15
    novoSalario = salarioColaborador + reajuste

} else if (salarioColaborador > 700.00 && salarioColaborador < 1500){
    percentual = "10%"
    reajuste = salarioColaborador * 0.10
    novoSalario = salarioColaborador + reajuste

} else if (salarioColaborador > 1500){
    percentual = "5%"
    reajuste = salarioColaborador * 0.5
    novoSalario = salarioColaborador + reajuste
}


console.log("Salário antes do reajuste: " +salarioColaborador)
console.log("Percentual de aumento aplicado: " +percentual)
console.log("Valor do aumento: " +reajuste)
console.log("Novo salário:" +novoSalario)

