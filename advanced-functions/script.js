// const squareAndPrint = (nums) => {
//     const squaredNumbers = nums.map((num)=> num*num)
//     console.log(squaredNumbers);
// }; 
// squareAndPrint([3, 4, 5, 6]);

const oddNumbers = (nums) => {
    let oddArray = nums.filter ((num => num % 2 !== 0))
};

oddNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9])

const startingTask = () => {
    setInterval(()=> {
        // console.log('Still waiting')
    }, 2000)
    setTimeout (()=> {
        console.log('Task completed')
    }, 5000);
};
startingTask()
