<template>
<div class="sidebar">
  <a href='#/AdminAgjendaDitore'>Agjenda Ditore</a>
  <a href="#/AdminPuntori">Puntori</a>
  <a href="#/ListaProdukteve">Produkti</a>
  <a href="#/ListaLokacioneve">Lokacion</a>
  <a href="#/ListaMjeteve">Mjetet e Transportit</a>
  <a href="#/KerkesaProduktit">Kerkesat</a>
  <a href="#Qkyqu" id ="Qkyqu">Qkyqu</a>
</div>


    
</template>

<script>
export default {
    
}



</script>

<style >
body {
  margin: 0;
  padding: 0;
}

.sidebar {
  margin: 0;
  padding: 0;
  width: 200px;
  height:  100%;
  background-color: #f1f1f1;
  position: fixed;
  overflow: auto;
  background-color: #2766db;
}

.sidebar a {
  display: block;
  color: white;
  padding: 16px;
  text-decoration: none;
  font-size: 16px;
  font-weight: bold;
}

.sidebar a:hover {
  background: #538af1; 
}

@media screen and (max-width: 700px) {
  .sidebar {
    width: 100%;
    height: 100%;
    position: relative;
  }
  .sidebar a {float: left;}
}

@media screen and (max-width: 400px) {
  .sidebar a {
    text-align: center;
    float: none;
  }
}

</style>