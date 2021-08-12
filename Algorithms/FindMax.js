// Finding The Maximum number in an array

nums = [1,7,8,55,9]

function find_max(nums) {
    let max_num = Number.NEGATIVE_INFINITY
    for (let num of nums) {
            if(num > max_num) {
                max_num = num
            }
    }
    return max_num
}

console.log(find_max(nums))