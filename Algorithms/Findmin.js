// Finding The Minimum number in an array

nums = [1,7,8,55,9]

function find_min(nums) {
    let min_num = Number()
    for (let num of nums) {
            if(num < min_num) {
                min_num = num
            }
    }
    return min_num
}

console.log(find_min(nums))