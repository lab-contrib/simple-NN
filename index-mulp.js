// 已经发生的事情，作为训练种子
let seedData = [
    // 甲、乙、丙、丁去不去，0表示不去，1表示去
    [0, 0, 1, 0], // 第一次
    [1, 1, 1, 0], // 第二次
    [1, 0, 1, 1], // 第三次
    [0, 1, 1, 1] // 第四次
];

// 第一层的权重
let weights1 = [
    [Math.random() * 2 - 1, Math.random() * 2 - 1, Math.random() * 2 - 1],
    [Math.random() * 2 - 1, Math.random() * 2 - 1, Math.random() * 2 - 1],
    [Math.random() * 2 - 1, Math.random() * 2 - 1, Math.random() * 2 - 1],
    [Math.random() * 2 - 1, Math.random() * 2 - 1, Math.random() * 2 - 1]
];

// 第二层的权重
let weights2 = [Math.random() * 2 - 1, Math.random() * 2 - 1, Math.random() * 2 - 1, Math.random() * 2 - 1];

// 循环使用多次种子进行训练
for (let i = 0; i < 10000; i++) {
    // 每次循环都利用一遍所有的种子
    for (let j = 0; j < seedData.length; j++) {

        let output1 = [];

        // 第一层计算
        for (let p = 0; p < 4; p++) {
            output1.push(1 / (1 + Math.exp(-1 * (seedData[j][0] * weights1[p][0] + seedData[j][1] * weights1[p][1] + seedData[j][2] * weights1[p][2]))));
        }

        // 第二层计算
        let output2 = 1 / (1 + Math.exp(-1 * (output1[0] * weights2[0] + output1[1] * weights2[1] + output1[2] * weights2[2] + output1[3] * weights2[3])));

        // 调整
        for (let k = 0; k < 4; k++) {
            let error2 = seedData[j][3] - output2;
            let delta2 = error2 * output2 * (1 - output2);

            let error1 = delta2 * weights2[k];
            for (let p = 0; p < 3; p++) {
                let delta1 = error1 * output1[k] * (1 - output1[k]);
                weights1[k][p] += seedData[j][p] * delta1;
            }

            weights2[k] += output1[k] * delta2;
        }

    }
}

let input = [1, 0, 0];

console.log(weights1, weights2);

// 第一层计算
let output = [];
for (let p = 0; p < 4; p++) {
    output.push(1 / (1 + Math.exp(-1 * (input[0] * weights1[p][0] + input[1] * weights1[p][1] + input[2] * weights1[p][2]))));
}

// 第二层计算
let output2 = 1 / (1 + Math.exp(-1 * (output[0] * weights2[0] + output[1] * weights2[1] + output[2] * weights2[2] + output[3] * weights2[3])));

console.log(output2);
