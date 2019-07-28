<template>
  <div id="app">
    {{msg}} 
    <!-- 헤더를 넣거나 -->
    <router-view></router-view>
    <!-- 푸터를 넣거나 -->
  </div>
</template>

<script>
export default {
  name: "app",
  data() {
    return {
      msg: "App 컴포넌트 화면입니다."
    };
  }
};
</script>

<style lang="scss">
</style>
