<template>
    <div class="EditoProfilin">
        <SidebarUser />
        <h2> Edito Profilin </h2><br>
         <div id="EP">
            <form id="form">
               <img src= "../assets/profile.png"><br><br>
               <span>Emri: </span><input type="text" v-model="employe.Emri"> <br> <br>
               <span>Mbiemri:</span><input type="text" v-model="employe.Mbiemri">  <br><br>
               <span>Data e Lindjes:</span><input type="text" v-model="employe.DataLindjes"> <br> <br>
               <span>Email:</span><input type="text" v-model="employe.Email"> <br><br>
               <span>Password: </span> <input type="text" v-model="employe.Paswordi"> <br><br>
               <span>Nr Telefonit:</span> <input type="text" v-model="employe.NrTelefonit">  
           </form>
           <br>
           <button id ="button1" @click="save">Save</button>
        </div> 
        
    </div>
    
</template>

<script>
import SidebarUser from './SidebarUser'
import ServiceEmploye from '../services/ServiceEmploye'

export default {
    name:'EditoProfilin',
    components:{
        SidebarUser 
    },
    data(){
        return{
            employe:{
                Emri:null,
                Mbiemri:null,
                DataLindjes:null,
                Email:null,
                Paswordi:null,
                NrTelefonit:null
            }
        }

    },

    methods:{
        async save(){
            await ServiceEmploye.put(this.employe)
        }
        
    },
    async mounted(){
        const emID = 1
        this.employe = (await ServiceEmploye.show(emID)).data
    }
}


</script>

<style scoped>
.EditoProfilin h2{
    font-size: 250%;
    text-align: center;
}

#EP{
    height: 600px;
    width: 50%;
    margin-left: 30%;
    border: 1px solid black;

}

#form{
    margin-top: 5%;
    margin-left:25%;
    width: 60%;
}
#button1{
    margin-left:45%;
}



</style>