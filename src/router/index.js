// 创建整个应用的路由器
import VueRouter from 'vue-router'
// 引入组件
import MyLogin from '@/components/MyLogin.vue'
import SignUp from '@/components/SignUp.vue'
import LogSign from '@/views/LogSign.vue'
import MyIndex from '@/views/MyIndex'
import BookStore from '@/views/BookStore.vue'
import BookShelf from '@/views/BookShelf.vue'
import NovelRead from '@/views/NovelRead.vue'

// 创建路由器
export default new VueRouter({
    routes:[
        {
            path:'/',
            redirect:'/LogSign/MyLogin'
        },
        {
            path:'/LogSign',
            component:LogSign,
            children:[
                {
                    name:'ToLogin',
                    path:'MyLogin',
                    component:MyLogin
                },
                {
                    path:'SignUp',
                    component:SignUp
                },
            ]
        },
        {
            name:'ToIndex',
            path:'/MyIndex',
            component:MyIndex
        },
        {
            name:'ToBookstore',
            path:'/BookStore',
            component:BookStore
        },
        {
            name:'ToBookshelf',
            path:'/BookShelf',
            component:BookShelf
        },
        {
            name:'ToNovelReader',
            path:'/NovelRead',
            component:NovelRead
        },
    ]
}) 