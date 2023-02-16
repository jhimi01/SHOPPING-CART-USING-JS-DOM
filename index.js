
let serial = 0
//  ====================== first button =================

document.getElementById('first-card').addEventListener('click', function (){


    // get the data==========================================
    let firstCardname = document.getElementById('first-name').innerText;
    let productprice = document.getElementById('first-price').innerText;
    let productQuantity = document.getElementById('first-quantity').innerText;



    let totalPrice =  parseInt(productprice) + parseInt(productQuantity);
    console.log(typeof firstCardname, typeof productprice,typeof productQuantity,typeof totalPrice);    




    // show the data===========================================
  displaydata(firstCardname , productprice , productQuantity , totalPrice);
    
   
})
//  ====================== second button =================
document.getElementById('second-card').addEventListener('click', ()=>{
    let firstCardname2 = document.getElementById('second-name').innerText;
    let productprice = document.getElementById('second-price').innerText;
    let productQuantity = document.getElementById('second-quantity').innerText;


    let totalPrice =  parseInt(productprice) - parseInt(productQuantity);
    console.log(typeof firstCardname2, typeof productprice,typeof productQuantity,typeof totalPrice);    

    displaydata(firstCardname2 , productprice , productQuantity , totalPrice);
})


//  ====================== third button =================
document.getElementById('third-card').addEventListener('click', ()=>{
    let firstCardname3 = document.getElementById('third-title').innerText;
    let productprice = document.getElementById('third-price').innerText;
    let productQuantity = document.getElementById('third-quantity').innerText;


    let totalPrice =  parseInt(productprice) * parseInt(productQuantity);
    console.log(typeof firstCardname3, typeof productprice,typeof productQuantity,typeof totalPrice);    

    displaydata(firstCardname3 , productprice , productQuantity , totalPrice);
})




//  ====================== fourth button =================
// using event object from browser event
document.getElementById('four-card').addEventListener('click', (e)=>{

    let productname = e.target.parentNode.parentNode.children[0].innerText;
    let productprice = e.target.parentNode.parentNode.children[2].children[0].innerText;
    let productQuantity = e.target.parentNode.parentNode.children[3].children[0].innerText;

    let totalPrice = parseInt(productprice) % parseInt(productQuantity);

    console.log(productname , productprice , productQuantity , totalPrice)
    displaydata(productname , productprice , productQuantity , totalPrice);
});



//  ====================== fourth button =================
document.getElementById('last-card').addEventListener('click', ()=>{
    let name = document.getElementById('last-title').innerText;
    let firstInput = document.getElementById('first-input').value;
    let secondInput = document.getElementById('second-input').value;

    let totaltq = parseFloat(firstInput) + parseFloat(secondInput);

    displaydata(name , firstInput , secondInput , totaltq);


    console.log(firstInput, secondInput)
});





// ============================ common funtion ============================================

// get the all id
// function getId(Id, Id2, Id3) {
//     let firstCardname = document.getElementById(Id).innerText;
//     let productprice = document.getElementById(Id2).innerText;
//     let productQuantity = document.getElementById(Id3).innerText;
//     return firstCardname , productprice , productQuantity;
// }





// get the calculation and append it to the list
function displaydata( firstCardname , productprice , productQuantity , totalPrice ) {
    serial += 1;

    let tr = document.createElement('tr');
    tr.innerHTML =  `<th>${serial}</th>
    <td>${firstCardname}</td>
    <td>${productprice}</td>
    <td>${productQuantity}</td>
    <td>${totalPrice}</td>`
    let forappendcontainer = document.getElementById('table-container');
    forappendcontainer.appendChild(tr);
}

// for of loop using on click==============================
// let allbtn = document.querySelectorAll('button');
// for (const btn of allbtn) {
//     btn.addEventListener('click', (e) => {
//      let targets = e.target.innerText;
//      e.target.parentNode.style.color = 'red';
//      e.target.parentNode.parentNode.style.backgroundColor = 'skyblue';
//      console.log(targets);
//     })
// }


