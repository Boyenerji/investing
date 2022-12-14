const CurrentPriceBuy = document.getElementById('buy_price'),
      NumberStockBuy = document.getElementById('numberStockBuy'),
      CurrentPriceSell = document.getElementById('sell_price'),
      resultInput03 = document.getElementById('resultInput03'),
      resultInput004 = document.getElementById('resultInput004'),
      kom03 = document.getElementById('kom03'),
      budget = document.getElementById('budget'),
      cena_stock = document.getElementById('cena_stock'),
      resultInputComis = document.getElementById('resultInputComis')
      output_price = document.getElementById('output_price');


let nal;


CurrentPriceSell.addEventListener('input', () => { payment(); });
NumberStockBuy.addEventListener('input', () => { payment(); });
CurrentPriceBuy.addEventListener('input', () => { payment(); });



cena_stock.addEventListener('input', () => { 
    output_price.innerHTML = Math.round(budget.value / cena_stock.value * 1) / 1 + ' шт';
});



// function nalog() {
//     if (kom03.checked) {
//         return 0.3;
//     }else{
//         return 0.04;
//     }
// }


function payment() {
    
    //0.3
    const resultSumBuy03 = CurrentPriceBuy.value * NumberStockBuy.value + (CurrentPriceBuy.value * NumberStockBuy.value/100 * 0.3);
    const resultSumSell03 = CurrentPriceSell.value * NumberStockBuy.value - (CurrentPriceSell.value * NumberStockBuy.value/100 * 0.3);

    let result03 = Math.round((resultSumSell03 - resultSumBuy03) * 100) / 100;
    resultInput03.innerHTML = result03;

    //0.04
    const resultSumBuy004 = CurrentPriceBuy.value * NumberStockBuy.value + (CurrentPriceBuy.value * NumberStockBuy.value/100 * 0.04);
    const resultSumSell004 = CurrentPriceSell.value * NumberStockBuy.value - (CurrentPriceSell.value * NumberStockBuy.value/100 * 0.04);

    let result004 = Math.round((resultSumSell004 - resultSumBuy004) * 100) / 100;
    resultInput004.innerHTML = result004;

    //Без комсы
    let resultSumNoComis = (CurrentPriceSell.value * NumberStockBuy.value) - (CurrentPriceBuy.value * NumberStockBuy.value);
    console.log(resultSumNoComis);
    resultInputComis.innerHTML = parseInt(resultSumNoComis * 100) / 100;

}

function goString(text) {
    return text.toLocaleString();
}

