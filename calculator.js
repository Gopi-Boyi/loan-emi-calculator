const loanAmount  = document.getElementById("loan_amount");
const loanTenure  = document.getElementById("loan_tenure");
const loanRate    = document.getElementById("loan_interest");

const loanEmi      = document.querySelector(".loan_emi");
const loanPrinciple = document.querySelector(".loan_principle");
const loanTotal    = document.querySelector(".loan_total");
const loanInterest = document.querySelector(".loan_interest_rate");

const submitBtn     = document.querySelector(".calculator-btn");
const resultSection = document.getElementById("result-section");

let chartInstance = null; // track the chart so we can destroy it each time

submitBtn.addEventListener('click', function () {

    const amount = parseFloat(loanAmount.value);
    const tenure = parseFloat(loanTenure.value) * 12;       // years → months
    const rate   = parseFloat(loanRate.value) / 12 / 100;   // annual % → monthly decimal

    if (!amount || !tenure || isNaN(rate) || loanRate.value === "") {
        alert("Please fill in all fields correctly.");
        return;
    }

    const emi      = (amount * rate * Math.pow(1 + rate, tenure)) /
                     (Math.pow(1 + rate, tenure) - 1);
    const total    = emi * tenure;
    const interest = total - amount;

    loanEmi.textContent       = "₹ " + Math.floor(emi).toLocaleString('en-IN');
    loanPrinciple.textContent  = "₹ " + Math.floor(amount).toLocaleString('en-IN');
    loanInterest.textContent   = "₹ " + Math.floor(interest).toLocaleString('en-IN');
    loanTotal.textContent      = "₹ " + Math.floor(total).toLocaleString('en-IN');

    // Show result block
    resultSection.style.display = "block";

    // CRITICAL: destroy old chart before making a new one
    if (chartInstance) {
        chartInstance.destroy();
        chartInstance = null;
    }

    const ctx = document.getElementById("loanChart").getContext("2d");

    chartInstance = new Chart(ctx, {
        type: "pie",
        data: {
            labels: ["Principle", "Interest"],
            datasets: [{
                backgroundColor: ["#961251", "#000000"],
                data: [Math.floor(amount), Math.floor(interest)],
                borderWidth: 2,
                borderColor: "#fff"
            }]
        },
        options: {
            responsive: false,          // ← disables auto-resize entirely
            maintainAspectRatio: false, // ← lets our CSS box control size
            animation: { duration: 600 },
            plugins: {
                legend: {
                    position: 'top',
                    labels: {
                        font: { family: 'Poppins', size: 13 },
                        padding: 16
                    }
                },
                title: { display: false }
            }
        }
    });
});