
function topKFrequent(nums, k){
    const freqMap = new Map(); // store the frequency of each number in the map
    let result = []; 

    for(let i=0; i<nums.length; i++){
        const num = nums[i];

        if(freqMap.has(num)) freqMap.set(num, freqMap.get(num)+1); // if the number exists; increment the count by 1
        else freqMap.set(num, 1); // if the number does not exist; set the count to 1
    }

    const sortedNums = Array.from(freqMap.values()).sort((a,b) => b-a) // sort the frequency values(counts) in descending order
    
    for(let i=0; i<k; i++){ // loop till the limit
        const freq = sortedNums[i];

        for(let [num,count] of freqMap.entries()){
            if(count === freq){
                result.push(num) // if count and the number matches; push the number in the result array
            }
        }
    }

    return result.reverse(); // reverse the result array
}


const nums = [1,2,2,3,3,3], k = 2

const result = topKFrequent(nums, k);

console.log(result)