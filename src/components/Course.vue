<template>
  <div class="course">
        <div class="course__icon">
          <img src="../assets/course_icon.png" alt="">
        </div>
        <div class="course__content">
          <h4 class="title">Video / Photo make </h4>
          <p>Free pro app pack and more tutorial</p>
        </div>
    </div>
</template>

<script>
export default {
  name: 'Course',
  data: function () {
    return {
      title: ' '
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .course {
    display: flex;
    flex-direction: row;
    border-bottom: 1px solid black;
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
</style>
