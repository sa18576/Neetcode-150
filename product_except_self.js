function productExceptSelf(nums){
    let res = [];

    for(let i=0; i<nums.length; i++){
        let product = 1;
        for(let j=0; j<nums.length; j++){
            if( i !== j) product *= nums[j];
        }
        res.push(product)
    }

    return res;
}

const nums = [1,2,4,6]

const result = productExceptSelf(nums)
console.log(result)