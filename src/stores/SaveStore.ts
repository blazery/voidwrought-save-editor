import { reactive } from 'vue'
import { ipcRenderer } from 'electron';
import { FILE_LOAD_SAVE } from '../../shared/FileManipulatorEnums';

interface FileStoreInterface {
    selectedSavePath: string | null,
    saveData: JSON | null,
    saveDataRaw: string | null,
    loadNewFile: (path: string) => void
    loadFileFromDisk: () => void
}


const store: FileStoreInterface = reactive<FileStoreInterface>({
    selectedSavePath: null,
    saveData: null,
    saveDataRaw: null,
    loadNewFile: function (path: string) {
        this.selectedSavePath = path;
        this.loadFileFromDisk();

    },
    loadFileFromDisk: async function () {
        const result = await window.ipcRenderer.invoke(FILE_LOAD_SAVE, this.selectedSavePath)
        this.saveDataRaw = result;
        this.saveData = JSON.parse(result);
    }
});
export default store;