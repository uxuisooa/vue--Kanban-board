<template>
    <div>
        Board
        <!--  보드화면이 어떻게 api로 호출할수있는지 알아보자! -->
        <div v-if="loading">loading board...</div>
        <div v-else>
            <div>bid : {{ bid }}</div>
            <router-link :to="`/b/${bid}/c/1`">Card 1</router-link>
            <router-link :to="`/b/${bid}/c/2`">Card 2</router-link>
        </div>
        <hr />
        <router-view></router-view>
        <!-- 보드화면이 그대로 유지되고 팝업이 그대로 뜨게 하기 위해서 중첩 라우트를 적용 -->
    </div>
</template>

<script>
export default {
    data() {
        return {
            bid: 0,  //기본값
            loading: false
        }
    },
    created() {
        this.fetchData()        
    },
    methods: {
        fetchData() { //백엔드 api를 호출하고 요청하는것
            this.loading = true
            setTimeout(() => { //api 호출을 시뮬레이션 하기 위해서 setTimeout으로 로직을 지연시키기
                this.bid = this.$route.params.bid
                this.loading = false
            }, 500)            
            
        }
    }
}
</script>

<style>

</style>
