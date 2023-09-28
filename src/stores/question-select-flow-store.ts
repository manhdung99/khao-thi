import { defineStore } from "pinia";
import PartQuestion from "@/components/type/partQuestion";
import Question from "@/components/type/question";
export const useSelectQuestionStore = defineStore("selectQuestionStore", {
  state: () => ({
    courses: [] as Array<any>,
    currentSelectedQuestion: [] as Array<any>,
    isFillDesOnetime: true,
    descriptionOneTime: "",
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
          units: [
            {
              ID: "64f8850e0330443be0b8ca34d",
              Name: "UNIT 01: THE MAN - MADE ENVIRONMENT",
              lessons: [
                {
                  ID: "65asdfasfsdfasdfasdfasdf",
                  Name: "Reading",
                  part: [
                    {
                      Created: "2022-07-08T08:30:39.596Z",
                      Description: "",
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
                        },
                      ],
                      Timer: 0,
                      Title:
                        "A common topic in the exam is 'home' . Choose these correct words with the topics",
                      Type: "QUIZ1",
                    },
                    {
                      Created: "2022-07-08T08:30:39.596Z",
                      Description: "",
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
                        },
                      ],
                      Timer: 0,
                      Title:
                        "A common topic in the exam is 'home' . Choose these correct words with the topics",
                      Type: "QUIZ2",
                    },
                  ],
                },
              ],
            },
          ],
        },
      ];
      this.courses = courseData;
    },
    deleteSelectedQuestion(id: string) {
      this.currentSelectedQuestion = this.currentSelectedQuestion.filter(
        (question) => question.ID != id
      );
    },
  },
});
