<template>
  <div class="overflow-hidden" :class="!showListPart ? 'h-10' : 'h-auto'">
    <p class="text-blue-500 font-semibold ml-5 flex items-center">
      <span class="mr-2"><img class="w-6 h-6" :src="folderIcon" alt="" /></span
      >{{ lesson.Name }}
      <span @click="showListPart = !showListPart" class="ml-2 cursor-pointer"
        ><img class="w-6 h-6" :src="showListPart ? arrowTop : arrowDown" alt=""
      /></span>
    </p>
    <ul class="ml-8">
      <li v-for="questionPart in lesson.part" :key="questionPart.ID" class="">
        <partQuestionVue :questionPart="questionPart" />
      </li>
    </ul>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";
import arrowTop from "../../assets/image/arrow-top.svg";
import arrowDown from "../../assets/image/arrow-down.svg";
import folderIcon from "../../assets/image/folder.svg";
import partQuestionVue from "../partQuestion/partQuestion.vue";
export default defineComponent({
  name: "LessonVue",
  components: {
    partQuestionVue,
  },
  props: {
    lesson: {
      type: Object,
      required: true,
    },
  },
  setup() {
    const showListPart = ref(false);
    return {
      showListPart,
      arrowDown,
      arrowTop,
      folderIcon,
    };
  },
});
</script>
<style></style>
