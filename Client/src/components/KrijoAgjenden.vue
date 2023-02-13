<template>
    <div class="KrijoAgjenden">
        <Sidebar />
        <div class="page_wrap">
            <h2 class="heading_agjenda"> Krijo Agjenden </h2>
            <div class="krijo_agjenden">
                <div class="form">    
                    <div class="form-group">
                        <label for="puntori" >Puntori:</label>
                        <select name="puntoret" class="select_control">
                            <option v-for="employe in employes" :key="employe.PuntoriId" >{{employe.Emri}}{{employe.Mbiemri}}</option>
                        </select>
                        <label class="right-inline" for="Lokacioni" >Lokacioni:</label>
                        <select name="Lokacionet" class="select_control">
                            <option v-for="location in locations" :key="location.LokacionetId" >{{location.EmriObjektit}},{{location.Rruga}}</option>
                        </select>
                    </div>

                    <div class="form-group">
                        <label for="produkti" >Mjetet:</label>
                        <select name="puntore" class="select_control">
                            <option v-for="truck in trucks" :key="truck.MjetetId" > {{truck.Modeli}},{{truck.Tipi}}</option>
                        </select>
                    
                        <label class="right-inline" for="produkti" >Produktet:</label>
                        <select name="puntore"  class="select_control">
                            <option v-for="product in products" :key="product.ProduktiId" > {{product.EmriProduktit}},{{product.LlojiProduktit}}</option>
                        </select>
                    </div>

                    <div class="form-group">
                        <label for="Sasia" class="right-inline ">Sasia:</label><input type="text" id = "sasia">
                    </div>
                </div> 
            </div>
                    <div class="search_btn"><button>Ruaj</button></div>  
                
        </div>
        
        
    </div>
    
</template>

<script>
import Sidebar from './Sidebar'
import ServiceEmploye from '../services/ServiceEmploye'
import ServiceLocation from '../services/ServiceLocation'
import ServiceTruckTransport from '../services/ServiceTruckTransport'
import ServiceProducts from '../services/ServiceProducts'

export default {
    name:'KrijoAgjenden',
    components:{
        Sidebar 
    },
    data(){
        return{
            employes:null,
            locations:null,
            trucks:null,
            products:null
        }
    },

    async mounted(){
        this.employes = (await ServiceEmploye.index()).data
        this.locations = (await ServiceLocation.index()).data
        this.trucks = (await ServiceTruckTransport.index()).data
        this.products = (await ServiceProducts.index()).data
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
.heading_agjenda {
    font-size: 35px;
    text-align: center;
}

.krijo_agjenden {
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
    background-color: rgb(230, 228, 217);
}

/*  Agjend Form   */

.form-group {
    display: flex;
    flex-direction: row;
}

.form-group input {
    width: 100%;
    height: 30px;
    border: none;
    border-radius: 5px;
    font-size: 20px;
    font-weight: lighter;
    margin-bottom: 30px;
    padding-left: 14px;
}

.form-group label {
    flex: none;
    display: block;
    width: 125px;
    font-weight: bold;
    font-size: 1rem;

}

.form-group label.right-inline {
    text-align: right;
    padding-right: 8px;
    padding-left: 10px;
}

.form-group .select_control {
    flex: 1 1 auto;
    display: block;
    margin-bottom: 30px;
    padding: 5px;
    margin-top: -4px;
    
}

/*   Table Form    */


table {
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
.search_btn button {
    margin-top: 15px;
     background-color: teal;
    border: none;
    width: 110px;
    height: 35px;
    color: #ffffff;
    border-radius: 5px;
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