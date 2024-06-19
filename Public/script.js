
function openExclusive() {

document.getElementById("overlayExclusive").style.display = "block";

 //open the paystack's payment modal
}
function closeExclusive() {

document.getElementById("overlayExclusive").style.display = "none";

 //open the paystack's payment modal
}
function openExclusive2() {
var phoneNo = document.getElementById('phone').value;
  var email = document.getElementById('email').value;

fetch('http://localhost:8000/exclusive', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
 body: JSON.stringify({
 email:email,
 amount:phoneNo,



})
        })
        .then(response => response.json())
        .then(data => {
            console.log('Server response:', data);
            // You can handle the server response as needed
        })
        .catch(error => {
            console.error('Error sending data to server:', error);
        });


    var handler = PaystackPop.setup({
        key: 'pk_live_8db47ccef2cfc6bc1148849f867225a5de373772', //put your public key here
        email:  email, //put your customer's email here
        amount:8000*100, //amount the customer is supposed to pay
        metadata: {
            custom_fields: [
                {
                    display_name: "Mobile Number",
                    variable_name: "mobile_number",

                }
            ]
        },
        callback: function (response) {
           if (response.status){
          document.getElementById("centerExclusive").style.display = "block";
          document.getElementById("overlayExclusive").style.display = "none";

           }




        },
        onClose: function () {
            //when the user close the payment modal
            alert('Transaction cancelled');
        }
    });
    handler.openIframe(); //open the paystack's payment modal


 //open the paystack's payment modal
}

function openStandard() {

document.getElementById("overlayStandard").style.display = "block";

 //open the paystack's payment modal
}

function closeStandard() {

document.getElementById("overlayStandard").style.display = "none";

 //open the paystack's payment modal
}

function openStandard2() {
var phoneNo = document.getElementById('phone').value;
  var email = document.getElementById('email').value;

fetch('http://localhost:8000/standard', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
 body: JSON.stringify({
 email:email,
 amount:phoneNo,



})
        })
        .then(response => response.json())
        .then(data => {
            console.log('Server response:', data);
            // You can handle the server response as needed
        })
        .catch(error => {
            console.error('Error sending data to server:', error);
        });


    var handler = PaystackPop.setup({
        key: 'pk_live_8db47ccef2cfc6bc1148849f867225a5de373772', //put your public key here
        email:  email, //put your customer's email here
        amount:4000*100, //amount the customer is supposed to pay
        metadata: {
            custom_fields: [
                {
                    display_name: "Mobile Number",
                    variable_name: "mobile_number",

                }
            ]
        },
        callback: function (response) {
           if (response.status){
          document.getElementById("centerStandard").style.display = "block";
          document.getElementById("overlayStandard").style.display = "none";

           }




        },
        onClose: function () {
            //when the user close the payment modal
            alert('Transaction cancelled');
        }
    });
    handler.openIframe(); //open the paystack's payment modal


 //open the paystack's payment modal
}

function openBasic() {
 document.getElementById("overlayBasic").style.display = "block";
 //open the paystack's payment modal
}

function closeBasic() {
 document.getElementById("overlayBasic").style.display = "none";
 //open the paystack's payment modal
}
function openBasic2() {

var phoneNo = document.getElementById('phone').value;
  var email = document.getElementById('email').value;

    fetch('http://localhost:8000/basics', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
 body:JSON.stringify({
 phoneNo:phoneNo,
 email: email,


  })
           })
        .then(response =>  response.json())
        .then( async data => {
          document.getElementById("centerBasic").style.display = "block";
          document.getElementById("overlayBasic").style.display = "none";

        })
        .catch(error => {
            console.error('Error sending data to server:', error);
        });

 //open the paystack's payment modal
}

// function contact() {

// var phoneNo = document.getElementById('phone').value;
//   var email = document.getElementById('email').value;

//     fetch('https://www.mpageshub.com/contact', {
//             method: 'POST',
//             headers: {
//               'Content-Type': 'application/json'
//             },
//  body:JSON.stringify({
//  phoneNo:phoneNo,
//  email: email,


//   })
//            })
//         .then(response =>  response.json())
//         .then( async data => {
//           document.getElementById("centerBasic").style.display = "block";
//           document.getElementById("overlayBasic").style.display = "none";

//         })
//         .catch(error => {
//             console.error('Error sending data to server:', error);
//         });

//  //open the paystack's payment modal
// }