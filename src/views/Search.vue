<template>
  <div class="search">
    <div class="search__progressbar" :style="{width: progressbar + 'vw'}"></div>
    <title-components text="Search"/>
    <div class="search__form">
      <input placeholder="Enter a search query" type="text" class="search__input">
      <button class="search__button" @click="searchButtonClick()">
        <span class="material-icons">search</span>
      </button>
    </div>
    <section class="item__inner">
      <course-components  v-show="courseIsShow"/>
    </section>
    <p class="search__message" v-show="messageIsShow">
      Click on the search box to open the keyboard
    </p>
  </div>
</template>

<script>
import titleComponents from '../components/Title.vue'
import courseComponents from '../components/Course.vue'

export default {
  data: function () {
    return {
      messageIsShow: false,
      courseIsShow: false,
      progressbar: 0
    }
  },
  components: {
    titleComponents,
    courseComponents
  },
  methods: {
    //Имитация загрузки данных, задержка 1s
    searchButtonClick() {
      this.progressbar = 100;
      setTimeout(() => {
        this.courseIsShow = true;
        this.messageIsShow = false;
        this.progressbar = 0;
      }, 1000);
    }
  },
  mounted() {
    setTimeout(() => {
      this.messageIsShow = true
    }, 2000);
  }
}
</script>

<style>
  .search__progressbar {
    position: fixed;
    top: 0;
    left: 0;
    height: 8px;
    background: #F5F22C;
    transition: 1s;
  }
  .search__form {
    display: flex;
    flex-direction: row;
    height: 64px;
    border-top: 1px solid black;
    border-bottom: 1px solid black;
  }
  .search__input {
    flex-grow: 1;
    border: none;
    background: white;
    padding: 12px 20px;
    font-size: 20px;
    font-family: 'NotoSansRegular';
  }
  .search__input:focus {
    outline: 0;
    outline-offset: 0;
  }
  .search__button {
    width: 64px;
    border-radius: 0;
    border: none;
    border-left: 1px solid black;
    background: #F5F22C;
  }
  .search__button span {
    font-size: 28px;
    transform: translateY(2px);
  }
  .search__message {
    position: absolute;
    bottom:64px;
    text-align: center;
    width: 80vw;
    margin: 0 10vw;
    font-size: 20px;
    font-family: 'NotoSansRegular';
    opacity: 0.6;
  }
</style>