let tipAmount_display = document.getElementById('tipAmount');
let totalCost_display = document.getElementById('totalCost');

let cost = document.getElementById('cost');
let tipPercent = document.getElementById('tipPercent');
let submit = document.getElementById('submitbtn');

submit.addEventListener('click',()=>{

    if (isNaN(cost.value) || isNaN(tipPercent.value)) {
        alert('Please enter valid numbers for Cost and Tip Percentage.');
        return;
    }

    let tipAmount = (parseFloat(tipPercent.value)/100)*parseFloat(cost.value);
    let totalCost = tipAmount + parseFloat(cost.value);

    tipAmount_display.innerHTML = "Tip Amount = " + tipAmount;
    totalCost_display.innerHTML = "Total Cost = " + totalCost;
})


