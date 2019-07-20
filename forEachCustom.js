export default function forEachCustom(fn) {
    const newArray = new Array();
    
    for (let i = 0; i < this.length; i++) {
        newArray.push(fn(this[i]));
    }
    
    return newArray;
}
