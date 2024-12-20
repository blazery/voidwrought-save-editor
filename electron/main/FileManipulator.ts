import IPCControllerInterface from '../types/IPCControllerInterface';
import { dialog } from 'electron';
import { FILE_SELECT_SAVE, FILE_LOAD_SAVE } from '../../shared/FileManipulatorEnums'
import fs from 'fs'
import { promisify } from 'util'
const readFile = promisify(fs.readFile);


const FileManipulator: IPCControllerInterface = {
  handlers: [
    {
      chanel: FILE_SELECT_SAVE,
      function: () => {
        console.log(FILE_SELECT_SAVE)
        return dialog.showOpenDialog({ properties: ['openFile'] })
      }
    },
    {
      chanel: FILE_LOAD_SAVE,
      function: (event: Event, path: string) => {
        return readFile(path, 'utf-8');
      }
    }
  ]
}

export default FileManipulator;