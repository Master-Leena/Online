import {auth,createUserWithEmailAndPassword, signInWithEmailAndPassword,signOut ,onAuthStateChanged } from "./firebase-config.js";

const signUpForm = document.getElementById("signUpForm");
if (signUpForm) {
    signUpForm.addEventListener("submit", (e) =>{
        e.preventDefault()
        const name = document.getElementById("name").value
        const email = document.getElementById("email").value
        const password = document.getElementById("password").value
        const confirmPassword = document.getElementById("confirmPassword").value

        if (password !== confirmPassword) {
            alert("do not match password");
            return
        }
        createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    console.log(" userCredential", user)
    alert("your account successfylly create", name)
    window.location.href ="index.html"
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert('Your email is already used',errorCode,errorMessage)
    console.log("Your email already used", errorCode, errorMessage);
    // ..
  });
    })
}


const signInForm = document.getElementById("signInForm")
if (signInForm) {
    signInForm.addEventListener("submit", (e) =>{
        e.preventDefault()

        const email = document.getElementById("email").value
        const password = document.getElementById("password").value
        signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    alert("your account succesfully login", name.value)
    console.log("user", user, userCredential);
    window.location.href = "dashboard.html"
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    if (errorMessage === errorCode) {
      alert("Wrong Password")
      
    } if (errorMessage !== errorCode) {
      
      alert("Signup the Account")
    } 
    
    console.log("error", errorCode, errorMessage);
  });


    })
}
 const logoutbutton = document.getElementById ("logout");
 if (logoutbutton) {
    logoutbutton.addEventListener("click", () =>{
       
signOut(auth).then(() => {
  // Sign-out successful.
  alert("your account successfully logout")
  window.location.href = "index.html"
}).catch((error) => {
  // An error happened.
});
    })
 }



