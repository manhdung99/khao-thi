import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import ListQuestionBank from "../views/listQuestionBank.vue";
import QuestionBankVue from "@/views/QuestionBankDetail.vue";
import HomeView from "../views/HomeView.vue";
const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: HomeView,
    meta: { title: "Trang chủ" },
  },
  {
    path: "/list-bank/:subjectID",
    name: "list-bank",
    component: ListQuestionBank,
    meta: { title: "Ngân hàng câu hỏi" },
  },
  {
    path: "/bank-detail/",
    name: "bankDetail",
    component: QuestionBankVue,
    meta: { title: "Ngân hàng câu hỏi" },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from) => {
  document.title = (to.meta?.title ?? "Default Title") as string;
});

export default router;
