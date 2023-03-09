import VueRouter from 'vue-router'
import login from '../components/login.vue'
import create from '../components/create.vue'
import home from '../components/home.vue'
import product from '../components/product.vue'

export default new VueRouter({
/*     mode:'history', */
    routes:[
        {
            name:'login',
            path:'/login',
            component:login,
        },
        {
            name:'home',
            path:'/home',
            component:home,
        },
        {
            name:'create',
            path:'/',
            component:create,
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