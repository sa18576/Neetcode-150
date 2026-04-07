function encode(strs){
    let response = "";

    if(strs.length === 1 && strs[0] === "") return "empty";

    for(let i=0; i<strs.length; i++){
        response += strs[i] + `${i==strs.length-1 ? "" : "*"}`
    }

    return response;
}

function decode(str) {
    if(str.length === 0) return [];
    if(str === "empty") return [""];
    return str.split("*");
}

const nums = ["hello", "world"]
const encoded = encode(nums);
const decoded = decode(encoded)
