#!/usr/bin/python3

from numpy import array, exp, random, dot

# 已经发生的事情，作为训练种子
X = array([[0, 0, 1], [1, 1, 1], [1, 0, 1], [0, 1, 1]])
Y = array([[0, 1, 1, 0]]).T

# 甲、乙、丙去不去对丁影响的权重的初始随机值: -1 ~ 1
random.seed(1)
weights = 2*random.random((3, 1))-1

# 循环使用多次种子进行训练
for it in range(10000):

    # 每次循环都利用一遍所有的种子
    # 使用sigmoid激活函数
    #  y = 1/(1+exp(-x))
    output = 1/(1+exp(-dot(X, weights)))

    # 对甲、乙、丙的权重分别进行调整

    # 然后求解和实际值的差距
    error = Y-output

    # 每次求解完毕后，根据差距error进行调整权重weights
    delta = error*output*(1-output)
    weights += dot(X.T, delta)

print(weights)
print(1/(1+exp(-dot([[1, 0, 0]], weights))))
