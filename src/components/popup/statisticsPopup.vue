<template>
  <div class="modal center">
    <div class="bg-white rounded-sm p-4 statistics-popup">
      <div class="flex items-center justify-between font-semibold text-xl">
        Thống kê ngân hàng đề
        <span
          @click="updateStatisticsBankModalStatus(false)"
          class="cursor-pointer"
          ><img :src="closeIcon" alt=""
        /></span>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import closeIcon from "../../assets/image/close-icon.svg";
import { usePopupStore } from "../../stores/popup";
export default defineComponent({
  name: "StatisticsPopup",
  setup() {
    const { updateStatisticsBankModalStatus } = usePopupStore();
    return {
      closeIcon,
      updateStatisticsBankModalStatus,
    };
  },
});
</script>
<style></style>
