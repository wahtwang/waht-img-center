declare module '*.less'{
  const content: { [className: string]: string }
  export default content
}
declare module '*.json'{
  interface Content{
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    [key: string]: any;
  }
  const content: Content
  export default content
}
// declare module '*.tsx'{
//   const Components: (prop: object) => JSX.Element
//   export default Components
// }
