import { defineStore } from "pinia";
import convertData from "../uses/convertData";
import PartQuestion from "@/components/type/partQuestion";
export const useQuestionBankStore = defineStore("questionBankStore", {
  state: () => ({
    questionBanks: [] as Array<any>,
    currentBankQuestions: [] as Array<PartQuestion>,
    questionDeleteID: "",
    questionDeleteIndex: 0,
  }),
  getters: {},
  actions: {
    getQuestionBankData() {
      const { convertTimestampToDateTime } = convertData();
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
    getCurrentBankQuestions() {
      const data = [
        {
          Created: "2022-07-08T08:30:39.596Z",
          Description: `ELECTRIC-CAR BATTERY CHARGES IN FIVE MINUTES
            Car makers are spending a lot of money on electric cars. In the future, electric cars will replace petrol cars. Environmentalists believe this will reduce the amount of CO2 __(1)__ into the atmosphere. A big problem for electric cars is charging the battery. Some batteries in today's electric cars can take up to 12 hours to charge fully. __(2)__, a company in Israel says it has created a lithium-ion battery that people can charge in just five minutes. This is the same amount of time it takes to fill a tank of gas with petrol. The new lithium-ion batteries __(3)__ were developed by the Israeli company Store Dot are being manufactured by a Chinese company called Eve Energy.
            The new batteries could totally transform driving. They would mean electric cars would be able to travel as far as petrol cars. __(4)__ people with electric cars today suffer from "range anxiety". This is stress caused by worrying about the battery running out of electricity. The new batteries would end this anxiety. A Store Dot spokesperson said. "We're at the point of __(5)__ a revolution in the electric vehicle charging experience".
            (Adapted from ttps.//breakingnewsenglish.com/2101/210124-car-battery.html>)`,
          ID: "62c7eb2f5be48621708efd26",
          Media: null,
          Order: 3,
          OriginID: null,
          ParentID: "62c7eb2f5be48621708efcf3",
          Point: 0,
          Level: 0,
          QuestionType: 0,
          Questions: [
            {
              Answers: [
                { Content: "<p>Content 1</p>", IsCorrect: true, Media: null },
                { Content: "<p>Content 2</p>", IsCorrect: false, Media: null },
                { Content: "<p>Content 3</p>", IsCorrect: false, Media: null },
                { Content: "<p>Content 4</p>", IsCorrect: false, Media: null },
              ],
              CloneAnswers: null,
              Content:
                '<p><span lang="VI" style="font-size:14.0pt"><span style="font-family:&quot;Times New Roman&quot;,serif">1. Vietnamese people often have three meals a day</span></span></p>',
              CourseID: null,
              ID: "62c7eb2f5be48621708efd80",
              ParentID: "62c7eb2f5be48621708efd7f",
              Point: 1,
              Updated: "2022-07-08T08:30:39.675Z",
              Level: 0,
              QuestionType: 0,
            },
          ],
          Timer: 0,
          Title:
            "3. Complete the questions using the words in parentheses. Then match each question with an answer.",
          Type: "QUIZ2",
        },
        {
          Created: "2022-07-08T08:30:39.596Z",
          Description: `ELECTRIC-CAR BATTERY CHARGES IN FIVE MINUTES
            Car makers are spending a lot of money on electric cars. In the future, electric cars will replace petrol cars. Environmentalists believe this will reduce the amount of CO2 __(1)__ into the atmosphere. A big problem for electric cars is charging the battery. Some batteries in today's electric cars can take up to 12 hours to charge fully. __(2)__, a company in Israel says it has created a lithium-ion battery that people can charge in just five minutes. This is the same amount of time it takes to fill a tank of gas with petrol. The new lithium-ion batteries __(3)__ were developed by the Israeli company Store Dot are being manufactured by a Chinese company called Eve Energy.
            The new batteries could totally transform driving. They would mean electric cars would be able to travel as far as petrol cars. __(4)__ people with electric cars today suffer from "range anxiety". This is stress caused by worrying about the battery running out of electricity. The new batteries would end this anxiety. A Store Dot spokesperson said. "We're at the point of __(5)__ a revolution in the electric vehicle charging experience".
            (Adapted from ttps.//breakingnewsenglish.com/2101/210124-car-battery.html>)`,
          ID: "62c7eb2f5be48621708efd12",
          Media: null,
          Order: 3,
          OriginID: null,
          ParentID: "62c7eb2f5be48621708efcf3",
          Point: 0,
          Level: 0,
          QuestionType: 0,
          Questions: [
            {
              Answers: [
                { Content: "<p>Content 1</p>", IsCorrect: true, Media: null },
                { Content: "<p>Content 2</p>", IsCorrect: false, Media: null },
                { Content: "<p>Content 3</p>", IsCorrect: false, Media: null },
                { Content: "<p>Content 4</p>", IsCorrect: false, Media: null },
              ],
              CloneAnswers: null,
              Content:
                '<p><span lang="VI" style="font-size:14.0pt"><span style="font-family:&quot;Times New Roman&quot;,serif">1. Vietnamese people often have three meals a day</span></span></p>',
              CourseID: null,
              ID: "62c7eb2f5be48621708efd80",
              ParentID: "62c7eb2f5be48621708efd7f",
              Point: 1,
              Updated: "2022-07-08T08:30:39.675Z",
              Level: 0,
              QuestionType: 0,
            },
          ],
          Timer: 0,
          Title:
            "3. Complete the questions using the words in parentheses. Then match each question with an answer.",
          Type: "QUIZ1",
        },
      ];
      this.currentBankQuestions = data;
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
      console.log(data);

      const index = this.currentBankQuestions.findIndex(
        (question) => question.ID == data.ID
      );
      if (index >= 0) {
        this.currentBankQuestions[index] = data;
      }
    },
  },
});
