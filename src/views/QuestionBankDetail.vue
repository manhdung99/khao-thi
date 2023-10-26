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
            <input v-model="currentbankName" class="input" type="text" />
          </div>
          <!-- Chưa có câu hỏi  -->
          <!-- <div class="mt-4">Chọn "Thêm câu hỏi" để tạo ngân hàng câu hỏi</div> -->
          <!-- Có câu hỏi  -->
          <div class="list-question mt-4 scroll-area">
            <questionVue
              v-for="(question, index) in currentBankQuestionFilter"
              :key="question.ID"
              :questionPart="question"
              :index="index"
              :canEdit="true"
              :answerListQuiz2="answerListQuiz2"
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
          <!-- Tuỳ chọn  -->
          <div></div>
          <div class="mt-6">
            <p class="font-bold border-b border-black pb-2">Tuỳ chọn</p>
            <div class="flex items-center">
              <input class="w-4 h-4" type="checkbox" />
              <span class="text-sm ml-2">Hiển thị chi tiết câu hỏi</span>
            </div>
            <div class="flex items-center mt-2">
              <input class="w-4 h-4" type="checkbox" />
              <span class="text-sm ml-2">Trắc nghiệm & tự luận</span>
            </div>
            <div class="flex items-center mt-2 ml-4">
              <input class="w-4 h-4" type="checkbox" />
              <span class="text-sm ml-2">Trắc nghiệm</span>
            </div>
            <div class="flex items-center mt-2 ml-4">
              <input class="w-4 h-4" type="checkbox" />
              <span class="text-sm ml-2">Tự luận</span>
            </div>
          </div>

          <!-- Tên nội dung  -->
          <div v-if="currentBankQuestions.length > 0" class="mt-4">
            <p class="font-bold border-b border-black pb-2">Tên nội dung</p>
            <div class="border-b py-2.5">
              Tất cả ({{ currentBankQuestionFilter.length }})
            </div>
            <!-- Loop Nội dung  -->
            <div>
              <div class="border-b py-2.5">
                1. Nhận biết ({{ basicQuestions.length }})
              </div>
              <!-- Loop đọc hiểu  -->
              <div class="border-b py-2.5 pl-4">1.1 Điền từ (10)</div>
              <div class="border-b py-2.5 pl-4">1.2 Điền từ (10)</div>
            </div>
            <div>
              <div class="border-b py-2.5">
                2. Thông hiểu({{ mediumQuestions.length }})
              </div>
              <!-- Loop đọc hiểu  -->
              <div class="border-b py-2.5 pl-4">1.1 Điền từ (10)</div>
              <div class="border-b py-2.5 pl-4">1.2 Điền từ (10)</div>
            </div>
            <div>
              <div class="border-b py-2.5">
                3. Vận dụng ({{ advanceQuestions.length }})
              </div>
            </div>
          </div>
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
import { computed, defineComponent, onMounted, ref } from "vue";
import { storeToRefs } from "pinia";
import leftIcon from "../assets/image/ArrowLeft.svg";
import { useQuestionBankStore } from "../stores/question-bank-store";
import { usePopupStore } from "../stores/popup";
import { useRoute } from "vue-router";
import Answer from "@/components/type/answer";
import Question from "@/components/type/question";
import { nextTick } from "vue";
import PartQuestion from "@/components/type/partQuestion";
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
    const { currentBankQuestions, currentbankName } = storeToRefs(
      useQuestionBankStore()
    );
    const currentBankQuestionFilter = ref<PartQuestion[]>([]);
    const route = useRoute();
    const answerListQuiz2 = ref<Answer[]>([]);
    const DesIndex = ref(0);
    const basicQuestions = computed(() => {
      return currentBankQuestionFilter.value.filter(
        (question) => question.LevelPart == 1
      );
    });
    const mediumQuestions = computed(() => {
      return currentBankQuestionFilter.value.filter(
        (question) => question.LevelPart == 2
      );
    });
    const advanceQuestions = computed(() => {
      return currentBankQuestionFilter.value.filter(
        (question) => question.LevelPart == 3
      );
    });
    onMounted(async () => {
      await getCurrentBankQuestions(route.params.bankID as string);
      await createListAnswerQuiz2();
      currentBankQuestionFilter.value = currentBankQuestions.value;
    });
    const createListAnswerQuiz2 = () => {
      currentBankQuestions.value.forEach((part) => {
        if (part.Type == "QUIZ2") {
          part.Questions.forEach((questionData: Question) => {
            if (questionData.Answers) {
              questionData.Answers.forEach((answer) => {
                answerListQuiz2.value = [...answerListQuiz2.value, answer];
              });
            }
          });
        }
      });
    };

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
      answerListQuiz2,
      currentBankQuestionFilter,
      basicQuestions,
      mediumQuestions,
      advanceQuestions,
      DesIndex,
      currentbankName,
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
