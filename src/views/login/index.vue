<template>
    <div>登录页面

        <button @click="login">登录</button>
    </div>
</template>

<script>
export default {
    methods: {
        login() {
            setTimeout(() => {
                window.localStorage.setItem('token', '123')
                this.$router.push("/workbench")
                // const menu = [{
                //     path: '/workbench',
                //     name: '工作台',
                //     id: 'workbench'
                // }, {

                // }]
                // window.localStorage.setItem('menu', JSON.stringify(menu))
            }, 1000);
        }
    }
}
</script>