import { mapActions } from 'vuex'

export default {

    mounted() {
            this.getDataDict();
    },

    methods: {
        ...mapActions('dataDict', ['getDataDict']),

    }
}