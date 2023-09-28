<template>
  <div class="modal">
    <div
      class="bg-white rounded-sm p-4 select-question-from-course max-h-screen relative"
    >
      <div class="select-modal-content h-full scroll-area">
        <div
          class="flex items-center justify-between font-semibold text-xl border-b pb-2"
        >
          Chọn từ học liệu Eduso
          <span
            @click="
              currentSelectedQuestion = [];
              updateSelectQuestionFromCourseStatus(false);
            "
            class="cursor-pointer"
            ><img :src="closeIcon" alt=""
          /></span>
        </div>
        <div>
          <div class="text-sm font-bold mt-2 mb-4">1. Thiết lập nội dung</div>
          <div class="mt-2">
            <div class="text-sm font-bold mb-4">Chọn cách nhập nội dung</div>
            <div class="flex items-center text-sm">
              <div class="mr-8 flex items-center">
                <input
                  v-model="selectedOption"
                  value="onetime"
                  class="mr-2"
                  type="radio"
                  name="type"
                />
                <span>Nhập 1 lần và áp dụng tất cả</span>
              </div>
              <div class="flex items-center">
                <input
                  v-model="selectedOption"
                  value="eachsentence"
                  class="mr-2"
                  type="radio"
                  name="type"
                />
                <span>Nhập từng câu</span>
              </div>
            </div>
          </div>
          <div class="mt-4 w-full">
            <div class="text-sm font-bold mb-1">Nhập nội dung</div>
            <input
              :disabled="!isFillDesOnetime"
              class="input w-1/2"
              type="text"
              placeholder="Tìm kiếm"
              v-model="descriptionOneTime"
            />
          </div>
          <!-- Chọn học liệu  -->
          <div class="w-full">
            <p class="my-4 text-base font-bold">2.Chọn học liệu</p>
            <div class="flex w-full">
              <div class="w-1/2 pr-2">
                <p class="mb-1 text-sm font-bold">Chọn Chương trình</p>
                <multiselect
                  v-model="program"
                  :searchable="searchable"
                  :options="programs"
                  valueProp="ID"
                  track-by="Name"
                  label="Name"
                  placeholder="Tìm kiếm"
                ></multiselect>
              </div>
              <div class="w-1/2 pl-2">
                <p class="mb-1 text-sm font-bold">Chọn Cấp độ</p>
                <multiselect
                  v-model="level"
                  :searchable="searchable"
                  :options="levels"
                  valueProp="ID"
                  track-by="Name"
                  label="Name"
                  placeholder="Tìm kiếm"
                ></multiselect>
              </div>
            </div>
          </div>
          <div v-if="isFilterCourse">
            <!-- Course  -->
            <div class="flex mt-6">
              <button
                @click="showSelectedSentence = false"
                :class="
                  !showSelectedSentence
                    ? 'border-b-2 border-blue-500 text-blue-500'
                    : ''
                "
                class="text-sm border-b pb-3 pr-2"
              >
                Câu hỏi từ học liệu
              </button>
              <button
                @click="showSelectedSentence = true"
                :class="
                  showSelectedSentence
                    ? 'border-b-2 border-blue-500 text-blue-500'
                    : ''
                "
                class="text-sm border-b pb-3 pl-2"
              >
                Câu đã chọn ({{ currentSelectedQuestion.length }})
              </button>
            </div>
            <!-- Part 1  -->

            <div v-if="!showSelectedSentence" class="mt-6">
              <div v-for="course in courses" :key="course.ID">
                <p class="font-semibold ml-2 text-green-400 mb-4">
                  {{ course.Name }}
                </p>
                <UnitVue
                  v-for="unit in course.units"
                  :key="unit.ID"
                  :unit="unit"
                />
              </div>
            </div>
            <!-- Part 2  -->
            <div v-else>
              <div class="list-question mt-4">
                <selectedQuestion
                  v-for="(question, index) in currentSelectedQuestion"
                  :key="question.ID"
                  :questionPart="question"
                  :index="index"
                  class="border"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="absolute bottom-4 right-4">
        <button
          @click="cancelAction()"
          class="btn bg-white text-red-500 border border-gray-300 mr-3 w-15"
        >
          Huỷ
        </button>
        <button @click="saveData()" class="btn bg-indigo text-white w-15">
          Lưu
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref, watch } from "vue";
import closeIcon from "../../assets/image/close-icon.svg";
import { usePopupStore } from "@/stores/popup";
import arrowTop from "../../assets/image/arrow-top.svg";
import arrowDown from "../../assets/image/arrow-down.svg";
import folderIcon from "../../assets/image/folder.svg";
import UnitVue from "../unit/unit.vue";
import Multiselect from "@vueform/multiselect";
import { useSelectQuestionStore } from "../../stores/question-select-flow-store";
import { storeToRefs } from "pinia";
import selectedQuestion from "../question/selectedQuestion/questionSelected.vue";
import { useQuestionBankStore } from "@/stores/question-bank-store";
export default defineComponent({
  name: "SelectQuestionFromCourse",
  components: {
    UnitVue,
    Multiselect,
    selectedQuestion,
  },
  setup() {
    const { updateSelectQuestionFromCourseStatus } = usePopupStore();
    const { getCourseData } = useSelectQuestionStore();
    const { addQuestionToCurrentList } = useQuestionBankStore();
    const { courses, isFillDesOnetime, descriptionOneTime } = storeToRefs(
      useSelectQuestionStore()
    );
    const { currentSelectedQuestion } = storeToRefs(useSelectQuestionStore());
    const selectedOption = ref("onetime");
    const showSelectedSentence = ref(false);
    const isFilterCourse = ref(false);
    const program = ref();
    const searchable = ref(true);
    const programs = ref([
      { ID: 1, Name: "Chương trình 1" },
      { ID: 2, Name: "Chương trình 2" },
      { ID: 3, Name: "Chương trình 3" },
      { ID: 4, Name: "Chương trình 4" },
    ]);
    const levels = ref([
      { ID: 1, Name: "Level 1" },
      { ID: 2, Name: "Level 2" },
      { ID: 3, Name: "Level 3" },
      { ID: 4, Name: "Level 4" },
    ]);
    const level = ref();

    const cancelAction = () => {
      currentSelectedQuestion.value = [];
      updateSelectQuestionFromCourseStatus(false);
    };
    const saveData = () => {
      addQuestionToCurrentList(currentSelectedQuestion.value);
      currentSelectedQuestion.value = [];
      updateSelectQuestionFromCourseStatus(false);
    };

    watch([level, program], () => {
      if (level.value != null && program.value != null) {
        isFilterCourse.value = true;
      } else {
        isFilterCourse.value = false;
      }
    });
    watch(selectedOption, () => {
      if (selectedOption.value == "eachsentence") {
        isFillDesOnetime.value = false;
      } else {
        isFillDesOnetime.value = true;
      }
    });
    onMounted(() => {
      getCourseData();
    });
    return {
      closeIcon,
      selectedOption,
      showSelectedSentence,
      arrowDown,
      arrowTop,
      folderIcon,
      programs,
      program,
      searchable,
      levels,
      level,
      isFilterCourse,
      courses,
      currentSelectedQuestion,
      isFillDesOnetime,
      descriptionOneTime,
      cancelAction,
      saveData,
      updateSelectQuestionFromCourseStatus,
    };
  },
});
</script>
<style>
.select-question-from-course {
  width: 100%;
}
.select-modal-content {
  max-height: calc(100vh - 80px);
}
</style>
<style src="@vueform/multiselect/themes/default.css"></style>
