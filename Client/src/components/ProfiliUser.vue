<template>
    <div class="Profili">
        <SidebarUser />
        <div class="page_wrap">
            <h2 class="profil" > Profili </h2><br>
            <div class="profile_view">
                    <img src= "../assets/profile.png">
                <div class="profileCard">
                    <div class="form-group">
                        <span>Emri: <span id = "txt">FILAN</span></span>
                        <span class="right-inline">Mbiemri:<span id = "txt"> FISTEKU</span></span>
                    </div>

                    <div class="form-group">
                        <span>Data e Lindjes: <span id = "txt"> 1.1.1980</span></span>
                        <span class="right-inline" >Email:<span id = "txt"> FILAN.FISTEKU@GMAIL.COM</span></span>
                    </div>
                    <div class="form-group">
                        <span>Numri telfonit:<span id = "txt"> 044-123-456</span></span>  
                        <span class="right-inline" >Adressa<span id = "txt"> Abudallah Tahiri</span></span>  
                    </div>
                </div>
            </div>
        </div>    
    </div>
    
</template>

<script>
import SidebarUser from './SidebarUser'


export default {
    name:'Profili',
    components:{
        SidebarUser 
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