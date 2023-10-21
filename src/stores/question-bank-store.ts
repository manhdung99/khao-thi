import { defineStore } from "pinia";
import { usePopupStore } from "./popup";
import PartQuestion from "@/components/type/partQuestion";
import axios from "axios";
export const useQuestionBankStore = defineStore("questionBankStore", {
  state: () => ({
    questionBanks: [] as Array<any>,
    currentBankQuestions: [] as Array<PartQuestion>,
    questionDeleteID: "",
    questionDeleteIndex: 0,
    questionDuplicateID: "",
    questionDuplicateIndex: 0,
    subjectID: "",
  }),
  getters: {},
  actions: {
    async getCurrentBankQuestions(id: string, searchText = "", LevelPart = "") {
      const popUp = usePopupStore();
      popUp.isLoading = true;
      if (id) {
        const url =
          "https://alpha.eduso.vn/eduso/teacher/ExamManage/GetListPart";
        const params = new FormData();
        params.append("ID", id);
        console.log(params);
        const response = await axios.post(url, params, {
          headers: {
            Authorization:
              "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJVc2VySUQiOiI1ZDgwOGUyZWNmOWE4MjFiZGM5ZGFmODEiLCJlbWFpbCI6InZpZXRwaHVuZy5pdEBnbWFpbC5jb20iLCJ1bmlxdWVfbmFtZSI6IlBodW5nIER1YyBWaWV0Iiwicm9sZSI6InRlYWNoZXIiLCJUeXBlIjoidGVhY2hlciIsIkNoZWNrIjoiWmRQNEVqIiwibmJmIjoxNjk2MjE1MTg3LCJleHAiOjE3Mjc4Mzc1ODcsImlhdCI6MTY5NjIxNTE4N30.3REB3CPSjv-di39fmnkombmugCN5IFtzoS6kdG9Cjik",
          },
        });
        if (response) {
          this.currentBankQuestions = response.data.Data;
        }
      } else {
        this.currentBankQuestions = [];
      }
      popUp.isLoading = false;
    },
    addQuestionToCurrentList(data: Array<PartQuestion>) {
      this.currentBankQuestions = [...data, ...this.currentBankQuestions];
    },
    deleteQuestion(id: string) {
      this.currentBankQuestions = this.currentBankQuestions.filter(
        (question) => question.ID != id
      );
    },
    updateQuestionInQuestionList(data: PartQuestion) {
      const index = this.currentBankQuestions.findIndex(
        (question) => question.ID == data.ID
      );
      if (index >= 0) {
        this.currentBankQuestions[index] = data;
      }
    },
    updateSubjectID(id: string) {
      this.subjectID = id;
    },
  },
});
