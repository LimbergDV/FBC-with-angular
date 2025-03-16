import { error } from "console";
import { initializeApp } from "firebase/app";
import { getMessaging, getToken } from "firebase/messaging";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCbitWscKqUdRWe9tlo1lO3C2kpB128Hew",
  authDomain: "goair-fcm.firebaseapp.com",
  projectId: "goair-fcm",
  storageBucket: "goair-fcm.firebasestorage.app",
  messagingSenderId: "485424992997",
  appId: "1:485424992997:web:4a5a74b1b941a2ea093a0c"
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
