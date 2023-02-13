<template>
    <div class="AdminHome">
        <Sidebar />
        <div class = "page-content">
           <button class="header_btn"  @click="navigateTo({name:'KrijoProduktin'})">Krijo Produktin </button> 
            <h3>Lista Produkteve</h3>
             <div class="search_wrap">
                <div class="search_input">
                    <input type="search" 
                    placeholder="Kerko Lokacionin" v-model="search"/>
                    <div class="search_btn"><button> Kerko</button></div>
                </div>
            </div>
            <div class="table_info" > 
                
               <table>
                <tr>
                    <th>Emri Produktit</th>
                    <th>Lloji Produktit</th>
                    <th>Sasia</th>
                    <th>Fshi&Edit</th>
                </tr>
                <tr v-for="product in products" :key="product.ProduktiId">
                    <td>{{product.EmriProduktit}}</td>
                    <td>{{product.LlojiProduktit}}</td>
                    <td>{{product.Sasia}}</td>
                    <td><button class="btn_left" @click="deleteRecord(product.ProduktiId)">Fshi</button><button class="btn_right" @click="navigateTo({
                            name:'EditoProduktin',
                            params:{
                                emID:product.ProduktiId
                            }
                        })" >Edit</button></td>
                </tr>
                </table>
            </div>
        </div>
    </div>
    
</template>

<script>
import Sidebar from './Sidebar'
import _ from 'lodash'
import ServiceProducts from '../services/ServiceProducts'

export default {
    name:'ListaProdukteve',
    components:{
        Sidebar 
    },

    data(){
        return{
            products:null,
            search:''
        }
    },
    methods:{
        navigateTo(route){
            this.$router.push(route)
        },
        deleteRecord(id){
                ServiceProducts.delete(id);
                alert("DeleteRecord");
                this.$router.go(this.$router.currentRoute)  
        }
    },
    watch:{
        search:_.debounce(async function(){
           const route = {
               name:'ListaProdukteve'
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
                this.products = (await ServiceProducts.index(value)).data
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


.page-content {
    /* display: inline-block; */
    /* width: 100%; */
    margin-left: 200px;
    padding: 1px 16px;
    height: 900px;
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

.search_btn:hover {
    background-color: rgb(19, 189, 189);
}



.header_btn:hover {
    background-color: rgb(19, 189, 189);
}

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
tr:nth-child(even){
    background-color: #f2f2f2
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