import { defineStore } from "pinia";

export const usePopupStore = defineStore("popupStore", {
  state: () => ({
    openAddNewBankModal: false,
  }),
  getters: {},
  actions: {
    updateAddNewBankModalStatus(status: boolean) {
      this.openAddNewBankModal = status;
    },
  },
});
