<template>
  <div class="about">
    <title-components text="About"/>
    <div class="about_wrapper">
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Adipisci animi sed illo recusandae eos! Eveniet provident,
        ullam, ducimus ratione sint dolores quidem molestiae nobis
        ea aperiam commodi minima. Ex, rem!
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Adipisci animi sed illo recusandae eos! Eveniet provident,
        ullam, ducimus ratione sint dolores quidem molestiae nobis
        ea aperiam commodi minima. Ex, rem!
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
  .about_wrapper {
    border-top: 1px solid black;
    font-family: 'NotoSansRegular';
    padding: 32px 32px 0 64px;
    font-size: 20px;
  }
  .about_wrapper p {
    margin: 32px 0;
  }
  .about_wrapper p:first-child{
    margin-top: 0;
  }
</style>