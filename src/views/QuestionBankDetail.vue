<template>
  <div class="question-bank-detail">
    <!-- Header page  -->
    <div class="page-header bg-white px-6 py-5">
      <span class="breadcrumb">Home/ Khảo thí / Tiếng Anh</span>
      <div class="flex justify-between items-center">
        <div class="font-semibold text-xl flex items-center">
          <router-link class="flex" to="/">
            <span class="cursor-pointer mr-4"
              ><img :src="leftIcon" alt=""
            /></span>
          </router-link>
          Tạo ngân hàng câu hỏi
        </div>
        <div>
          <button class="btn bg-indigo text-white font-light flex items-center">
            Lưu
          </button>
        </div>
      </div>
    </div>
    <div class="page-body p-6 relative">
      <div>
        <div class="text-sm font-bold">
          <span class="text-red-500">*</span> Tên ngân hàng câu hỏi
        </div>
        <input class="input" type="text" />
      </div>
      <div class="mt-4">Chọn "Thêm câu hỏi" để tạo ngân hàng câu hỏi</div>
      <!-- Button  -->
      <div class="absolute right-6 flex flex-col top-4">
        <button class="btn bg-indigo text-white mt-2">Thêm câu hỏi</button>
        <button
          class="btn bg-white text-red-500 border border-grey-lighter mt-4"
        >
          Xoá ngân hàng
        </button>
        <span class="text-blue underline mt-4">Xem thống kê</span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";
import { storeToRefs } from "pinia";
import leftIcon from "../assets/image/ArrowLeft.svg";
export default defineComponent({
  name: "QuestionBankVue",
  setup() {
    return { leftIcon };
  },
});
</script>
<style>
.breadcrumb {
  color: #00000073;
  font-size: 14px;
  font-style: italic;
}
</style>
