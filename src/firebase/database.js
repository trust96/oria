import firebase from './firebase';

const db = firebase.firestore();
const date = new Date().toLocaleDateString();
const writeReport = (report)=>{
    db.collection('Admin').doc().set(report)
    .then(()=>{
        console.log('written successfully');
    })
    .catch((err)=>{
        console.log('this ia the error :' ,err)
    })
};



export {date, writeReport}