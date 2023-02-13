import Vue from 'vue'
import Router from 'vue-router'
import Register from '@/components/Register'
import LogIn from '@/components/LogIn'
import AdminHome from '@/components/AdminHome'
import AdminAgjendaDitore from '@/components/AdminAgjendaDitore'
import KrijoAgjenden from '@/components/KrijoAgjenden'
import TeDhenatAgjendaDitore from '@/components/TeDhenatAgjendaDitore'
import AdminPuntori from '@/components/AdminPuntori'
import ProfiliPuntorit from '@/components/ProfiliPuntorit'
import KrijoPuntorin from '@/components/KrijoPuntorin'
import ListaProdukteve from '@/components/ListaProdukteve'
import KrijoProduktin from '@/components/KrijoProduktin'
import ListaLokacioneve from '@/components/ListaLokacioneve'
import KrijoLokacionin from '@/components/KrijoLokacionin'
import ListaMjeteve from '@/components/ListaMjeteve'
import ProfiliMjetit from '@/components/ProfiliMjetit'
import KrijoMjetin from '@/components/KrijoMjetin'
import KerkesatPuntorit from '@/components/KerkesatPuntorit'
import KerkesaProduktit from '@/components/KerkesaProduktit'
import ProfiliUser from '@/components/ProfiliUser'
import AgjendaDitoreUser from '@/components/AgjendaDitoreUser'
import ProduktetUser from '@/components/ProduktetUser'
import InformoUser from '@/components/InformoUser'
import EditoProfilin from '@/components/EditoProfilin'
import LogInUser from '@/components/LogInUser'

Vue.use(Router)

export default new Router({
    routes:[
        {
        path:'/register',
        name:'Register',
        component: Register
        },
        {
            path:'/login',
            name:'LogIn',
            component: LogIn
        },
        {
            path:'/AdminHome',
            name:'AdminHome',
            component: AdminHome
        },
        {
            path:'/AdminAgjendaDitore',
            name:'AdminAgjendaDitore',
            component: AdminAgjendaDitore
        },
        {
            path:'/KrijoAgjenden',
            name:'KrijoAgjenden',
            component: KrijoAgjenden
        },
        {
            path:'/TeDhenatAgjendaDitore/:emID',
            name:'TeDhenatAgjendaDitore',
            component:TeDhenatAgjendaDitore
        },
        {
            path:'/AdminPuntori',
            name:'AdminPuntori',
            component:AdminPuntori
        },
        {
            path:'/ProfiliPuntorit/:emID',
            name:'ProfiliPuntorit',
            component:ProfiliPuntorit
        },
        {
            path:'/KrijoPuntorin',
            name:'KrijoPuntorin',
            component:KrijoPuntorin
        },
        {
            path:'/ListaProdukteve',
            name:'ListaProdukteve',
            component:ListaProdukteve
        },
        {
            path:'/KrijoProduktin',
            name:'KrijoProduktin',
            component:KrijoProduktin
        },
        {
            path:'/ListaLokacioneve',
            name:'ListaLokacioneve',
            component:ListaLokacioneve
        },
        {
            path:'/KrijoLokacionin',
            name:'KrijoLokacionin',
            component:KrijoLokacionin
        },
        {
            path:'/ListaMjeteve',
            name:'ListaMjeteve',
            component:ListaMjeteve
        },
        {
            path:'/ProfiliMjetit/:emID',
            name:'ProfiliMjetit',
            component:ProfiliMjetit
        },
        {
            path:'/KrijoMjetin',
            name:'KrijoMjetin',
            component:KrijoMjetin
        },
        {
            path:'/KerkesatPuntorit',
            name:'KerkesatPuntorit',
            component:KerkesatPuntorit
        },
        {
            path:'/KerkesaProduktit',
            name:'KerkesaProduktit',
            component:KerkesaProduktit
        },
        {
            path:'/ProfiliUser',
            name:'ProfiliUser',
            component:ProfiliUser
        },
        {
            path:'/AgjendaDitoreUser',
            name:'AgjendaDitoreUser',
            component:AgjendaDitoreUser
        },
        {
            path:'/ProduktetUser',
            name:'ProduktetUser',
            component:ProduktetUser
        },
        {
            path:'/InformoUser',
            name:'InformoUser',
            component:InformoUser
        },
        {
            path:'/ProfiliPuntorit/:emID/EditoProfilin',
            name:'EditoProfilin',
            component:EditoProfilin
        },
        {
            path:'/LogInUser',
            name:'LogInUser',
            component:LogInUser
        }
    ]
})