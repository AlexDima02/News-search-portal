import { Injectable } from '@angular/core';
import { Firestore, collectionData, collection, addDoc, doc, deleteDoc, setDoc } from '@angular/fire/firestore';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged } from '@angular/fire/auth'
import { v4 as uuid } from 'uuid';


@Injectable({
  providedIn: 'root'
})
export class FirebaseDatabaseService {

  auth = getAuth();
  constructor(private firebase: Firestore) {}

  getNews(){
    
    let newsCollection = collection(this.firebase, 'news')
    return collectionData(newsCollection);

  }
  
  addNews(value: any){

    let currentIndex = uuid()
    console.log(currentIndex)
    let newsCollection = doc(this.firebase, 'news', currentIndex);
    return setDoc(newsCollection, {...value, id: currentIndex, saved:true});

  }

  deleteNews(id:string){

    let docRef = doc(this.firebase, 'news', id);
    return deleteDoc(docRef);

  }

  signUp(email:string, password:string){

    return createUserWithEmailAndPassword(this.auth ,email, password);

  }

  fetchCurrentUser(){

    let user = null
    onAuthStateChanged(this.auth, (res:any) => {

      if(res){

       return user = res

      }

    });

  }

}
