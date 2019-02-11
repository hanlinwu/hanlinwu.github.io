---
title: 问题：如何用无监督的条件随机场修正显著图？
tags:
 - 概率图模型
key : unsupervised-crf-saliency-modify
mathjax: true
---

## 问题描述

利用无监督的条件随机场模型, 修正已有的显著图. 

## 条件随机场模型

**随机场**：详见[wikipedia](https://en.wikipedia.org/wiki/Random_field).

**马尔可夫随机场**：具有马氏性的随机场, 详见[wikipedia](https://en.wikipedia.org/wiki/Markov_random_field).

**条件随机场** ：若 $Y$ 为随机场且在 $\mathbf P(Y|X)$ 下具有马氏性, 则称 $(X,Y)$ 为条件随机场. 详见[wikipedia](https://en.wikipedia.org/wiki/Conditional_random_field).

**Hammersley-Clifford 定理**: 指出了马尔科夫随机场与 Gibbs 分布的等价性，即任意的 MRF 与某 Gibbs 分布等价. 故只需定义 Gibbs 分布中的势函数即可. 

**可参考[1]的2.2节.** 

## 提出的方法

### 模型定义

设图像观测数据所描述的随机场 $Y=\{Y_i\}_{i\in S}, Y_i\in \mathbb R^3, \forall i\in S$. 其初始显著图所描述的随机场为 $M=\{M_i\}_{i\in S}, M_i\in[0,1],\forall i\in S$. 我们的目标是构建合适的 CRF(Conditional Random Field) 模型, 得到优化后的显著图 $X$. 

为优化显著图, 引入随机场 $U=\{U_i\}_{i\in S}$ 来描述图像分割的结果, $U_i\in \{0,1\},\forall i\in S$. 分割场 $U$ 取值为 1 表示该像素为前景, 否则为背景. 

在该模型中, $(X,U)$ 关于 $Y,M$ 的条件分布满足马氏性, 即：

$$
p(x_i,u_i\mid y,m,x_{S\backslash\{i\}},u_{S\backslash\{i\}}) = p(x_i,u_i\mid y,m,x_{N_i},u_{N_i}), \forall i \in S.
$$

根据 Hammersley-Clifford 定理, 我们可以将条件分布定义为：

$$
p(x,u\mid y,m)=\frac{1}{Z}\exp\left\{\sum_{i\in S}f_i(x_i,u_i\mid y,m)+\sum_{i\in S}\sum_{j\in N_i}f_{i,j}(x_i,x_j,u_i,u_j\mid y,m)\right\},
$$

其中 $Z$ 为归一化常数, 以保证上式的定义为概率. $f_i(x_i,u_i\mid y,m)$ 为一元势函数, $f_{i,j}(x_i,x_j,u_i,u_j\mid y,m)$ 为二元势函数. 

### 一元势函数

- 像素的显著值越高, 其为前景的概率越大, 反之若像素的显著值较小, 其为背景的概率越大. 
- 输出的像素显著值应和原始输入的显著值相差不太大(在平均意义下). 
于是设计一元势函数如下：

$$
f_{i}(x_i,u_i\mid y,m) = \alpha_1(x_iu_i + (1-x_i)(1-u_i)) + \alpha_2\exp(-\mid x_i-m_i\mid^2).
$$

### 二元势函数

相邻像素的显著值应差不多, 且相邻像素的特征越接近, 其显著值越应接近. 

$$
f_{i,j}(x_i,x_j,u_i,u_j\mid y,m) = A_{i,j}\left(\beta_1\exp(-\mid x_i-x_j\mid ^2)+\beta_2\exp(-\mid u_i-u_j \mid^2)\right),
$$

其中 $A_{i,j}\in [0,1],\forall i,j\in S$ 表示 $i,j$ 两个像素特征的相似程度, 可通过颜色和纹理特征计算. 

## 优化

目标是最大化 $p(x,u\mid y,m)$, 即最大化

$$
\sum_{i\in S}f_i(x_i,u_i\mid y,m)+\sum_{i\in S}\sum_{j\in N_i}f_{i,j}(x_i,x_j,u_i,u_j\mid y,m) =:J(x,u\mid y,m).
$$

可采取交替优化的方式, 固定 $x$, 优化 $u$；固定 $u$ 优化 $x$. $x$ 的初始值取 $m$. 可采用平均场近似或图割算法等优化算法. 

## 参考文献
[1] 廉肖洁, “基于条件随机场扩展模型的无监督SAR图像分割,” 西安电子科技大学, 2014.
[2] C. Tsai, X. Qian, and Y. Lin, “Segmentation Guided Local Proposal Fusion for Co-Saliency Detection,” vol. 1, no. July, pp. 523–528, 2017.