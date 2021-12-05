<template>
  <div class="about">
    <title-components text="About"/>
    <div class="about__wrapper">
      <p>
        Search course — give everyone the opportunity to be relevant 
        and in-demand specialist right now. Regardless of age and geography.
      </p>
      <p>
        We offer a wide range of courses for professional and personal development.
      </p>
    </div>
  </div>
</template>

<script>
import titleComponents from '../components/Title.vue'

export default {
  data: function () {
    return {
      messageIsShow: false
    }
  },
  components: {
    titleComponents
  },
  mounted() {
    setTimeout(() => {
      this.messageIsShow = true
    }, 2000);
  }
}
</script>

<style>
  .about__wrapper {
    border-top: 1px solid black;
    font-family: 'NotoSansRegular';
    padding: 32px 32px 0 64px;
    font-size: 20px;
  }
  .about__wrapper p {
    margin: 32px 0;
  }
  .about__wrapper p:first-child{
    margin-top: 0;
  }
</style>