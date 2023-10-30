<template>
  <div class="list-question-bank">
    <!-- Header page  -->
    <div class="page-header bg-white px-6 py-5">
      <span class="breadcrumb">Home/ Khảo thí / Tiếng Anh</span>
      <div class="flex justify-between items-center">
        <div class="font-semibold text-xl">Ngân hàng câu hỏi</div>
        <div>
          <router-link :to="`/bank-detail/`">
            <button
              @click="currentbankName = ''"
              class="btn bg-blue text-white font-light flex items-center"
            >
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
                v-model:value="bankFilter"
                show-search
                placeholder="Tìm kiếm"
                style="width: 100%"
                :options="banksName"
              ></a-select>
            </div>
          </div>
          <div class="w-3/10">
            <div class="text-sm font-bold">Người tạo</div>
            <div>
              <a-select
                v-model:value="userFilter"
                show-search
                placeholder="Tìm kiếm"
                style="width: 100%"
                :options="users"
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
      <div v-if="listBankQuestion.length > 0" class="mt-4">
        <a-table
          sticky
          :columns="columns"
          :data-source="listBankQuestion"
          :scroll="{ x: 1500 }"
        >
          <template #bodyCell="{ column, record, index }">
            <template v-if="column.key == '#'">
              <div>{{ index + 1 }}</div>
            </template>
            <template v-if="column.key === 'operation'">
              <div class="flex">
                <span
                  @click="duplicateBanks(record)"
                  class="mr-2 cursor-pointer"
                >
                  <img :src="duplicateIcon" alt="" />
                </span>
                <span @click="removeBanks(record)" class="cursor-pointer">
                  <img :src="removeIcon" alt="" />
                </span>
              </div>
            </template>
            <template v-if="column.key === 'Name'">
              <router-link :to="`/bank-detail/${record.ID}`">
                <div
                  @click="currentbankName = record.Name"
                  class="flex text-blue"
                >
                  {{ record.Name }}
                </div>
              </router-link>
            </template>
            <template v-if="column.key === 'Created'">
              <div class="flex">
                {{ convertDate(record.Created) }}
              </div>
            </template>
            <template v-if="column.key === 'Updated'">
              <div class="flex">
                {{ convertDate(record.Updated) }}
              </div>
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
  <Teleport to="body">
    <deleteBank
      v-if="currentBankAction && openDeleteBankModal"
      :bank="currentBankAction"
    />
  </Teleport>
  <Teleport to="body">
    <duplicateBank
      v-if="currentBankAction && openDuplicateBankModal"
      :bank="currentBankAction"
    />
  </Teleport>
  <Teleport to="body">
    <div
      v-if="isLoading"
      class="fixed top-0 bottom-0 right-0 left-0 flex justify-center items-center bg-modal z-10"
    >
      <img :src="loadingIcon" alt="" />
    </div>
  </Teleport>
</template>

<script lang="ts">
import { computed, defineComponent, onMounted, ref, watch } from "vue";
import plusIcon from "../assets/image/PlusCircleOutlined.svg";
import duplicateIcon from "../assets/image/duplicateIcon.svg";
import removeIcon from "../assets/image/removeIcon.svg";
import loadingIcon from "../assets/image/loading-gif.gif";
import type { Dayjs } from "dayjs";
import { useQuestionBankStore } from "../stores/question-bank-store";
import type { TableColumnsType } from "ant-design-vue";
import { storeToRefs } from "pinia";
import { useRoute } from "vue-router";
import { usePopupStore } from "@/stores/popup";
import { convertDate } from "../uses/convertData";
import deleteBank from "@/components/popup/deleteBank.vue";
import duplicateBank from "@/components/popup/duplicateBank.vue";
import Bank from "@/components/type/bank";
export default defineComponent({
  name: "ListQuestionBank",
  components: {
    deleteBank,
    duplicateBank,
  },
  setup() {
    const route = useRoute();
    const { updateSubjectID, getBankArchive } = useQuestionBankStore();
    const { updateDeleteBankModalStatus, updateDuplicateBankModalStatus } =
      usePopupStore();
    const { isLoading, openDeleteBankModal, openDuplicateBankModal } =
      storeToRefs(usePopupStore());
    const { questionBanks, listBankQuestion, currentbankName } = storeToRefs(
      useQuestionBankStore()
    );
    type RangeValue = [Dayjs, Dayjs];
    const bankFilter = ref();
    const userFilter = ref();
    const dateValue = ref<RangeValue>();
    const openFilter = ref(true);
    const columns = ref<TableColumnsType>([
      {
        title: "#",
        dataIndex: "index",
        key: "#",
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
    const users = [
      {
        value: "User1",
        name: "User1",
      },
      {
        value: "User2",
        name: "User2",
      },
    ];
    const currentBankAction = ref();
    const duplicateBanks = (bank: Bank) => {
      currentBankAction.value = bank;
      updateDuplicateBankModalStatus(true);
    };
    const removeBanks = (bank: Bank) => {
      currentBankAction.value = bank;
      updateDeleteBankModalStatus(true);
    };
    const banksName = computed(() => {
      if (listBankQuestion.value.length > 0) {
        return listBankQuestion.value.map((bank) => {
          return {
            value: bank.Name,
            label: bank.Name,
          };
        });
      } else {
        return [];
      }
    });
    onMounted(() => {
      updateSubjectID(route.params.subjectID as string);
      getBankArchive();
    });
    watch(bankFilter, () => {
      getBankArchive(bankFilter.value);
    });
    return {
      plusIcon,
      dateValue,
      openFilter,
      columns,
      questionBanks,
      removeIcon,
      duplicateIcon,
      listBankQuestion,
      loadingIcon,
      isLoading,
      banksName,
      userFilter,
      bankFilter,
      users,
      currentbankName,
      currentBankAction,
      openDeleteBankModal,
      openDuplicateBankModal,
      duplicateBanks,
      removeBanks,
      convertDate,
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
