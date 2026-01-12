const input = document.getElementById("message");
const shiftInput = document.getElementById("shift");
const button = document.getElementById("encryptBtn");
const reset = document.getElementById("resetBtn");
const output = document.getElementById("output");

function caesarCipher(text, shift) {
  if (shift < 0) {
    shift = 26 + (shift % 26);
  }
  
  shift = shift % 26;
  
  return text
    .split("")
    .map(char => {
      const code = char.charCodeAt(0);
      if (code >= 65 && code <= 90) {
        return String.fromCharCode(((code - 65 + shift) % 26) + 65);
      } else if (code >= 97 && code <= 122) {
        return String.fromCharCode(((code - 97 + shift) % 26) + 97);
      } else {
        return char;
      }
    })
    .join("");
}


button.onclick = () =>{
    const text = input.value;
    const shift = Number(shiftInput.value);
    if (!text || isNaN(shift)) {
        output.textContent = "Please enter a message and a shift value.";
        return;
    }
    
    output.textContent = caesarCipher(text, shift);
}
reset.onclick = () => {
    input.value = "";
    shiftInput.value = "";
    output.textContent = "";
}