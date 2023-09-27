<template>
  <!-- Default  -->
  <div v-if="questionDetail" class="flex items-center ml-4">
    <span
      v-html="questionDetail.Content"
      class="text-sm font-medium text-red-500 mr-5 max-w-1/4"
    >
    </span>
    <input class="input mr-2" type="text" placeholder="Nội dung" />
    <select
      v-model="questionDetail.QuestionType"
      class="input mr-2"
      name=""
      id=""
    >
      <option :value="0">Lý thuyết</option>
      <option :value="1">Bài tập</option>
    </select>
    <select v-model="questionDetail.Level" class="input mr-4" name="" id="">
      <option :value="0">Nhận biết</option>
      <option :value="1">Thông hiểu</option>
      <option :value="2">Vận dụng</option>
    </select>
    <input
      @click="updateListSelectedQuestion"
      class="w-4 h-4 cursor-pointer"
      type="checkbox"
    />
  </div>
</template>
<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";
import { usePopupStore } from "../../stores/popup";
import { useSelectQuestionStore } from "../../stores/question-select-flow-store";
import editIcon from "../../assets/image/edit.svg";
import eyeIcon from "../../assets/image/eye.svg";
import duplicateIcon from "../../assets/image/duplicateIcon.svg";
import removeIcon from "../../assets/image/removeIcon.svg";
import iconTop from "../../assets/image/top-arrow.svg";
import { storeToRefs } from "pinia";
import Question from "../type/question";
export default defineComponent({
  name: "QuestionViewInLesson",
  props: {
    question: {
      type: Object as () => Question,
      required: true,
    },
  },
  setup(props) {
    const { updateAddNewBankModalStatus, updateDeleteQuestionModalStatus } =
      usePopupStore();

    // Remove the initialization of question with props.questionPart
    const questionDetail = ref<Question>();
    const { currentSelectedQuestion } = storeToRefs(useSelectQuestionStore());
    const showDetail = ref(false);
    const isEdit = ref(false);
    const updateListSelectedQuestion = () => {
      if (
        currentSelectedQuestion.value.length > 0 &&
        questionDetail.value != null
      ) {
        const currentSelectedQuestionID = currentSelectedQuestion.value.map(
          (question) => question.ID
        );
        if (currentSelectedQuestionID.includes(questionDetail.value.ID)) {
          currentSelectedQuestion.value.filter(
            (question) => question.ID != questionDetail.value.ID
          );
        } else {
          currentSelectedQuestion.value = [
            questionDetail.value,
            ...currentSelectedQuestion.value,
          ];
        }
      } else {
        currentSelectedQuestion.value = [
          questionDetail.value,
          ...currentSelectedQuestion.value,
        ];
        console.log(currentSelectedQuestion.valueFo);
      }
    };
    onMounted(() => {
      questionDetail.value = props.question;
    });
    return {
      editIcon,
      duplicateIcon,
      removeIcon,
      showDetail,
      eyeIcon,
      isEdit,
      iconTop,
      questionDetail,
      currentSelectedQuestion,
      updateAddNewBankModalStatus,
      updateDeleteQuestionModalStatus,
      updateListSelectedQuestion,
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
