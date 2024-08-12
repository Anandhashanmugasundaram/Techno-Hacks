let select=document.querySelectorAll(".currency");
let btn=document.getElementById("conbtn");
let input1=document.getElementById("inpbox1");

fetch('https://api.frankfurter.app/currencies')
.then(res=>res.json())
.then(res=>displayValue(res))

function displayValue(res){
  let money=Object.entries(res)
 
  

  
  for(let i=0 ; i<money.length ; i++){
    let storeInOptions=`<option value="${money[i][0]}">${money[i][0]}</option>`
    select[0].innerHTML+=storeInOptions
    select[1].innerHTML+=storeInOptions
   
  }
  
}

btn.addEventListener('click',()=>{
  let currency1=select[0].value
  let currency2=select[1].value
  let inputBoxValue=input1.value
  console.log(inputBoxValue);
  

  if(currency1===currency2){
    alert("Change to Different currency");
  }
  else{
    convertion(currency1,currency2,inputBoxValue)
  }

});

function convertion(currency1,currency2,inputBoxValue){

  const host = 'api.frankfurter.app';
fetch(`https://${host}/latest?amount=${inputBoxValue}&from=${currency1}&to=${currency2}`)
  .then(resp => resp.json())
  
  .then((data) => {
    let convertedValue = Object.values(data.rates)[0];
      let roundedValue = convertedValue.toFixed(2);
      document.getElementById("inpbox2").value = roundedValue;
      document.getElementById("conversion-result").innerText = `${inputBoxValue} ${currency1} = ${roundedValue} ${currency2}`;
    
   });
 }
  




