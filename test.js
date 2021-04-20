const color = require ('./color')

test('sum add 5 + 2 = 7' , () => {
    expect(color.sum(5)(2)).toBe(7)
})


test('compare colorCurrent and colors[i]', () => {
    let colors = ['magenta', 'cyan', 'firebrick', 'springgreen', 'skyblue'];
    let getColor = 'magenta';
    expect(color.getIndexOf(getColor,colors)).toBe(0)
})
