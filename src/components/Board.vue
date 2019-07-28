<template>
    <div>
        Board
        <div>bid : {{ bid }}</div>
        <router-link :to="`/b/${bid}/c/1`">Card 1</router-link>
        <router-link :to="`/b/${bid}/c/2`">Card 2</router-link>
        <hr />
        <router-view></router-view>
        <!-- 보드화면이 그대로 유지되고 팝업이 그대로 뜨게 하기 위해서 중첩 라우트를 적용 -->
    </div>
</template>

<script>
export default {
    data() {
        return {
            bid: 0  //기본값
        }
    },
    created() {
        this.bid = this.$route.params.bid
    }
}
</script>

<style>

</style>
