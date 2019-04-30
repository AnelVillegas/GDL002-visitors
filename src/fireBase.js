// Initialize Firebase
var config = {
    apiKey: "AIzaSyDwRc0-RFbV2K8EnhMN3tfJ_3ZBR3ukJ2k",
    authDomain: "visitors-e2702.firebaseapp.com",
    databaseURL: "https://visitors-e2702.firebaseio.com",
    projectId: "visitors-e2702",
    storageBucket: "visitors-e2702.appspot.com",
    messagingSenderId: "1043185901581"
  };

  
  firebase.initializeApp(config);
  var db = firebase.firestore();

  //Función para agregar un usario nuevo

 
//   //Boton Guradar
// const sendButton = document.querySelector('#sendButton');


//     sendButton.addEventListener('click', (e) => {
//         e.preventDefault(e);
      
//     let name = document.querySelector('#name').value;
//     let lastName = document.querySelector('#lastName').value;
//     let celPhone = document.querySelector ('#celPhone').value;
//     let email = document.querySelector('#email').value;
//     let company = document.querySelector('#company').value;
    
//     db.collection("coworkers").add({
//         name: name,
//         lastName: lastName,
//         celphone: celPhone,
//         email: email,
//         company: company,
        
//     })
//     .then(function(docRef) {
//         console.log("Document written with ID: ", docRef.id);
//     })
//     .catch(function(error) {
//         console.error("Error adding document: ", error);
//     });
//     console.log(name, lastName, celPhone, email, company);
// });

//Agregar información de visitante
signUpVisitor.addEventListener("click", () => {
    
    let name = document.querySelector('#visitorName').value;
    let email = document.querySelector('#visitorEmail').value;
    let host = document.querySelector('#coWorkerName').value;
    let timeInnew =new Date();
    let timeOut = document.querySelector('#timeOut').value;

    console.log(name, email, host, timeInnew, timeOut); 

    db.collection("visitor").add({
        visitorName: name,
        visitorEmail: email,
        coworker: host,
        arriveTime: timeInnew,
        exitTime: timeOut || '00:00:00',
        photo:photUrl,
    })
    .then(function(docRef) {
        console.log("Document written with ID: ", docRef.id);
    })
    .catch(function(error) {
        console.error("Error adding document: ", error);
    });

    }
);

