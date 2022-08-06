// 已经发生的事情，作为训练种子
let seedData = [
    // 甲、乙、丙、丁去不去，0表示不去，1表示去
    [0, 0, 1, 0], // 第一次
    [1, 1, 1, 1], // 第二次
    [1, 0, 1, 1], // 第三次
    [0, 1, 1, 0] // 第四次
];

// 甲、乙、丙去不去对丁影响的权重的初始随机值: -1 ~ 1
let weights = [Math.random() * 2 - 1, Math.random() * 2 - 1, Math.random() * 2 - 1];

// 循环使用多次种子进行训练
for (let i = 0; i < 10000; i++) {
    // 每次循环都利用一遍所有的种子
    for (let j = 0; j < seedData.length; j++) {

        // 使用sigmoid激活函数
        // y = 1/(1+exp(-x))
        let output = 1 / (1 + Math.exp(-1 * (seedData[j][0] * weights[0] + seedData[j][1] * weights[1] + seedData[j][2] * weights[2])));

        // 对甲、乙、丙的权重分别进行调整
        for (let k = 0; k < 3; k++) {

            // 然后求解和实际值的差距
            let error = seedData[j][3] - output;

            // 每次求解完毕后，根据差距error进行调整权重weights
            let delta = error * output * (1 - output);
            weights[k] += seedData[j][k] * delta;

        }

    }
}

let input = [1, 1, 0];

console.log(weights);
console.log(
    1 / (1 + Math.exp(-1 * (input[0] * weights[0] + input[1] * weights[1] + input[2] * weights[2])))
);
