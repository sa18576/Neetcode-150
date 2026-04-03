function groupAnagrams(strs){

    const res = {};

    for (element of strs) {
        const sorted = element.split('').sort().join('');
        
    }
}

const strs = ["act","pots","tops","cat","stop","hat"]
const result = groupAnagrams(strs);

console.log(result);