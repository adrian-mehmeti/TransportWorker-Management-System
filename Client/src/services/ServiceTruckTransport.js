import ApiTruckTransport from '@/services/ApiTruckTransport'


export default{
    index(search){
        return ApiTruckTransport().get('trucktransport',{
            params:{
                search:search
            }
        })
    },
    show(emID){
        return ApiTruckTransport().get(`trucktransport/${emID}`)
    },
    post(trucktransport){
        return ApiTruckTransport().post('trucktransport',trucktransport)
    },
    put(trucktransport){
        return ApiTruckTransport().put(`trucktransport/${trucktransport.MjetetId}`,trucktransport)
    },
    delete(emID){
        return ApiTruckTransport().delete(`trucktransport/${emID}`)
    }
}