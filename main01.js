let currentTotal = 0;
let input = "";
let calcOperator = "+";
let status = 1;

function btnNumber(myData){
    status = 0;
    input += myData;
    document.subjectCalculator.output.value = Number(input);　//Number()を加えて修正
}

function btnOperation(myData){
    if(status == 0){
        status = 1;
        let calcFormula = currentTotal + calcOperator + input;
        currentTotal = (new Function("return " + calcFormula))();
        input= "";
        document.subjectCalculator.output.value = currentTotal;
    }
    if(myData == "="){
        currentTotal = 0;
        calcOperator = "+";
    } else{
        calcOperator = myData;
    }
}

function allClear(){
    currentTotal = 0;
    calcOperator = "+";
    input = "";
    document.subjectCalculator.output.value = currentTotal;
}