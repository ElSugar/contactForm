var firebaseConfig = {
  apiKey: "AIzaSyAePhtEgYiuPkZ0X8sLoWe38e4hUTOskc8",
  authDomain: "contactform-3c110.firebaseapp.com",
  databaseURL: "https://contactform-3c110.firebaseio.com",
  projectId: "contactform-3c110",
  storageBucket: "contactform-3c110.appspot.com",
  messagingSenderId: "600979282534",
  appId: "1:600979282534:web:53bc3eacaca878a2beaba7"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

var messagesRef = firebase.database().ref('messages');

document.getElementById('contactform').addEventListener('submit', submitForm);

function submitForm(e){
  e.preventDefault();

  var name = getInputVal('name');
  var email = getInputVal('email');
  var phone = getInputVal('phone');
  var message = getInputVal('message');

  saveMessage(name, email, phone, message);

  document.querySelector('.alert').style.display = 'block';

  setTimeout(function(){
    document.querySelector('.alert').style.display = 'none';
  },3000);

  document.getElementById('contactform').reset();
}

function getInputVal(id){
  return document.getElementById(id).value;
}

function saveMessage(name, email, phone, message){
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    name: name,
    email: email,
    phone: phone,
    message: message
  });
}