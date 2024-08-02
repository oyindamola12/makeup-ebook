const express = require('express');
const app = express();
const PORT = process.env.PORT || 8000;
const bodyparser = require('body-parser');
const admin = require('firebase-admin');
const path =require('path')
const bodyParser = require('body-parser');
const { initializeApp} = require( "firebase/app");
const publicPath=path.join(__dirname,'Public')
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(publicPath))

app.use(express.json({ limit: "1000mb", extended: true }));
app.use(express.urlencoded({  limit: "1000mb", extended: true, parameterLimit: 50000}));

// const serviceAccount = require('./dynasty-18f4b-firebase-adminsdk-bgho6-7138e0b250.json');
app.set('view engine', 'ejs');

// admin.initializeApp({
//   credential: admin.credential.cert(serviceAccount),
//   // databaseURL: "https://mpages-6ed7a-default-rtdb.firebaseio.com",

// });

const firebaseConfig = {
  apiKey: "AIzaSyCeO26540I6nx59K7252zo3-TQ-Wp9CMuk",
  authDomain: "dynasty-18f4b.firebaseapp.com",
  projectId: "dynasty-18f4b",
  storageBucket: "dynasty-18f4b.appspot.com",
  messagingSenderId: "879185725666",
  appId: "1:879185725666:web:e7ec9ab6802d0d499436bb"
};

initializeApp(firebaseConfig);




app.listen(PORT, ()=> console.log('App is listening on url http://localhost:' + PORT))
