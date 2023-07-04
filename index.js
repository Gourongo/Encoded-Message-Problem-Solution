let number=239017

function isLuckyDraw(number){
    function isEven(n){
        return n%2==0
    }
    if (!isEven(number) && !isEven(number.toString().length)) return false
    const numberArray=number.toString().split("")
    let numberArrayMiddle=numberArray.length/2
    const firstHalf=numberArray.slice(0,numberArrayMiddle)
    console.log(firstHalf)
     const lastHalf=numberArray.slice(numberArrayMiddle,numberArray.length)
    console.log(lastHalf)
    function sumationofHalf(total,value){
        return Number(total)+Number(value)
    }
    return firstHalf.reduce(sumationofHalf)===lastHalf.reduce(sumationofHalf)
}
console.log(isLuckyDraw(number));
