<template>
    <div class="AdminHome">
        <Sidebar />
        <div class = "page-content">
            <h3>Informimet</h3>
            <div class="table_info" > 
                
                <table>
                <tr>
                    <th>Emri</th>
                    <th>Email</th>
                    <th>Info</th>
                </tr>
                <tr v-for="request in requests" :key="request.emri">
                    <td>{{request.emri}}</td>
                    <td>{{request.mbiemri}}</td>
                    <td>{{request.informacioni}}</td>
                </tr>
                </table>
            </div>
        </div>
    </div>
    
</template>

<script>
import Sidebar from './Sidebar'
import ServiceRequest from '../services/ServiceRequest'

export default {
    name:'AdminHome',
    components:{
        Sidebar 
    },
    data(){
        return{
            requests:null
        }
    },

    async mounted(){
        this.requests = (await ServiceRequest.getV()).data
    }
}


</script>

<style scoped>

.page-content {
    /* display: inline-block; */
    /* width: 100%; */
    margin-left: 200px;
    padding: 1px 16px;
    height: 900px;
}
/* h2{
    margin: 0;
    padding: 0;
} */
h3{
    text-align: center;
    margin-top: 30px;
    font-size: 30px;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
}

table {
    border-collapse: collapse;
    border-spacing: 0;
    width: 100%;
    border: 1px solid #ddd;
}
th, td {
    text-align: left;
    padding: 8px;
}
tr:nth-child(even){background-color: #f2f2f2}

@media screen and (max-width: 700px) {
  div.page-content {
      margin-left: 0;
  
    /* width: 100%;
    height: 100%;
    position: relative; */
    
    }

}
</style>