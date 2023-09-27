<template>
  <div class="overflow-hidden" :class="!showListQuestion ? 'h-5' : 'h-auto'">
    <div class="text-red-500 text-sm flex font-medium">
      {{ questionPart.Title }}
      <span
        @click="showListQuestion = !showListQuestion"
        class="ml-1 cursor-pointer"
        ><img
          class="w-6 h-6"
          :src="showListQuestion ? arrowTop : arrowDown"
          alt=""
      /></span>
    </div>
    <questionViewInLesson
      v-for="question in questionPart.Questions"
      :key="question.ID"
      :question="question"
    />
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";
import arrowTop from "../../assets/image/arrow-top.svg";
import arrowDown from "../../assets/image/arrow-down.svg";
import folderIcon from "../../assets/image/folder.svg";
import questionViewInLesson from "../question/questionViewInLesson.vue";
export default defineComponent({
  name: "partQuestionVue",
  components: {
    questionViewInLesson,
  },
  props: {
    questionPart: {
      type: Object,
      required: true,
    },
  },
  setup() {
    const showListQuestion = ref(false);
    return {
      showListQuestion,
      arrowDown,
      arrowTop,
      folderIcon,
    };
  },
});
</script>
<style></style>
