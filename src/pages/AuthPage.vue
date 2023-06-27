<template>
    <div class='container'>
        <h2 class="text">Log in</h2>
        <div class="form">
            <my-input v-model="userLogIn.userLogin" title="Login" id="Login" type="email" />
            <my-input v-model="userLogIn.userPassword" title="Password" type="password" id="Password"/>
            <a @click="() => {signDialog = true}" class="text-decoration-none mt-2" href="#">Sign up</a>
            <button @click="logIn" type="button" class="btn btn-primary">Log in</button>
        </div>
        <my-dialog v-model:show="signDialog">
            <h3 class="mt-1 mb-4 p-2">Sign up</h3>
            <my-input v-model="userSignUp.userAuthEmail" title="Email" id="EmailUp" type="email" />
            <my-input v-model="userSignUp.userAuthUsername" title="Username" id="LoginUp"/>
            <my-input v-model="userSignUp.userAuthPassword" title="Password" type="password" id="PasswordUp"/>
            <div class="form-check">
              <input class="form-check-input" type="checkbox" checked value="" id="accept">
              <label class="form-check-label fs-6 text-center" for="accept">
                <strong>accept privacy</strong>
              </label>
            </div>
            <button @click="singUp" type="button" class="btn btn-up btn-primary ml-auto">Sign up</button>
        </my-dialog>
    </div>
</template>

<script>
import axios from 'axios'
    export default {
       data() {
        return {
            userSignUp: {
            userAuthEmail: '',
            userAuthUsername: '',
            userAuthPassword: '',
            },
            userLogIn: {
            userLogin: '',
            userPassword: '',
            token: '',
            signDialog: false
            },
        }
       },
       methods: {
        logIn() {
            console.log(this.userLogIn)
        },
       async singUp() {
            axios.request({  method: 'post',
            maxBodyLength: Infinity,
            url: `http://localhost:3000/auth/sigup?
            email=${this.userSignUp.userAuthEmail}&
            username=${this.userSignUp.userAuthUsername}&
            passowrd=${this.userSignUp.userAuthPassword}`,
            headers: { }})
            .then((response) => {
                console.log(JSON.stringify(response.data)); //Awnser
            })
            .catch((error) => {
                alert(error);
            });

        }
        
       }
    }
</script>

<style scoped>

.container {
    margin-top: 65px;
    width: 45%;
    border: 1px rgb(107, 107, 107) solid;
    padding: 25px;
}
.form {
    display: flex;
    flex-direction: column;
    padding: 25px;
}
.btn {
    margin-left: auto;
    margin-right: 15px;
    padding: 10px;
    min-width: 135px;
}

.btn-up {
 margin-top: 25px;
 width: 100%;
}
.modal {
    background-color: red;
}
</style>