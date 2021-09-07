"use strict";
//To compile ts file to js file, in terminal: tsc logic.ts
exports.__esModule = true;
exports.earnings = exports.thous = void 0;
//function to make sure numbers display as units of money, with commas in the right place, ie 100000 displays as £100,000 and not £100000
function thous(num) {
    var num_parts = num.split(".");
    num_parts[0] = num_parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return num_parts.join(".");
}
exports.thous = thous;
;
function earnings(gross) {
    var fullSummary = function (totalIT, totalNI) {
        var totalTax = totalNI + totalIT;
        var yearlyGrossMinusTax = gross - totalTax;
        var takeHomeMonthly = (gross - totalTax) / 12;
        return ("Your gross annual pay (in other words, pay before tax) is <strong>£" +
            thous(gross.toFixed(2)) +
            "</strong>.<br>Your take home pay for the year is <strong>£" +
            thous(yearlyGrossMinusTax.toFixed(2)) +
            "</strong>, which works out at <strong>£" +
            thous(takeHomeMonthly.toFixed(2)) +
            "</strong> per month.<br>This means that over the year you will pay <strong>£" +
            thous(totalIT.toFixed()) +
            "</strong> in income tax, and <strong>£" +
            thous(totalNI.toFixed()) +
            "</strong> in National Insurance.");
    };
    if (gross > 0 && gross <= 12500) {
        if (gross <= 9500) {
            var totalNI = 0;
            var totalIT = 0;
            return fullSummary(totalIT, totalNI);
        }
        else {
            var totalNI = (gross - 9500) * 0.12;
            var totalIT = 0;
            return fullSummary(totalIT, totalNI);
        }
    }
    else if (gross > 12500 && gross <= 50000) {
        var totalNI = (gross - 9500) * 0.12;
        var totalIT = (gross - 12500) * 0.2;
        return fullSummary(totalIT, totalNI);
    }
    else if (gross > 50000 && gross <= 100001) {
        var niTaxBand1 = 4860;
        var niTaxBand2 = (gross - 50000) * 0.02;
        var totalNI = niTaxBand1 + niTaxBand2;
        var incomeTaxBand1 = 7500;
        var incomeTaxBand2 = (gross - 50000) * 0.4;
        var totalIT = incomeTaxBand1 + incomeTaxBand2;
        return fullSummary(totalIT, totalNI);
    }
    else if (gross > 100001 && gross <= 125000) {
        var personalAllowance = 12500 - (gross - 100000) / 2;
        var personalAllowanceReduction = 12500 - personalAllowance;
        var incomeTaxBand1 = 7500;
        var incomeTaxBand2 = (gross - (50000 - personalAllowanceReduction)) * 0.4;
        var totalIT = incomeTaxBand1 + incomeTaxBand2;
        var niTaxBand1 = 4860;
        var niTaxBand2 = (gross - 50000) * 0.02;
        var totalNI = niTaxBand1 + niTaxBand2;
        return fullSummary(totalIT, totalNI);
    }
    else if (gross > 125000 && gross <= 150000) {
        var niTaxBand1 = 4860;
        var niTaxBand2 = (gross - 50000) * 0.02;
        var totalNI = niTaxBand1 + niTaxBand2;
        var incomeTaxBand1 = 7500;
        var incomeTaxBand2 = (gross - 37500) * 0.4;
        var totalIT = incomeTaxBand1 + incomeTaxBand2;
        return fullSummary(totalIT, totalNI);
    }
    else if (gross > 150000) {
        var niTaxBand1 = 4860;
        var niTaxBand2 = (gross - 50000) * 0.02;
        var totalNI = niTaxBand1 + niTaxBand2;
        var incomeTaxBand1 = 7500;
        var incomeTaxBand2 = 45000;
        var incomeTaxBand3 = (gross - 150000) * 0.45;
        var totalIT = incomeTaxBand1 + incomeTaxBand2 + incomeTaxBand3;
        return fullSummary(totalIT, totalNI);
    }
    else {
        return "Error. Illegible amount entered.";
    }
}
exports.earnings = earnings;
function htmlEarnings() {
    var gross = parseInt(document.getElementById("userInput").value);
    window.event.preventDefault();
    document.getElementById("result").innerHTML = earnings(gross);
}
