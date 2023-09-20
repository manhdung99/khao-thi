<template>
  <!-- Default  -->
  <div class="bg-white rounded-md question-detail mb-4">
    <div
      class="p-3 flex items-center justify-between border-b border-grey-lighter"
    >
      <span class="text-sm font-semibold"
        >{{ index + 1 }}. Câu hỏi số {{ index + 1 }}</span
      >
      <span class="text-sm text-black-lighter"
        >Bài tập | Thông hiểu | Điền từ</span
      >
    </div>
    <!-- Default  -->
    <div
      v-if="!showDetail"
      class="p-4 text-sm text-gray-600 flex justify-between"
    >
      <span v-html="question && question.Title"></span>
      <div class="flex">
        <span @click="showDetail = true" class="mr-2 cursor-pointer">
          <img :src="eyeIcon" alt="" />
        </span>
        <span class="mr-2 cursor-pointer">
          <img :src="duplicateIcon" alt="" />
        </span>
        <span
          @click="
            questionDeleteID = question && question.ID;
            questionDeleteIndex = index as number;
            updateDeleteQuestionModalStatus(true);
          "
          class="mr-2 cursor-pointer"
        >
          <img :src="removeIcon" alt="" />
        </span>
      </div>
    </div>
    <!-- Detail  -->
    <div v-else class="p-4 pt-8 text-gray-600 text-sm relative">
      <span class="absolute right-2 cursor-pointer top-1"
        ><img
          @click="
            showDetail = false;
            isEdit = false;
          "
          class="w-8 h-8"
          :src="iconTop"
          alt=""
      /></span>
      <div v-if="!isEdit" v-html="question && question.Description"></div>
      <textarea
        v-else
        class="input w-full h-40"
        :value="question && question.Description"
      ></textarea>
      <div
        v-for="questionDetail in question && question.Questions"
        :key="questionDetail.ID"
      >
        <div class="my-2" v-if="!isEdit" v-html="questionDetail.Content"></div>
        <div class="flex flex-col">
          <span
            v-for="(answer, index) in questionDetail.Answers"
            :key="answer.ID"
            class="flex items-center mb-2.5"
          >
            <span>{{ index + 1 }}.</span>
            <span
              class="flex items-center"
              v-if="!isEdit"
              v-html="answer.Content"
            ></span>
            <input
              class="input h-6 w-full"
              v-else
              type="text"
              :value="answer.Content"
            />
          </span>
        </div>
      </div>
      <!-- Bottom  -->
      <div class="flex justify-end">
        <div v-if="!isEdit" class="flex">
          <span @click="isEdit = true" class="mr-2 cursor-pointer">
            <img :src="editIcon" alt="" />
          </span>
          <span class="mr-2 cursor-pointer">
            <img :src="duplicateIcon" alt="" />
          </span>
          <span
            @click="
              questionDeleteID = question && question.ID;
              questionDeleteIndex = index as number;
              updateDeleteQuestionModalStatus(true);
            "
            class="mr-2 cursor-pointer"
          >
            <img :src="removeIcon" alt="" />
          </span>
        </div>
        <div v-else>
          <button
            @click="isEdit = false"
            class="btn bg-white text-red-500 border border-gray-300 mr-3 w-15"
          >
            Huỷ
          </button>
          <button class="btn bg-indigo text-white w-15">Lưu</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";
import { usePopupStore } from "../../stores/popup";
import { useQuestionBankStore } from "../../stores/question-bank-store";
import editIcon from "../../assets/image/edit.svg";
import eyeIcon from "../../assets/image/eye.svg";
import duplicateIcon from "../../assets/image/duplicateIcon.svg";
import removeIcon from "../../assets/image/removeIcon.svg";
import Question from "../type/question";
import iconTop from "../../assets/image/top-arrow.svg";
import { storeToRefs } from "pinia";
export default defineComponent({
  name: "QuestionVue",
  props: {
    question: Object,
    index: Number,
  },
  setup() {
    const { updateAddNewBankModalStatus, updateDeleteQuestionModalStatus } =
      usePopupStore();
    const { deleteQuestion } = useQuestionBankStore();
    const { questionDeleteID, questionDeleteIndex } = storeToRefs(
      useQuestionBankStore()
    );
    const showDetail = ref(false);
    const isEdit = ref(false);
    return {
      updateAddNewBankModalStatus,
      updateDeleteQuestionModalStatus,
      editIcon,
      duplicateIcon,
      removeIcon,
      showDetail,
      eyeIcon,
      isEdit,
      iconTop,
      deleteQuestion,
      questionDeleteIndex,
      questionDeleteID,
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
.question-detail p {
  margin: 0;
}
</style>
