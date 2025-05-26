// 引用

// 从 export default 模块导入一个默认元素
import DefaultExported from './default_export.js'
import DE from './default_export.js'
console.log(DefaultExported)
console.log(DE)

// 从 export 模块导入多个元素
import { fun, Exported as ExpClass } from './export.js'
fun()
console.log(ExpClass)

import * as lib from './export.js'
lib.fun()

import default_exported_fun, { fun as exported_fun } from './complex_export.js'
default_exported_fun()
exported_fun()

import { default as _fun1, fun as _fun2 } from './complex_export.js'

// 再导出
export { default as repeat_export_fun, fun as repeat_export_fun2 } from './complex_export.js'

// 将另一个模块的导出作为当前模块的默认导出
export { fun as default } from './export.js'
