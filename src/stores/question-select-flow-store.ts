import { defineStore } from "pinia";
import PartQuestion from "@/components/type/partQuestion";
import Question from "@/components/type/question";
export const useSelectQuestionStore = defineStore("selectQuestionStore", {
  state: () => ({
    courses: [] as Array<any>,
    currentSelectedQuestion: [] as Array<any>,
  }),
  getters: {},
  actions: {
    getCourseData() {
      const courseData = [
        {
          Name: "MINDSET FOR IELST 2 [Học liệu chia sẻ]",
          Created: "2023-09-06T13:56:30.347Z",
          Updated: "2023-09-06T13:56:30.347Z",
          ID: "64f8850e0330443be0b8c4fd",
          CreatorName: "Phung Duc Viet",
          TotalQuestion: 0,
          lessons: [
            {
              ID: "64f8850e0330443be0b8ca34d",
              Name: "UNIT 01: THE MAN - MADE ENVIRONMENT",
              part: [
                {
                  Created: "2022-07-08T08:30:39.596Z",
                  Description: `ELECTRIC-CAR BATTERY CHARGES IN FIVE MINUTES
                  Car makers are spending a lot of money on electric cars. In the future, electric cars will replace petrol cars. Environmentalists believe this will reduce the amount of CO2 __(1)__ into the atmosphere. A big problem for electric cars is charging the battery. Some batteries in today's electric cars can take up to 12 hours to charge fully. __(2)__, a company in Israel says it has created a lithium-ion battery that people can charge in just five minutes. This is the same amount of time it takes to fill a tank of gas with petrol. The new lithium-ion batteries __(3)__ were developed by the Israeli company Store Dot are being manufactured by a Chinese company called Eve Energy.
                  The new batteries could totally transform driving. They would mean electric cars would be able to travel as far as petrol cars. __(4)__ people with electric cars today suffer from "range anxiety". This is stress caused by worrying about the battery running out of electricity. The new batteries would end this anxiety. A Store Dot spokesperson said. "We're at the point of __(5)__ a revolution in the electric vehicle charging experience".
                  (Adapted from ttps.//breakingnewsenglish.com/2101/210124-car-battery.html>)`,
                  ID: "62c7eb2f5be48621708ef454",
                  Media: null,
                  Order: 3,
                  OriginID: null,
                  ParentID: "62c7eb2f5be48621708erwdfbd",
                  Point: 0,
                  Level: 0,
                  QuestionType: 0,
                  Questions: [
                    {
                      Answers: [
                        {
                          Content: "<p>Content 1</p>",
                          IsCorrect: true,
                          Media: null,
                        },
                        {
                          Content: "<p>Content 2</p>",
                          IsCorrect: false,
                          Media: null,
                        },
                        {
                          Content: "<p>Content 3</p>",
                          IsCorrect: false,
                          Media: null,
                        },
                        {
                          Content: "<p>Content 4</p>",
                          IsCorrect: false,
                          Media: null,
                        },
                      ],
                      CloneAnswers: null,
                      Content: `A common topic in the exam is 'home' . Choose these correct words with the topics`,
                      ID: "62c7eb2f5be486217054544",
                      Point: 1,
                      Updated: "2022-07-08T08:30:39.675Z",
                      Level: 0,
                      QuestionType: 0,
                    },
                    {
                      Answers: [
                        {
                          Content: "<p>Content 1</p>",
                          IsCorrect: true,
                          Media: null,
                        },
                        {
                          Content: "<p>Content 2</p>",
                          IsCorrect: false,
                          Media: null,
                        },
                        {
                          Content: "<p>Content 3</p>",
                          IsCorrect: false,
                          Media: null,
                        },
                        {
                          Content: "<p>Content 4</p>",
                          IsCorrect: false,
                          Media: null,
                        },
                      ],
                      CloneAnswers: null,
                      Content: `A common topic in the exam is 'home' . Choose these correct words with the topics`,
                      ID: "62c7eb2f5be486217054dsfsd",
                      Point: 1,
                      Updated: "2022-07-08T08:30:39.675Z",
                      Level: 0,
                      QuestionType: 0,
                    },
                  ],
                  Timer: 0,
                  Title: "Writing",
                  Type: "QUIZ1",
                },
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
                  ParentID: "62c7eb2f5be48621708erwerf",
                  Point: 0,
                  Level: 0,
                  QuestionType: 0,
                  Questions: [
                    {
                      Answers: [
                        {
                          Content: "<p>Content 1</p>",
                          IsCorrect: true,
                          Media: null,
                        },
                        {
                          Content: "<p>Content 2</p>",
                          IsCorrect: false,
                          Media: null,
                        },
                        {
                          Content: "<p>Content 3</p>",
                          IsCorrect: false,
                          Media: null,
                        },
                        {
                          Content: "<p>Content 4</p>",
                          IsCorrect: false,
                          Media: null,
                        },
                      ],
                      CloneAnswers: null,
                      Content: `A common topic in the exam is 'home' . Choose these correct words with the topics`,
                      ID: "62c7eb2f5be48621708ef324",
                      Point: 1,
                      Updated: "2022-07-08T08:30:39.675Z",
                      Level: 0,
                      QuestionType: 0,
                    },
                  ],
                  Timer: 0,
                  Title: "Reading",
                  Type: "QUIZ2",
                },
              ],
            },
          ],
        },
      ];
      this.courses = courseData;
    },
  },
});
