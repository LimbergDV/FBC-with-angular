import { error } from "console";
import { initializeApp } from "firebase/app";
import { getMessaging, getToken } from "firebase/messaging";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCF9pVJat-dgLqp_2b-lJ0BwnuJfLZTHSU",
    authDomain: "fcm-angular-3dba9.firebaseapp.com",
    projectId: "fcm-angular-3dba9",
    storageBucket: "fcm-angular-3dba9.firebasestorage.app",
    messagingSenderId: "466048844883",
    appId: "1:466048844883:web:294b39d7a547cd8308f2a6",
    measurementId: "G-6G362NS9DT"
  };

  const app = initializeApp(firebaseConfig)
  const messaging = getMessaging(app)

  Notification.requestPermission().then((permission: NotificationPermission) => {
    if(permission === "granted"){
        console.log("granted")
    }else{
        if(permission === "denied"){
            console.log("denied")
        }else{
            console.log("default")
        }
    }
  } )

  navigator.serviceWorker.getRegistration("./ngsw-worker.js")
    .then((registration) => {
        getToken(messaging,
            {
                vapidKey: "BJVJUEjLV_ZAQm7RjfKVfdkR0NRR4Yj8K_281v-1Y_HuIqBRuHS-z0ABJUC5fKDR_aP-QRPryKU0gFGm8dZK_x4",
                serviceWorkerRegistration: registration
            }
          ).then(
            (currentToken) => {
                if(currentToken)
                    console.log(currentToken)
                else
                    console.log("require registration")
            }
          ).catch((error) => {
            console.log(error)
          })
    })
