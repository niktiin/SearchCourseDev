<template>
  <div class="course">
    <title-components v-if="error" v-bind:text="error"/>
    <title-components v-else text="Course"/>
    <div class="course__header">
      <div class="course__icon">
        <img src="../assets/course_icon.png" alt="">
      </div>
      <div class="course__content">
        <h4 class="title">Video / Photo make </h4>
        <p>Free pro app pack and more tutorial</p>
      </div>
    </div>
    <div class="course_desscripion">
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
      messageIsShow: false,
      error: '',
      course: ['videophoto', 'nodejs'] // Желательно заменить на Vuex!
    }
  },
  components: {
    titleComponents
  },
  mounted() {
    setTimeout(() => {
      this.messageIsShow = true
    }, 2000);
  },
  methods: {
    // Формирование 'title'
    isError() {
      if (this.error != null) return this.error;
      console.log(this.error)
      return 'Course';
    }
  },
  created() {
    // Валидация запроса
    const result = this.course.find((element) => {
      if (element == this.$router.history.current.params.pathMatch) return true;
    })
    if (result == undefined) {
      this.error = 'Page not found 404';
    }
  }
}
</script>

<style>
  .course__header {
    display: flex;
    flex-direction: row;
    padding-bottom: 16px;
  }
  .course__icon {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 16px 16px 0 16px;
  }
  .course__icon img {
    max-width: 80px;
  }
  .course__content {
    font-family: 'NotoSansRegular';
    padding-top: 16px;
    display: grid;
    grid-template-rows: repeat(1fr, 3);
    grid-gap: 8px;
  }
  .course__content h4 {
    font-size: 20px;
    margin: 0;
  }
  .course__content p, .course__content a {
    font-size: 18px;
    margin: 0;
    color: black;
  }
  .course_desscripion {
    font-family: 'NotoSansRegular';
    margin: 0 32px 0 16px;
    font-size: 18px;
  }
</style>