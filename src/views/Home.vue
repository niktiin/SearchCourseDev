<template>
  <div class="home">
    <title-components text="Search for course"/>
    <nav class="nav">
        <div class="nav__title">
          <h3>menu</h3>
        </div>
        <div class="nav__action">
          <button @click="buttonAboutClick()" class="nav__button nav__button_secondary">
            <span class="material-icons">help_outline</span>
          </button>
          <button @click="buttonSearchClick()" class="nav__button nav__button_primary">
            <span class="material-icons">search</span>
          </button>
        </div>
    </nav>
    <footer>
      <p class="footer_text">
        Is simply dummy text of the printing and typesetting industry.
        Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s
      </p>
    </footer>
  </div>
</template>

<script>
import titleComponents from '../components/Title.vue'

export default {
  components: {
    titleComponents
  },
  methods: {
    buttonAboutClick() {
      this.$router.push({ path: 'About' })
    },
    buttonSearchClick() {
      this.$router.push({ path: 'Search' })
    }
  }
}
</script>

<style>
  body, html, .home{
    margin:0;
    padding:0;
    min-height: 100vh;
    background: white;
  }
  .nav {
    display: grid;
    grid-template-columns: 64px 1fr;
    height: 160px;
    border-top: 1px solid black;
    border-bottom: 1px solid black;
    width: 100vw;
  }
  .nav__action {
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding: 0 16px;
  }
  .nav__button {
    padding: 0;
    border: none;
    border-radius: 50px;
    width: 30vw;
    height: 30vw;
    margin: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .nav__button > span {
    font-size: 48px;
  }
  .nav__button_primary {
    background: #F5F22C;
    border: 1px solid black;
  }
  .nav__button_secondary {
    background: #E5E5E5;
    border: 1px solid black;
  }
  .nav__title {
    font-family: 'NotoSansRegular';
    writing-mode: vertical-rl;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    font-size: 20px;
    text-transform: uppercase;
    border-right: 1px solid black;
  }
  .footer_text {
    font-family: 'NotoSansRegular';
    font-size: 20px;
    margin: 32px 16px auto 64px;
  }
</style>