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
          <button class="btn btn-primary">Lưu</button>
        </div>
      </div>
    </div>
    <div class="page-body p-6 relative">
      <div class="flex justify-between">
        <!-- Question  -->
        <div class="flex-1 mr-9">
          <div>
            <div class="text-sm font-bold">
              <span class="text-red-500">*</span> Tên ngân hàng câu hỏi
            </div>
            <input class="input" type="text" />
          </div>
          <!-- Chưa có câu hỏi  -->
          <!-- <div class="mt-4">Chọn "Thêm câu hỏi" để tạo ngân hàng câu hỏi</div> -->
          <!-- Có câu hỏi  -->
          <div class="list-question mt-4 scroll-area">
            <questionVue
              v-for="(question, index) in currentBankQuestions"
              :key="question.ID"
              :questionPart="question"
              :index="index"
              :canEdit="true"
            />
          </div>
        </div>
        <!-- Action   -->
        <div class="flex flex-col top-4">
          <button
            @click="updateAddNewBankModalStatus(true)"
            class="btn btn-primary mt-2"
          >
            Thêm câu hỏi
          </button>
          <button class="btn bg-white text-red-500 border border-gray-300 mt-4">
            Xoá ngân hàng
          </button>
          <span
            @click="openStatisticsBankModal = true"
            class="text-blue underline mt-4 cursor-pointer"
            >Xem thống kê</span
          >
        </div>
      </div>
    </div>
  </div>
  <Teleport to="body">
    <AddNewPopup v-if="openAddNewBankModal" />
  </Teleport>
  <Teleport to="body">
    <deletePopup v-if="openDeleteQuestionModal" />
  </Teleport>
  <Teleport to="body">
    <duplicatePopup v-if="openDuplicateQuestionModal" />
  </Teleport>
  <Teleport to="body">
    <addNewQuestionHandmade v-if="openAddNewQuestionHandmadeModal" />
  </Teleport>
  <Teleport to="body">
    <selectQuestionFromCourse v-if="openSelectQuestionFromCourse" />
  </Teleport>
  <Teleport to="body">
    <SelectQuestionFromBank v-if="openSelectQuestionFromBank" />
  </Teleport>
  <Teleport to="body">
    <statisticsPopup v-if="openStatisticsBankModal" />
  </Teleport>
  <Teleport to="body">
    <div
      v-if="isLoading"
      class="fixed top-0 bottom-0 right-0 left-0 flex justify-center items-center bg-modal z-10"
    >
      <img :src="loadingIcon" alt="" />
    </div>
  </Teleport>
</template>

<script lang="ts">
import questionVue from "../components/question/question.vue";
import AddNewPopup from "../components/popup/addNewPopup.vue";
import deletePopup from "../components/popup/deleteQuestionPopup.vue";
import duplicatePopup from "../components/popup/duplicateQuestionPopup.vue";
import addNewQuestionHandmade from "@/components/popup/addNewQuestionHandmade.vue";
import selectQuestionFromCourse from "@/components/popup/selectQuestionFromCourse.vue";
import SelectQuestionFromBank from "@/components/popup/selectQuestionFromBank.vue";
import statisticsPopup from "@/components/popup/statisticsPopup.vue";
import loadingIcon from "../assets/image/loading-gif.gif";
import { defineComponent, onMounted, ref } from "vue";
import { storeToRefs } from "pinia";
import leftIcon from "../assets/image/ArrowLeft.svg";
import { useQuestionBankStore } from "../stores/question-bank-store";
import { usePopupStore } from "../stores/popup";
import { useRoute } from "vue-router";
export default defineComponent({
  name: "QuestionBankVue",
  components: {
    AddNewPopup,
    questionVue,
    deletePopup,
    duplicatePopup,
    addNewQuestionHandmade,
    selectQuestionFromCourse,
    SelectQuestionFromBank,
    statisticsPopup,
  },
  setup() {
    const {
      openAddNewBankModal,
      openDeleteQuestionModal,
      openDuplicateQuestionModal,
      openAddNewQuestionHandmadeModal,
      openSelectQuestionFromCourse,
      openSelectQuestionFromBank,
      openStatisticsBankModal,
    } = storeToRefs(usePopupStore());
    const { updateAddNewBankModalStatus } = usePopupStore();
    const { isLoading } = storeToRefs(usePopupStore());
    const { getCurrentBankQuestions, deleteQuestion } = useQuestionBankStore();
    const { currentBankQuestions } = storeToRefs(useQuestionBankStore());
    const route = useRoute();
    onMounted(() => {
      getCurrentBankQuestions(route.params.bankID as string);
    });
    return {
      openAddNewQuestionHandmadeModal,
      openSelectQuestionFromCourse,
      openAddNewBankModal,
      openDeleteQuestionModal,
      openDuplicateQuestionModal,
      leftIcon,
      currentBankQuestions,
      openSelectQuestionFromBank,
      openStatisticsBankModal,
      loadingIcon,
      isLoading,
      updateAddNewBankModalStatus,
      deleteQuestion,
    };
  },
});
</script>
<style>
.breadcrumb {
  color: #00000073;
  font-size: 14px;
  font-style: italic;
}
.question-detail .ql-container.ql-snow {
  min-height: 50px;
}
.question-bank-detail .list-question {
  max-height: calc(100vh - 200px);
}
</style>
