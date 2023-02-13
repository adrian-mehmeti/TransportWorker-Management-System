import ApiEmploye from '@/services/ApiEmploye'
//import { delete } from 'vue/types/umd'

export default{
    index(search){
        return ApiEmploye().get('employe',{
            params:{
                search:search
            }
        })
    },
    show(emID){
        return ApiEmploye().get(`employe/${emID}`)
    },
    post(employe){
        return ApiEmploye().post('employe',employe)
    },
    login(values){
        return ApiEmploye().post('login',values)
    },
    put(employe){
        return ApiEmploye().put(`employe/${employe.PuntoriId}`,employe)
    },
    delete(emID){
        return ApiEmploye().delete(`employe/${emID}`)
    }
}