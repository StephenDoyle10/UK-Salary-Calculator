

//function to make sure numbers display as units of money, with commas in the right place, ie 100000 displays as £100,000 and not £100000
export function thous(num: string):string {
  const num_parts = num.split(".");
  num_parts[0] = num_parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return num_parts.join(".");
};

export function earnings(gross: number):string {
  
  const outputTotal = (totalIT: number, totalNI: number):string => {
    const totalTax = totalNI + totalIT;
    const yearlyGrossMinusTax = gross - totalTax;
    const takeHomeMonthly = (gross - totalTax) / 12;
    return (
      "Your gross annual pay (in other words, pay before tax) is <strong>£" +
      thous(gross.toFixed(2)) +
      "</strong>.<br>Your take home pay for the year is <strong>£" +
      thous(yearlyGrossMinusTax.toFixed(2)) +
      "</strong>, which works out at <strong>£" +
      thous(takeHomeMonthly.toFixed(2)) +
      "</strong> per month.<br>This means that over the year you will pay <strong>£" +
      thous(totalIT.toFixed()) +
      "</strong> in income tax, and <strong>£" +
      thous(totalNI.toFixed()) +
      "</strong> in National Insurance."
    );
  };
  if (gross > 0 && gross <= 12500) {
    if (gross <= 9500) {
      const totalNI = 0;
      const totalIT = 0;

      return outputTotal(totalIT, totalNI);
    } else {
      const totalNI = (gross - 9500) * 0.12;
      const totalIT = 0;
      return outputTotal(totalIT, totalNI);
    }
  } else if (gross > 12500 && gross <= 50000) {
    const totalNI = (gross - 9500) * 0.12;
    const totalIT = (gross - 12500) * 0.2;
    return outputTotal(totalIT, totalNI);
  } else if (gross > 50000 && gross <= 100001) {
    const niTaxBand1 = 4860;
    const niTaxBand2 = (gross - 50000) * 0.02;
    const totalNI = niTaxBand1 + niTaxBand2;
    const incomeTaxBand1 = 7500;
    const incomeTaxBand2 = (gross - 50000) * 0.4;
    const totalIT = incomeTaxBand1 + incomeTaxBand2;

    return outputTotal(totalIT, totalNI);
  } else if (gross > 100001 && gross <= 125000) {
    const personalAllowance = 12500 - (gross - 100000) / 2;
    const personalAllowanceReduction = 12500 - personalAllowance;
    const incomeTaxBand1 = 7500;
    const incomeTaxBand2 = (gross - (50000 - personalAllowanceReduction)) * 0.4;
    const totalIT = incomeTaxBand1 + incomeTaxBand2;
    const niTaxBand1 = 4860;
    const niTaxBand2 = (gross - 50000) * 0.02;
    const totalNI = niTaxBand1 + niTaxBand2;

    return outputTotal(totalIT, totalNI);
  } else if (gross > 125000 && gross <= 150000) {
    const niTaxBand1 = 4860;
    const niTaxBand2 = (gross - 50000) * 0.02;
    const totalNI = niTaxBand1 + niTaxBand2;
    const incomeTaxBand1 = 7500;
    const incomeTaxBand2 = (gross - 37500) * 0.4;
    const totalIT = incomeTaxBand1 + incomeTaxBand2;

    return outputTotal(totalIT, totalNI);

  } else if (gross > 150000) {
    const niTaxBand1 = 4860;
    const niTaxBand2 = (gross - 50000) * 0.02;
    const totalNI = niTaxBand1 + niTaxBand2;
    const incomeTaxBand1 = 7500;
    const incomeTaxBand2 = 45000;
    const incomeTaxBand3 = (gross - 150000) * 0.45;
    const totalIT = incomeTaxBand1 + incomeTaxBand2 + incomeTaxBand3;

    return outputTotal(totalIT, totalNI);
  } else {
    return "Error. Illegible amount entered.";
  }
}

function htmlEarnings() {
  var gross = parseInt(
    (<HTMLInputElement>document.getElementById("userInput")).value
  );
  event.preventDefault();
  document.getElementById("result").innerHTML = earnings(gross);
}


/* exports.thous = thous;
exports.earnings = earnings; */

