<template>
     <div class="AdminHome">
        <SidebarUser />
        <div class = "page-content">
            <h3>Produktet </h3>
            <div class="table_info" > 
                
                <table>
                <tr>
                    <th>Emri Produktit</th>
                    <th>Lloji Produktit</th>
                    <th>Sasisa</th>
                </tr>
                <tr>
                    <td>Smoki</td>
                    <td>Smoki</td>
                    <td>90</td>
                </tr>
                <tr>
                    <td>Smoki</td>
                    <td>Smoki</td>
                    <td>90</td>
                </tr>
                <tr>
                    <td>Smoki</td>
                    <td>Smoki</td>
                    <td>90</td>
                </tr>
                <tr>
                    <td>Smoki</td>
                    <td>Smoki</td>
                    <td>90</td>
                </tr>
                <tr>
                    <td>Smoki</td>
                    <td>Smoki</td>
                    <td>90</td>
                </tr>
                <tr>
                    <td>Smoki</td>
                    <td>Smoki</td>
                    <td>90</td>
                </tr>
                </table>
            </div>
        </div>
    </div>
    
</template>

<script>
import SidebarUser from './SidebarUser'


export default {
    name:'ProduktetUser',
    components:{
        SidebarUser 
    }
    

}


</script>

<style scoped>

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

</style>