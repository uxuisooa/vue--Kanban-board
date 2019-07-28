<template>
    <div>
        Card
        <div v-if="loading">loading card...</div>
        <div v-else>cid : {{ cid }}</div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            cid : 0, //기본값
            loading: false
        }
    },
    watch: { //to로 이동시 기존에 있는게 남아있어서 created 훅이 생성되지 않아 watch를 이용하여 사용
        // '$route'() { //'$route' 변경을 감시하고 있다가 변경되면 cid를 갱신
        //    this.fetchData()
        // }
        '$route': {
            handler: 'fetchData',
            immediate: true
        }
    },
    // created() {       
    //     this.fetchData()        
    // },
    methods: {
        fetchData() {
            this.loading = true
            setTimeout(() => {
                this.cid = this.$route.params.cid
                this.loading = false
            }, 500)
        }
    }
}
</script>

<style>

</style>
