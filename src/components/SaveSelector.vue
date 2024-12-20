<script setup lang="ts">
import { ref } from 'vue'

defineProps<{ msg: string }>()

var selectedSavePath = null;

async function selectSave() {
  const result = await window.ipcRenderer.invoke('file:select-save')
  if(result.canceled === false) {
    selectedSavePath = result.filePaths[0];
  }
}
</script>

<template>

<div class="flex flex-row w-80% bg-gray-300 rounded-md p-2">
  <input readonly type="text" class="w-full border border-black" :value="selectedSavePath"/>
  <button class="w-32 h-8 background-green bg-white ml-2 border rounded border-black hover:bg-gray-200" type="button"  @click=selectSave>
    Select save
  </button>
</div>


</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
