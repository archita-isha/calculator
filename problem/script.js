let input='';
let opr='';
let result=0;

function insert(val){
    input+=val;
    displaycont();
}
function operation(operator){
    opr=operator;
    result=input;
    cleardisplay();
}

function calculateres(){
    if(opr==='+'){
        result+=input;
    }
    else if(opr==='-'){
        result-=input;
    }
    else if(opr==='*'){
        result*=input;

    }
    else if(opr==='/'){
        result/=input;
    }


}

function cleardisplay(){

}