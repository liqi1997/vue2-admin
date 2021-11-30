<template>
    <div>
        <h1>布局组件</h1>

        <button @click="logout">退出登录</button>

        <Menu />
 
        <div>
            <h3>内容区域</h3>
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
import Menu from './components/menu'
import dataDict from './mixins/data-dict'
export default {

    mixins: [dataDict],

    components: {
        Menu,
    },

    mounted() {
        console.log("布局组件 mounted")
    },

    methods: {

        
        logout() {
            window.localStorage.clear();
            this.$router.push('/login')
        },

    }
}
</script>