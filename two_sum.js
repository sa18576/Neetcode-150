function twoSum(nums, target){
    const numMap = new Map();

    for (let i=0; i<nums.length; i++) {
        numMap.set(nums[i], i);
    }

    for(let i=0; i<nums.length; i++){
        const diff = target - nums[i];

        if(numMap.has(diff) && numMap.get(diff)!==i) return [i, numMap.get(diff)]
    }
    return null;
}

const nums = [3,4,5,6]
const target = 7

const result = twoSum(nums, target);
console.log(result)
