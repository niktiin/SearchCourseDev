<template>
  <div class="course">
    <title-components v-if="error" v-bind:text="error"/>
    <title-components v-else text="Course"/>
    <div class="course__header">
      <div class="course__icon">
        <img src="../assets/course_icon.png" alt="">
      </div>
      <div class="course__content">
        <h4 class="title">Video / Filmmaker </h4>
        <p>You will master Adobe Premiere Pro, DaVinci</p>
      </div>
    </div>
    <div class="course_desscripion">
      <h4>
        Those who want to work in movies or on TV
      </h4>
      <p>
        You will understand how the process of mounting commercials works,
        films and reports. You will mount the first videos, collect
        portfolio and you will be able to start a career in the film industry
        or on television.
      </p>
      <div class="course__slide">
        <img src="../assets/course_slide_0.png" alt="">
      </div>
      <h4>
        What will you learn?
      </h4>
      <p>
        <u>Work in Adobe Premiere Pro.</u>
        Study the tools of the program. You will be able to collect videos from
        multiple rollers, adjust colors and stabilize
        image, add captions and work with a multi-camera.
      </p>
      <p>
        <u>Create effects and animations.</u>
        Get acquainted with Adobe After Effects, learn how to complement
        video effects, animate text and photos. You will understand,
        how to style a video and make it original.
      </p>
      <span>Links: </span><a class="course__link" href="https://skillbox.ru/course/film-editor/">learn more on skillbox</a>
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
    margin-right: 16px;
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
  .course_desscripion h4 {
    margin-bottom: 0;
  }
  .course_desscripion p {
    margin: 16px auto;
  }
  .course__slide {
    display: flex;
    justify-content: center;
  }
  .course__link {
    padding: 2px 6px;
    background: #F5F22C;
    color: black;
    font-family: 'NotoSansRegular';
  }
</style>