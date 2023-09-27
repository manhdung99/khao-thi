import { defineStore } from "pinia";

export const usePopupStore = defineStore("popupStore", {
  state: () => ({
    openAddNewBankModal: false,
    openDeleteQuestionModal: false,
    openAddNewQuestionHandmadeModal: false,
    openSelectQuestionFromCourse: false,
  }),
  getters: {},
  actions: {
    updateAddNewBankModalStatus(status: boolean) {
      this.openAddNewBankModal = status;
    },
    updateDeleteQuestionModalStatus(status: boolean) {
      this.openDeleteQuestionModal = status;
    },
    updateAddNewQuestionHandmadeModalStatus(status: boolean) {
      this.openAddNewQuestionHandmadeModal = status;
    },
    updateSelectQuestionFromCourseStatus(status: boolean) {
      this.openSelectQuestionFromCourse = status;
    },
  },
});
