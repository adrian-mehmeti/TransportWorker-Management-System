<template>
    <div class="Profili">
        <Sidebar />
        <div class="page_wrap">
            <h2 class="profil" > Profili Puntorit </h2><br>
            <div class="profile_view">
                    <img src= "../assets/profile.png">
                <div class="profileCard">
                    <div class="form-group">
                        <span>Emri: <span id = "txt">{{employe.Emri}}</span></span>
                        <span class="right-inline">Mbiemri:<span id = "txt"> {{employe.Mbiemri}}</span></span>
                    </div>

                    <div class="form-group">
                        <span>Data e Lindjes: <span id = "txt"> {{employe.DataLindjes}}</span></span>
                        <span class="right-inline" >Email:<span id = "txt"> {{employe.Email}}</span></span>
                    </div>
                    <div class="form-group">
                        <span>Numri telfonit:<span id = "txt"> {{employe.NumriTelefonit}}</span></span>  
                        <span class="right-inline" >Statusi<span id = "txt"> {{employe.StatusiPunes}}</span></span>  
                    </div>

                    <div class="form-button">
                        <button class="btn_left" @click="navigateTo({
                            name:'EditoProfilin',
                            params:{
                                emID:employe.PuntoriId
                            }
                        })" >Edito</button>
                        <button class="btn_right" @click="deleteRecord()">Fshije</button>
                    </div>

                </div>
            </div>
        </div>    
    </div>
    
</template>

<script>
import Sidebar from './Sidebar'
import ServiceEmploye from '../services/ServiceEmploye'

export default {
    name:'ProfiliPuntorit',
    components:{
        Sidebar 
    },
    data(){
        return{
            employe:null
        }
    },
    methods:{
        navigateTo(route){
            this.$router.push(route)
        },

        deleteRecord(){
                const emID = this.$route.params.emID
                ServiceEmploye.delete(emID)
                alert("DeleteRecord")
                this.$router.push({name:'AdminPuntori'})  
        }
    },
    async mounted (){
        const emID = this.$route.params.emID
        this.employe = (await ServiceEmploye.show(emID)).data
    }
}


</script>

<style scoped>
.page_wrap {
    margin-left: 200px;
    padding: 1px 16px;
    max-width: 1200px;
}

.profil {
    /* color: rgb(48, 44, 44); */
    font-size: 35px;
    text-align: center;
}

.profile_view {
    width: 90%;
    height: 100%;
    padding: 40px 15px 20px 15px;
    margin: 5vh auto;
    background: #fff;
    border-radius: 8px;
    background-color: rgb(201, 216, 241);
    
}

.form-group {
    display: flex;
    /* flex-direction: row; */
    margin-top: 15px;
    /* justify-content: right; */
    flex-direction: row;
}

.form-group span {
    width: 100%;
    height: 30px;
    border: none;
    border-radius: 5px;
    font-size: 20px;
    font-weight: lighter;
    margin-bottom: 30px;
    padding-left: 14px;
}

.btn_left {
    padding: 10px 15px 5px 15px;
    margin-right: 5%;
    border-radius: 5px;
    border: none;
    background-color: rgb(4, 107, 107);
    color: white;
    font-weight: bold;
}
.btn_left:hover {
    background-color: rgb(28, 168, 168);
}
.btn_right {
    padding: 10px 15px 5px 15px;
    margin-right: 5%;
    border-radius: 5px;
    border: none;
    background-color: rgb(4, 107, 107);
    color: white;
    font-weight: bold;
}

.btn_right:hover {
    background-color: rgb(28, 168, 168);
}

.form-button {
    padding: 10px;
    display: flex;
    justify-content: center;

}

@media screen and (max-width: 700px) {
  .page_wrap {
    margin-left: 0;
    }

}


@media(max-width:667px) {
    .profile_view{
        width: 98%;
    }
    .form-group{
        padding-right: 90px;
    }
    .search_btn button {
        width: 80px;
    }
}


</style>