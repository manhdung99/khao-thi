<template>
  <router-view />
</template>
<style>
body {
  font-family: "Roboto", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background: #f5f5f5;
  min-height: 100vh;
}
</style>
<script lang="ts">
export default {
  setup() {
    const recaptchaScript = document.createElement("script");
    recaptchaScript.setAttribute(
      "src",
      "https://static.eduso.vn//lib/mathjax/es5/tex-mml-chtml.js"
    );
    document.head.appendChild(recaptchaScript);
  },
};
</script>
