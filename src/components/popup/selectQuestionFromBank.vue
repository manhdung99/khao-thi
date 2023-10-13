<template>
  <div class="modal">
    <div
      class="bg-white rounded-sm select-question-from-bank max-h-screen w-full relative"
    >
      <div class="select-bank-modal-content">
        <div
          class="flex items-center justify-between text-indigo text-lg border-b p-4"
        >
          <div class="flex w-full justify-between mr-6 items-center">
            <span>Chọn từ ngân hàng</span>
            <span class="text-sm font-semibold"
              >Đã chọn {{ currentQuestionPartSelected.length }} câu</span
            >
          </div>
          <span
            @click="updateSelectQuestionFromBankStatus(false)"
            class="cursor-pointer"
            ><img :src="closeIcon" alt=""
          /></span>
        </div>
        <div class="main-content">
          <!-- List ngân hàng  -->
          <div class="list-bank scroll">
            <ul>
              <li v-for="bank in bankList" :key="bank.ID" class="">
                <div
                  @click="toggleTag(bank)"
                  class="flex hover:underline cursor-pointer"
                >
                  <span class="mr-2"
                    ><img class="w-4 h-4" :src="inboxIcon" alt=""
                  /></span>
                  <div class="text-sm text-indigo font-semibold">
                    {{ bank.Name }}
                  </div>
                </div>
                <div>
                  <ul class="tree hidden pl-4" :data-storeid="bank.ID">
                    <li v-for="tag in bank.Tags" :key="tag.ID">
                      <template v-if="tag.ParentIDs == null">
                        <div
                          class="text-sm text-indigo font-semibold hover:underline cursor-pointer"
                          @click="getListPartByTag(bank, tag)"
                        >
                          <span>--- {{ tag.Name }}</span>
                        </div>
                      </template>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </div>
          <!-- Câu hỏi của ngân hàng  -->
          <div class="flex-1">
            <div class="text-indigo text-sm font-semibold" v-if="isLoading">
              Đang tải dữ liệu ...
            </div>
            <div class="h-full" v-else>
              <div
                class="list-question-part scroll"
                v-if="currentListPartQuestion.length > 0"
              >
                <div
                  v-for="(question, index) in currentListPartQuestion"
                  :key="question.ID"
                  class="flex items-center w-full"
                >
                  <div class="mr-2">
                    <input
                      :checked="
                        currentSelectedPartQuestionsID.includes(question.ID)
                      "
                      @click="updateListSelectedQuestion(question)"
                      class="cursor-pointer"
                      type="checkbox"
                    />
                  </div>
                  <selectedQuestion
                    :questionPart="question"
                    :index="index"
                    class="border flex-1"
                  />
                </div>
              </div>
              <div class="text-indigo text-sm font-semibold ml-2" v-else>
                Không có dữ liệu
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="flex p-2.5 justify-end border-t absolute bottom-0 w-full">
        <button
          @click="updateSelectQuestionFromBankStatus(false)"
          class="text-white text-sm bg-red-500 px-4 py-2 rounded mr-1 hover:opacity-80"
        >
          Huỷ
        </button>
        <button
          @click="saveData"
          class="text-white text-sm bg-blue-400 px-4 py-2 rounded ml-1 hover:opacity-80"
        >
          Lưu
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";
import inboxIcon from "../../assets/image/noun-inbox.svg";
import closeIcon from "../../assets/image/close-icon.svg";
import { usePopupStore } from "@/stores/popup";
import { useSelectQuestionFromBank } from "@/stores/question-select-from-bank";
import { storeToRefs } from "pinia";
import selectedQuestion from "../question/selectedQuestion/questionSelected.vue";
import Bank from "../type/bank";
import PartQuestion from "../type/partQuestion";
import { useQuestionBankStore } from "@/stores/question-bank-store";
export default defineComponent({
  name: "SelectQuestionBank",
  components: {
    selectedQuestion,
  },
  setup() {
    const isLoading = ref(false);
    const { updateSelectQuestionFromBankStatus } = usePopupStore();
    const { getBanks, getTagQuiz, getListPart } = useSelectQuestionFromBank();
    const { bankList } = storeToRefs(useSelectQuestionFromBank());
    const { addQuestionToCurrentList } = useQuestionBankStore();
    const toggleTag = (obj: Bank) => {
      const id = obj.ID;
      if (obj.Tags == null) {
        getTagQuiz(obj);
      }
      const currentElement = document.querySelector(
        'ul[data-storeid="' + id + '"]'
      );
      if (currentElement) {
        currentElement.classList.toggle("hidden");
      }
    };
    const saveData = () => {
      addQuestionToCurrentList(currentQuestionPartSelected.value);
      currentQuestionPartSelected.value = [];
      updateSelectQuestionFromBankStatus(false);
    };
    const currentListPartQuestion = ref<Array<PartQuestion>>([]);
    const currentQuestionPartSelected = ref<Array<PartQuestion>>([]);
    const getListPartByTag = async (bank: Bank, tag: any) => {
      isLoading.value = true;
      currentListPartQuestion.value = await getListPart(bank, tag);
      isLoading.value = false;
    };
    const currentSelectedPartQuestionsID = ref<Array<string>>([]);
    const updateListSelectedQuestion = (partQuestions: PartQuestion) => {
      if (currentQuestionPartSelected.value.length > 0) {
        if (currentSelectedPartQuestionsID.value.includes(partQuestions.ID)) {
          currentQuestionPartSelected.value =
            currentQuestionPartSelected.value.filter(
              (question) => question.ID != partQuestions.ID
            );
        } else {
          currentQuestionPartSelected.value = [
            partQuestions,
            ...currentQuestionPartSelected.value,
          ];
        }
      } else {
        currentQuestionPartSelected.value = [
          partQuestions,
          ...currentQuestionPartSelected.value,
        ];
      }
      currentSelectedPartQuestionsID.value =
        currentQuestionPartSelected.value.map(
          (question) => question.ID as string
        );
    };
    onMounted(() => {
      isLoading.value = true;
      getBanks();
      isLoading.value = false;
    });
    return {
      isLoading,
      closeIcon,
      inboxIcon,
      bankList,
      currentListPartQuestion,
      currentQuestionPartSelected,
      currentSelectedPartQuestionsID,
      updateSelectQuestionFromBankStatus,
      getTagQuiz,
      toggleTag,
      getListPartByTag,
      updateListSelectedQuestion,
      saveData,
    };
  },
});
</script>
<style>
.select-question-from-bank .list-bank {
  max-width: 25%;
  height: 100%;
}
.scroll {
  overflow-y: auto;
}
.scroll::-webkit-scrollbar-thumb {
  background: rgba(0, 0, 0, 0.5);
}
.scroll::-webkit-scrollbar {
  width: 5px;
  height: 5px;
}
.scroll::-webkit-scrollbar-track {
  background: rgba(0, 0, 0, 0.1);
}
.select-bank-modal-content {
  max-height: calc(100vh - 80px);
  overflow: hidden;
}
.select-question-from-bank .main-content {
  height: calc(100vh - 118px);
  padding: 16px;
  display: flex;
}
.select-question-from-bank .list-question-part {
  padding: 0 8px;
}
</style>
