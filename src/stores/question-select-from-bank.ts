import PartQuestion from "@/components/type/partQuestion";
import axios from "axios";
import { defineStore } from "pinia";
import Question from "@/components/type/question";
import Bank from "@/components/type/bank";
export const useSelectQuestionFromBank = defineStore("selectQuestionFromBank", {
  state: () => ({
    bankList: [] as Array<Bank>,
  }),
  getters: {},
  actions: {
    async getBanks(): Promise<void> {
      const url =
        "https://alpha.eduso.vn/eduso/teacher/ExamManage/GetListQuestionBank";
      const params = new FormData();
      params.append("MainSubjectID", "6073df26c549a13e4c631636");
      console.log(params);
      const response = await axios.post(url, params, {
        headers: {
          Authorization:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJVc2VySUQiOiI1ZDgwOGUyZWNmOWE4MjFiZGM5ZGFmODEiLCJlbWFpbCI6InZpZXRwaHVuZy5pdEBnbWFpbC5jb20iLCJ1bmlxdWVfbmFtZSI6IlBodW5nIER1YyBWaWV0Iiwicm9sZSI6InRlYWNoZXIiLCJUeXBlIjoidGVhY2hlciIsIkNoZWNrIjoiWmRQNEVqIiwibmJmIjoxNjk2MjE1MTg3LCJleHAiOjE3Mjc4Mzc1ODcsImlhdCI6MTY5NjIxNTE4N30.3REB3CPSjv-di39fmnkombmugCN5IFtzoS6kdG9Cjik",
        },
      });
      if (response.data.StatusCode == 1) {
        this.bankList = response.data.Data;
      }
    },
    async getTagQuiz(obj: Bank): Promise<void> {
      const bankID = obj.ID;
      const url = "https://alpha.eduso.vn/eduso/teacher/Tags/GetList";
      const params = new FormData();
      params.append("BankQuizID", bankID);
      const response = await axios.post(url, params, {
        headers: {
          Authorization:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJVc2VySUQiOiI1ZDgwOGUyZWNmOWE4MjFiZGM5ZGFmODEiLCJlbWFpbCI6InZpZXRwaHVuZy5pdEBnbWFpbC5jb20iLCJ1bmlxdWVfbmFtZSI6IlBodW5nIER1YyBWaWV0Iiwicm9sZSI6InRlYWNoZXIiLCJUeXBlIjoidGVhY2hlciIsIkNoZWNrIjoiWmRQNEVqIiwibmJmIjoxNjk2MjE1MTg3LCJleHAiOjE3Mjc4Mzc1ODcsImlhdCI6MTY5NjIxNTE4N30.3REB3CPSjv-di39fmnkombmugCN5IFtzoS6kdG9Cjik",
        },
      });
      if (response) {
        obj.Tags = response.data.Data;
        console.log(response.data.Data);
      }
    },
    async getListPart(bank: Bank, tag: any): Promise<Array<PartQuestion>> {
      const bankID = bank.ID;
      const tagID = tag.ID;
      const url =
        "https://alpha.eduso.vn/eduso/teacher/LessonPartExam/GetListPartByTag";
      const params = new FormData();
      params.append("StoreID", bankID);
      params.append("TagID", tagID);
      const response = await axios.post(url, params, {
        headers: {
          Authorization:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJVc2VySUQiOiI1ZDgwOGUyZWNmOWE4MjFiZGM5ZGFmODEiLCJlbWFpbCI6InZpZXRwaHVuZy5pdEBnbWFpbC5jb20iLCJ1bmlxdWVfbmFtZSI6IlBodW5nIER1YyBWaWV0Iiwicm9sZSI6InRlYWNoZXIiLCJUeXBlIjoidGVhY2hlciIsIkNoZWNrIjoiWmRQNEVqIiwibmJmIjoxNjk2MjE1MTg3LCJleHAiOjE3Mjc4Mzc1ODcsImlhdCI6MTY5NjIxNTE4N30.3REB3CPSjv-di39fmnkombmugCN5IFtzoS6kdG9Cjik",
        },
      });
      if (response) {
        return response.data.Data;
      } else {
        return [];
      }
    },
  },
});
