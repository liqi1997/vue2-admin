import PageLoading from '@/components/page-loading'
import PageError from '@/components/page-error'

const params = {
    loading: PageLoading,
    error: PageError,
    delay: 200,
    timeout: 60000
}

export default [
    {
        path: '/login',
        // component: () => ({
        //     component: import("@/views/login"),
        //     ...params,
        // }),
        component: () => {
            return new Promise(() => ({}))
        },
        meta: {
            isPublic: true,
        }
    },
    // {
    //     path: '/',
    //     component: () => asyncComponent("@/layout"),
    //     children: [
    //         {
    //             path: 'workbench',
    //             component: () => asyncComponent("@/views/workbench")
    //         },
    //         {
    //             path: 'setting/user',
    //             component: () => asyncComponent("@/views/setting/user")
    //         },
    //         {
    //             path: 'setting/user/add',
    //             component: () => asyncComponent("@/views/setting/user/add")
    //         },
    //         {
    //             path: 'setting/user/edit',
    //             component: () => asyncComponent("@/views/setting/user/edit")
    //         },
    //         {
    //             path: '403',
    //             component: () => asyncComponent("@/views/403"),
    //         },
    //         {
    //             path: '404',
    //             component: () => asyncComponent('@/views/404'),
    //         }
    //     ]
    // }
]