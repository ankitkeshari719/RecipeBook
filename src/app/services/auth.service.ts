import * as firebase from 'firebase';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()
export class AuthService {
    token: string;

    constructor(private router: Router){}

    // Function to signup
    signupUser(email: string, password: string) {
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .catch(
                error => console.log("Error->", error)
            )
    }

    // Function to signin 
    signinUser(email: string, password: string) {
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(
                response => {
                    this.router.navigate(['/']);
                    // Getting current user token after signIn
                    firebase.auth().currentUser.getIdToken()
                        .then(
                            (token: string) =>  this.token = token
                            
                        )
                }
            )
            .catch(
                error => console.log("Error->", error)
            )
    }

    // Funtion to logout
    logout(){
        firebase.auth().signOut();
        this.token = null;
        this.router.navigate(['/signin']);
    }

    // Function to get the token
    getToken() {
        firebase.auth().currentUser.getIdToken()
            .then(
                (token: string) => this.token = token
            )
        return this.token;
    }

    // Function to check wheather the user is authenticated or not
    isAuthenticated(){
        return this.token != null;
    }
}