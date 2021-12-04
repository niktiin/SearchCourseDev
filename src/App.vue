<template>
  <div id="app">
    <header>
      <div class="header__progressbar"></div>
      <button v-show="false" class="header__navigation_back">
        <span class="material-icons">arrow_back_ios</span>
      </button>
      <div class="header__title">
        <img src = "./assets/logotype.png" alt="searchCourseHelper"/>
        <h3>Search course</h3>
      </div>
    </header>
    <section class="title">
        <h1 class="title__text">Search For Course</h1>
    </section>
    <nav class="nav">
        <div class="nav__title">
          <h3>menu</h3>
        </div>
        <div class="nav__action">
          <button class="nav__button nav__button_secondary">
            <span class="material-icons">help_outline</span>
          </button>
          <button class="nav__button nav__button_primary">
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


export default {
  name: 'App',
  components: {
  }
}
</script>

<style>
  body, html, #app{
    margin:0;
    padding:0;
    min-height: 100vh;
    background: white;
  }
  header {
    display: flex;
    flex-direction: row;
    border-bottom: 1px solid black;
    height: 80px;
    width: 100vw;
  }
  .header__navigation_back {
    width: 80px;
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
    font-size: 28px;
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

  .title {
    display: flex;
    align-items: center;
    padding:0 32px;
    background: #7976F9;
  }
  .title__text {
    font-family: 'NotoSansBold';
    font-size: 58px;
    display: inline;
    text-transform: uppercase;
    margin: 32px 0;
  }
  .nav {
    display: grid;
    grid-template-columns: 80px 1fr;
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
    border: 1px solid black;
  }
  .nav__button > span {
    font-size: 48px;
  }
  .nav__button_primary {
    background: #F5F22C;
  }
  .nav__button_secondary {
    background: #E5E5E5;
  }
  .nav__title {
    font-family: 'NotoSansRegular';
    writing-mode: vertical-rl;
    text-align: center;
    font-size: 20px;
    text-transform: uppercase;
    border-right: 1px solid black;
  }
  .footer_text {
    font-family: 'NotoSansRegular';
    font-size: 20px;
    margin: 32px 16px auto 32px;
  }
</style>
