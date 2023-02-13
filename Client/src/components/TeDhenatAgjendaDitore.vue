<template>
   <div class="KrijoAgjenden">
        <Sidebar />
        <div class="page_wrap">
            <h2 class="heading_agjenda"> Krijo Agjenden </h2>
            <div class="krijo_agjenden">
                <div class="form">    
                    <div class="form-group">
                        <label for="Emri" >Emri :</label><input type="text" >
                        <label for="Mbiemri" class="right-inline ">Mbiemri:</label><input type="text" id = "sasia">
                    </div>

                    <div class="form-group">
                        <label for="Lokacioni">Lokacioni :</label><input type="text" >
                        <label for="Mjeti" class="right-inline ">Mjeti:</label><input type="text" id = "sasia">
                    </div>

                    <div class="form-group">
                        <label for="Orari" >Orari :</label><input type="text" >
                        <label for="Statusi" class="right-inline ">Statusi:</label><input type="text" id = "sasia">
                    </div>
                </div>
            </div>
             <div class="table_info" > 
                    
                    <table>
                    <tr>
                        <th>Klienti</th>
                        <th>Lokacioni</th>
                        <th>Produktet</th>
                    </tr>
                    <tr>
                        <td>{{dailyAgendas.emri}} {{dailyAgendas.mbiemri}}</td>
                        <td>{{dailyAgendas.objekti}}</td>
                        <td>{{dailyAgendas.produkti}}</td>
                    </tr>
                    </table>
                </div>
        </div>
        
        
    </div>
    
</template>

<script>
import Sidebar from './Sidebar'
import ServiceAgendas from "../services/ServiceAgendas"

export default {
    name:'DhenatAgjenda',
    components:{
        Sidebar 
    },
    data(){
        return{
            dailyAgendas:null
        }
    },
    async mounted (){
        const emID = this.$route.params.emID
        this.dailyAgendas = (await ServiceAgendas.show(emID)).data
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

/*   Form-Group   */
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