<template>
  <div class="courseItem" @click="courseItemClick()">
        <div class="courseItem__icon">
          <img src="../assets/course_icon.png" alt="">
        </div>
        <div class="courseItem__content">
          <h4 class="title">Video / Filmmaker </h4>
          <p>You will master Adobe Premiere Pro, DaVinci</p>
        </div>
    </div>
</template>

<script>
export default {
  name: 'CourseItem',
  data: function () {
    return {
      title: ' ',
      courseName: 'videophoto' 
    }
  },
  methods: {
    courseItemClick() {
      this.$router.push(`/course/${this.courseName}`)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .courseItem {
    display: flex;
    flex-direction: row;
    border-bottom: 1px solid black;
    padding-bottom: 16px;
    background: white;
  }
  .courseItem__icon {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 16px 16px 0 16px;
  }
  .courseItem__icon img {
    max-width: 80px;
  }
  .courseItem__content {
    font-family: 'NotoSansRegular';
    padding-top: 16px;
    display: grid;
    margin-right: 16px;
    grid-template-rows: repeat(1fr, 3);
    grid-gap: 8px;
  }
  .courseItem__content h4 {
    font-size: 20px;
    margin: 0;
  }
  .courseItem__content p, .courseItem__content a {
    font-size: 18px;
    margin: 0;
    color: black;
  }
</style>
