import ApiAgendas from '@/services/ApiAgendas'


export default {
    index(){
        return ApiAgendas().get('dailyagendas')
    }
}
