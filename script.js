const form = document.getElementById('form');
const input = document.getElementById('number');
const convertBtn = document.getElementById('convert-btn');
const output = document.getElementById('output');

form.addEventListener('submit', (e)=>{
  e.preventDefault();

  const inputValue=input.value;
  input.value='';

  if(inputValue===''){
    showOutput('Please enter a valid number');
    return;
  }
  if(parseInt(inputValue) < 1){
    showOutput('Please enter a number greater than or equal to 1');
    return;
  }

  if(parseInt(inputValue)>=4000){
    showOutput('Please enter a number less than or equal to 3999');
    return;
  }

  showOutput(toRomanNumeral(inputValue))
})


function showOutput(str){
  output.style.display='block';
  output.innerText=str;
}

function toRomanNumeral(num){
const romanNumerals = [
        { value: 1000, numeral: 'M' },
        { value: 900, numeral: 'CM' },
        { value: 500, numeral: 'D' },
        { value: 400, numeral: 'CD' },
        { value: 100, numeral: 'C' },
        { value: 90, numeral: 'XC' },
        { value: 50, numeral: 'L' },
        { value: 40, numeral: 'XL' },
        { value: 10, numeral: 'X' },
        { value: 9, numeral: 'IX' },
        { value: 5, numeral: 'V' },
        { value: 4, numeral: 'IV' },
        { value: 1, numeral: 'I' }
    ];

let result = ''; 

    for (const entry of romanNumerals) {
        while (num >= entry.value) {
            result += entry.numeral;
            num -= entry.value;
        }
    }

    return result;
}