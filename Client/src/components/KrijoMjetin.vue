<template>
    <div class="KrijoMjetin">
        <Sidebar />
        <div class="page_wrap">
            <h2 class="header"> Krijo Mjetin</h2><br>
            <div class="form-group">
                <form class="form">
                    <input type="text" class="modeli" placeholder="Modeli:" v-model="truck.Modeli"/>
                    <input type="text" class="tipi" placeholder="Tipi:" v-model="truck.Tipi"/>
                    <input type = "text"  class="vitiP" placeholder="Viti Prodhimit: " v-model="truck.VitiProdhimit"/>
                     <input type = "text"  class="madhesiaP" placeholder="Madhesia: " v-model="truck.Madhesia"/>
                    <input type = "text"  class="statusi" placeholder="Statusi: " v-model="truck.Gjendja"/>
                    <button class="register" @click="create">Regjistro</button>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
import Sidebar from './Sidebar'
import ServiceTruckTransport from '../services/ServiceTruckTransport'

export default {
    name:'KrijoMjetin',
    components:{
        Sidebar 
    },
    data(){
        return{
            truck:{
                Modeli:null,
                Tipi:null,
                VitiProdhimit:null,
                Madhesia:null,
                Gjendja:null
            }
        }
    },
    methods:{
        async create(){
            await ServiceTruckTransport.post(this.truck)
            this.$router.push({name:'ListaMjeteve'})  
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



.modeli, .tipi, .vitiP, .statusi, .register, .madhesiaP {
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
    background-color: teal;
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