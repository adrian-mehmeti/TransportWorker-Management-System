<template>
    <div class="KrijoProduktin">
        <Sidebar />
        <div class="page_wrap">
            <h2 class="heading"> Krijo Lokacionin </h2>
            <div class="register_location">
                <div class="form">    
                    <div class="form-group"> 
                        <label for="EmriO" class="right-inline ">Emri Objektit :</label><input type="text"  v-model="location.EmriObjektit">
                    </div>
                    <div class="form-group">
                        <label for="Rruga" >Rruga :</label><input type="text" v-model="location.Rruga">
                        <label for="NrO" class="right-inline ">Numri Objektit: </label><input type="text"  v-model="location.NumriObjektit">
                    </div>
                    <div class="form-group1">
                        <label for="kodiP" >Kodi Postar :</label><input type="text" v-model="location.KodiPostar">
                    </div>
                </div>
                <button class="btn" @click="create">Krijo</button>   
            </div>
        </div>
    </div>
</template>

<script>
import Sidebar from './Sidebar'
import ServiceLocation  from '../services/ServiceLocation'

export default {
    name:'KrijoLokacionin',
    components:{
        Sidebar 
    },
    data(){
        return{
            location:{
                EmriObjektit:null,
                Rruga:null,
                NumriObjektit:null,
                KodiPostar:null
            }
        }
    },
    methods:{
        async create(){
            await ServiceLocation.post(this.location)
            this.$router.push({name:'ListaLokacioneve'}) 
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
.heading{
    font-size: 35px;
    text-align: center;
}

.register_location {
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

.btn {
    display: flex;
    justify-content: center;
    color: #fff;
    cursor: pointer;
    margin-top: 20px;
    background: teal;
    transition: background 0.4s ease;

    width: 10%;
    height: 25px;
    border: none;
    border-radius: 5px;
    font-size: 15px;
    font-weight: lighter;
    margin-bottom: 30px;
    text-align: center;
    display: block;
}
.btn:hover { 
    background-color: rgb(19, 189, 189);
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
/* table {
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
} */

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