export default interface IPCControllerInterface {
  handlers: Array<
    {
      chanel: string,
      function: (...args) => any
    }
  >
}