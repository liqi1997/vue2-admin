<template>
    <div>
        user index
    </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
    computed: {
        ...mapState('dataDict', ['dataDict']),
    },
    mounted() {
        console.log('dataDict', this.dataDict)
    }
}
</script>