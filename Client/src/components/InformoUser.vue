<template>
    <div class="InformoUser">
        <SidebarUser />
        <div class="page_wrap">
            <h2 class="heading_info"> Informo </h2>
            <div class="info_page">
               <textarea v-model="Kerkesa"></textarea>
               <button class="send" @click="create">Dergo</button>
            </div> 
        </div>
        
    </div>
    
</template>

<script>
import SidebarUser from './SidebarUser'
import ServiceRequest from '../services/ServiceRequest'

export default {
    name:'InformoUser',
    components:{
        SidebarUser 
    },
    data(){
        return{
            request:{
                Kerkesa:null,
                Tipi:'informo'
            }
        }
    },
    methods:{
        async create(){
            await ServiceRequest.post(this.request)
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

/*   Heading   */
.heading_info {
    font-size: 35px;
    text-align: center;
}

.info_page {
     display: flex;
     flex-wrap: wrap;
     flex-direction: column; 
     align-items: center;
/*----------------------------------------- */
    width: 90%;
    height: 100%;
    padding: 40px 15px 20px 15px;
    margin: 10vh auto;
    background: #fff;
    border-radius: 8px;
    background-color: rgb(201, 216, 241);
}

.info_page textarea {
    width: 70%;
    height: 200px;
    margin: 2vh auto;
    
    cursor: auto;
}

.send  {
    width: 20%;
    height: 40px;
    border: none;
    border-radius: 5px;
    font-size: 20px;
    font-weight: lighter;
    margin-bottom: 30px;
    text-align: center;
    display: block;
}

.send {
    color: #fff;
    cursor: pointer;
    margin-top: 20px;
    background-color: rgb(4, 107, 107);
    transition: background 0.4s ease;
}

.send:hover { 
    background: teal; 
}

</style>