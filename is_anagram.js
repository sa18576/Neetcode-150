function isAnagram(str1, str2){

    const sortedStr1 = str1.split('').sort().join('')
    const sortedStr2 = str2.split('').sort().join('')

    if(sortedStr1 === sortedStr2) return true

    return false
}

const str1 = 'listen';
const str2 = 'silent';

const result = isAnagram(str1, str2);
console.log(result)