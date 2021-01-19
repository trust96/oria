import firebase from './firebase';

const auth = firebase.auth();

const signIn= (email,password)=>{
 auth.signInWithEmailAndPassword(email, password)
 .then(()=>{
     console.log('logged in succesfully')
 })
}

const signOut = ()=>{
    auth.signOut()
    .then(()=>{
        console.log('signed out successfully')
    })
}

export {signIn,signOut};