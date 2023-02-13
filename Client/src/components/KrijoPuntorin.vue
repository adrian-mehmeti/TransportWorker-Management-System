<template>
    <div class="KrijoPuntorin">
        <Sidebar />
        <div class="page_wrap">
            <h2 class="header"> Krijo puntorit</h2><br>
            <div class="form-group">
                <div class="form-img">
                    <img src= "../assets/profile.png">
                </div>
                <form class="form">
                    <input type="text" class="name" placeholder="Emri" v-model="employe.Emri"/>
                    <input type = "text"  class="surname" placeholder="Mbiemri" v-model="employe.Mbiemri"/>
                    <input type = "text"  class="lindjes" placeholder="Data e lindjes: " v-model="employe.DataLindjes"/>
                    <input type = "text"  class="statusi" placeholder="Statusi: " v-model="employe.StatusiPunes"/>
                    <input type = "text"  class="email" placeholder="Email" v-model="employe.Email"/>
                    <input type = "text"  class="number" placeholder="Numri Telefonit: " v-model="employe.NumriTelefonit"/>
                    <button class="register" @click="create">Regjistro</button>
                </form>
            </div>
        </div>
    </div>
    
</template>

<script>
import Sidebar from './Sidebar'
import ServiceEmploye from '../services/ServiceEmploye'

export default {
    name:'KrijoPuntorin',
    components:{
        Sidebar 
    },
    data(){
        return{
            employe:{
                Emri:null,
                Mbiemri:null,
                Email:null,
                DataLindjes:null,
                StatusiPunes:null,
                NumriTelefonit:null
            }
        }
    },

    methods:{
        async create(){
            await ServiceEmploye.post(this.employe)
            this.$router.push({name:'AdminPuntori'})  
        }
    }
}


</script>

<style scoped>
.page_wrap {
    margin-left: 200px;
    padding: 1px 16px;
    max-width: 1200px;
}
.form {
    display: flex;
    flex-direction: column;
    padding: 10px 25px;
    margin: 2vh auto;
    
}
.form-img {
    display: flex;
    justify-content: center;
}


.id, .name, .surname, .lindjes, .statusi, .email, .total, .number, .register  {
    width: 100%;
    height: 30px;
    border: none;
    border-radius: 5px;
    font-size: 20px;
    font-weight: lighter;
    margin-bottom: 30px;
    text-align: center;
    display: block;
}

.register {
    color: #fff;
    cursor: pointer;
    margin-top: 20px;
    background-color: rgb(4, 107, 107);
    transition: background 0.4s ease;
}

.register:hover { 
    background: teal; 
}

.header {
    font-size: 35px;
    text-align: center;
}
.form-group {
    display: flex;
    flex-direction: column;
    margin: 70px auto;
    width: 50%;
    height: 100%;
    margin-top: 50px;
     background: #fff;
    border-radius: 8px;
    background-color: rgb(201, 216, 241);
}


@media(max-width:667px) {
    .search_wrap{
        width: 98%;
    }
    .search_input{
        padding-right: 90px;
    }
    .search_btn button {
        width: 80px;
    }
}
@media screen and (max-width: 700px) {
  .page_wrap {
    margin-left: 0;
    }

}
</style>