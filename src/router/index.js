import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routes'
// import store from '@/store'

Vue.use(VueRouter)

const router = new VueRouter({
    routes
})

router.beforeEach((to, from, next) => {

    const token = window.localStorage.getItem('token')


    // 公开页面直接过去，包括login
    if (to.meta.isPublic) {
        next();
    } else {
        // 非公开页判断是否登录
        if (!token) {
            // 未登录直接路由到登录页
            // 如果from是登录页，并且没有登录信息，那就不能后退
            if (from.path === '/login') {
                next(false)
            } else {
                next("/login")
            }
        } else {
            // 已登录判断是否在menuList中是否有该页面
            // const res = store.getters['auth/getCurrentRoute'](to.path)
            const res = true; // 假设有权限
            if (res) {
                next();
            } else {
                next('/403')
            }
        }
    }

})

// router.afterEach((to) => {
//     // 每次路由成功后，保存最新页面的路径，存储起来，当页面刷新时，回到那个页面
//     window.localStorage.setItem('lastPagePath', to.fullPath)
// })

export default router
