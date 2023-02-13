<template>
   <div class="listaMjetev">
        <Sidebar />
        <div class = "page-content">
           <button class="header_btn"  @click="navigateTo({name:'KrijoMjetin'})">Krijo Mjetin </button> 
            <h3>Lista Mjeteve</h3>
            <div class="search_wrap">
                <div class="search_input">
                    <input type="search" 
                    placeholder="Kerko Mjetin" v-model="search"/>
                    <div class="search_btn"><button> Kerko</button></div>
                </div>
            </div>
            <div class="table_info" > 
                
                <table>
                <tr>
                    <th>Modeli</th>
                    <th>Tipi</th>
                    <th>Viti</th>
                    <th>Statusi</th>
                    <th>View</th>
                </tr>
                <tr v-for="truck in trucks" :key="truck.MjetetId" >
                    <td>{{truck.Modeli}}</td>
                    <td>{{truck.Tipi}}</td>
                    <td>{{truck.VitiProdhimit}}</td>
                    <td>{{truck.Gjendja}}</td>
                    <button @click="navigateTo({
                            name:'ProfiliMjetit',
                            params:{
                                emID:truck.MjetetId
                            }
                        })">View</button>
                </tr>
                </table>
            </div>
        </div>
    </div>
    
</template>

<script>
import Sidebar from './Sidebar'
import _ from 'lodash'
import ServiceTruckTransport from '../services/ServiceTruckTransport'

export default {
    name:'ListaMjeteve',
    components:{
        Sidebar 
    },
    data(){
        return{
            trucks:null,
            search:''
        }
    },
    methods:{
        navigateTo(route){
            this.$router.push(route)
        }
    },
    watch:{
        search:_.debounce(async function(){
           const route = {
               name:'ListaMjeteve'
           }
           if(this.search !== ''){
               route.query = {
                   search:this.search
               }
           }
           this.$router.push(route);
        },700),
        '$route.query.search':{
            immediate:true,
            async handler(value){
                this.trucks = (await ServiceTruckTransport.index(value)).data
            }
        }
    }
    

}


</script>

<style scoped>
.search_wrap {
    margin: 70px auto;
    width: 80%;
    margin-top: 50px;
}

.header_btn {
    margin-top: 20px;
    padding: 10px;
    border-radius: 5px;
    border: none;
    background-color: teal;
    color: white;
    font-weight: bold;
}

.header_btn:hover {
    background-color: rgb(19, 189, 189);
}



.search_input {
    overflow: hidden;
    padding-right: 120px;
    position: relative;
}

.search_input input {
    width: 100%;
    padding-left: 10px;
    height: 35px;
    border-radius: 5px;
}

.search_btn {
    position: absolute;
    right: 0;
    top: 0;
    background-color: rgba(255, 255, 255, 0.12);

}


.search_btn button {
    background-color: teal;
    border: none;
    width: 110px;
    height: 35px;
    color: #fff;
    border-radius: 4px;
}


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



@media(max-width:667px){
  .search_wrap {width: 98%;}
  .search_input {padding-right: 90px;}
  .search_btn button {width: 80px;}
}
</style>