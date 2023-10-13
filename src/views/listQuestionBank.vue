<template>
  <div class="list-question-bank">
    <!-- Header page  -->
    <div class="page-header bg-white px-6 py-5">
      <span class="breadcrumb">Home/ Khảo thí / Tiếng Anh</span>
      <div class="flex justify-between items-center">
        <div class="font-semibold text-xl">Ngân hàng câu hỏi</div>
        <div>
          <router-link :to="`/bank-detail/`">
            <button class="btn bg-blue text-white font-light flex items-center">
              <span class="mr-2"><img :src="plusIcon" alt="" /></span>
              Tạo mới
            </button>
          </router-link>
        </div>
      </div>
    </div>
    <!-- Body   -->
    <div class="page-body px-6 py-4">
      <!-- Filter  -->
      <div class="bg-white px-3 rounded-md border border-gray">
        <div class="border-b border-gray text-sm font-semibold py-3">
          Ngân hàng câu hỏi
        </div>
        <div class="flex justify-between py-3">
          <div class="w-3/10">
            <div class="text-sm font-bold">Tên ngân hàng</div>
            <div class="w-full">
              <a-select
                allowClear
                v-model:value="option"
                show-search
                placeholder="Tìm kiếm"
                style="width: 100%"
                :options="options"
              ></a-select>
            </div>
          </div>
          <div class="w-3/10">
            <div class="text-sm font-bold">Người tạo</div>
            <div>
              <a-select
                v-model:value="option"
                show-search
                placeholder="Tìm kiếm"
                style="width: 100%"
                :options="options"
              ></a-select>
            </div>
          </div>
          <div class="w-3/10">
            <div class="text-sm font-bold">Thời gian tạo</div>
            <div>
              <a-range-picker v-model:value="dateValue" show-time />
            </div>
          </div>
        </div>
      </div>
      <!-- Table  -->
      <div v-if="questionBanks.length > 0" class="mt-4">
        <a-table
          sticky
          :columns="columns"
          :data-source="questionBanks"
          :scroll="{ x: 1500 }"
        >
          <template #bodyCell="{ column, record }">
            <template v-if="column.key === 'operation'">
              <div class="flex">
                <span
                  @click="duplicateBanks(record.ID)"
                  class="mr-2 cursor-pointer"
                >
                  <img :src="duplicateIcon" alt="" />
                </span>
                <span @click="removeBanks(record.ID)" class="cursor-pointer">
                  <img :src="removeIcon" alt="" />
                </span>
              </div>
            </template>
            <template v-if="column.key === 'Name'">
              <router-link :to="`/bank-detail/`">
                <div class="flex text-blue">
                  {{ record.Name }}
                </div>
              </router-link>
            </template>
          </template>
          <template #summary>
            <a-table-summary :fixed="'bottom'">
              <a-table-summary-row> </a-table-summary-row>
            </a-table-summary>
          </template>
        </a-table>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";
import plusIcon from "../assets/image/PlusCircleOutlined.svg";
import duplicateIcon from "../assets/image/duplicateIcon.svg";
import removeIcon from "../assets/image/removeIcon.svg";
import type { SelectProps } from "ant-design-vue";
import type { Dayjs } from "dayjs";
import { useQuestionBankStore } from "../stores/question-bank-store";
import type { TableColumnsType } from "ant-design-vue";
import { storeToRefs } from "pinia";
import { useRoute } from "vue-router";
export default defineComponent({
  name: "ListQuestionBank",
  setup() {
    const options = ref<SelectProps["options"]>([
      { value: "jack", label: "Jack" },
      { value: "lucy", label: "Lucy" },
      { value: "tom", label: "Tom" },
    ]);
    const route = useRoute();
    const { getQuestionBankData } = useQuestionBankStore();
    const { questionBanks } = storeToRefs(useQuestionBankStore());
    type RangeValue = [Dayjs, Dayjs];
    const option = ref();
    const dateValue = ref<RangeValue>();
    const openFilter = ref(true);
    const columns = ref<TableColumnsType>([
      {
        title: "#",
        dataIndex: "index",
        key: "name",
        fixed: "left",
        width: 100,
      },
      {
        title: "Tên ngân hàng",
        dataIndex: "Name",
        key: "Name",
      },
      {
        title: "Số câu hỏi",
        dataIndex: "TotalQuestion",
        key: "TotalQuestion",
      },
      {
        title: "Thời gian tạo",
        dataIndex: "Created",
        key: "Created",
      },
      {
        title: "Người tạo",
        dataIndex: "CreatorName",
        key: "createUser",
      },
      {
        title: "Thời gian cập nhật",
        dataIndex: "Updated",
        key: "Updated",
      },
      {
        title: "Người cập nhật",
        dataIndex: "CreatorName",
        key: "createUser",
      },
      {
        title: "Tuỳ chọn",
        key: "operation",
        dataIndex: "ID",
        fixed: "right",
        width: 100,
      },
    ]);
    const duplicateBanks = (id: string) => {
      console.log(`duplicate${id}`);
    };
    const removeBanks = (id: string) => {
      console.log(`remove${id}`);
    };
    onMounted(() => {
      getQuestionBankData(route.params.subjectID as string);
    });
    return {
      plusIcon,
      option,
      options,
      dateValue,
      openFilter,
      columns,
      questionBanks,
      removeIcon,
      duplicateIcon,
      duplicateBanks,
      removeBanks,
    };
  },
});
</script>
<style>
.breadcrumb {
  color: #00000073;
  font-size: 14px;
  font-style: italic;
}
</style>
