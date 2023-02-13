import ApiRequest from '@/services/ApiRequest'


export default{
    index(search){
        return ApiRequest().get('request',{
            params:{
                search:search
            }
        })
    },
    show(emID){
        return ApiRequest().get(`request/${emID}`)
    },
    getV(){
        return ApiRequest().get(`request/informo`)
    },
    getProdukt(){
        return ApiRequest().get(`request/produkt`)
    },
    getPersonale(){
        return ApiRequest().get(`request/personale`)
    },
    post(request){
        return ApiRequest().post('request',request)
    },
    put(request){
        return ApiRequest().put(`request/${request.KerkesaId}`,request)
    },
    delete(emID){
        return ApiRequest().delete(`request/${emID}`)
    }
}