<template>
  <div class="modal center">
    <div class="add-new-handmade scroll-area">
      <div class="border-b px-4 py-4 flex justify-between">
        <span class="text-indigo font-bold">Thêm câu hỏi</span>
        <span
          @click="updateAddNewQuestionHandmadeModalStatus(false)"
          class="cursor-pointer"
          ><img :src="closeIcon" alt=""
        /></span>
      </div>
      <div class="px-4 border-b">
        <div class="my-4">
          <select v-model="type" class="w-full input" name="" id="">
            <option value="QUIZ1">QUIZ1 : Chọn 1 đáp án đúng</option>
            <option value="QUIZ2">QUIZ2 : Chọn 1 đáp án đúng</option>
            <option value="QUIZ3">QUIZ3 : Chọn 1 đáp án đúng</option>
            <option value="QUIZ4">QUIZ4 : Chọn 1 đáp án đúng</option>
          </select>
        </div>
        <!-- Loại câu hỏi và mức độ  -->
        <div class="flex justify-between mb-4">
          <div class="w-1/2 mr-2">
            <div class="text-indigo font-semibold mb-2">Loại câu hỏi</div>
            <div>
              <select v-model="questionType" class="input w-full" name="" id="">
                <option value="theory">Lý thuyết</option>
                <option value="exercise">Bài tập</option>
              </select>
            </div>
          </div>
          <div class="w-1/2 ml-2">
            <div class="text-indigo font-semibold mb-2">Mức độ</div>
            <div>
              <select v-model="level" class="input w-full" name="" id="">
                <option value="basic">Nhận biết</option>
                <option value="advanced">Vận dụng</option>
              </select>
            </div>
          </div>
        </div>
        <!-- Tiêu đề -->
        <div class="flex justify-between mb-4">
          <div class="w-full">
            <div class="text-indigo font-semibold mb-2">Tiêu đề</div>
            <div>
              <input
                v-model="title"
                class="input w-full placeholder-gray-400"
                placeholder="Tiêu đề"
              />
            </div>
          </div>
        </div>
        <!-- Text edit  -->
        <div>
          <QuillEditor
            contentType="html"
            toolbar="full"
            v-model:content="editerData"
            :options="editorOptions"
            ref="editor"
            theme="snow"
          />
          <div
            v-if="questionType == 'exercise' && questionArray.length > 0"
            class="mt-4"
          >
            <MultipleChoice
              v-for="(question, index) in questionArray"
              :key="question.ID"
              :index="index"
              :removeQuestion="removeQuestion"
              :question="question"
              :updateQuestionContent="updateQuestionContent"
              :updateQuestionAnswer="updateQuestionAnswer"
            />
          </div>
        </div>
        <div v-if="questionType == 'exercise'" class="flex my-4">
          <button @click="addNewQuestion" class="mr-2 btn btn-blue">
            Thêm câu hỏi
          </button>
          <button class="ml-2 btn btn-blue">Thêm từ file excel</button>
        </div>
      </div>
      <!-- Bottom  -->
      <div class="flex justify-end px-4 pt-4 pb-1">
        <button
          @click="updateAddNewQuestionHandmadeModalStatus(false)"
          class="btn mr-3 h-8"
        >
          Đóng
        </button>
        <button @click="addQuestionToList" class="btn btn-blue">Lưu</button>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, onMounted, ref, watch } from "vue";
import closeIcon from "../../assets/image/close-icon.svg";
import { usePopupStore } from "../../stores/popup";
import { useQuestionBankStore } from "../../stores/question-bank-store";
import { storeToRefs } from "pinia";
import MultipleChoice from "../questionType/MultipleChoice.vue";
import Question from "../type/question";
import Answer from "../type/answer";
export default defineComponent({
  name: "AddNewQuestionHandmade",
  components: {
    MultipleChoice,
  },
  setup() {
    const { updateAddNewQuestionHandmadeModalStatus } = usePopupStore();
    const { questionDeleteID, questionDeleteIndex } = storeToRefs(
      useQuestionBankStore()
    );
    const { addQuestionToCurrentList } = useQuestionBankStore();
    const editerData = ref("");
    const editor = ref();
    const type = ref("QUIZ1");
    const level = ref("basic");
    const title = ref("");
    const questionType = ref("theory");
    const questionArray = ref<Question[]>([]);
    const addNewQuestion = () => {
      const id = "id" + Math.random().toString(16).slice(2);
      questionArray.value = [
        ...questionArray.value,
        {
          ID: id,
          Content: "",
          Media: null,
          Answers: [],
          Type: "",
          CloneAnswers: "",
        },
      ];
    };
    const removeQuestion = (id: string) => {
      questionArray.value = questionArray.value.filter(
        (question) => question.ID != id
      );
    };
    const editorOptions = {
      modules: {
        custom: [
          {
            icon: "button_fillquiz_icon", // Replace with your custom icon class
            name: "fillquiz",
            action: () => {
              // Your custom action when the button is clicked
              editor.value.focus();
              editor.value.format("fillquiz", true);
            },
          },
        ],
      },
    };
    const addQuestionToList = () => {
      const data = {
        Type: type.value,
        ID: Math.random().toString(16).slice(2),
        Description: editerData.value,
        Media: null,
        Title: title.value,
        Questions: questionArray.value,
      };
      addQuestionToCurrentList(data);
      updateAddNewQuestionHandmadeModalStatus(false);
    };
    const updateQuestionContent = (id: string, content: string) => {
      const question = questionArray.value.find(
        (question) => question.ID == id
      );
      if (question) {
        question.Content = content;
      }
    };
    const updateQuestionAnswer = (id: string, answers: Array<Answer>) => {
      const question = questionArray.value.find(
        (question) => question.ID == id
      );
      if (question) {
        question.Answers = answers;
      }
    };
    return {
      closeIcon,
      questionDeleteID,
      questionDeleteIndex,
      editerData,
      editor,
      editorOptions,
      questionArray,
      type,
      title,
      level,
      questionType,
      updateAddNewQuestionHandmadeModalStatus,
      addNewQuestion,
      removeQuestion,
      addQuestionToList,
      updateQuestionContent,
      updateQuestionAnswer,
    };
  },
});
</script>
<style>
.add-new-handmade {
  max-height: 100vh;
  background: white;
  width: 800px;
  border: 1px solid #00000032;
  border-radius: 4px;
}
.add-new-handmade p {
  margin: 0;
}
.ql-container.ql-snow {
  min-height: 200px;
}
.btn-blue {
  background: #3b82f6;
  color: white;
  font-weight: 500;
  font-size: 14px;
  display: flex;
  align-items: center;
}
.btn-blue:hover {
  background: #1e40af;
}
.btn.btn-blue {
  height: 32px;
}
</style>
