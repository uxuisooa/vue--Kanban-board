<template>
    <div>
        Board
        <!--  보드화면이 어떻게 api로 호출할수있는지 알아보자! -->
        <div v-if="loading">loading board...</div>
        <div v-else>
            <div>bid : {{ bid }}</div>
            <pre>{{ board }}</pre>
            <router-link :to="`/b/${bid}/c/1`">Card 1</router-link>
            <router-link :to="`/b/${bid}/c/2`">Card 2</router-link>
        </div>
        <hr />
        <router-view></router-view>
        <!-- 보드화면이 그대로 유지되고 팝업이 그대로 뜨게 하기 위해서 중첩 라우트를 적용 -->
    </div>
</template>

<script>
import {mapState, mapActions} from 'vuex'

export default {
    data() {
        return {
            bid: 0,  //기본값
            loading: false
        }
    },
    computed: {
        ...mapState({
            board : 'board'
        })
    },
    created() {
        this.fetchData()        
    },
    methods: {
        ...mapActions([
            'FETCH_BOARD'
        ]),
        fetchData() {
            this.loading = true
            this.FETCH_BOARD({id: this.$route.params.bid})
                .then(() => this.loading = false)           
        }
    }
}
</script>

<style>

</style>
