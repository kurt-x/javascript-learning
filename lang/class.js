// 类、原型

// 类是由原型实现的

let rangeMethods =
    {
        includes(x) { return this.from <= x && x <= this.to },

        // 让生成的实例可迭代
        * [Symbol.iterator]() { for (let x = Math.ceil(this.from); x <= this.to; x++) yield x },

        toString() { return `(${ this.from }...${ this.to })` },
    }

// 工厂函数
function range(from, to)
{
    let r = Object.create(rangeMethods)

    r.from = from
    r.to = to

    return r
}

let r = range(1, 3)
console.log(r.includes(2))
console.log(r.toString())
console.log([...r])
console.log('r is prototype of range:', rangeMethods.isPrototypeOf(r))

// 构造函数
function Range(from, to)
{
    // new.target 指向构造函数
    if (new.target) console.log('以 new 形式调用');
    else
    {
        console.log('未使用 new')
        return new Range(from, to);
    }
    this.from = from
    this.to = to
}

// 只有函数对象才有 prototype
// 修改 Range 的原型
Range.prototype =
    {
        includes(x) { return this.from <= x && x <= this.to },

        * [Symbol.iterator]() { for (let x = Math.ceil(this.from); x <= this.to; x++) yield x },

        toString() { return `(${ this.from }...${ this.to })` },
    }

console.log(' ')
console.log('=> 构造函数')
r = new Range(1, 3)
console.log(r.includes(2))
console.log(r.toString())
console.log([...r])

console.log('r instanceof Range:', r instanceof Range)

// 继承
function Span() {}
Span.prototype = Object.create(Range.prototype)

// class 关键字

class RangeClass
{
    field = 'default'

    static s_field = 'default'

    constructor(from, to)
    {
        this.from = from
        this.to = to

        this.field = 'changed'
        RangeClass.s_field = 'changed'
    }

    includes(x) { return this.from <= x && x <= this.to }

    * [Symbol.iterator]() { for (let x = Math.ceil(this.from); x <= this.to; x++) yield x }

    toString() { return `(${ this.from }...${ this.to })` }

    static of(from, to) { return new RangeClass(from, to) }
}

console.log(' ')
console.log('=> class 关键字')
r = new RangeClass(1, 3)
console.log(r.includes(2))
console.log(r.toString())
console.log([...r])
console.log(RangeClass.of(1, 5).toString())

class SpanClass extends RangeClass {}
