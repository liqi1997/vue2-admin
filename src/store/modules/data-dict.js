export default {

    namespaced: true,

    state() {
        return {
            dataDict: [], // 数据字典列表
        }
    },

    getters: {

        // findDataDict: state => value => {
        //     const res = state.dataDict.find(item => item.value === value)
        //     if (res && Array.isArray(res.children)) {
        //         return res.children
        //     } else {
        //         return []
        //     }
        // },

    },

    mutations: {
        setDataDict(state, payload) {
            state.dataDict = payload;
        },
    },

    actions: {
        getDataDict({ commit }) {
            console.log("获取数据字典")
            setTimeout(() => {
                const list = [{
                    name: '合约类型',
                    value: 'contractType',
                    children: [{
                        name: "已签订",
                        value: 'sign'
                    }, {
                        name: "跟踪中",
                        value: 'loging'
                    }]
                }]
                commit("setDataDict",list)
            }, 3000);
        }
    }


}

