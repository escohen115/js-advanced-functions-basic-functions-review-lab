// Your code here












function wrapAdjective(outerParam = "*"){

    return function(innerParam = "special"){
        return `You are ${innerParam}`
    }

}