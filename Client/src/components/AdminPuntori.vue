<template>
    <div class="AdminPuntori">
        <Sidebar />
        <div class="page_wrap">
            <button class="header_btn" @click="navigateTo({name:'KrijoPuntorin'})">Krijo Puntorin </button>
            <h2 class="PuntoriH">Puntoret</h2>
            <div class="search_wrap">
                <div class="search_input">
                    <input type="search" name="" value=""
                    placeholder="Kerko Puntorin" v-model="search" />
                    <div class="search_btn"><button> Kerko</button></div>
                </div>
            </div>
            <div class="puntoret_content">
                <ul class="cards">
                    <li class="cards_item" v-for="employe in employes" :key="employe.PuntoriId"  >
                        <div class="card">
                            <div class="card_image">
                                <img src="https://picsum.photos/500/300/?image=10" alt="">
                            </div>
                            <div class="card_content">
                                <h2 class="card_title">{{employe.Emri}}, {{employe.Mbiemri}} </h2>
                                <p class="card_text">{{employe.StatusiPunes}}</p>
                                <button class="btn card_btn" @click="navigateTo({
                                    name:'ProfiliPuntorit' ,
                                    params:{
                                        emID : employe.PuntoriId
                                        }
                                    })" >Shiqo Me Shume
                                </button>
                            </div>  
                        </div>
                    </li>
                    
                </ul>
                
            </div>
            
        </div> 
        
    </div>
    
</template>

<script>
import _ from 'lodash'
import Sidebar from './Sidebar'
import ServiceEmploye from '../services/ServiceEmploye'

export default {
    name:'AdminPuntori',
    components:{
        Sidebar 
    },

    data(){
        return{
            employes:null,
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
               name:'AdminPuntori'
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
                this.employes = (await ServiceEmploye.index(value)).data
            }
        }
        

    }
    

}


</script>

<style scoped>
*,
*::before,
*::after {
  box-sizing: border-box;
}
.page_wrap {
    margin-left: 200px;
    padding: 1px 16px;
    max-width: 1200px;
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
/*   Heading     */
.PuntoriH {
    color: rgb(48, 44, 44);
    font-size: 35px;
    text-align: center;
}

/*   Search    */
.search_wrap {
    margin: 70px auto;
    width: 80%;
    margin-top: 50px;
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

@media(max-width:667px){
  .search_wrap {width: 98%;}
  .search_input {padding-right: 90px;}
  .search_btn button {width: 80px;}
}

@media screen and (max-width: 700px) {
  .page_wrap {
    margin-left: 0;
    }

}

/*   Puntori Content    */
.puntoret_content {
  color: #272727;
  font-family: 'Quicksand', serif;
  font-style: normal;
  font-weight: 400;
  letter-spacing: 0;
  /* padding: 2rem; */
}

/*   Card   */
.cards {
    display: flex;
    flex-wrap: wrap;
    list-style: none;
    margin: 0;
    padding: 0;
    
}

.cards_item {
    display: flex;
    padding: 1rem;
    
}

@media (min-width: 40rem) {
  .cards_item {
    width: 50%;
  }
}

@media (min-width: 56rem) {
  .cards_item {
    width: 33.3333%;
  }
}

.card {
    background-color: teal;
    border-radius: 0.25rem;
    box-shadow: 0 20px 40px -14px rgba(0, 0, 0, 0.25);
    display: flex;
    flex-direction: column;
    overflow: hidden;
}

.card_content {
    padding: 1rem;
    /* background: linear-gradient(to bottom left, #EF8D9C 40%, #FFC39E 100%); */
}

.card_title {
    color: #ffffff;
    font-size: 1.1rem;
    letter-spacing: 1px;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    text-transform: capitalize;
    margin: 0px;
}

.card_text {
    color: white;
    font-size: 0.875rem;
    line-height: 1.5;
    margin-bottom: 1.25rem;
    
}

img {
    height: auto;
    max-width: 100%;
    vertical-align: middle;
}


.btn {
    color:black;
    padding: 0.8rem;
    font-size: 14px;
    text-transform: uppercase;
    border-radius: 4px;
    font-weight: 550;
    display: block;
    width: 100%;
    cursor: pointer;
    border: 1px solid rgba(255, 255, 255, 0.2);
    /* background: transparent; */
}

.btn:hover {
    background-color: rgba(255, 255, 255, 0.12);
}

</style>
