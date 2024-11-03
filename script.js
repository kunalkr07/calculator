let currentInput='';

function screen(currentInput){
    let input=document.querySelector("#displayScreen");
    input.value=currentInput;
    console.log(input);
}

function inputNum(num){
    currentInput+=num;
    console.log(currentInput)
    screen(currentInput)
}

function operator(symbol){
    if(currentInput!==''){
        currentInput+=' ' +symbol+ ' ';
        console.log(currentInput)
        screen(currentInput);
    }
}

function clearDisplay(){
    currentInput='';
    screen(currentInput)
}

function calculate(){
    let result=eval(currentInput);
    document.getElementById('displayScreen').value=result;
    currentInput=result.toString();
}