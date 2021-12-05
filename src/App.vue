<template>
  <div id="app">
    <header>
      <button @click="navigationBackClick()"
              v-show="navigationBackIsShow()"
              class="header__navigation_back">
        <span class="material-icons">arrow_back_ios</span>
      </button>
      <div class="header__title" @click="navigationGoHome()">
        <img src = "@/assets/logotype.png" alt="searchCourseHelper"/>
        <h3>Search course</h3>
      </div>
    </header>
    <router-view/>
  </div>
</template>
<script>
  export default {
    methods: {
      navigationBackIsShow() {
        if (this.$router.history.current.name == 'Home') return false;
        return true;
      },
      navigationBackClick() {
        this.$router.go(-1);
      },
      navigationGoHome() {
        if (this.$router.history.current.name == 'Home') return;
        this.$router.push('/');
      }
    }
  }
</script>
<style>
  header {
    display: flex;
    flex-direction: row;
    border-bottom: 1px solid black;
    height: 64px;
    width: 100vw;
  }
  .header__navigation_back {
    width: 64px;
    grid-column: 1 / 2;
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    background: none;
    padding: 0;
    border-right: 1px solid black;
  }
  .header__navigation_back span {
    font-size: 18px;
    transform: translateX(4px);
  }
  .header__title {
    flex-grow: 1;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    font-family: 'NotoSansRegular';
  }
  .header__title > img{
    transform: translateX(-5px);
  }
</style>
