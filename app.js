var degisken = document.getElementById('degisken');
var btn = document.getElementsByClassName('btn');
var sil = document.getElementById('clr');
const eraseNum =()=> degisken.textContent = degisken.textContent.substring(0, degisken.textContent.length - 1);
var operant1;
var operant2;
var operator;
var result;

function fonksiyon2(oprnt){
  switch (oprnt) {
    case '+':
    operant1=degisken.innerText;
    operator="+";
    sill(); 
    break;


    case '-':
      if(degisken.innerText.includes('-')){
        operant1=degisken.innerText;
        operator='-';
        sill();
        return;
      }
      if(degisken.innerText!=""){
        operant1=degisken.innerText;
        operator='-';
        sill();
        return;
      }
      degisken.innerText;
    
    break;

    case '*':
    operant1=degisken.innerText;
    operator="*";
    sill(); 
    break;

    case '/':
    operant1=degisken.innerText;
    operator="/";
    sill(); 
    break;

    case '.':
    if(degisken.innerText.includes(".")){
      return;
    }
    degisken.innerText+='.';
    break;
    
    default: https://github.com/hilaltrhaan/Java-Script-Hesap-Makinesi.git
      break;
  }
  }

function hesapla() {
  operant2 = degisken.innerText;
  switch (operator) {
    
    case "-":

      if (operant1 == "" || operant2 == "") {
        return;
      }
      result = parseFloat(operant1) - parseFloat(operant2);
      degisken.innerText = result;
      break;

    case "+":

      if (operant1 == "" || operant2 == "") {
        return;
      }
      result = parseFloat(operant1) + parseFloat(operant2);
      degisken.innerText = result;
      break;

    case "*":

      if (operant1 == "" || operant2 == "") {
        return;
      }
      result = parseFloat(operant1) * parseFloat(operant2);
      degisken.innerText = result;
      break;
    case "/":
      if (operant1 == "" || operant2 == "") {
        return;
      }
      result = parseFloat(operant1) / parseFloat(operant2);
      degisken.innerText = result;
      break;
    

    default:
      break;
  }


}
function sill() {
  degisken.innerText = "";


}
function fonksiyon(value) {

  switch (value) {
    case 0:
      degisken.innerText += "0";

      break;

    case 1:
      degisken.innerText += "1";
      break;
    case 2:
      degisken.innerText += "2";
   
      break;
    case 3:
      degisken.innerText += "3";

      break;
    case 4:
      degisken.innerText += "4";
   
      break;
    case 5:
      degisken.innerText += "5";
   ;
      break;
    case 6:
      degisken.innerText += "6";
    
      break;
    case 7:
      degisken.innerText += "7";

      break;
    case 8:
      degisken.innerText += "8";

      break;
    case 9:
      degisken.innerText += "9";
  
      break;
    default:
      break;

  }
}
function clrr() {
  degisken.innerText = "";

  operant1 = "";
  operant2 = "";
  operator = "";
}