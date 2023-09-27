<template>
  <!-- Default  -->
  <div v-if="question" class="bg-white rounded-md question-detail mb-4">
    <div
      class="p-3 flex items-center justify-between border-b border-grey-lighter"
    >
      <span class="text-sm font-semibold"
        >{{ index + 1 }}. Câu hỏi số {{ index + 1 }}</span
      >
      <span class="text-sm text-black-lighter"
        >{{ question.QuestionType == 0 ? "Lý thuyết" : "Bài tập" }} |
        {{ question.QuestionType == 0 ? "Thông hiểu" : "Vận dụng" }} |
        {{
          question.Type == "QUIZ1"
            ? "Chọn một"
            : question.Type == "QUIZ2"
            ? "Điền từ"
            : question.Type == "QUIZ3"
            ? "Matching"
            : "Chọn nhiều"
        }}</span
      >
    </div>
    <!-- Default  -->
    <div
      v-if="!showDetail"
      class="p-4 text-sm text-gray-600 flex justify-between"
    >
      <span v-html="question.Title"></span>
      <div class="flex">
        <span @click="showDetail = true" class="mr-2 cursor-pointer">
          <img :src="eyeIcon" alt="" />
        </span>
        <span class="mr-2 cursor-pointer">
          <img :src="duplicateIcon" alt="" />
        </span>
        <span
          @click="
            questionDeleteID = question.ID;
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
      <div v-if="!isEdit" v-html="question.Description"></div>
      <QuillEditor
        v-else
        contentType="html"
        toolbar="full"
        theme="snow"
        class="border rounded"
        v-model:content="question.Description"
      ></QuillEditor>
      <div
        v-for="questionDetail in question.Questions"
        :key="questionDetail.ID"
      >
        <div class="my-2" v-if="!isEdit" v-html="questionDetail.Content"></div>
        <div>
          <span
            v-for="(answer, index) in questionDetail.Answers"
            :key="answer.ID"
            class="mb-2.5"
            :class="!isEdit ? 'flex' : ''"
          >
            <span>{{ index + 1 }}.</span>
            <span class="" v-if="!isEdit" v-html="answer.Content"></span>
            <QuillEditor
              v-else
              contentType="html"
              toolbar="minimal"
              theme="snow"
              class="border rounded h-6"
              v-model:content="answer.Content"
            ></QuillEditor>
          </span>
        </div>
      </div>
      <!-- Bottom  -->
      <div class="flex justify-end mt-2">
        <div v-if="!isEdit" class="flex">
          <span
            v-if="canEdit"
            @click="isEdit = true"
            class="mr-2 cursor-pointer"
          >
            <img :src="editIcon" alt="" />
          </span>
          <span class="mr-2 cursor-pointer">
            <img :src="duplicateIcon" alt="" />
          </span>
          <span
            @click="
              questionDeleteID = question.ID;
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
            @click="
              resetData();
              isEdit = false;
            "
            class="btn bg-white text-red-500 border border-gray-300 mr-3 w-15"
          >
            Huỷ
          </button>
          <button
            @click="
              updateQuestionInQuestionList(question);
              isEdit = false;
            "
            class="btn bg-indigo text-white w-15"
          >
            Lưu
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";
import { usePopupStore } from "../../stores/popup";
import { useQuestionBankStore } from "../../stores/question-bank-store";
import editIcon from "../../assets/image/edit.svg";
import eyeIcon from "../../assets/image/eye.svg";
import duplicateIcon from "../../assets/image/duplicateIcon.svg";
import removeIcon from "../../assets/image/removeIcon.svg";
import iconTop from "../../assets/image/top-arrow.svg";
import { storeToRefs } from "pinia";
import PartQuestion from "../type/partQuestion";
export default defineComponent({
  name: "QuestionVue",
  props: {
    index: {
      type: Number,
      required: true,
    },
    questionPart: {
      type: Object,
      required: true,
    },
    canEdit: {
      type: Boolean,
      required: true,
    },
  },
  setup(props) {
    const { updateAddNewBankModalStatus, updateDeleteQuestionModalStatus } =
      usePopupStore();
    const { deleteQuestion } = useQuestionBankStore();

    // Remove the initialization of question with props.questionPart
    const question = ref<PartQuestion>();

    const { questionDeleteID, questionDeleteIndex } = storeToRefs(
      useQuestionBankStore()
    );
    const { updateQuestionInQuestionList } = useQuestionBankStore();

    const resetData = () => {
      // Reset the question ref to a deep copy of props.questionPart
      question.value = JSON.parse(JSON.stringify(props.questionPart));
    };

    onMounted(() => {
      // Set the question ref to a deep copy of props.questionPart
      question.value = JSON.parse(JSON.stringify(props.questionPart));
    });

    const showDetail = ref(false);
    const isEdit = ref(false);

    return {
      editIcon,
      duplicateIcon,
      removeIcon,
      showDetail,
      eyeIcon,
      isEdit,
      iconTop,
      questionDeleteIndex,
      questionDeleteID,
      question,
      updateAddNewBankModalStatus,
      updateDeleteQuestionModalStatus,
      deleteQuestion,
      updateQuestionInQuestionList,
      resetData,
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
