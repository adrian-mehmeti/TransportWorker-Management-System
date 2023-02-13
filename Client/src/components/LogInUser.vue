<template>

<div class="cont">
  <h2>User</h2>
  <div class="form">
    <form action="">
      <h1>Login</h1>
      <input type="text"
             class="user"
             placeholder="Username"
              v-model="email"
             />
      <input type="password" 
             class="pass"
             placeholder="Password"
             v-model="password"/>
      <button class="login" @click="login">Login</button>
    </form>
  </div>
</div>
</template>

<script>
import ServiceEmploye from '../services/ServiceEmploye'
export default {
    name:"LogInUser",
    data(){
      return {
        email:'',
        password:'',
        error:null
      }
    },
    methods:{
        async login(){
            try{
                 const response = await ServiceEmploye.login({
                    email:this.email,
                    password:this.password
                })
                if(response.data == 'connect'){
                 this.$router.push({
                  name:`AgjendaDitoreUser`
                  })
                  
                }else{
                  console.log('deshtoj')
                 
                }
            }catch(error){
                this.error = error.response.data.error
            }
        }
    }
}
</script>

<style scoped>

/* * {
    margin: 0;
    padding: 0;
    outline: none;
    box-sizing: border-box;
} */
/* body {
     background: #d2e6f3; 
} */

.cont {
    position: relative;
    width: 25%;
    height: 100%;
    padding: 10px 25px;
    margin: 10vh auto;
    background: #fff;
    border-radius: 8px;
    background-color: rgb(230, 228, 217);
}

.form {
    width: 100%;
    height: 100%;
}
h1, h2, .user, .pass {
    text-align: center;
    display: block;
}

h1 {
    color: #606060;
    font-weight: bold;
    font-size: 40px;
    margin: 30px auto;
}

.user, .pass, .login {
    width: 100%;
    height: 45px;
    border: none;
    border-radius: 5px;
    font-size: 20px;
    font-weight: lighter;
    margin-bottom: 30px;
}



.login {
    color: #fff;
    cursor: pointer;
    margin-top: 20px;
    background: #3598dc;
    transition: background 0.4s ease;
}

.login:hover { 
    background: #3570dc; 
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