import { defineStore } from "pinia";
import convertData from "../uses/convertData";
import axios from "axios";
export const useQuestionBankStore = defineStore("questionBankStore", {
  state: () => ({
    questionBanks: [] as Array<any>,
  }),
  getters: {},
  actions: {
    getQuestionBankData() {
      const { convertTimestampToDateTime } = convertData();
      // const url =
      //   "https://test.eduso.vn/eduso/teacher/ExamManage/GetListQuestionArchive";
      // axios
      //   .post(url, {
      //     PageSize: 100,
      //     PageIndex: 1,
      //     MainSubjectID: "6073df26c549a13e4c631636",
      //     SearchText: "",
      //   })
      //   .then(function (response) {
      //     console.log(response);
      //   })
      //   .catch(function (error) {
      //     console.log(error);
      //   });
      let banks = [
        {
          Name: "Bank 1",
          Created: "2023-09-06T13:56:30.347Z",
          Updated: "2023-09-06T13:56:30.347Z",
          ID: "64f8850e0330443be0b8c4fd",
          CreatorName: "Phung Duc Viet",
          TotalQuestion: 0,
        },
        {
          Name: "Bank 2",
          Created: "2023-09-06T13:56:30.347Z",
          Updated: "2023-09-06T13:56:30.347Z",
          ID: "64f8850e0330443be0b8c4ds",
          CreatorName: "Phung Duc Viet",
          TotalQuestion: 0,
        },
        {
          Name: "Bank 3",
          Created: "2023-09-06T13:56:30.347Z",
          Updated: "2023-09-06T13:56:30.347Z",
          ID: "64f8850e0330443be0b8c4iu",
          CreatorName: "Phung Duc Viet",
          TotalQuestion: 0,
        },
        {
          Name: "Bank 4",
          Created: "2023-09-06T13:56:30.347Z",
          Updated: "2023-09-06T13:56:30.347Z",
          ID: "64f8850e0330443be0b8c3df",
          CreatorName: "Phung Duc Viet",
          TotalQuestion: 0,
        },
        {
          Name: "Bank 5",
          Created: "2023-09-06T13:56:30.347Z",
          Updated: "2023-09-06T13:56:30.347Z",
          ID: "64f8850e0330443be0b8c5fg",
          CreatorName: "Phung Duc Viet",
          TotalQuestion: 0,
        },
        {
          Name: "Bank 6",
          Created: "2023-09-06T13:56:30.347Z",
          Updated: "2023-09-06T13:56:30.347Z",
          ID: "64f8850e0330443be0b8c8rt",
          CreatorName: "Phung Duc Viet",
          TotalQuestion: 0,
        },
        {
          Name: "Bank 7",
          Created: "2023-09-06T13:56:30.347Z",
          Updated: "2023-09-06T13:56:30.347Z",
          ID: "64f8850e0330443be0b8c2ad",
          CreatorName: "Phung Duc Viet",
          TotalQuestion: 0,
        },
        {
          Name: "Bank 8",
          Created: "2023-09-06T13:56:30.347Z",
          Updated: "2023-09-06T13:56:30.347Z",
          ID: "64f8850e0330443be0b8c9fg",
          CreatorName: "Phung Duc Viet",
          TotalQuestion: 0,
        },
        {
          Name: "Bank 9",
          Created: "2023-09-06T13:56:30.347Z",
          Updated: "2023-09-06T13:56:30.347Z",
          ID: "64f8850e0330443be0b8c2re",
          CreatorName: "Phung Duc Viet",
          TotalQuestion: 0,
        },
        {
          Name: "Bank 10",
          Created: "2023-09-06T13:56:30.347Z",
          Updated: "2023-09-06T13:56:30.347Z",
          ID: "64f8850e0330443be0b8c3gh",
          CreatorName: "Phung Duc Viet",
          TotalQuestion: 0,
        },
        {
          Name: "Bank 11",
          Created: "2023-09-06T13:56:30.347Z",
          Updated: "2023-09-06T13:56:30.347Z",
          ID: "64f8850e0330443be0b8c278",
          CreatorName: "Phung Duc Viet",
          TotalQuestion: 0,
        },
      ];
      banks = banks.map((data, index) => {
        return {
          ...data,
          index: index + 1,
          Created: convertTimestampToDateTime(data.Created),
          Updated: convertTimestampToDateTime(data.Updated),
        };
      });
      this.questionBanks = banks;
    },
  },
});
