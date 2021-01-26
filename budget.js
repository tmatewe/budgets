//cash budget

function calc() {
  console.log("clicked");
  var creditPurchases1 = document.getElementById("creditPurchases1");
  var per1 = document.getElementById("per1");
  creditSales1.value = Number(creditPer.value) * Number(sales1.value);
  creditSales2.value = Number(creditPer.value) * Number(sales2.value);
  creditSales3.value = Number(creditPer.value) * Number(sales3.value);
  creditSales4.value = Number(creditPer.value) * Number(sales4.value);
  creditSales5.value = Number(creditPer.value) * Number(sales5.value);
  //purchases
  purchases1.value = Number(purPer.value) * Number(sales1.value);
  purchases2.value = Number(purPer.value) * Number(sales2.value);
  purchases3.value = Number(purPer.value) * Number(sales3.value);
  purchases4.value = Number(purPer.value) * Number(sales4.value);
  purchases5.value = Number(purPer.value) * Number(sales5.value);
  //credit purchases
  creditPurchases1.value = Number(crePurPer.value) * Number(purchases1.value);
  creditPurchases2.value = Number(crePurPer.value) * Number(purchases2.value);
  creditPurchases3.value = Number(crePurPer.value) * Number(purchases3.value);
  creditPurchases4.value = Number(crePurPer.value) * Number(purchases4.value);
  creditPurchases5.value = Number(crePurPer.value) * Number(purchases5.value);
  //cash sales
  cashSales1.value = Number(per1.value) * Number(sales1.value);
  cashSales2.value = Number(per1.value) * Number(sales2.value);
  cashSales3.value = Number(per1.value) * Number(sales3.value);
  cashSales4.value = Number(per1.value) * Number(sales4.value);
  cashSales5.value = Number(per1.value) * Number(sales5.value);
  //column
  leg2.value = Number(creditSales1.value) * Number(per2.value);
  leg3.value = Number(creditSales2.value) * Number(per2.value);
  leg4.value = Number(creditSales3.value) * Number(per2.value);
  leg5.value = Number(creditSales4.value) * Number(per2.value);
  legTwo3.value = Number(creditSales1.value) * Number(per3.value);
  legTwo4.value = Number(creditSales2.value) * Number(per3.value);
  legTwo5.value = Number(creditSales3.value) * Number(per3.value);
  legThree4.value = Number(creditSales1.value) * Number(per4.value);
  legThree5.value = Number(creditSales2.value) * Number(per4.value);
  //row four
  legFour5.value = Number(creditSales1.value) * Number(per5.value);
  console.log(per5.value);
  //total receipts
  receipt1.value =
    Number(cashSales1.value) +
    Number(leg1.value) +
    Number(legTwo1.value) +
    Number(legThree1.value) +
    Number(legFour1.value) +
    Number(incomeOne1.value) +
    Number(incomeTwo1.value);
  receipt2.value =
    Number(cashSales2.value) +
    Number(leg2.value) +
    Number(legTwo2.value) +
    Number(legThree2.value) +
    Number(legFour2.value) +
    Number(incomeOne2.value) +
    Number(incomeTwo2.value);
  receipt3.value =
    Number(cashSales3.value) +
    Number(leg3.value) +
    Number(legTwo3.value) +
    Number(legThree3.value) +
    Number(legFour3.value) +
    Number(incomeOne3.value) +
    Number(incomeTwo3.value);
  receipt4.value =
    Number(cashSales4.value) +
    Number(leg4.value) +
    Number(legTwo4.value) +
    Number(legThree4.value) +
    Number(legFour4.value) +
    Number(incomeOne4.value) +
    Number(incomeTwo4.value);
  receipt5.value =
    Number(cashSales5.value) +
    Number(leg5.value) +
    Number(legTwo5.value) +
    Number(legThree5.value) +
    Number(legFour5.value) +
    Number(incomeOne5.value) +
    Number(incomeTwo5.value);
  //cash purcahses
  cashPurchases1.value = Number(per6.value) * Number(purchases1.value);
  cashPurchases2.value = Number(per6.value) * Number(purchases2.value);
  cashPurchases3.value = Number(per6.value) * Number(purchases3.value);
  cashPurchases4.value = Number(per6.value) * Number(purchases4.value);
  cashPurchases5.value = Number(per6.value) * Number(purchases5.value);
  //first month
  m2.value = Number(per7.value) * Number(creditPurchases1.value);
  m3.value = Number(per7.value) * Number(creditPurchases2.value);
  m4.value = Number(per7.value) * Number(creditPurchases3.value);
  m5.value = Number(per7.value) * Number(creditPurchases4.value);
  //second month
  mt3.value = Number(per7.value) * Number(creditPurchases1.value);
  mt4.value = Number(per7.value) * Number(creditPurchases2.value);
  mt5.value = Number(per7.value) * Number(creditPurchases3.value);
  //total payment
  pay1.value =
    Number(cashPurchases1.value) +
    Number(m1.value) +
    Number(mt1.value) +
    Number(expOne1.value) +
    Number(expTwo1.value) +
    Number(expThree1.value) +
    Number(expFour1.value) +
    Number(expFive1.value);
  pay2.value =
    Number(cashPurchases2.value) +
    Number(m2.value) +
    Number(mt2.value) +
    Number(expOne2.value) +
    Number(expTwo2.value) +
    Number(expThree2.value) +
    Number(expFour2.value) +
    Number(expFive2.value);
  pay3.value =
    Number(cashPurchases3.value) +
    Number(m3.value) +
    Number(mt3.value) +
    Number(expOne3.value) +
    Number(expTwo3.value) +
    Number(expThree3.value) +
    Number(expFour3.value) +
    Number(expFive3.value);
  pay4.value =
    Number(cashPurchases4.value) +
    Number(m4.value) +
    Number(mt4.value) +
    Number(expOne4.value) +
    Number(expTwo4.value) +
    Number(expThree4.value) +
    Number(expFour4.value) +
    Number(expFive4.value);
  pay5.value =
    Number(cashPurchases5.value) +
    Number(m5.value) +
    Number(mt5.value) +
    Number(expOne5.value) +
    Number(expTwo5.value) +
    Number(expThree5.value) +
    Number(expFour5.value) +
    Number(expFive5.value);
  //suplus or deficit
  sur1.value = Number(receipt1.value) - Number(pay1.value);
  sur2.value = Number(receipt2.value) - Number(pay2.value);
  sur3.value = Number(receipt3.value) - Number(pay3.value);
  sur4.value = Number(receipt4.value) - Number(pay4.value);
  sur5.value = Number(receipt5.value) - Number(pay5.value);
  //balances
  cd1.value = Number(sur1.value) + Number(bd1.value);
  bd2.value = Number(cd1.value);
  cd2.value = Number(sur2.value) + Number(bd2.value);
  bd3.value = Number(cd2.value);
  cd3.value = Number(sur3.value) + Number(bd3.value);
  bd4.value = Number(cd3.value);
  cd4.value = Number(sur4.value) + Number(bd4.value);
  bd5.value = Number(cd4.value);
  cd5.value = Number(sur5.value) + Number(bd5.value);
}
document.getElementById("btnBudget").addEventListener("click", calc);
