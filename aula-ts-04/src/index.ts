function multiply(num1: number, num2:number):number {
    return num1 * num2;
}

function sum(num1: number, num2: number): number {
    return num1 + num2;
}

function isEven(num: number):boolean {
    return num % 2 === 0;
}

function showResult(result: number): void {
    if(isEven(result)) {
        console.log(`The result is ${result} and it's even!`);
    } else {
        console.log(`The result is ${result} and it's odd!`);
    }
}

(() => {
    const num1: string | null = prompt("First Number");
    const num2: string | null = prompt("Second Number");
    if(!num1 || !num2) return console.log("Não é possível executar com tal entrada")
    if(isNaN(Number(num1)) || isNaN(Number(num2))) return console.log("Não é possível executar com tal entrada")
    let result = sum(Number(num1),Number(num2));
    result += multiply(1,2);
    showResult(result);
})();