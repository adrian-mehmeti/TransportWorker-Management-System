<template>
    <div class="agjendaDitore">
        <SidebarUser />
        <div class="page_wrap">
            <h2 class="kerkesatPuntorit">Kerkesat e Puntorit</h2>    
            <div class="search_wrap">
                <div class="search_input">
                    <input type="search" name="" value="" placeholder="Kerko Agjenden Ditore">
                    <div class="search_btn"><button>Kerko</button></div>  
                </div>
            </div>
            <hr>
            <div class="kerkesat_content">
                <ul class="cards">
                    <li class="cards_item" v-for="request in requests" :key="request.emri">
                        <div class="card">
                            <div class="card_image">
                                 <img src="https://picsum.photos/500/300/?image=10" alt="">
                            </div>
                            <div class="card_content">
                                <h2 class="card_title">{{request.emri}},{{request.mbiemri}} </h2>
                                <p class="card_text">{{request.informacioni}}</p>
                                <button class="btn card_btn">Shiqo Me Shume</button>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
        
    </div>
    
</template>

<script>
import SidebarUser from './SidebarUser'
import ServiceRequest from '../services/ServiceRequest'

export default {
    name:'KerkesaPuntorit',
    components:{
        SidebarUser 
    },
    data(){
        return{
            requests:null
        }
    },

    async mounted(){
        this.requests = (await ServiceRequest.getPersonale()).data
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

/*       Heading     */
.kerkesatPuntorit {
    /* color: rgb(48, 44, 44); */
    font-size: 35px;
    text-align: center;
}

/*      Search      */
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
    top: 0;
    right: 0;
}

.search_btn button {
    background-color: teal;
    border: none;
    width: 110px;
    height: 35px;
    color: #ffffff;
    border-radius: 5px;
}

/*   Agjenda Content   */

.kerkesat_content {
    color: #272727;
    font-family: 'Quicksand', serif;
    font-style: normal;
    font-weight: 400;
    letter-spacing: 0;
    padding: 2rem;
}

/*  Card     */
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

@media(min-width: 40rem) {
    .cards_item {
        width: 50%;
    }
}

@media(min-width: 56rem) {
    .cards_item {
        width: 33.3333%;
    }
}

.card {
    background-color: teal;
    border-radius: 0.25rem;
    box-shadow: 0 20px 40px -14px rgba(0, 0, 0, 0.25);
    display:flex ;
    flex-direction: column;
    overflow: hidden;
}

.card_content {
    padding: 1rem;
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
    color: #ffffff;
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
    color: black;
    padding: 0.8rem;
    font-size: 14px;
    text-transform: capitalize;
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



@media(max-width:667px) {
    .search_wrap{
        width: 98%;
    }
    .search_input{
        padding-right: 90px;
    }
    .search_btn button {
        width: 80px;
    }
}
@media screen and (max-width: 700px) {
  .page_wrap {
    margin-left: 0;
    }

}
hr {
    box-shadow: 0 20px 40px -14px rgba(0, 0, 0, 0.25);
    width: 100%;
}
</style>