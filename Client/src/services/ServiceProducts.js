import ApiProducts from '@/services/ApiProducts'


export default{
    index(search){
        return ApiProducts().get('product',{
            params:{
                search:search
            }
        })
    },
    show(emID){
        return ApiProducts().get(`product/${emID}`)
    },
    post(product){
        return ApiProducts().post('product',product)
    },
    put(product){
        return ApiProducts().put(`product/${product.ProduktiId}`,product)
    },
    delete(emID){
        return ApiProducts().delete(`product/${emID}`)
    }
}