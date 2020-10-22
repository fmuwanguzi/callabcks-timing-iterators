function checkNumber(num){
    if (num > 0){
        return 'postive';
    }else if (num < 0) {
        return 'negative';
    }else {
        return 'zero';
    }
}
console.log(checkNumber(5));