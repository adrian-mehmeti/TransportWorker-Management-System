<template>
    <div class="cont">
        <div class="form">
            <form action="">
            <h1>Register</h1>
            <input type="text" class="name" placeholder="Emri" v-model="Register.Emri"/>
            <input type = "text"  class="surname" placeholder="Mbiemri" v-model="Register.Mbiemri"/>
            <input type = "text"  class="email" placeholder="Email" v-model="Register.Email"/>
            <input type = "text"  class="emaili" placeholder="Emaili Personal" v-model="Register.EmailPrivat"/>
            <input type = "password"  class="pass" placeholder="Paswordi" v-model="Register.Paswordi"/>
            <button class="register" @click = "create">Register</button>
            </form>
        </div>
    </div>




</template>

<script>
import ServiceRegister from '../services/ServiceRegister'
export default {
    name : "Register",
    data(){
        return{
            Register:{
                Emri:null,
                Mbiemri:null,
                Email:null,
                EmailPrivat:null,
                Paswordi:null
            }
        }
    },

    methods:{
        async create(){
            await ServiceRegister.post(this.Register)
            this.$router.push({
                name:`AdminHome`
            })
        }
    }
}
</script>

<style scoped>
.cont {
    position: relative;
    width: 25%;
    height: 100%;
    padding: 10px 25px;
    margin: 10vh auto;
    background: #fff;
    border-radius: 8px;

    background-color: rgb(230, 221, 221);
}

.form {
    width: 100%;
    height: 100%;
    
}
h1, h2, .name, .pass, .surname, .number, .email, .emaili  {
    text-align: center;
    display: block;
}

h1 {
    color: #606060;
    font-weight: bold;
    font-size: 40px;
    margin: 30px auto;
}

.name, .pass, .register, .surname, .number, .email, .emaili  {
    width: 100%;
    height: 40px;
    border: none;
    border-radius: 5px;
    font-size: 20px;
    font-weight: lighter;
    margin-bottom: 30px;
}

.name, .pass, .login, .surname, .number, .email, .emaili {
    background: #ffffff; 
}

.register {
    color: #fff;
    cursor: pointer;
    margin-top: 20px;
    background-color: rgb(4, 107, 107);
    transition: background 0.4s ease;
}

.login:hover { 
    background-color: teal;
}

@media only screen and (min-width : 280px) {
  .cont{ width: 60% }
}

@media only screen and (min-width : 480px) {
  .cont{ width: 50% }
}

@media only screen and (min-width : 768px) {
  .cont{ width: 40% }
}

@media only screen and (min-width : 992px) {
  .cont{ width: 30% }
}

h2{ color: #fff; margin-top: 25px; }
</style>