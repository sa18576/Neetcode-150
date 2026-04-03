function containsDuplicate(nums) {
    let set = new Set();

    for (const element of nums) {
        if(set.has(element)) return true;
        else set.add(element)
    }

    console.log(set)
    return false
}


const nums = [1, 2, 3, 3]
const result = containsDuplicate(nums)

console.log(result)

