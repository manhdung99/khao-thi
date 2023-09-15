<template>
  <!-- Default  -->
  <div class="bg-white rounded-md">
    <div
      class="p-3 flex items-center justify-between border-b border-grey-lighter"
    >
      <span class="text-sm font-semibold">1. Câu hỏi số 1</span>
      <span class="text-sm text-black-lighter"
        >Bài tập | Thông hiểu | Điền từ</span
      >
    </div>
    <!-- Default  -->
    <div
      v-if="!showDetail"
      class="p-4 text-sm text-gray-600 flex justify-between"
    >
      3. Complete the questions using the words in parentheses. Then match each
      question with an answer.
      <div class="flex">
        <span @click="showDetail = true" class="mr-2 cursor-pointer">
          <img :src="editIcon" alt="" />
        </span>
        <span class="mr-2 cursor-pointer">
          <img :src="duplicateIcon" alt="" />
        </span>
        <span class="mr-2 cursor-pointer">
          <img :src="removeIcon" alt="" />
        </span>
      </div>
    </div>
    <!-- Detail  -->
    <div v-else class="p-4 text-gray-600 text-sm">
      <p>
        [LB] Read the following passage and mark the letter A, B, C, or D on
        your answer sheet to indicate the correct word or phrase that best fits
        each of the numbered blanks.
      </p>
      <div>
        ELECTRIC-CAR BATTERY CHARGES IN FIVE MINUTES Car makers are spending a
        lot of money on electric cars. In the future, electric cars will replace
        petrol cars. Environmentalists believe this will reduce the amount of
        CO2 __(1)__ into the atmosphere. A big problem for electric cars is
        charging the battery. Some batteries in today's electric cars can take
        up to 12 hours to charge fully. __(2)__, a company in Israel says it has
        created a lithium-ion battery that people can charge in just five
        minutes. This is the same amount of time it takes to fill a tank of gas
        with petrol. The new lithium-ion batteries __(3)__ were developed by the
        Israeli company Store Dot are being manufactured by a Chinese company
        called Eve Energy. The new batteries could totally transform driving.
        They would mean electric cars would be able to travel as far as petrol
        cars. __(4)__ people with electric cars today suffer from "range
        anxiety". This is stress caused by worrying about the battery running
        out of electricity. The new batteries would end this anxiety. A Store
        Dot spokesperson said. "We're at the point of __(5)__ a revolution in
        the electric vehicle charging experience". (Adapted from
        ttps.//breakingnewsenglish.com/2101/210124-car-battery.html>)
      </div>
      <div class="flex flex-col">
        <span> 1. A. Although </span>
        <span> 2. B. Hence </span>
        <span> 3. C. In addition </span>
        <span> 4. D. Otherwise</span>
      </div>
      <div class="flex justify-end">
        <span @click="showDetail = false" class="mr-2 cursor-pointer">
          <img :src="editIcon" alt="" />
        </span>
        <span class="mr-2 cursor-pointer">
          <img :src="duplicateIcon" alt="" />
        </span>
        <span class="mr-2 cursor-pointer">
          <img :src="removeIcon" alt="" />
        </span>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";
import { usePopupStore } from "../../stores/popup";
import editIcon from "../../assets/image/edit.svg";
import eyeIcon from "../../assets/image/eye.svg";
import duplicateIcon from "../../assets/image/duplicateIcon.svg";
import removeIcon from "../../assets/image/removeIcon.svg";
export default defineComponent({
  name: "QuestionVue",
  setup() {
    const { updateAddNewBankModalStatus } = usePopupStore();
    const showDetail = ref(false);
    return {
      updateAddNewBankModalStatus,
      editIcon,
      duplicateIcon,
      removeIcon,
      showDetail,
    };
  },
});
</script>
<style>
.add-new-popup {
  max-width: 1000px;
  background: white;
  border-radius: 4px;
  padding: 16px;
}
.card {
  background: #f5f5f5;
  border-radius: 4px;
  padding: 16px 20px;
  min-width: 300px;
  margin-bottom: 16px;
  margin-right: 16px;
  cursor: pointer;
}
</style>
