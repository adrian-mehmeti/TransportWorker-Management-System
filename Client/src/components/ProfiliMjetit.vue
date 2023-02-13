<template>
    <div class="ProfiliMjetit">
        <SidebarUser />
        <div class="page_wrap">
            <h2 class="heading"> Profili Mjetit </h2>
            <div class="profili_mjetit">
                <div class="form">    
                     <div class="form">    
                    <div class="form-group">
                        <label for="Modeli" >Modeli :</label> <span>{{truck.Modeli}}</span>
                        <label for="Tipi" class="right-inline ">Tipi :</label> <span>{{truck.Tipi}}</span>
                    </div>
                    <div class="form-group">
                        <label for="Statusi" >Statusi :</label> <span>{{truck.Gjendja}}</span>
                        <label for="Viti Prodhimit" class="right-inline ">Viti Prodhimit: </label> <span>{{truck.VitiProdhimit}}</span>
                    </div>
                    <div class="form-group1">
                        <label for="kodiP" >Madhesia :</label> <span>{{truck.Madhesia}}</span>
                    </div>
                </div>
                <div class="form-button">
                        <button class="btn_left" >Edito</button>
                        <button class="btn_right" @click="deleteRecord()">Fshije</button>
                </div>
            </div>
        </div>
        </div>
    </div>
    
</template>

<script>
import SidebarUser from './SidebarUser'
import ServiceTruckTransport from '../services/ServiceTruckTransport'

export default {
    name:'Profilimjetit',
    components:{
        SidebarUser 
    },
    data(){
        return{
            truck:null
        }
    },
    methods:{
        navigateTo(route){
            this.$router.push(route)
        },

        deleteRecord(){
            const emID = this.$route.params.emID
            ServiceTruckTransport.delete(emID)
            alert("DeleteRecord")
            this.$router.push({name:'ListaMjeteve'})  
        }
    },
    async mounted (){
        const emID = this.$route.params.emID
        this.truck = (await ServiceTruckTransport.show(emID)).data
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
.heading{
    font-size: 35px;
    text-align: center;
}

.profili_mjetit {
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

/*   Form-Group   */
.form-group {
    display: flex;
    flex-direction: row;
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




.form-group1 {
    display: flex;
    flex-direction: row;
}
.form-group1 input {
    width: 33%;
    height: 30px;
    border: none;
    border-radius: 5px;
    font-size: 20px;
    font-weight: lighter;
    margin-bottom: 30px;
    padding-left: 14px;
}

.form-group1 label {
    flex: none;
    display: block;
    width: 125px;
    font-weight: bold;
    font-size: 1rem;
    padding-top: 5px;

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
    padding-top: 5px;

}

.form-group label.right-inline {
    text-align: right;
    padding-right: 8px;
    padding-left: 20px;
    margin-left: 80px;

}

span {
    margin-top: 5px;
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
   margin-bottom: 40px;
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