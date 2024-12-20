import IPCControllerInterface from '../types/IPCControllerInterface';
import { dialog } from 'electron';

const FileManipulator: IPCControllerInterface =  {
  handlers: [
    {
      chanel: 'file:select-save',
      function: () => {
        console.log('file:select-save')
        return dialog.showOpenDialog({ properties: ['openFile'] })
      }
    }
  ]
}

export default FileManipulator;