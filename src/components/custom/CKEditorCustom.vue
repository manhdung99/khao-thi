<template>
  <div>
    <ckeditor
      :editor="editor"
      v-model="localEditorData"
      :config="editorConfig"
      @input="$emit('update:modelValue', localEditorData)"
    ></ckeditor>
  </div>
</template>

<script lang="ts">
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { defineComponent, ref } from "vue";
import { uploadImage } from "../../uses/function";
export default defineComponent({
  name: "CKEditorCustom",
  props: {
    modelValue: String,
  },
  emits: ["update:modelValue"],
  setup(props, { emit }) {
    const localEditorData = ref(""); // Use props.value, not props.editorData

    function uploader(editor: any) {
      editor.plugins.get("FileRepository").createUploadAdapter = (
        loader: any
      ) => {
        return uploadImage(loader);
      };
    }
    const editor = ClassicEditor;
    const editorConfig = {
      extraPlugins: [uploader],
      mediaEmbed: {
        previewsInData: true,
      },
    };

    return {
      localEditorData,
      editor,
      editorConfig,
    };
  },
});
</script>
