# simple-NN
一个简单的神经网络例子

<p>
  <a href="https://github.com/lab-contrib/simple-NN/graphs/commit-activity" target='_blank'><img alt="GitHub repo commit" src="https://img.shields.io/github/last-commit/lab-contrib/simple-NN"></a>
  <a href="https://github.com/lab-contrib/simple-NN" target='_blank'><img alt="GitHub repo stars" src="https://img.shields.io/github/stars/lab-contrib/simple-NN?style=social"></a>
</p>

## Issues
使用的时候遇到任何问题或有好的建议，请点击进入[issue](https://github.com/lab-contrib/simple-NN/issues)，欢迎参与维护！

## 说明

我们的问题是四个人，甲、乙、丙、丁，下面是他们之前去不去看电影的数据：

|甲|乙|丙|丁|
|---|---|---|---|
|不去|不去|去|不去|
|去|去|去|去|
|去|不去|去|去|
|不去|去|去|不去|

现在的问题是，如果下次可以确定：甲去、乙去、丙不去，那么丁去的概率是多少？

### 单节点神经网络

我们的模型如下：

<img src='./model-single.png' />

x1、x2、x3分别表示甲、乙、丙去不去的值，去就是1，不去是0。输出y表示丁去不去的值。

其中w1、w2、w3分别表示甲、乙、丙的权重，激活函数使用的是sigmoid，也就是：

<img src='./sigmoid.png' />

权重进行随机，然后利用已知的值进行训练，不停调整权重，最终，把需要求解的数据输入获取结果即可。

具体的代码你可以查看：

- JavaScript版本：[index-single.js](./index-single.js)
- Python3版本：[index-single.py](./index-single.py)

### 多层神经网络

如果现在情况变成这样：

|甲|乙|丙|丁|
|---|---|---|---|
|不去|不去|去|不去|
|去|去|去|不去|
|去|不去|去|去|
|不去|去|去|去|

可以发现，丁去不去不再取决于甲、乙、丙的权重，而是在于甲、乙有一个去的时候才去，这就比较复杂了。

现在的模型调整如下：

<img src='./model-mulp.png' />

具体的代码你可以查看：

- JavaScript版本：[index-mulp.js](./index-mulp.js)
- Python3版本：[index-mulp.py](./index-mulp.py)

开源协议
---------------------------------------
[MIT](https://github.com/lab-contrib/simple-NN/blob/master/LICENSE)

Copyright (c) 2022 [hai2007](https://hai2007.github.io/SweetHome/) 走一步，再走一步。
