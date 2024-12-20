export interface IPCControllerInterface  {
    handlers: [
        {
          chanel: string,
          function: (chanel: string, ...args) => {}
        }
      ]
}