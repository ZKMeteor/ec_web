import VueRouter from 'vue-router'
import create from '../components/create.vue'
import login from '../components/login.vue'
import home from '../components/home.vue'
import product from '../components/product.vue'

export default new VueRouter({
/*     mode:'history', */
    routes:[
        {
            name:'create',
            path:'/create',
            component:create,
        },
        {
            name:'login',
            path:'/login',
            component:login,
        },
        {
            name:'home',
            path:'/',
            component:home,
        },
        {
            name:'product',
            path:'/product',
            component:product,
            meta:{},
/*             beforeEnter:(to,from,next)=>{
                if(this.$store.state.Member[0] !== undefined){
                    console.log('成功');
                    next()
                }else{
                    console.log('失敗');
                }
            } */
        }
    ]
})