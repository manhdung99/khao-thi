<template>
  <div>
    <div v-if="loaded" ref="mathjax" :key="mathjaxKey"></div>
    <div v-else>Loading MathJax...</div>
  </div>
</template>

<script lang="ts">
import { ref, watch, onMounted, defineComponent } from "vue";
declare global {
  interface Window {
    MathJax: any;
  }
}
export default defineComponent({
  name: "MathJax",
  props: {
    mathml: {
      type: String,
      required: true,
    },
  },
  setup(props) {
    const mathjaxKey = ref(0);
    const loaded = ref(false);

    const renderMathJax = () => {
      window.MathJax = {
        tex: {
          inlineMath: [
            ["$", "$"],
            ["\\(", "\\)"],
          ],
        },
        chtml: {
          scale: 1, // You can adjust the scale if needed.
        },
      };

      const mathjaxElement = document.querySelector("#mathjax"); // Use document.querySelector to select the element
      if (mathjaxElement) {
        mathjaxElement.innerHTML = props.mathml;
        window.MathJax.typeset([mathjaxElement]);
        loaded.value = true;
      }
    };

    watch(
      () => props.mathml,
      () => {
        mathjaxKey.value++;
      }
    );

    onMounted(() => {
      if (props.mathml.length > 0) {
        const script = document.createElement("script");
        script.type = "text/javascript";
        script.async = true;
        script.onload = renderMathJax;
        script.src =
          "https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.7/MathJax.js?config=TeX-MML-AM_CHTML";
        document.head.appendChild(script);
      }
    });
    return {
      mathjaxKey,
      loaded,
    };
  },
});
</script>
