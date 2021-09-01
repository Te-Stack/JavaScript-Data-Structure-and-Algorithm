// Finding The Minimum number in an array

nums = [1,2,3,4,5,6,7,10,11.12]


function find_min(nums) {
    let min_num = Number
    for (let num of nums) {
            if(num < min_num) {
                min_num = num
            }
    }
    return min_num
}


console.log(find_min(nums))