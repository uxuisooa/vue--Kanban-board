<template>
    <div>
        Card
        <div>cid : {{ cid }}</div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            cid : 0 //기본값
        }
    },
    watch: { //to로 이동시 기존에 있는게 남아있어서 created 훅이 생성되지 않아 watch를 이용하여 사용
        '$route'() { //'$route' 변경을 감시하고 있다가 변경되면 cid를 갱신
           this.cid = this.$route.params.cid
        }
    },
    created() {
        this.cid = this.$route.params.cid
        
    }
}
</script>

<style>

</style>
