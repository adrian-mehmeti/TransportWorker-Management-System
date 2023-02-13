import ApiRegister from '@/services/ApiRegister'


export default{
    index(search){
        return ApiRegister().get('register',{
            params:{
                search:search
            }
        })
    },
    show(emID){
        return ApiRegister().get(`register/${emID}`)
    },
    post(register){
        return ApiRegister().post('register',register)
    },
    login(values){
        return ApiRegister().post('login',values)
    },
    put(register){
        return ApiRegister().put(`register/${register.RregjistrimiId}`,register)
    },
    delete(emID){
        return ApiRegister().delete(`register/${emID}`)
    }
}