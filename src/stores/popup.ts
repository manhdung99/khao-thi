import { defineStore } from "pinia";

export const usePopupStore = defineStore("popupStore", {
  state: () => ({
    openAddNewBankModal: false,
    openStatisticsBankModal: false,
    openDeleteQuestionModal: false,
    openAddNewQuestionHandmadeModal: false,
    openSelectQuestionFromCourse: false,
    openSelectQuestionFromBank: false,
    deleteKey: "",
  }),
  getters: {},
  actions: {
    updateAddNewBankModalStatus(status: boolean) {
      this.openAddNewBankModal = status;
    },
    updateDeleteQuestionModalStatus(status: boolean, key = "") {
      this.openDeleteQuestionModal = status;
      this.deleteKey = key;
    },
    updateAddNewQuestionHandmadeModalStatus(status: boolean) {
      this.openAddNewQuestionHandmadeModal = status;
    },
    updateSelectQuestionFromCourseStatus(status: boolean) {
      this.openSelectQuestionFromCourse = status;
    },
    updateSelectQuestionFromBankStatus(status: boolean) {
      this.openSelectQuestionFromBank = status;
    },
    updateStatisticsBankModalStatus(status: boolean) {
      this.openStatisticsBankModal = status;
    },
  },
});
