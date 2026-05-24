# 💰 Loan EMI Calculator

A clean and responsive **Loan EMI Calculator** built with vanilla HTML, CSS, and JavaScript. Instantly calculate your monthly EMI, total payable amount, and interest — with a visual pie chart breakdown.

![Loan EMI Calculator](https://img.shields.io/badge/Project-Loan%20EMI%20Calculator-darkred?style=for-the-badge)
![HTML](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

---

## ✨ Features

- 📊 **Pie Chart** — Visual breakdown of Principal vs Interest using Chart.js
- 🧮 **Accurate EMI Formula** — Standard reducing balance calculation
- 💵 **Indian Number Formatting** — Amounts displayed in ₹ with `en-IN` locale
- 🚫 **No Frameworks** — Pure HTML, CSS, JavaScript (zero dependencies except Chart.js)
- 📱 **Responsive Layout** — Works on desktop and mobile
- ✅ **Input Validation** — Alerts user if any field is left empty

---

## 🖥️ Demo

> 🔗 **Live Site:** [YOUR_USERNAME.github.io/loan-emi-calculator](https://YOUR_USERNAME.github.io/loan-emi-calculator)

---

## 📸 Screenshot

> Screenshot.png

---

## 🚀 Getting Started

### 1. Clone the repository
```bash
git clone https://github.com/YOUR_USERNAME/loan-emi-calculator.git
```

### 2. Open the project
```bash
cd loan-emi-calculator
```

### 3. Run it
Just open `index.html` in your browser — no build step needed!

---

## 🧮 EMI Formula Used

```
EMI = [P × R × (1+R)^N] / [(1+R)^N - 1]
```

| Variable | Description |
|----------|-------------|
| `P` | Principal Loan Amount |
| `R` | Monthly Interest Rate (Annual Rate ÷ 12 ÷ 100) |
| `N` | Loan Tenure in Months (Years × 12) |

---

## 📁 Project Structure

```
loan-emi-calculator/
│
├── index.html        # Main HTML structure
├── style.css         # Styling and layout
├── calculator.js     # EMI logic and Chart.js integration
└── README.md         # Project documentation
```

---

## 🛠️ Built With

| Technology | Purpose |
|------------|---------|
| HTML5 | Page structure |
| CSS3 | Styling & layout |
| JavaScript (ES6+) | EMI calculation logic |
| [Chart.js](https://www.chartjs.org/) | Pie chart visualization |
| [Google Fonts – Poppins](https://fonts.google.com/specimen/Poppins) | Typography |

---

## 📌 How to Use

1. Enter the **Loan Amount** (in ₹)
2. Enter the **Loan Tenure** (in years)
3. Enter the **Interest Rate** (annual %)
4. Click **"Calculate EMI"**
5. View your Monthly EMI, Principal, Interest, and Total amount — with a pie chart!

---

## 🙋‍♂️ Author

**Your Name**
- GitHub: [@YOUR_USERNAME](https://github.com/YOUR_USERNAME)
- LinkedIn: [Your LinkedIn](https://linkedin.com/in/YOUR_PROFILE)

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

⭐ **If you found this helpful, give it a star!**
