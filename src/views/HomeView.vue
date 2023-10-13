<template>
  <div class="home">Home Page</div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from "vue";
import router from "@/router";
export default defineComponent({
  name: "HomeView",
  setup() {
    onMounted(() => router.push("/list-bank/6073df26c549a13e4c631636"));
    return {};
  },
});
</script>
