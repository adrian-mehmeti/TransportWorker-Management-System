<template>
   <div class="kerkesaproduktit">
        <Sidebar />
        <div class="page_wrap">
            <h2 class="heading_product"> Kerkesat e Produktit</h2>
             <div class="table_info" > 
                    
                    <table>
                        <tr>
                            <th>Emri </th>
                            <th>Mbiemri  </th>
                            <th>Kerkesa</th>
                        </tr>
                        <tr v-for="requests in request" :key="requests.LokacionetId">
                            <td>{{requests.emri}}</td>
                            <td>{{requests.mbiemri}}</td>
                            <td>{{requests.informacioni}}</td>
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
    name:'KerkesaProdukit',
    components:{
        Sidebar 
    },
    data(){
        return{
            request:null
        }
    },

    async mounted(){
        this.request = (await ServiceRequest.getProdukt()).data
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
.heading_product {
    margin-top: 5%;
    font-size: 35px;
    text-align: center;
}


/*   Table Form    */
table {
    margin-top: 5%;
    padding: 5px;
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

.search_btn {
    width: 20%;
    margin: 0 auto;
    display: block;
}

/*   Media Query     */

@media (max-width: 768px) {
   .form-group {
     flex-direction: column;
    
   }
   .form-group .input-control {
     margin-top: 2px;
   
   }
   .form-group label.right-inline {
     text-align: left;  
     padding-right: 0;
     padding-left: 0;
      
   }
}

@media (max-width: 768px) {
   .krijo_agjenden {
     padding: 20px 8px;
   }
}

 @media screen and (max-width: 700px) {
  .page_wrap {
    margin-left: 0;
    }

}
</style>