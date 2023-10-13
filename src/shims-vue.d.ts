/* eslint-disable */
declare module "*.vue" {
  import type { DefineComponent } from "vue";
  const component: DefineComponent<{}, {}, any>;
  export default component;
}
declare module "*.svg" {
  const content: any;
  export default content;
}
declare module "*.jpg" {
  const content: any;
  export default content;
}
declare module "vue/types/vue" {
  interface Vue {
    $directive: {
      [key: string]: any; // You can specify the type if needed
    };
  }
}
