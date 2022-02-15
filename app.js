
//level 3
function updateProductNumber(product, price, isIncreasing){
    const productInput = document.getElementById(product+ '-number');
    const productNumber=productInput.value;
    if(isIncreasing){
        productInput.value= parseInt(productNumber)+1;
    }
    else if(productNumber>0){
        productInput.value= parseInt(productNumber)-1;
    }
    //update case total
    const productTotal = document.getElementById(product+'-total');
    productTotal.innerText= productInput.value*price;
    
}

function getInputValue(product) {
    const productInput = document.getElementById(product + '-number');
    const productNumber = parseInt(productInput.value);
    return productNumber;
}

function calculateTotal() {
    const phoneTotal = getInputValue('phone') * 1219;
    const caseTotal = getInputValue('case') * 59;
    const subTotal = phoneTotal + caseTotal;
    const tax = subTotal / 10;
    const totalPrice = subTotal + tax;
    // update on the html
    document.getElementById('sub-total').innerText = subTotal;
    document.getElementById('tax-amount').innerText = tax;
    document.getElementById('total-price').innerText = totalPrice;
}




//level 2
// function updateCaseNumber(isIncreasing){
//     const caseInput = document.getElementById('case-number');
//     const caseNumber=caseInput.value;
//     if(isIncreasing){
//         caseInput.value= parseInt(caseNumber)+1;
//     }
//     else if(caseNumber>0){
//         caseInput.value= parseInt(caseNumber)-1;
//     }
//     //update case total
//     const caseTotal = document.getElementById('case-total');
//     caseTotal.innerText= caseInput.value*59;
// }
// function updatePhoneNumber(isIncreasing){
//     const phoneInput = document.getElementById('phone-number');
//     const phoneNumber=phoneInput.value;
//     if(isIncreasing){
//         phoneInput.value= parseInt(phoneNumber)+1;
//     }
//     else if(phoneNumber>0){
//         phoneInput.value= parseInt(phoneNumber)-1;
//     }
//     //update phone total
//     const phoneTotal = document.getElementById('phone-total');
//     phoneTotal.innerText= phoneInput.value*1219;
    
// }

//level 1

// handle caseInput+ button event
document.getElementById('case-plus').addEventListener('click', function(){
    updateProductNumber('case', 59,true);
    calculateTotal();
  
    // const caseInput = document.getElementById('case-number');
    // const caseNumber=caseInput.value;
    // caseInput.value= parseInt(caseNumber)+1;
    // console.log(caseNumber);
})


// handle caseInput- button event
 document.getElementById('case-minus').addEventListener('click', function(){
    updateProductNumber('case', 59, false);
    calculateTotal();
    
    // const caseInput = document.getElementById('case-number');
    // const caseNumber=caseInput.value;
    //caseInput.value= parseInt(caseNumber)-1;
    // // console.log(caseNumber);
})

// // handle phoneInput+ button event
document.getElementById('phone-plus').addEventListener('click', function(){
    updateProductNumber('phone', 1219, true);
    calculateTotal();
//     getUpdatedQuantity( true);
//     // const phoneInput = document.getElementById('phone-number');
//     // const phoneNumber=phoneInput.value;
//     // phoneInput.value= parseInt(phoneNumber)+1;
//     // console.log(caseNumber);
})


// // handle phoneInput- button event
 document.getElementById('phone-minus').addEventListener('click', function(){
    updateProductNumber('phone', 1219, false);
    calculateTotal();
//     getUpdatedQuantity( false);
//     // const phoneInput = document.getElementById('phone-number');
//     // const phoneNumber=phoneInput.value;
//     // phoneInput.value= parseInt(phoneNumber)-1;
//     // // console.log(caseNumber);
})
