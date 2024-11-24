const input = document.getElementById("number");
const btn = document.getElementById('convert-btn');
const output = document.getElementById('output');

const convertToRoman = () => {
    let num = parseInt(input.value);
    if (isNaN(num) || num <= 0){
        output.textContent = `${num} Add A Number > 0`
        return
    }
    const romanNumerals = [
        { value: 1000, symbol: 'M' },
        { value: 900, symbol: 'CM' },
        { value: 500, symbol: 'D' },
        { value: 400, symbol: 'CD' },
        { value: 100, symbol: 'C' },
        { value: 90, symbol: 'XC' },
        { value: 50, symbol: 'L' },
        { value: 40, symbol: 'XL' },
        { value: 10, symbol: 'X' },
        { value: 9, symbol: 'IX' },
        { value: 5, symbol: 'V' },
        { value: 4, symbol: 'IV' },
        { value: 1, symbol: 'I' }
    ];
    let result = '';
    for (let i = 0; i < romanNumerals.length; i++) {
        while (num >= romanNumerals[i].value) {
          result += romanNumerals[i].symbol;
          num -= romanNumerals[i].value;
        }
        output.textContent = result;
      }
}
btn.addEventListener('click', convertToRoman);
input.addEventListener('keypress', (event)=>{
    if (event.key === 'Enter'){
        convertToRoman();
    }
})
