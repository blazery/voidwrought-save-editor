<script setup lang="ts">
import FileStore from '../stores/SaveStore'
import { FILE_SELECT_SAVE } from '../../shared/FileManipulatorEnums'
import VCodeBlock from '@wdns/vue-code-block';

async function selectSave() {
  const result = await window.ipcRenderer.invoke(FILE_SELECT_SAVE)
  if(result.canceled === false) {
    FileStore.loadNewFile(result.filePaths[0])
  }
}
</script>

<template>

<div class="flex flex-row w-80% bg-gray-300 rounded-md p-2"> 
  <input readonly type="text" class="w-full border border-black" :value="FileStore.selectedSavePath"/>
  <button class="w-32 h-8 background-green bg-white ml-2 border rounded border-black hover:bg-gray-200" 
          type="button"  
          @click=selectSave>
    Select save
  </button>
</div>

<div class="flex my-4 w-full bg-gray-300 rounded p-4">
  <VCodeBlock
    :code="FileStore.saveDataRaw ?? ''"
    highlightjs
    lang="json"
    theme="neon-bunny"
  />
</div>


</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
