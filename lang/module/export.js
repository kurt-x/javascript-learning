// 导出元素

console.log('export.js loaded') // 会在首次导入时执行

export const PI = Math.PI

export function fun() { console.log('exported function') }

export class Exported
{
    constructor() { console.log('exported class') }
    method() { console.log('exported class method') }
}

let v = 1

export { v as exported_variable } // 导出重命名
