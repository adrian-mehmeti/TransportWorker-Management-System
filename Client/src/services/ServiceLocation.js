import ApiLocation from '@/services/ApiLocation'


export default{
    index(search){
        return ApiLocation().get('location',{
            params:{
                search:search
            }
        })
    },
    show(emID){
        return ApiLocation().get(`location/${emID}`)
    },
    post(location){
        return ApiLocation().post('location',location)
    },
    put(location){
        return ApiLocation().put(`location/${location.LokacionetId}`,location)
    },
    delete(emID){
        return ApiLocation().delete(`location/${emID}`)
    }
}