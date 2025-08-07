
function calculateEMI() {
  let P = parseFloat(document.getElementById('amount').value);
  let R = parseFloat(document.getElementById('rate').value) / 12 / 100;
  let N = parseFloat(document.getElementById('tenure').value);
  let emi = (P * R * Math.pow(1 + R, N)) / (Math.pow(1 + R, N) - 1);
  document.getElementById('result').innerText = 'Monthly EMI: ₹' + emi.toFixed(2);
}
