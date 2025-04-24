// 流程控制
// "use strict" // 后面的代码使用严格模式

let condition = true

let todo = () => {}

if (condition) todo()
else if (condition) todo()
else todo()

switch (condition)
{
    default:
        break
    case true:
        todo()
    case false:
        todo()
        break
}

label:
while (condition)
{
    todo()
    if (0) continue
    break
}

do
{
    todo()
    if (0) continue
    break
}
while (condition)

let arr = [1, 2, 3, 4, 5]

for (let i = 0; i < arr.length; i++) todo()

for (let e of arr) todo()

for (let e in arr) todo()

try { throw Error }
catch (e) { console.log(e) }
finally {}

// 捕获所有异常，但不处理
try {}
catch {}

let obj = { name: "abaaba", age: 18 }
// 接近废弃，一般不使用
with (obj)
{
    console.log(name)
    console.log(age)
}
// 可以使用解构代替
{
    let { name, age } = obj;
    console.log(name)
    console.log(age)
}

debugger // 调试模式下到这里会停止，与断点相同
