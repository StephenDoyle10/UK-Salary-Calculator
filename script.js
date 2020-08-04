

//function to make sure numbers display as units of money, with commas in the right place, ie 100000 displays as £100,000 and not £100000
function thous(num)
  {
    var num_parts = num.toString().split(".");
    num_parts[0] = num_parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return num_parts.join(".");
  }

function earnings() {
  
  var gross = parseInt(document.getElementById("salCalc").elements.namedItem("name1").value);
  //var y = parseInt(document.getElementById("replace").elements.namedItem("name2").value);
  //var z = parseInt(document.getElementById("replace").elements.namedItem("name3").value);
  event.preventDefault();

  if(gross>0&&gross<=12500){

    if (gross<=9500){
      let totalNI = 0;
      let totalIT = 0;
      let totalTax = totalNI+totalIT;
      let yearlyGrossMinusTax = gross-totalTax;
      let takeHomeMonthly = (gross-totalTax)/12;
      document.getElementById("result").innerHTML = 
        "Your gross annual pay (in other words, pay before tax) is <strong>£"+thous(gross.toFixed(2))+"</strong>."
        +"<br>Your take home pay for the year is <strong>£" +thous(yearlyGrossMinusTax.toFixed(2))+ "</strong>, which works out at <strong>£" +thous(takeHomeMonthly.toFixed(2))+ "</strong> per month. "
        +"<br>This means that over the year you will pay <strong>£"+thous(totalIT)+"</strong> in income tax, and <strong>£" +thous(totalNI) +"</strong> in National Insurance.";}
    else {
        let totalNI = (gross-9500)*0.12;
        let totalIT = 0;
        let totalTax = totalNI+totalIT;
        let yearlyGrossMinusTax = gross-totalTax;
        let takeHomeMonthly = (gross-totalTax)/12;
        document.getElementById("result").innerHTML = 
          "Your gross annual pay (in other words, pay before tax) is <strong>£"+thous(gross.toFixed(2))+"</strong>."
          +"<br>Your take home pay for the year is <strong>£" +thous(yearlyGrossMinusTax.toFixed(2))+ "</strong>, which works out at <strong>£" +thous(takeHomeMonthly.toFixed(2))+ "</strong> per month. "
          +"<br>This means that over the year you will pay <strong>£"+thous(totalIT)+"</strong> in income tax, and <strong>£" +thous(totalNI) +"</strong> in National Insurance.";}
}

  else if (gross>12500&&gross<=50000){
      let totalNI = (gross-9500)*0.12;
      let totalIT= (gross-12500)*0.2;
      let totalTax = totalNI+totalIT;
      let yearlyGrossMinusTax = gross-totalTax;
      let takeHomeMonthly = (gross-totalTax)/12;

    document.getElementById("result").innerHTML = 
    "Your gross annual pay (in other words, pay before tax) is <strong>£"+thous(gross.toFixed(2))+"</strong>."
          +"<br>Your take home pay for the year is <strong>£" +thous(yearlyGrossMinusTax.toFixed(2))+ "</strong>, which works out at <strong>£" +thous(takeHomeMonthly.toFixed(2))+ "</strong> per month. "
          +"<br>This means that over the year you will pay <strong>£"+thous(totalIT)+"</strong> in income tax, and <strong>£" +thous(totalNI) +"</strong> in National Insurance.";}
  



  else if (gross>50000&&gross<=100001){
      let niTaxBand1 = 4860;
      let niTaxBand2 = (gross-50000)*0.02;
      let totalNI = niTaxBand1+niTaxBand2;
      let incomeTaxBand1 = 7500;
      let incomeTaxBand2 = (gross-50000)*0.4;
      let totalIT = incomeTaxBand1+incomeTaxBand2;
      let totalTax = totalNI+totalIT;
      let yearlyGrossMinusTax = gross-totalTax;
      let takeHomeMonthly = (gross-totalTax)/12;


    document.getElementById("result").innerHTML = 
    "Your gross annual pay (in other words, pay before tax) is <strong>£"+thous(gross.toFixed(2))+"</strong>."
          +"<br>Your take home pay for the year is <strong>£" +thous(yearlyGrossMinusTax.toFixed(2))+ "</strong>, which works out at <strong>£" +thous(takeHomeMonthly.toFixed(2))+ "</strong> per month. "
          +"<br>This means that over the year you will pay <strong>£"+thous(totalIT)+"</strong> in income tax, and <strong>£" +thous(totalNI) +"</strong> in National Insurance.";
  }
    

    else if (gross>100001&&gross<=125000){
      let personalAllowance = 12500-((gross-100000)/2);
      let personalAllowanceReduction = 12500-personalAllowance;
      let incomeTaxBand1 = 7500;
      let incomeTaxBand2 = (gross-(50000-personalAllowanceReduction))*0.4;
      let totalIT = incomeTaxBand1+incomeTaxBand2;
      let niTaxBand1 = 4860;
      let niTaxBand2 = (gross-50000)*0.02;
      let totalNI = niTaxBand1+niTaxBand2;
      let totalTax = totalIT + totalNI;
      let yearlyGrossMinusTax = gross-totalTax;
      let takeHomeMonthly = (gross-totalTax)/12;

      document.getElementById("result").innerHTML =
      "Your gross annual pay (in other words, pay before tax) is <strong>£"+thous(gross.toFixed(2))+"</strong>."
          +"<br>Your take home pay for the year is <strong>£" +thous(yearlyGrossMinusTax.toFixed(2))+ "</strong>, which works out at <strong>£" +thous(takeHomeMonthly.toFixed(2))+ "</strong> per month. "
          +"<br>This means that over the year you will pay <strong>£"+thous(totalIT)+"</strong> in income tax, and <strong>£" +thous(totalNI) +"</strong> in National Insurance." 
      ;

    }
    else if (gross>125000&&gross<=150000){
      let niTaxBand1=4860;
      let niTaxBand2=(gross-50000)*0.02;
      let totalNI = niTaxBand1+niTaxBand2;
      let incomeTaxBand1 = 7500;
      let incomeTaxBand2 = (gross-37500)*0.4;
      let totalIT = incomeTaxBand1+incomeTaxBand2;
      let totalTax = totalNI + totalIT;
      let yearlyGrossMinusTax = gross-totalTax;
      let takeHomeMonthly = (gross-totalTax)/12;

      document.getElementById("result").innerHTML = 
      "Your gross annual pay (in other words, pay before tax) is <strong>£"+thous(gross.toFixed(2))+"</strong>."
          +"<br>Your take home pay for the year is <strong>£" +thous(yearlyGrossMinusTax.toFixed(2))+ "</strong>, which works out at <strong>£" +thous(takeHomeMonthly.toFixed(2))+ "</strong> per month. "
          +"<br>This means that over the year you will pay <strong>£"+thous(totalIT)+"</strong> in income tax, and <strong>£" +thous(totalNI) +"</strong> in National Insurance." 
      ;


      

    }else if (gross>150000){
      let niTaxBand1=4860;
      let niTaxBand2=(gross-50000)*0.02;
      let totalNI = niTaxBand1+niTaxBand2;
      let incomeTaxBand1 = 7500;
      let incomeTaxBand2 = 45000;
      let incomeTaxBand3 = (gross-150000)*0.45;
      let totalIT = incomeTaxBand1+incomeTaxBand2+incomeTaxBand3;
      let totalTax = totalNI + totalIT;
      let yearlyGrossMinusTax = gross-totalTax;
      let takeHomeMonthly = (gross-totalTax)/12;

      document.getElementById("result").innerHTML = "Your gross annual pay (in other words, pay before tax) is <strong>£"+thous(gross.toFixed(2))+"</strong>."
          +"<br>Your take home pay for the year is <strong>£" +thous(yearlyGrossMinusTax.toFixed(2))+ "</strong>, which works out at <strong>£" +thous(takeHomeMonthly.toFixed(2))+ "</strong> per month. "
          +"<br>This means that over the year you will pay <strong>£"+thous(totalIT)+"</strong> in income tax, and <strong>£" +thous(totalNI) +"</strong> in National Insurance." 
      ;


    }
  else if(gross<=0){document.getElementById("result").innerHTML = "Error. Illegible amount entered.";}
  else {document.getElementById("result").innerHTML = "Error. Illegible amount entered.";}

}










