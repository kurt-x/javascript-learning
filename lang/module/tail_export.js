// 末尾导出元素

const PI = Math.PI

function fun() { console.log('exported function') }

class TailExported
{
    constructor() { console.log('exported class') }
    method() { console.log('exported class method') }
}

export { PI, fun, Exported }
