function openExclusive() {

document.getElementById("overlayExclusive").style.display = "block";

 //open the paystack's payment modal
}
function closeExclusive() {

document.getElementById("overlayExclusive").style.display = "none";

 //open the paystack's payment modal
}

async function openExclusive2() {
var phoneNo = document.getElementById('phoneExclusive').value;
  var email = document.getElementById('emailExclusive').value;
  if(email===''||phoneNo==='' ){
  return alert("Please fill in all mandatory fields");

}
const businessDb =  db.collection('Exclusive');
await businessDb.add({
phoneNo:phoneNo,
email:email,

});


    var handler = PaystackPop.setup({
        key: 'pk_live_b3635cadaea0a7a02518aed3dd9e8ac3d64a83cc', //put your public key here
        email:  email, //put your customer's email here
        amount:20000*100, //amount the customer is supposed to pay
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

async function openStandard2() {
var phoneNo = document.getElementById('phoneStandard').value;
  var email = document.getElementById('emailStandard').value;
if(email===''||phoneNo==='' ){
 return alert("Please fill in all mandatory fields");

}
const businessDb =  db.collection('Standard');
await businessDb.add({
phoneNo:phoneNo,
email:email,

});

document.getElementById("centerStandard2").style.display = "block";
document.getElementById("overlayStandard").style.display = "none";
    // var handler = PaystackPop.setup({
    //     key: 'pk_live_b3635cadaea0a7a02518aed3dd9e8ac3d64a83cc', //put your public key here
    //     email:  email, //put your customer's email here
    //     amount:2000*100, //amount the customer is supposed to pay
    //     metadata: {
    //         custom_fields: [
    //             {
    //                 display_name: "Mobile Number",
    //                 variable_name: "mobile_number",

    //             }
    //         ]
    //     },
    //     callback: function (response) {
    //        if (response.status){
    //       document.getElementById("centerStandard").style.display = "block";
    //       document.getElementById("overlayStandard").style.display = "none";

    //        }




    //     },
    //     onClose: function () {
    //         //when the user close the payment modal
    //         alert('Transaction cancelled');
    //     }
    // });
    // handler.openIframe(); //open the paystack's payment modal


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
async function openBasic2() {

var phoneNo = document.getElementById('phoneBasic').value;
  var email = document.getElementById('emailBasic').value;
if(email===''||phoneNo==='' ){
return  alert("Please fill in all mandatory fields");

}
   const userSnapshot = await
     db.collection('Users') // Replace 'users' with your collection name
      .where('email', '==', email)
      .where('phoneNo', '==', phoneNo)
      .limit(1)
      .get();

    if (!userSnapshot.empty) {
alert('You already downloaded e-book')

 }
const businessDb =  db.collection('Basic');
await businessDb.add({
phoneNo:phoneNo,
email:email,

});
          document.getElementById("centerBasic").style.display = "block";
          document.getElementById("overlayBasic").style.display = "none";

 //open the paystack's payment modal
}

function closebasicCenter() {
 document.getElementById("centerBasic").style.display = "none";
  window.open("https://roubauteezavoak.net/4/8682406");
 //open the paystack's payment modal
}
function closestandardCenter() {
document.getElementById("centerStandard2").style.display = "none";
 window.open("https://roubauteezavoak.net/4/8682406");
 //open the paystack's payment modal
}

function closestandardCenter2() {

 window.open("https://roubauteezavoak.net/4/8682406");
 //open the paystack's payment modal
}
function closeexclusiveCenter() {
          document.getElementById("centerExclusive").style.display = "none";


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

async function contactus() {

var name = document.getElementById('name').value;
  var email = document.getElementById('emailContact').value;
  var message = document.getElementById('message').value;
if(name === ''||email===''||message==='' ){
  alert("Please fill in all mandatory fields");

}

const businessDb =  db.collection('message');
await businessDb.add({
name:name,
email:email,
message:message,

});


 //open the paystack's payment modal
}