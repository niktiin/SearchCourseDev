<template>
  <section class="title">
        <h1 class="title__text">{{title}}</h1>
    </section>
</template>

<script>
export default {
  name: 'Title',
  data: function () {
    return {
      title: ' '
    }
  },
  props: {
    text: String
  },
  mounted() {
    // Анимация 'title' ввода по символам
    let text = this.text;
    const intervalID = setInterval(() => {
      if (text.length == 0) {
        clearInterval(intervalID);
        return;
      }
      this.title += text[0]
      text = text.substring(1, text.length)
   }, 50);
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .title {
    display: flex;
    align-items: center;
    padding:0 64px;
    background: #7976F9;
  }
  .title__text {
    font-family: 'NotoSansBold';
    font-size: 58px;
    display: inline;
    text-transform: uppercase;
    margin: 16px 0;
  }
</style>
