function fiz_buzz(numbers) {
    let result = [];
    numbers.forEach( (num) => {
        if (num === 0) {
            result.push(0);
        } else if (num % 15 === 0) {
            result.push("fizbuzz");
        } else if (num % 5 === 0) {
            result.push("buzz");
        } else if (num % 3 === 0) {
            result.push("fiz");
        } else {
            result.push(num);
        }
    })

return result.join(", ");

}

module.exports = fiz_buzz;