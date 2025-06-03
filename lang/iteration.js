// 迭代

let arr = [1, 2, 3, 4, 5]
console.log('arr', arr)
console.log('arr', [...arr])

let m = new Map([['one', 1], ['two', 2]])
console.log('map', m)
console.log('map', [...m])
console.log('map', [...m.entries()])
console.log('map', [...m.keys()])
console.log('map', [...m.values()])

let s = new Set('abc')
console.log('set', s)
console.log('set', [...s])
s = new Set(['a', 'b', 'c'])
console.log('set', [...s])

// 生成器
function* generator()
{
    yield 1
    yield 2
    yield 3
}

let gen = generator()
console.log('gen', gen.next().value)
console.log('gen', gen.next().value)
console.log('gen', gen.next().value)
console.log('gen', gen.next().done)
console.log('gen', [...generator()])

function* seq(...interables)
{
    for (let iter of interables) yield* iter
}

console.log('gen', [...seq('abc', generator())])
