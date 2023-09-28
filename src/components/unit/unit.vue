<template>
  <div class="overflow-hidden" :class="!showListPart ? 'h-10' : 'h-auto'">
    <p class="text-blue-500 font-semibold ml-5 flex items-center">
      <span class="mr-2"><img class="w-6 h-6" :src="folderIcon" alt="" /></span
      >{{ unit.Name }}
      <span @click="showListPart = !showListPart" class="ml-2 cursor-pointer"
        ><img class="w-6 h-6" :src="showListPart ? arrowTop : arrowDown" alt=""
      /></span>
    </p>
    <ul class="ml-8">
      <li v-for="lesson in unit.lessons" :key="lesson.ID" class="">
        <LessonVue :lesson="lesson" />
      </li>
    </ul>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";
import arrowTop from "../../assets/image/arrow-top.svg";
import arrowDown from "../../assets/image/arrow-down.svg";
import folderIcon from "../../assets/image/folder.svg";
import LessonVue from "../lesson/lesson.vue";
export default defineComponent({
  name: "UnitVue",
  components: {
    LessonVue,
  },
  props: {
    unit: {
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
