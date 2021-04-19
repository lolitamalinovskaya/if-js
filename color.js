
const sum = (arg1) => {
    return (arg2) => {
        arg1 += arg2;
        return arg1;
    }
}

function getIndexOf(colorCurrent,colors) {
    for (let i=0; i<colors.length; i++){
        if (colorCurrent === colors[i]) {
            return i;
        }
    }
    return -1;
}
module.exports.sum = sum;
module.exports.getIndexOf = getIndexOf;
