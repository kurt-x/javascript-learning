// 对象

// 对象属性有三个特性：
// writable 可写 - 是否可以修改值
// enumerable 可枚举 - 是否可以在 for-in 循环中获取属性名
// configurable 可配置 - 是否可以删除属性，以及是否可以修改属性特性

// 创建对象
console.log('=> 创建对象')
const PROP = 'prop'
const SYM_PROP = Symbol()
let ext = 'ext'
let obj
obj = {
    key: 'value',
    "key2": 'value2',
    'key3': 'value3',
    for: 'value4', // 可以使用关键字
    var: 'value5',
    sub_obj: {},
    ext,            // 相当于 ext: ext
    fun() {},       // 相当于 fun: function() {}
    [PROP]: 'prop', // 相当于 'prop': 'prop'
    [SYM_PROP]: 'symbol',
    'method'() {},
    [Symbol()]() {},
    val: '',
    get accessor_prop() { return this.val },
    set accessor_prop(value) { this.val = value }
}

obj = new Object() // {}
obj = new Array()  // []
obj = new Date()   // 时间对象

obj = Object.create(null)               // 以 null 为原型，不可以调用任何属性和方法
obj = Object.create(Object.prototype)   // {}
let pointer = { x: 1, y: -1 }
obj = Object.create(pointer)
obj.x = 2
console.log(pointer.x, obj.x)

// 访问属性
console.log(' ')
console.log('=> 访问属性')
const SYM_KEY = Symbol("symbol key")
function fun_key() { return 'fun_key' }
obj = { key1: 'value1', key2: 'value2', fun_key: 'fun', [SYM_KEY]: 'symbol' };
console.log(obj.key1)
console.log(obj['key2'])
console.log(obj[fun_key()])
console.log(obj[SYM_KEY])
console.log(obj.key3) // undefined 属性不存在

// 条件访问
console.log()
console.log('=> 条件访问')
obj = { key1: 'value1', key2: 'value2' }
console.log(obj?.name ?? 'JavaScript')     // ?? 右边是默认值
console.log(delete obj.key1)  // 删除属性，返回值为布尔值
console.log(obj.key1)
// delete 不能删除 configurable 为 false 的属性

// 测试属性
console.log(' ')
console.log('=> 测试属性')
console.log('key2' in obj)
console.log(obj.key !== undefined) // 如果属性存在且被设为 undefined，这个方法就无效
console.log(Object.hasOwn(obj, 'key2'))
console.log(obj.hasOwnProperty('key2'))
console.log(obj.propertyIsEnumerable('key2'))

console.log(Object.keys(obj)) // 获取属性数组

for (let p in obj) console.log(p)

// 扩展对象
// 扩展会以调用 getter 获取属性
console.log(' ')
console.log("=>扩展对象")
let target = { x: 1 }, source = { y: 2, z: 3 }
Object.assign(target, source)
console.log(target)
console.log(Object.assign({}, source, obj))
console.log({ ...target, ...source, ...obj })

// json
console.log(' ')
console.log('=>JSON 序列化')
let json = JSON.stringify(obj)
console.log('json', json)
console.log('obj', JSON.parse(json))
